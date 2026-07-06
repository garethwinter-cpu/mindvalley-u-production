import { useState } from 'react'
import { DAYS, EVENTS } from '../data/schedule'
import { StatusBadge, TypeBadge, fmtTime, involvesPerson, requiredPeople } from '../ui'
import { PersonLink } from '../profile'
import { PEOPLE } from '../data/people'

export default function DayView({ date, onPick }: { date: string; onPick: (d: string) => void }) {
  const [who, setWho] = useState('all')
  const day = DAYS.find((d) => d.date === date) ?? DAYS[0]
  const events = EVENTS.filter((e) => e.date === day.date)
    .filter((e) => who === 'all' || involvesPerson(e, who))
    .sort((a, b) => (a.start ?? '00:00').localeCompare(b.start ?? '00:00'))

  const speakers = PEOPLE.filter((p) => p.role === 'speaker')
  const team = PEOPLE.filter((p) => p.role !== 'speaker')

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

      <div className="who-filter">
        <label htmlFor="who">Filter by person</label>
        <select id="who" value={who} onChange={(e) => setWho(e.target.value)}>
          <option value="all">Everyone</option>
          <optgroup label="Team">
            {team.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </optgroup>
          <optgroup label="Authors">
            {speakers.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </optgroup>
        </select>
        {who !== 'all' && (
          <button className="mv-btn-secondary" onClick={() => setWho('all')}>
            Clear
          </button>
        )}
      </div>

      <div className="evt-list">
        {events.length === 0 && (
          <div className="empty">
            {who === 'all' ? 'Nothing scheduled. Recovery day — or an opportunity.' : 'Nothing for this person today.'}
          </div>
        )}
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
                        <PersonLink key={id} id={id} avatar />
                      ))}
                    </span>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {req.map((id, i) => (
                        <span key={id}>
                          <PersonLink id={id} />
                          {i < req.length - 1 ? ',' : ''}
                        </span>
                      ))}
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
