import { useState } from 'react'
import { PEOPLE, person } from '../data/people'
import { AUTHOR_PROFILES, AUTHORS_TABLE_URL } from '../data/authors'
import { DAYS, EVENTS } from '../data/schedule'
import { StatusBadge, TypeBadge, fmtTime, involvesPerson, isOurProduction } from '../ui'
import type { ScheduleEvent } from '../data/types'
import { Headshot } from '../profile'
import type { PersonRole } from '../data/types'
import { buildSchedule, fmtClock, fmtDur, toMin } from '../scheduler'
import type { DaySchedule } from '../scheduler'

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

function fmtDayShort(d: string) {
  const day = DAYS.find((x) => x.date === d)
  if (day) return day.label
  const [, m, dd] = d.split('-')
  return `${Number(dd)}/${Number(m)}`
}

/** One day's call sheet: call → wrap with blocks and the gaps between them shown as breaks. */
function DayCard({ day }: { day: DaySchedule }) {
  const loc = (e: ScheduleEvent) => e.location ?? ''
  // interleave timed blocks with the gaps that follow them
  const rows: JSX.Element[] = []
  day.timed.forEach((e, i) => {
    const s = toMin(e.start)!
    const en = toMin(e.end) ?? s + 30
    rows.push(
      <div key={e.id} className={`sch-block${e.status === 'conflict' ? ' conflict' : ''}`}>
        <span className="sch-time">{fmtClock(s)}–{fmtClock(en)}</span>
        <span className="sch-what">
          {e.title}
          {loc(e) && <span className="sch-loc"> · {loc(e)}</span>}
        </span>
      </div>,
    )
    // gap to next block
    const next = day.timed[i + 1]
    if (next) {
      const gapStart = en
      const gapEnd = toMin(next.start)!
      const g = gapEnd - gapStart
      if (g >= 20) {
        rows.push(
          <div key={e.id + '-gap'} className="sch-gap">
            ☕ {fmtDur(g)} free · {fmtClock(gapStart)}–{fmtClock(gapEnd)}
          </div>,
        )
      } else if (g < 0) {
        rows.push(
          <div key={e.id + '-ov'} className="sch-overlap">
            ⚠ overlaps next by {fmtDur(-g)}
          </div>,
        )
      }
    }
  })

  return (
    <div className={`sch-day${day.hasOverlap ? ' has-overlap' : ''}`}>
      <div className="sch-day-head">
        <span className="sch-day-date">{fmtDayShort(day.date)}</span>
        {day.callMin != null && (
          <span className="sch-day-span">
            Call {fmtClock(day.callMin)} · wrap {fmtClock(day.wrapMin!)}
            <span className="sch-day-hrs"> · {fmtDur(day.workMin)} on camera, {fmtDur(day.breakMin)} free</span>
          </span>
        )}
      </div>
      <div className="sch-blocks">{rows}</div>
      {day.untimed.map((e) => (
        <div key={e.id} className="sch-block untimed">
          <span className="sch-time">All day</span>
          <span className="sch-what">{e.title}</span>
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
  const sched = buildSchedule(events)

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

            {sched.activeDays > 0 && (
              <>
                <div className="pp-commit-label">📅 Scheduler — where {p.name.split(' ')[0]} needs to be</div>
                <div className="sch-tiles">
                  <div className="sch-tile">
                    <div className="sch-tile-n">{sched.activeDays}</div>
                    <div className="sch-tile-l">active days</div>
                  </div>
                  <div className="sch-tile">
                    <div className="sch-tile-n">{fmtDur(sched.totalWorkMin)}</div>
                    <div className="sch-tile-l">on camera / set</div>
                  </div>
                  <div className="sch-tile">
                    <div className="sch-tile-n">{fmtDur(sched.totalBreakMin)}</div>
                    <div className="sch-tile-l">break time</div>
                  </div>
                  {sched.busiest && (
                    <div className="sch-tile">
                      <div className="sch-tile-n">{fmtDayShort(sched.busiest.date).replace(/^\w+ /, '')}</div>
                      <div className="sch-tile-l">busiest ({fmtDur(sched.busiest.workMin)})</div>
                    </div>
                  )}
                  {sched.firstCall && (
                    <div className="sch-tile">
                      <div className="sch-tile-n">{fmtClock(sched.firstCall.min)}</div>
                      <div className="sch-tile-l">first call · {fmtDayShort(sched.firstCall.date).replace(/^\w+ /, '')}</div>
                    </div>
                  )}
                  {sched.lastWrap && (
                    <div className="sch-tile">
                      <div className="sch-tile-n">{fmtClock(sched.lastWrap.min)}</div>
                      <div className="sch-tile-l">final wrap · {fmtDayShort(sched.lastWrap.date).replace(/^\w+ /, '')}</div>
                    </div>
                  )}
                </div>
                <div className="sch-list">
                  {sched.days.filter((d) => d.timed.length || d.untimed.length).map((d) => (
                    <DayCard key={d.date} day={d} />
                  ))}
                </div>
              </>
            )}

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
