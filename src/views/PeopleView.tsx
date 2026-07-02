import { useState } from 'react'
import { PEOPLE, person } from '../data/people'
import { DAYS, EVENTS } from '../data/schedule'
import { Avatar, StatusBadge, TypeBadge, fmtTime, involvesPerson } from '../ui'
import type { PersonRole } from '../data/types'

const GROUPS: { label: string; roles: PersonRole[] }[] = [
  { label: 'Production team', roles: ['exec', 'crew', 'photographer', 'partner'] },
  { label: 'Author relations', roles: ['author-relations'] },
  { label: 'Speakers', roles: ['speaker'] },
]

function fmtDate(d: string) {
  const day = DAYS.find((x) => x.date === d)
  if (day) return day.label
  const [, m, dd] = d.split('-')
  return `${Number(dd)}/${Number(m)}`
}

export default function PeopleView() {
  const [selected, setSelected] = useState('gareth')
  const p = person(selected)
  const events = EVENTS.filter((e) => involvesPerson(e, selected)).sort((a, b) =>
    (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')),
  )

  return (
    <div>
      <div className="mv-overline">Who needs to be where</div>
      <h1 className="mv-h1">People</h1>
      <p className="mv-sub">Pick anyone — author, crew, Gareth or Vishen — and see their full itinerary.</p>

      <div className="pp-layout">
        <div className="mv-card pp-list">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <div className="pp-group">{g.label}</div>
              {PEOPLE.filter((x) => g.roles.includes(x.role)).map((x) => (
                <button
                  key={x.id}
                  className={`pp-item${x.id === selected ? ' active' : ''}`}
                  onClick={() => setSelected(x.id)}
                >
                  <Avatar id={x.id} />
                  {x.name}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div>
          <div className="mv-card">
            <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 4 }}>{p.name}</h2>
            <div style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 12 }}>{p.title ?? 'Speaker'}</div>
            {p.window && (
              <div className="pp-window">
                In Estonia: <strong>{fmtDate(p.window.from)} → {fmtDate(p.window.to)}</strong> (per Speaker DATES)
              </div>
            )}
            {p.role === 'speaker' && !p.window && (
              <div className="pp-window" style={{ color: 'var(--orange-content)' }}>
                Not on Speaker DATES — arrival/departure unknown.
              </div>
            )}
            {p.remote && <div className="pp-window">Working remotely — receives material for edit.</div>}

            <div className="evt-list">
              {events.length === 0 && <div className="empty">No scheduled commitments in the data yet.</div>}
              {events.map((e) => (
                <div key={e.id} className={`evt${e.status === 'conflict' ? ' conflict' : ''}`}>
                  <div className="evt-time">
                    {fmtDate(e.date)}
                    <small>
                      {fmtTime(e.start)}
                      {e.end ? `–${fmtTime(e.end)}` : ''}
                    </small>
                  </div>
                  <div>
                    <div className="evt-title">
                      {e.title}
                      <TypeBadge type={e.type} />
                      <StatusBadge status={e.status} />
                    </div>
                    {e.location && <div className="evt-loc">{e.location}</div>}
                    {e.notes && <div className="evt-notes">{e.notes}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
