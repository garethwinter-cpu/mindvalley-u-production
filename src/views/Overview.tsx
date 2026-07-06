import { DAYS, EVENTS } from '../data/schedule'
import type { DayMeta } from '../data/types'

function DayCard({ day, onOpen }: { day: DayMeta; onOpen: (date: string) => void }) {
  const events = EVENTS.filter((e) => e.date === day.date).sort((a, b) =>
    (a.start ?? '99:99').localeCompare(b.start ?? '99:99'),
  )
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
      {events.map((e) => (
        <span key={e.id} className={`ov-chip t-${e.type}`}>
          {e.start ? e.start + ' · ' : ''}
          {e.title}
        </span>
      ))}
      {events.length === 0 && <span className="empty">Clear</span>}
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
      <div className="legend">
        <span><span className="dot t-stage-talk" /> Stage talk</span>
        <span><span className="dot t-podcast" /> Podcast</span>
        <span><span className="dot t-production" /> Our production</span>
        <span><span className="dot t-portrait" /> Portraits</span>
        <span><span className="dot t-accelerator" /> Accelerator</span>
        <span><span className="dot" /> Event / social</span>
      </div>
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
