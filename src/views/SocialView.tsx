import { AD_HOC_SOCIAL, SCHEDULED_SOCIAL } from '../data/social'
import type { SocialItem } from '../data/social'
import { person } from '../data/people'

const SHOOTS_URL = 'https://airtable.com/appFEFygXo2pRc8AR/tblcZ8OIxfgnlUowC/viwYl9ljifiEfE4a5'

function Card({ s }: { s: SocialItem }) {
  return (
    <div className="soc-card">
      <div className="soc-title">{s.title}</div>
      {s.when && <div className="soc-when">{s.mode === 'ad-hoc' ? '📹 ' : '🗓️ '}{s.when}</div>}
      <div className="soc-brief">{s.brief}</div>
      {s.editor && <div className="soc-editor">✂️ Edited by {person(s.editor).name}</div>}
      <a className="soc-req" href={`${SHOOTS_URL}/${s.airtableId}`} target="_blank" rel="noreferrer">
        {s.requester} · Airtable →
      </a>
    </div>
  )
}

export default function SocialView() {
  return (
    <div>
      <div className="mv-overline">Marketing · organic social</div>
      <h1 className="mv-h1">Social & engagement</h1>
      <p className="mv-sub">
        Most of this is <strong>ad-hoc — captured daily</strong> across the event, not slotted as fixed shoots. It
        needs a dedicated roving shooter (the two production units are fully booked on podcasts/masterclasses — see
        Actions). Below: the always-on concept list to hunt for, plus the scheduled recap/snippet deliverables.
      </p>

      <div className="soc-banner">
        🎥 <strong>Daily social capture is always-on.</strong> Whoever is roving should be collecting toward these
        {' '}{AD_HOC_SOCIAL.length} concepts every day — between and around the scheduled productions.
      </div>

      <h2 className="section-title">Ad-hoc — film daily ({AD_HOC_SOCIAL.length})</h2>
      <div className="soc-grid">
        {AD_HOC_SOCIAL.map((s) => (
          <Card key={s.id} s={s} />
        ))}
      </div>

      <h2 className="section-title">Scheduled deliverables ({SCHEDULED_SOCIAL.length})</h2>
      <div className="soc-grid">
        {SCHEDULED_SOCIAL.map((s) => (
          <Card key={s.id} s={s} />
        ))}
      </div>
    </div>
  )
}
