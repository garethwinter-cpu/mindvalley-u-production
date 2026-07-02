#!/usr/bin/env bash
# Build and publish dist/ to the gh-pages branch (GitHub Pages).
# Handles the two-account setup: pushes as garethwinter-cpu, restores previous gh account.
set -euo pipefail
cd "$(dirname "$0")/.."

npm run build
touch dist/.nojekyll

PREV_ACCOUNT=$(gh api user --jq .login 2>/dev/null || echo "")
gh auth switch -u garethwinter-cpu >/dev/null

TMP_WORKTREE=$(mktemp -d)
git worktree add --detach "$TMP_WORKTREE" >/dev/null
(
  cd "$TMP_WORKTREE"
  git checkout --orphan gh-pages >/dev/null 2>&1
  git rm -rfq . >/dev/null 2>&1 || true
  cp -R "$OLDPWD/dist/." .
  git add -A
  git commit -qm "Deploy $(git -C "$OLDPWD" rev-parse --short main)"
  git push -f origin gh-pages
)
git worktree remove --force "$TMP_WORKTREE"
git branch -D gh-pages >/dev/null 2>&1 || true

if [ -n "$PREV_ACCOUNT" ] && [ "$PREV_ACCOUNT" != "garethwinter-cpu" ]; then
  gh auth switch -u "$PREV_ACCOUNT" >/dev/null
fi
echo "Deployed: https://garethwinter-cpu.github.io/mindvalley-u-production/"
