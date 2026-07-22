import { useState } from 'react'
import { DAYS, EVENTS, todayISO } from '../data/schedule'
import { ChipFilter, Legend, PriorityBadge, StatusBadge, TypeBadge, AuthorBadge, creativeCredits, fmtTime, involvesPerson, isPartyTagged, isSmallHall, matchesChipFilter, requiredPeople, sortKey } from '../ui'
import { PersonLink } from '../profile'
import { PEOPLE } from '../data/people'

export default function DayView({ date, onPick }: { date: string; onPick: (d: string) => void }) {
  const [who, setWho] = useState('all')
  const [filter, setFilter] = useState<ChipFilter>('all')
  const day = DAYS.find((d) => d.date === date) ?? DAYS[0]
  const events = EVENTS.filter((e) => e.date === day.date)
    .filter((e) => who === 'all' || involvesPerson(e, who))
    .filter((e) => matchesChipFilter(e, filter))
    .sort((a, b) => sortKey(a).localeCompare(sortKey(b)))

  const speakers = PEOPLE.filter((p) => p.role === 'speaker')
  const team = PEOPLE.filter((p) => p.role !== 'speaker')

  return (
    <div>
      <div className="mv-overline">Daily call sheet</div>
      <h1 className="mv-h1">
        {day.label} — {day.theme}
      </h1>
      <p className="mv-sub">
        {day.noInterviews &&
          'Marked NO INTERVIEWS in the event agenda — that means no stage/press interviews, not our studio capture (confirmed via Eni, 13 Jul). '}
        Energiakeskus Studio ↔ Kultuurikatel is walkable — no travel buffers between venue and studio.
      </p>

      <div className="day-nav">
        {(() => {
          const today = todayISO()
          // Upcoming (today + future) first; expired days pushed to the end and marked done.
          const upcoming = DAYS.filter((d) => d.date >= today)
          const past = DAYS.filter((d) => d.date < today)
          return [...upcoming, ...past].map((d) => {
            const done = d.date < today
            const cls = [d.date === day.date ? 'active' : '', done ? 'done' : ''].filter(Boolean).join(' ')
            return (
              <button key={d.date} className={cls} onClick={() => onPick(d.date)} title={done ? 'Done' : undefined}>
                {done && <span className="day-tick" aria-hidden>✓ </span>}
                {d.label.replace(' Jul', '/7').replace(' Aug', '/8')}
              </button>
            )
          })
        })()}
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

      <Legend active={filter} onSelect={setFilter} />

      <div className="evt-list">
        {events.length === 0 && (
          <div className="empty">
            {who === 'all' && filter === 'all'
              ? 'Nothing scheduled. Recovery day — or an opportunity.'
              : 'Nothing matches this filter today.'}
          </div>
        )}
        {events.map((e) => {
          const req = requiredPeople(e)
          return (
            <div key={e.id} className={`evt${e.status === 'conflict' ? ' conflict' : ''}`}>
              <div className="evt-time">
                {!e.start && e.type === 'social-media' ? 'All day' : fmtTime(e.start)}
                {e.end && <small>– {fmtTime(e.end)}</small>}
              </div>
              <div>
                <div className="evt-title">
                  {e.title}
                  <TypeBadge type={e.type} />
                  {isSmallHall(e) && <span className="mv-badge loc-small-hall">Small Hall</span>}
                  {isPartyTagged(e) && <span className="mv-badge tag-party">Parties</span>}
                  <PriorityBadge priority={e.priority} />
                  <StatusBadge status={e.status} />
                  <AuthorBadge event={e} />
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
                {creativeCredits(e).map((c) => (
                  <div className="evt-who" key={c.label}>
                    <span className="evt-who-label">{c.label}</span>
                    <span style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                      {c.ids.map((id, i) => (
                        <span key={id}>
                          <PersonLink id={id} />
                          {i < c.ids.length - 1 ? ',' : ''}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
                {e.notes && <div className="evt-notes">{e.notes}</div>}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
