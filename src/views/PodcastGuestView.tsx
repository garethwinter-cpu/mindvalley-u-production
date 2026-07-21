import { PODCAST_GUEST_BRIEFS } from '../data/podcastGuestBriefs'
import { AUTHOR_PROFILES } from '../data/authors'
import { person } from '../data/people'
import { Headshot } from '../profile'
import type { PodcastGuestBrief } from '../data/types'

const ACTS: { key: keyof PodcastGuestBrief['questions']; label: string; blurb: string }[] = [
  { key: 'coldOpen', label: 'Cold open', blurb: 'The hook — 60–90s, spiky, drop them straight in' },
  { key: 'act1_origin', label: 'Act 1 · Origin story', blurb: 'Unknown → authority. Emotional, trust-earning' },
  { key: 'act2_blueprint', label: 'Act 2 · The blueprint', blurb: 'Their one named, teachable framework' },
  { key: 'act3_paperwall', label: 'Act 3 · Tear down the paper wall', blurb: 'The belief they broke. Contrarian, clippable' },
  { key: 'curveball', label: 'Close · The curveball', blurb: 'Unexpected, humanising, most shareable' },
]

export default function PodcastGuestView({ id, onBack }: { id: string; onBack: () => void }) {
  const brief = PODCAST_GUEST_BRIEFS.find((b) => b.id === id)
  if (!brief) {
    return (
      <div>
        <button className="mv-btn-secondary" onClick={onBack}>← All guests</button>
        <div className="empty" style={{ marginTop: 24 }}>No briefing for this guest yet.</div>
      </div>
    )
  }
  const p = person(brief.id)
  const profile = AUTHOR_PROFILES[brief.id]

  return (
    <div className="pg">
      <button className="pg-back" onClick={onBack}>← All Scaling Wisdom guests</button>

      <div className="pg-hero">
        <Headshot id={brief.id} size={96} />
        <div className="pg-hero-txt">
          <div className="mv-overline">Scaling Wisdom · guest briefing for Vishen</div>
          <h1 className="pg-name">{brief.name}</h1>
          <div className="pg-title">{profile?.title ?? p.title ?? ''}</div>
          <p className="pg-oneliner">{brief.oneLiner}</p>
        </div>
      </div>

      {/* Mission strip — the podcast comes first: reach new founders, deliver value. */}
      <div className="pg-mission">
        <span className="pg-mission-tag">Why this episode</span>
        <p>{brief.founderValue ?? 'Reach a new founder audience and give them something they can use. Audience growth and founder value come first — any Mindvalley angle is secondary.'}</p>
      </div>

      {brief.oneBigIdea && (
        <div className="pg-bigidea">
          <div className="pg-bigidea-tag">★ The one big idea — build the whole episode on this</div>
          <p>{brief.oneBigIdea}</p>
        </div>
      )}

      {/* The centrepiece: the question set Vishen runs live. */}
      <section className="pg-block pg-interview">
        <h2 className="pg-h2">🎙️ The interview — question set</h2>
        <div className="pg-acts">
          {ACTS.map((act) => (
            <div key={act.key} className="pg-act">
              <div className="pg-act-head">
                <span className="pg-act-label">{act.label}</span>
                <span className="pg-act-blurb">{act.blurb}</span>
              </div>
              <ol className="pg-qs">
                {brief.questions[act.key].map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      <section className="pg-block">
        <h2 className="pg-h2">✂️ Clip-worthy moments — what to land</h2>
        <ul className="pg-clips">
          {brief.clipMoments.map((c, i) => (
            <li key={i}>{c}</li>
          ))}
        </ul>
      </section>

      {brief.watchOuts && brief.watchOuts.length > 0 && (
        <section className="pg-watchouts">
          <div className="pg-watchouts-label">⚠️ Watch-outs — verify / handle with care before air</div>
          <ul>
            {brief.watchOuts.map((w, i) => (
              <li key={i}>{w}</li>
            ))}
          </ul>
        </section>
      )}

      <div className="pg-ref-head">Reference — read before the record</div>

      <section className="pg-framework">
        <div className="pg-framework-tag">Their framework</div>
        <h2 className="pg-framework-name">{brief.framework.name}</h2>
        <p>{brief.framework.summary}</p>
      </section>

      <section className="pg-block pg-paperwall">
        <h2 className="pg-h2">🧱 The paper wall they tear down</h2>
        <p>{brief.paperWall}</p>
      </section>

      <div className="pg-movement">
        <div className="pg-movement-label">The movement frame</div>
        <p>{brief.movementFrame}</p>
      </div>

      <div className="pg-grid2">
        <section className="pg-block">
          <h2 className="pg-h2">Background</h2>
          <p>{brief.background}</p>
        </section>
        <section className="pg-block">
          <h2 className="pg-h2">Origin story</h2>
          <p>{brief.originStory}</p>
        </section>
      </div>

      <section className="pg-notes">
        <h2 className="pg-h2">📝 Notes for Vishen</h2>
        <p>{brief.vishenNotes}</p>
      </section>

      {brief.sources.length > 0 && (
        <section className="pg-sources">
          <div className="pg-sources-label">Sources {brief.hasLocalContent ? '· grounded in his own teaching' : '· deep research'}</div>
          <ul>
            {brief.sources.map((s, i) => (
              <li key={i}>
                {s.startsWith('http') ? (
                  <a href={s} target="_blank" rel="noreferrer">{s}</a>
                ) : (
                  s
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
