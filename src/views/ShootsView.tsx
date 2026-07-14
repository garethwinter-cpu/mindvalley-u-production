import { useState } from 'react'
import { DAYS, EVENTS } from '../data/schedule'
import { person } from '../data/people'
import { Headshot } from '../profile'
import { StatusBadge, AuthorBadge, TYPE_ICON, fmtTime, requiredPeople } from '../ui'
import type { ScheduleEvent } from '../data/types'

type Cat = { key: string; label: string; icon: string; match: (e: ScheduleEvent) => boolean }

const CATEGORIES: Cat[] = [
  {
    key: 'masterclass',
    label: 'Masterclasses',
    icon: '🎬',
    match: (e) => e.id.startsWith('mc-') || (e.type === 'production' && /masterclass/i.test(e.title) && !/assets/i.test(e.title)),
  },
  {
    key: 'kaitlin',
    label: 'Kaitlin interviews',
    icon: '🎤',
    match: (e) => /author interview: kaitlin/i.test(e.title) || (e.type === 'production' && /interview/i.test(e.title) && (e.crew ?? []).includes('kaitlin')),
  },
  {
    key: 'gareth',
    label: 'Gareth interviews',
    icon: '🎤',
    match: (e) => /author interview: gareth/i.test(e.title),
  },
  { key: 'podcast', label: 'Podcasts', icon: '🎙️', match: (e) => e.type === 'podcast' },
  { key: 'accelerator', label: 'Accelerators', icon: '🎓', match: (e) => e.type === 'accelerator' },
  { key: 'portrait', label: 'Portraits', icon: '📸', match: (e) => e.type === 'portrait' },
  {
    key: 'assets',
    label: 'Marketing assets',
    icon: '📦',
    match: (e) => /marketing assets|landing page video|marketing asset/i.test(e.title) || e.id.startsWith('assets'),
  },
  { key: 'social', label: 'Social & parties', icon: '🎉', match: (e) => e.type === 'social' || e.type === 'social-media' || !!e.party },
]

function fmtDate(d: string) {
  return DAYS.find((x) => x.date === d)?.label ?? d.slice(5)
}
const sortKey = (e: ScheduleEvent) => e.date + (e.start ?? '99:99')

export default function ShootsView({ onOpenDay }: { onOpenDay: (date: string) => void }) {
  const [cat, setCat] = useState(CATEGORIES[0].key)
  const active = CATEGORIES.find((c) => c.key === cat)!
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.key, EVENTS.filter(c.match).length]))
  const items = EVENTS.filter(active.match).sort((a, b) => sortKey(a).localeCompare(sortKey(b)))

  return (
    <div>
      <div className="mv-overline">Browse the slate by category</div>
      <h1 className="mv-h1">Shoots</h1>
      <p className="mv-sub">Every production grouped by type — jump to any category, click a row to open its day.</p>

      <div className="cat-tabs">
        {CATEGORIES.map((c) => (
          <button key={c.key} className={`cat-tab${c.key === cat ? ' active' : ''}`} onClick={() => setCat(c.key)}>
            <span className="cat-tab-icon">{c.icon}</span>
            {c.label}
            <span className="cat-tab-count">{counts[c.key]}</span>
          </button>
        ))}
      </div>

      <div className="cat-list">
        {items.length === 0 && <div className="empty">Nothing in this category yet.</div>}
        {items.map((e) => {
          const people = requiredPeople(e).filter((id) => id !== 'gareth' || e.type === 'production')
          return (
            <button key={e.id} className="cat-row" onClick={() => onOpenDay(e.date)}>
              <div className="cat-row-when">
                <span className="cat-row-date">{fmtDate(e.date)}</span>
                <span className="cat-row-time">{e.start ? `${fmtTime(e.start)}${e.end ? `–${fmtTime(e.end)}` : ''}` : 'All day'}</span>
              </div>
              <div className="cat-row-main">
                <div className="cat-row-title">
                  <span className="cat-row-emoji">{TYPE_ICON[e.type]}</span>
                  {e.title}
                  <StatusBadge status={e.status} />
                  <AuthorBadge event={e} />
                </div>
                {e.location && <div className="cat-row-loc">{e.location}</div>}
              </div>
              <div className="cat-row-people">
                {people.slice(0, 4).map((id) => (
                  <Headshot key={id} id={id} size={24} />
                ))}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
