import { ACTIONS, BACKLOG, CONFLICTS } from '../data/schedule'
import { person } from '../data/people'
import { PersonLink } from '../profile'
import type { ActionItem } from '../data/types'

const FORMAT_LABEL: Record<string, string> = {
  masterclass: 'Masterclass',
  podcast: 'Podcast',
  'accelerator-recording': 'Accelerator recording',
  social: 'Social content',
}

const OWNER_LABEL: Record<string, string> = {
  'author-relations': 'Author Relations',
  gareth: 'Gareth — decision needed',
  production: 'Production',
}

function fmtDue(d?: string) {
  if (!d) return null
  const [, m, dd] = d.split('-')
  return `due ${Number(dd)}/${Number(m)}`
}

function ActionCard({ a }: { a: ActionItem }) {
  const overdue = a.due && a.due < new Date().toISOString().slice(0, 10)
  return (
    <div className="alert-card" style={a.kind === 'impossible' ? { border: '1px solid var(--red)' } : undefined}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 'none', alignItems: 'flex-start' }}>
        <span className={`mv-badge ${a.owner === 'gareth' ? '' : a.kind === 'impossible' ? 'sev-high' : 'sev-medium'}`}>
          {OWNER_LABEL[a.owner]}
        </span>
        {a.due && (
          <span className="mv-badge" style={overdue ? { background: 'var(--red)', color: 'var(--white)' } : undefined}>
            {fmtDue(a.due)}
          </span>
        )}
      </div>
      <div>
        <div className="alert-title">{a.title}</div>
        <div className="alert-detail">{a.detail}</div>
        {a.people && a.people.length > 0 && (
          <div style={{ marginTop: 8, display: 'flex', gap: 8, flexWrap: 'wrap', fontSize: 13 }}>
            {a.people.map((id) => (
              <PersonLink key={id} id={id} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function AlertsView() {
  const impossible = ACTIONS.filter((a) => a.kind === 'impossible')
  const proposals = ACTIONS.filter((a) => a.kind === 'proposal')
  const chase = ACTIONS.filter((a) => a.kind === 'chase')

  return (
    <div>
      <div className="mv-overline">What the producer is worried about</div>
      <h1 className="mv-h1">Actions & alerts</h1>
      <p className="mv-sub">
        Full transparency: what is physically impossible with today's data, what the producer proposes to change,
        and exactly what Author Relations needs to chase — with owners and due dates.
      </p>

      <h2 className="section-title">⛔ Impossible as the data stands ({impossible.length})</h2>
      <p className="mv-sub" style={{ marginBottom: 16 }}>
        Two sources contradict each other. These cannot be scheduled around — someone must confirm reality.
      </p>
      {impossible.map((a) => (
        <ActionCard key={a.id} a={a} />
      ))}

      <h2 className="section-title">⚖️ Producer proposals — awaiting decision ({proposals.length})</h2>
      {proposals.map((a) => (
        <ActionCard key={a.id} a={a} />
      ))}

      <h2 className="section-title">📋 Chase list ({chase.length})</h2>
      {chase.map((a) => (
        <ActionCard key={a.id} a={a} />
      ))}

      <h2 className="section-title">Conflicts & data gaps</h2>
      {CONFLICTS.map((c) => (
        <div key={c.id} className="alert-card">
          <span className={`mv-badge sev-${c.severity}`}>{c.severity}</span>
          <div>
            <div className="alert-title">{c.title}</div>
            <div className="alert-detail">{c.detail}</div>
          </div>
        </div>
      ))}

      <h2 className="section-title">Watch list</h2>
      <div className="backlog-grid">
        {BACKLOG.map((b) => (
          <div key={b.id} className="mv-card">
            <span className="mv-badge" style={{ marginBottom: 8 }}>
              {FORMAT_LABEL[b.format]}
            </span>
            <div style={{ fontWeight: 500, margin: '8px 0 4px' }}>{b.title}</div>
            {b.speakers && (
              <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8 }}>
                {b.speakers.map((s) => person(s).name).join(', ')}
              </div>
            )}
            {b.constraint && <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{b.constraint}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
