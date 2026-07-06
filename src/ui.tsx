import type { EventStatus, EventType, ScheduleEvent } from './data/types'
import { initials, person } from './data/people'

export const TYPE_LABEL: Record<EventType, string> = {
  'stage-talk': 'Stage talk',
  embodiment: 'Embodiment',
  community: 'Community',
  experience: 'Experience',
  portrait: 'Portraits',
  accelerator: 'Accelerator',
  production: 'Production',
  podcast: 'Podcast',
  social: 'Social',
  logistics: 'Logistics',
}

export const STATUS_LABEL: Record<EventStatus, string> = {
  confirmed: 'Confirmed',
  tentative: 'To confirm',
  placeholder: 'Placeholder',
  conflict: 'Conflict',
}

export function TypeBadge({ type }: { type: EventType }) {
  return <span className={`mv-badge type-${type}`}>{TYPE_LABEL[type]}</span>
}

export function StatusBadge({ status }: { status?: EventStatus }) {
  if (!status || status === 'confirmed') return null
  return <span className={`mv-badge status-${status}`}>{STATUS_LABEL[status]}</span>
}

export function Avatar({ id }: { id: string }) {
  const p = person(id)
  return (
    <span className="mv-avatar" title={p.name}>
      {initials(p.name)}
    </span>
  )
}

export function fmtTime(t?: string) {
  if (!t) return 'TBD'
  const [h, m] = t.split(':').map(Number)
  const am = h < 12
  const hh = h % 12 === 0 ? 12 : h % 12
  return `${hh}:${String(m).padStart(2, '0')}${am ? 'am' : 'pm'}`
}

/** Everyone required at an event, deduped, in display order */
export function requiredPeople(e: ScheduleEvent): string[] {
  const ids: string[] = []
  if (e.gareth) ids.push('gareth')
  for (const s of e.speakers ?? []) if (!ids.includes(s)) ids.push(s)
  for (const c of e.crew ?? []) if (!ids.includes(c)) ids.push(c)
  return ids
}

export function involvesPerson(e: ScheduleEvent, id: string): boolean {
  if (id === 'gareth' && e.gareth) return true
  if (id === 'vishen' && e.vishen) return true
  return (e.speakers ?? []).includes(id) || (e.crew ?? []).includes(id)
}

/** Our content productions vs locked event commitments */
export function isOurProduction(e: ScheduleEvent): boolean {
  return e.type === 'production' || e.type === 'podcast' || (e.type === 'accelerator' && e.id.startsWith('accel-rec'))
}
