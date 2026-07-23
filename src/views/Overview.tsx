import { useState } from 'react'
import { DAYS, EVENTS, todayISO } from '../data/schedule'
import type { DayMeta } from '../data/types'
import { ChipFilter, Legend, isSmallHall, matchesChipFilters, sortKey } from '../ui'

function DayCard({ day, filters, onOpen }: { day: DayMeta; filters: ReadonlySet<ChipFilter>; onOpen: (date: string) => void }) {
  const all = EVENTS.filter((e) => e.date === day.date).sort((a, b) => sortKey(a).localeCompare(sortKey(b)))
  const events = all.filter((e) => matchesChipFilters(e, filters))
  const conflicts = all.filter((e) => e.status === 'conflict').length
  const today = todayISO()
  const isToday = day.date === today
  const past = day.date < today
  const allDone = all.length > 0 && all.every((e) => e.status === 'done')

  return (
    <div className={`ov-day${isToday ? ' today' : ''}${past || allDone ? ' ov-day-covered' : ''}`} onClick={() => onOpen(day.date)}>
      <div className="ov-day-head">
        <span className="ov-day-date">{day.label}</span>
        <span className="ov-day-theme">{day.theme}</span>
      </div>
      {conflicts > 0 && <span className="ov-flag">⚠ {conflicts} conflict{conflicts > 1 ? 's' : ''}</span>}
      {day.noInterviews && <span className="ov-flag" style={{ color: 'var(--text-subtle)' }}>No stage interviews</span>}
      {events.map((e) => (
        <span key={e.id} className={`ov-chip t-${e.type}${isSmallHall(e) ? ' loc-small-hall' : ''}`}>
          {e.start ? e.start + ' · ' : e.type === 'social-media' ? 'All day · ' : ''}
          {e.title}
        </span>
      ))}
      {events.length === 0 && <span className="empty">{filters.size === 0 ? 'Clear' : '—'}</span>}
      {allDone && <span className="ov-day-done">Done</span>}
    </div>
  )
}

export default function Overview({ onOpenDay }: { onOpenDay: (date: string) => void }) {
  const [filters, setFilters] = useState<Set<ChipFilter>>(() => new Set())
  const toggleFilter = (f: ChipFilter) =>
    setFilters((prev) => {
      const next = new Set(prev)
      next.has(f) ? next.delete(f) : next.add(f)
      return next
    })
  const weeks: { label: string; days: DayMeta[] }[] = [
    { label: 'Pre-event — 16–19 July', days: DAYS.filter((d) => d.week === 0) },
    { label: 'Week 1 — 20–26 July', days: DAYS.filter((d) => d.week === 1) },
    { label: 'Week 2 — 27 July–2 August', days: DAYS.filter((d) => d.week === 2) },
  ]
  return (
    <div>
      <div className="mv-overline">Mindvalley U 2026 · Kultuurikatel, Tallinn</div>
      <h1 className="mv-h1">Production overview</h1>
      <p className="mv-sub">
        Every commitment from first shoot to wrap. Click a day for the full call sheet. Click the Key below to
        filter.
      </p>
      <Legend active={filters} onToggle={toggleFilter} onClear={() => setFilters(new Set())} />
      {weeks.map((w) => (
        <div key={w.label}>
          <div className="ov-week-label">{w.label}</div>
          <div className="ov-grid">
            {w.days.map((d) => (
              <DayCard key={d.date} day={d} filters={filters} onOpen={onOpenDay} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
