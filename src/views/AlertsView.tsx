import { BACKLOG, CONFLICTS } from '../data/schedule'
import { person } from '../data/people'

const FORMAT_LABEL: Record<string, string> = {
  masterclass: 'Masterclass',
  podcast: 'Podcast',
  'accelerator-recording': 'Accelerator recording',
  social: 'Social content',
}

export default function AlertsView() {
  return (
    <div>
      <div className="mv-overline">What the producer is worried about</div>
      <h1 className="mv-h1">Alerts & backlog</h1>
      <p className="mv-sub">
        Conflicts found by cross-referencing Speaker DATES, the PHOTO agenda and the detailed event agenda — plus
        every production that still has no shoot date.
      </p>

      <h2 className="section-title">Conflicts & gaps</h2>
      {CONFLICTS.map((c) => (
        <div key={c.id} className="alert-card">
          <span className={`mv-badge sev-${c.severity}`}>{c.severity}</span>
          <div>
            <div className="alert-title">{c.title}</div>
            <div className="alert-detail">{c.detail}</div>
          </div>
        </div>
      ))}

      <h2 className="section-title">Unscheduled productions (the slate)</h2>
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
