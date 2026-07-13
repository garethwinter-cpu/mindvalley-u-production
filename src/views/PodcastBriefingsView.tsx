import { PODCAST_BRIEFINGS } from '../data/podcastBriefings'
import { AUTHOR_PROFILES, AUTHORS_TABLE_URL } from '../data/authors'
import { person } from '../data/people'
import { DAYS } from '../data/schedule'
import { Headshot } from '../profile'
import { fmtTime } from '../ui'
import type { FitVerdict } from '../data/types'

const FIT_ORDER: Record<FitVerdict, number> = { STRONG: 0, MEDIUM: 1, NICHE: 2 }

function fmtDate(d: string) {
  return DAYS.find((x) => x.date === d)?.label ?? d.slice(5)
}

export default function PodcastBriefingsView() {
  const briefings = [...PODCAST_BRIEFINGS].sort(
    (a, b) => FIT_ORDER[a.fit] - FIT_ORDER[b.fit] || (a.date ?? '9999').localeCompare(b.date ?? '9999'),
  )
  const counts = {
    STRONG: briefings.filter((b) => b.fit === 'STRONG').length,
    MEDIUM: briefings.filter((b) => b.fit === 'MEDIUM').length,
    NICHE: briefings.filter((b) => b.fit === 'NICHE').length,
  }

  return (
    <div>
      <div className="mv-overline">For the YouTube agency</div>
      <h1 className="mv-h1">Podcast guest briefings</h1>
      <p className="mv-sub">
        {briefings.length} proposed Scaling Wisdom guests, each paired with Vishen. Bios are pulled from the ✍🏻 Authors
        Airtable; the research and fit call are a starting point for the agency to pressure-test against Vishen's
        YouTube channel (~217K subs — personal growth, biohacking, longevity, spirituality, entrepreneurship).
        Reach figures are indicative — verify before booking.
      </p>

      <div className="legend" style={{ marginBottom: 24 }}>
        <span><span className="fit-dot STRONG" /> Strong fit ({counts.STRONG})</span>
        <span><span className="fit-dot MEDIUM" /> Medium fit ({counts.MEDIUM})</span>
        <span><span className="fit-dot NICHE" /> Niche fit ({counts.NICHE})</span>
      </div>

      <div className="pod-grid">
        {briefings.map((b) => {
          const p = person(b.personId)
          const profile = AUTHOR_PROFILES[b.personId]
          return (
            <div key={b.episodeId} className="pod-card">
              <div className="pod-head">
                <Headshot id={b.personId} size={56} />
                <div style={{ flex: 1 }}>
                  <div className="pod-name">{p.name}</div>
                  <div className="pod-role">{profile?.title ?? p.title ?? ''}</div>
                </div>
                <span className={`fit-badge ${b.fit}`}>{b.fit}</span>
              </div>

              <div className="pod-ep">
                {b.date ? (
                  <>🎙️ {fmtDate(b.date)} · {fmtTime(b.start)} · with Vishen</>
                ) : (
                  <>🎙️ Record in {b.recordLocation ?? 'TBC'} · date TBC · with Vishen</>
                )}
              </div>

              <div className="pod-fitline">{b.fitReason}</div>

              <div className="pod-field">
                <span className="pod-label">Reach</span>
                <span>{b.reach}</span>
              </div>
              <div className="pod-field">
                <span className="pod-label">Topics</span>
                <span className="pod-topics">
                  {b.topics.map((t) => (
                    <span key={t} className="pod-topic">
                      {t}
                    </span>
                  ))}
                </span>
              </div>
              <div className="pod-field">
                <span className="pod-label">Credentials</span>
                <span>{b.credentials}</span>
              </div>
              <div className="pod-field">
                <span className="pod-label">On camera</span>
                <span>{b.interviewPresence}</span>
              </div>
              <div className="pod-field">
                <span className="pod-label">Audience overlap</span>
                <span>{b.audienceOverlap}</span>
              </div>
              <div className="pod-field">
                <span className="pod-label">Proposed angle</span>
                <span className="pod-angle">{b.angle}</span>
              </div>
              {b.flag && b.flag.toLowerCase() !== 'none' && (
                <div className="pod-flag">⚠ {b.flag}</div>
              )}

              {profile?.bio && (
                <details className="pod-bio">
                  <summary>Airtable bio</summary>
                  <p>{profile.bio}</p>
                  {profile.airtableId && (
                    <a href={`${AUTHORS_TABLE_URL}/${profile.airtableId}`} target="_blank" rel="noreferrer">
                      Open Airtable record →
                    </a>
                  )}
                </details>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
