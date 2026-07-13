import type { EventStatus, EventType, ScheduleEvent } from './data/types'
import { initials, person } from './data/people'
import { COMMUNITY } from './data/schedule'

export const TYPE_LABEL: Record<EventType, string> = {
  'stage-talk': 'Stage talk',
  embodiment: 'Embodiment',
  community: 'Community',
  experience: 'Experience',
  portrait: 'Portraits',
  accelerator: 'Accelerator',
  production: 'Studio production',
  podcast: 'Podcast',
  social: 'Parties',
  'social-media': 'Social media (daily)',
  logistics: 'Logistics',
}

export const STATUS_LABEL: Record<EventStatus, string> = {
  confirmed: 'Confirmed',
  tentative: 'To confirm',
  placeholder: 'Placeholder',
  conflict: 'Conflict',
  done: 'Done',
}

export function TypeBadge({ type }: { type: EventType }) {
  return <span className={`mv-badge type-${type}`}>{TYPE_LABEL[type]}</span>
}

export function StatusBadge({ status }: { status?: EventStatus }) {
  if (!status || status === 'confirmed') return null
  return <span className={`mv-badge status-${status}`}>{STATUS_LABEL[status]}</span>
}

/** Priority Ranking (Manual) from the Shoots Airtable, 1-10 */
export function PriorityBadge({ priority }: { priority?: number }) {
  if (!priority) return null
  const tier = priority >= 8 ? 'high' : priority >= 4 ? 'med' : 'low'
  return <span className={`mv-badge priority-${tier}`}>Priority {priority}</span>
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

/** All-day events (no fixed start — genuinely ongoing) sort first; other undated
 *  events (start truly TBD) still sort last. */
export function sortKey(e: ScheduleEvent): string {
  if (e.start) return e.start
  return e.type === 'social-media' ? '00:00' : '99:99'
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
  return (
    (e.speakers ?? []).includes(id) ||
    (e.crew ?? []).includes(id) ||
    // Creative-column responsibilities (Shoots Airtable) — director/camera/editor block the day too
    e.director === id ||
    (e.cameraOps ?? []).includes(id) ||
    (e.editors ?? []).includes(id)
  )
}

/** Our content productions vs locked event commitments */
export function isOurProduction(e: ScheduleEvent): boolean {
  return e.type === 'production' || e.type === 'podcast' || (e.type === 'accelerator' && e.id.startsWith('accel-rec'))
}

/** Clickable Key/legend — filters by type, or by the Small Hall location (a cross-cutting filter) */
export type ChipFilter = 'all' | EventType | 'small-hall'

export const FILTER_META: { key: ChipFilter; label: string; dotClass: string }[] = [
  { key: 'stage-talk', label: 'Stage talk', dotClass: 't-stage-talk' },
  { key: 'podcast', label: 'Podcast', dotClass: 't-podcast' },
  { key: 'production', label: 'Studio production', dotClass: 't-production' },
  { key: 'portrait', label: 'Portraits', dotClass: 't-portrait' },
  { key: 'accelerator', label: 'Accelerator', dotClass: 't-accelerator' },
  { key: 'small-hall', label: 'Small Hall', dotClass: 'loc-small-hall' },
  { key: 'social-media', label: 'Social media (daily)', dotClass: 't-social-media' },
  { key: 'social', label: 'Parties', dotClass: '' },
]

export function matchesChipFilter(e: ScheduleEvent, filter: ChipFilter): boolean {
  if (filter === 'all') return true
  if (filter === 'small-hall') return e.location === COMMUNITY
  if (filter === 'social') return e.type === 'social' || !!e.party
  return e.type === filter
}

export function isSmallHall(e: ScheduleEvent): boolean {
  return e.location === COMMUNITY
}

/** True when this event carries the cross-cutting Parties tag but isn't itself type 'social' */
export function isPartyTagged(e: ScheduleEvent): boolean {
  return !!e.party && e.type !== 'social'
}

/** Director/Camera/Editor credits from the Shoots Airtable "Creative" column, grouped for display */
export function creativeCredits(e: ScheduleEvent): { label: string; ids: string[] }[] {
  const out: { label: string; ids: string[] }[] = []
  if (e.director) out.push({ label: 'Director', ids: [e.director] })
  if (e.cameraOps?.length) out.push({ label: 'Camera', ids: e.cameraOps })
  if (e.editors?.length) out.push({ label: 'Editor', ids: e.editors })
  return out
}

export function Legend({ active, onSelect }: { active: ChipFilter; onSelect: (f: ChipFilter) => void }) {
  return (
    <div className="legend">
      {FILTER_META.map((m) => (
        <button
          key={m.key}
          className={`legend-item${active === m.key ? ' active' : ''}`}
          onClick={() => onSelect(active === m.key ? 'all' : m.key)}
        >
          <span className={`dot ${m.dotClass}`} />
          {m.label}
        </button>
      ))}
      {active !== 'all' && (
        <button className="legend-clear" onClick={() => onSelect('all')}>
          Clear filter
        </button>
      )}
    </div>
  )
}
