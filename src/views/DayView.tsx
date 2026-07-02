import { DAYS, EVENTS } from '../data/schedule'
import { Avatar, StatusBadge, TypeBadge, fmtTime, requiredPeople } from '../ui'
import { person } from '../data/people'

export default function DayView({ date, onPick }: { date: string; onPick: (d: string) => void }) {
  const day = DAYS.find((d) => d.date === date) ?? DAYS[0]
  const events = EVENTS.filter((e) => e.date === day.date).sort((a, b) =>
    (a.start ?? '00:00').localeCompare(b.start ?? '00:00'),
  )

  return (
    <div>
      <div className="mv-overline">Daily call sheet</div>
      <h1 className="mv-h1">
        {day.label} — {day.theme}
      </h1>
      <p className="mv-sub">
        {day.noInterviews
          ? 'Marked NO INTERVIEWS in the event agenda — no podcast/interview capture today.'
          : 'Interview capture is viable today (not marked NO INTERVIEWS).'}
      </p>

      <div className="day-nav">
        {DAYS.map((d) => (
          <button key={d.date} className={d.date === day.date ? 'active' : ''} onClick={() => onPick(d.date)}>
            {d.label.replace(' Jul', '/7').replace(' Aug', '/8')}
          </button>
        ))}
      </div>

      <div className="evt-list">
        {events.length === 0 && <div className="empty">Nothing scheduled. Recovery day — or an opportunity.</div>}
        {events.map((e) => {
          const req = requiredPeople(e)
          return (
            <div key={e.id} className={`evt${e.status === 'conflict' ? ' conflict' : ''}`}>
              <div className="evt-time">
                {fmtTime(e.start)}
                {e.end && <small>– {fmtTime(e.end)}</small>}
              </div>
              <div>
                <div className="evt-title">
                  {e.title}
                  <TypeBadge type={e.type} />
                  <StatusBadge status={e.status} />
                  {e.vishen && <span className="mv-badge">Vishen required</span>}
                  {e.gareth && <span className="mv-badge">Gareth on set</span>}
                </div>
                {e.location && <div className="evt-loc">{e.location}</div>}
                {req.length > 0 && (
                  <div className="evt-who">
                    <span className="evt-who-label">Who</span>
                    <span className="mv-people-row">
                      {req.map((id) => (
                        <Avatar key={id} id={id} />
                      ))}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
                      {req.map((id) => person(id).name).join(', ')}
                    </span>
                  </div>
                )}
                {e.notes && <div className="evt-notes">{e.notes}</div>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
