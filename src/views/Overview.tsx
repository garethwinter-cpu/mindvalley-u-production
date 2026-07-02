import { DAYS, EVENTS } from '../data/schedule'
import type { DayMeta } from '../data/types'

const CHIP_PRIORITY = ['production', 'accelerator', 'stage-talk', 'portrait', 'podcast', 'social'] as const

function DayCard({ day, onOpen }: { day: DayMeta; onOpen: (date: string) => void }) {
  const events = EVENTS.filter((e) => e.date === day.date)
  const sorted = [...events].sort(
    (a, b) =>
      CHIP_PRIORITY.indexOf(a.type as (typeof CHIP_PRIORITY)[number]) -
      CHIP_PRIORITY.indexOf(b.type as (typeof CHIP_PRIORITY)[number]),
  )
  const prioritized = sorted.filter((e) => (CHIP_PRIORITY as readonly string[]).includes(e.type))
  const shown = (prioritized.length > 0 ? prioritized : sorted).slice(0, 5)
  const hidden = events.length - shown.length
  const conflicts = events.filter((e) => e.status === 'conflict').length
  const isToday = day.date === new Date().toISOString().slice(0, 10)

  return (
    <div className={`ov-day${isToday ? ' today' : ''}`} onClick={() => onOpen(day.date)}>
      <div className="ov-day-head">
        <span className="ov-day-date">{day.label}</span>
        <span className="ov-day-theme">{day.theme}</span>
      </div>
      {conflicts > 0 && <span className="ov-flag">⚠ {conflicts} conflict{conflicts > 1 ? 's' : ''}</span>}
      {day.noInterviews && <span className="ov-flag" style={{ color: 'var(--text-subtle)' }}>No interviews</span>}
      {shown.map((e) => (
        <span key={e.id} className={`ov-chip t-${e.type}`}>
          {e.start ? e.start + ' · ' : ''}
          {e.title}
        </span>
      ))}
      {events.length === 0 && <span className="empty">Clear</span>}
      {hidden > 0 && <span className="ov-more">+{hidden} more</span>}
    </div>
  )
}

export default function Overview({ onOpenDay }: { onOpenDay: (date: string) => void }) {
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
        Every commitment from first shoot to wrap. Click a day for the full call sheet.
      </p>
      {weeks.map((w) => (
        <div key={w.label}>
          <div className="ov-week-label">{w.label}</div>
          <div className="ov-grid">
            {w.days.map((d) => (
              <DayCard key={d.date} day={d} onOpen={onOpenDay} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
