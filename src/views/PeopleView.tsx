import { useState } from 'react'
import { PEOPLE, person } from '../data/people'
import { AUTHOR_PROFILES, AUTHORS_TABLE_URL } from '../data/authors'
import { DAYS, EVENTS } from '../data/schedule'
import { StatusBadge, TypeBadge, fmtTime, involvesPerson, isOurProduction } from '../ui'
import type { ScheduleEvent } from '../data/types'
import { Headshot } from '../profile'
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

function EventList({ events }: { events: ScheduleEvent[] }) {
  return (
    <div className="evt-list" style={{ marginBottom: 24 }}>
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
  )
}

export default function PeopleView() {
  const [selected, setSelected] = useState('gareth')
  const p = person(selected)
  const profile = AUTHOR_PROFILES[selected]
  const wa = p.whatsapp?.replace(/[^0-9]/g, '')
  const events = EVENTS.filter((e) => involvesPerson(e, selected)).sort((a, b) =>
    (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')),
  )
  const content = events.filter(isOurProduction)
  const eventCommitments = events.filter((e) => !isOurProduction(e))

  return (
    <div>
      <div className="mv-overline">Who needs to be where</div>
      <h1 className="mv-h1">People</h1>
      <p className="mv-sub">Pick anyone — author, crew, Gareth or Vishen — for their profile and full itinerary.</p>

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
                  <Headshot id={x.id} size={28} />
                  {x.name}
                </button>
              ))}
            </div>
          ))}
        </div>

        <div>
          <div className="mv-card">
            <div className="modal-head">
              <Headshot id={selected} size={72} />
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>{p.name}</h2>
                <div style={{ color: 'var(--text-muted)', fontSize: 14 }}>
                  {profile?.title ?? p.title ?? 'Speaker'}
                </div>
              </div>
            </div>

            <div className="modal-actions">
              {p.email && (
                <a className="mv-btn-secondary" href={`mailto:${p.email}`}>
                  {p.email}
                </a>
              )}
              {wa && (
                <a className="mv-btn-secondary" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
                  WhatsApp {p.whatsapp}
                </a>
              )}
              {profile && (
                <a
                  className="mv-btn-secondary"
                  href={`${AUTHORS_TABLE_URL}/${profile.airtableId}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Airtable record
                </a>
              )}
            </div>
            {!p.email && !wa && (
              <div className="modal-nocontact">No contact details on file yet — send them to Claude to add.</div>
            )}

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
            {profile?.bio && <p className="modal-bio">{profile.bio}</p>}

            {events.length === 0 && <div className="empty">No scheduled commitments in the data yet.</div>}
            {content.length > 0 && (
              <>
                <div className="pp-commit-label">🎬 Content commitments — our productions ({content.length})</div>
                <EventList events={content} />
              </>
            )}
            {eventCommitments.length > 0 && (
              <>
                <div className="pp-commit-label">🎪 Event commitments — locked agenda ({eventCommitments.length})</div>
                <EventList events={eventCommitments} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
