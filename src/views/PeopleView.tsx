import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { PEOPLE, person } from '../data/people'
import { AUTHOR_PROFILES, AUTHORS_TABLE_URL } from '../data/authors'
import { DAYS, EVENTS } from '../data/schedule'
import { EDITORIAL_EVENTS } from '../data/editorial'
import { StatusBadge, TypeBadge, TYPE_ICON, AuthorBadge, fmtTime, involvesPerson, isOurProduction, availabilityWarnings } from '../ui'
import type { ScheduleEvent } from '../data/types'
import { Headshot } from '../profile'
import type { PersonRole } from '../data/types'
import { buildSchedule, fmtClock, fmtDur, toMin } from '../scheduler'
import type { DaySchedule } from '../scheduler'

// Iris Wagner's Memoirs Productions legacy shoot: Iris + the Lakhiani family (its subjects).
const MEMOIR_IDS = ['iris-wagner', 'mohan-lakhiani', 'roopi-lakhiani', 'hayden-lakhiani', 'eve-lakhiani']

type SubGroup = { label?: string; roles?: PersonRole[]; ids?: string[]; excludeIds?: string[] }
type Section = { label: string; groups: SubGroup[] }

// Two-level People roster: top-level sections, each with sub-categories.
const SECTIONS: Section[] = [
  {
    label: 'Mindvalley Team',
    groups: [
      { label: 'Production', roles: ['exec', 'crew'], excludeIds: ['kaitlin'] },
      { label: 'Host', ids: ['kaitlin'] },
      { label: 'Photography', roles: ['photographer'] },
      { label: 'Author relations', roles: ['author-relations'] },
      { label: 'Partners', roles: ['partner'] },
    ],
  },
  {
    label: 'Speakers',
    groups: [{ roles: ['speaker'], excludeIds: MEMOIR_IDS }],
  },
  {
    label: 'Memoir',
    groups: [{ ids: MEMOIR_IDS }],
  },
]

/** People for a sub-group. `ids` selects explicitly (in listed order); otherwise
 *  filter by role, minus any excludeIds. */
function peopleForGroup(g: SubGroup) {
  if (g.ids) return g.ids.map((id) => PEOPLE.find((p) => p.id === id)).filter((p): p is (typeof PEOPLE)[number] => !!p)
  return PEOPLE.filter((p) => g.roles?.includes(p.role) && !g.excludeIds?.includes(p.id))
}

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
              <AuthorBadge event={e} />
            </div>
            {e.location && <div className="evt-loc">{e.location}</div>}
            {availabilityWarnings(e).map((w) => (
              <div key={w.personId} className={`evt-avail avail-${w.kind}`}>
                {w.kind === 'before' || w.kind === 'after' ? '⛔' : '⚠️'} {w.message}
              </div>
            ))}
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
        <span className="sch-icon" title={e.type} aria-hidden>{TYPE_ICON[e.type]}</span>
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
          <span className="sch-icon" title={e.type} aria-hidden>{TYPE_ICON[e.type]}</span>
          <span className="sch-what">{e.title}</span>
        </div>
      ))}
    </div>
  )
}

/** Collapsible commitment section — the scheduler above already gives the day-by-day
 *  view, so the detailed event lists start collapsed to keep the profile scannable. */
function CollapsibleSection({
  label,
  count,
  children,
  defaultOpen = false,
}: {
  label: string
  count: number
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`pp-collapse${open ? ' open' : ''}`}>
      <button className="pp-collapse-head" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{label}</span>
        <span className="pp-collapse-toggle">
          {open ? 'Hide' : `Show ${count}`}
          <span className="pp-chev" aria-hidden>
            ▾
          </span>
        </span>
      </button>
      {open && <div className="pp-collapse-body">{children}</div>}
    </div>
  )
}

/** Read a valid person id from the hash (#people/<id>), else default to Gareth. */
function personFromHash(): string {
  const seg = window.location.hash.replace(/^#\/?/, '').split(/[?&]/)[0].split('/')[1]
  return seg && PEOPLE.some((x) => x.id === seg) ? seg : 'gareth'
}

export default function PeopleView() {
  const [selected, setSelectedState] = useState(personFromHash)

  // Clicking a person writes a shareable hash (#people/vishen); the hash is the source of truth.
  const setSelected = (id: string) => {
    setSelectedState(id)
    const target = `#people/${id}`
    if (window.location.hash !== target) window.location.hash = target
  }

  useEffect(() => {
    const onHash = () => setSelectedState(personFromHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const p = person(selected)
  const profile = AUTHOR_PROFILES[selected]
  const wa = p.whatsapp?.replace(/[^0-9]/g, '')
  const sortKey = (e: ScheduleEvent) => e.date + (e.start ?? '')
  // Venue + production commitments (shown in the categorized lists below)
  const venueEvents = EVENTS.filter((e) => involvesPerson(e, selected)).sort((a, b) =>
    sortKey(a).localeCompare(sortKey(b)),
  )
  // Post-production / edit deliverables (Creative column, kept off the venue Overview)
  const editorial = EDITORIAL_EVENTS.filter((e) => involvesPerson(e, selected)).sort((a, b) =>
    sortKey(a).localeCompare(sortKey(b)),
  )
  const events = [...venueEvents, ...editorial].sort((a, b) => sortKey(a).localeCompare(sortKey(b)))
  const content = venueEvents.filter(isOurProduction)
  const eventCommitments = venueEvents.filter((e) => !isOurProduction(e))
  const sched = buildSchedule(events)

  return (
    <div>
      <div className="mv-overline">Who needs to be where</div>
      <h1 className="mv-h1">People</h1>
      <p className="mv-sub">Pick anyone — author, crew, Gareth or Vishen — for their profile and full itinerary.</p>

      <div className="pp-layout">
        <div className="mv-card pp-list">
          {SECTIONS.map((section) => (
            <div key={section.label}>
              <div className="pp-section">{section.label}</div>
              {section.groups.map((g, i) => {
                const ppl = peopleForGroup(g)
                if (!ppl.length) return null
                return (
                  <div key={g.label ?? i}>
                    {g.label && <div className="pp-group">{g.label}</div>}
                    {ppl.map((x) => (
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
                )
              })}
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

            {sched.committedDays > 0 && (
              <>
                <div className="pp-commit-label">📅 Scheduler — where {p.name.split(' ')[0]} needs to be</div>
                <div className="sch-tiles">
                  <div className="sch-tile">
                    <div className="sch-tile-n">{sched.committedDays}</div>
                    <div className="sch-tile-l">committed days</div>
                  </div>
                  {sched.activeDays > 0 && (
                    <div className="sch-tile">
                      <div className="sch-tile-n">{fmtDur(sched.totalWorkMin)}</div>
                      <div className="sch-tile-l">on camera / set</div>
                    </div>
                  )}
                  {sched.activeDays > 0 && (
                    <div className="sch-tile">
                      <div className="sch-tile-n">{fmtDur(sched.totalBreakMin)}</div>
                      <div className="sch-tile-l">break time</div>
                    </div>
                  )}
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

            {(content.length > 0 || eventCommitments.length > 0 || editorial.length > 0) && (
              <div className="pp-commit-divider">
                <span>Full commitment detail</span>
              </div>
            )}
            {content.length > 0 && (
              <CollapsibleSection label={`🎬 Content commitments — our productions`} count={content.length}>
                <EventList events={content} />
              </CollapsibleSection>
            )}
            {eventCommitments.length > 0 && (
              <CollapsibleSection label={`🎪 Event commitments — locked agenda`} count={eventCommitments.length}>
                <EventList events={eventCommitments} />
              </CollapsibleSection>
            )}
            {editorial.length > 0 && (
              <CollapsibleSection label={`✂️ Edit deliverables — Creative column`} count={editorial.length}>
                <EventList events={editorial} />
              </CollapsibleSection>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
