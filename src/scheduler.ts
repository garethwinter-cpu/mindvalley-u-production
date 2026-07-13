import type { ScheduleEvent } from './data/types'

/** minutes since midnight, or null if no start */
export function toMin(t?: string): number | null {
  if (!t) return null
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

export function fmtDur(min: number): string {
  const h = Math.floor(min / 60)
  const m = min % 60
  if (h && m) return `${h}h ${m}m`
  if (h) return `${h}h`
  return `${m}m`
}

export function fmtClock(min: number): string {
  const h24 = Math.floor(min / 60)
  const m = min % 60
  const am = h24 < 12
  const hh = h24 % 12 === 0 ? 12 : h24 % 12
  return `${hh}:${String(m).padStart(2, '0')}${am ? 'am' : 'pm'}`
}

export interface Gap {
  fromMin: number
  toMin: number
  min: number
}

export interface DaySchedule {
  date: string
  timed: ScheduleEvent[]
  untimed: ScheduleEvent[]
  callMin: number | null
  wrapMin: number | null
  spanMin: number
  workMin: number
  breakMin: number
  gaps: Gap[]
  hasOverlap: boolean
}

export interface PersonSchedule {
  days: DaySchedule[]
  activeDays: number
  totalWorkMin: number
  totalSpanMin: number
  totalBreakMin: number
  busiest?: DaySchedule
  firstCall?: { date: string; min: number }
  lastWrap?: { date: string; min: number }
}

/** union of intervals → total covered minutes (handles overlaps so work time isn't double-counted) */
function unionMinutes(intervals: [number, number][]): number {
  if (!intervals.length) return 0
  const sorted = [...intervals].sort((a, b) => a[0] - b[0])
  let total = 0
  let [cs, ce] = sorted[0]
  for (let i = 1; i < sorted.length; i++) {
    const [s, e] = sorted[i]
    if (s > ce) {
      total += ce - cs
      cs = s
      ce = e
    } else {
      ce = Math.max(ce, e)
    }
  }
  return total + (ce - cs)
}

export function buildSchedule(events: ScheduleEvent[]): PersonSchedule {
  const byDate: Record<string, ScheduleEvent[]> = {}
  for (const e of events) (byDate[e.date] ??= []).push(e)

  const days: DaySchedule[] = Object.keys(byDate)
    .sort()
    .map((date) => {
      const all = byDate[date]
      const timed = all
        .filter((e) => e.start)
        .sort((a, b) => toMin(a.start)! - toMin(b.start)!)
      const untimed = all.filter((e) => !e.start)

      const intervals: [number, number][] = timed.map((e) => {
        const s = toMin(e.start)!
        const en = toMin(e.end) ?? s + 30
        return [s, en]
      })

      const callMin = timed.length ? Math.min(...intervals.map((i) => i[0])) : null
      const wrapMin = timed.length ? Math.max(...intervals.map((i) => i[1])) : null
      const spanMin = callMin != null && wrapMin != null ? wrapMin - callMin : 0
      const workMin = unionMinutes(intervals)
      const breakMin = Math.max(0, spanMin - workMin)

      // gaps between consecutive blocks (potential breaks)
      const gaps: Gap[] = []
      let hasOverlap = false
      const ordered = [...intervals].sort((a, b) => a[0] - b[0])
      for (let i = 1; i < ordered.length; i++) {
        const prevEnd = Math.max(...ordered.slice(0, i).map((x) => x[1]))
        const start = ordered[i][0]
        if (start > prevEnd) gaps.push({ fromMin: prevEnd, toMin: start, min: start - prevEnd })
        else if (start < prevEnd) hasOverlap = true
      }

      return { date, timed, untimed, callMin, wrapMin, spanMin, workMin, breakMin, gaps, hasOverlap }
    })

  const timedDays = days.filter((d) => d.timed.length)
  const totalWorkMin = timedDays.reduce((a, d) => a + d.workMin, 0)
  const totalSpanMin = timedDays.reduce((a, d) => a + d.spanMin, 0)
  const totalBreakMin = timedDays.reduce((a, d) => a + d.breakMin, 0)
  const busiest = timedDays.length
    ? timedDays.reduce((a, d) => (d.workMin > a.workMin ? d : a))
    : undefined
  const firstCall = timedDays.length ? { date: timedDays[0].date, min: timedDays[0].callMin! } : undefined
  const lastCallDay = timedDays.length ? timedDays[timedDays.length - 1] : undefined
  const lastWrap = lastCallDay ? { date: lastCallDay.date, min: lastCallDay.wrapMin! } : undefined

  return {
    days,
    activeDays: timedDays.length,
    totalWorkMin,
    totalSpanMin,
    totalBreakMin,
    busiest,
    firstCall,
    lastWrap,
  }
}
