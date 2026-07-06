/**
 * Generates ICS calendar feeds into public/calendar/ at build time.
 * Subscribed Google Calendars auto-update from these URLs: same UID = event
 * updates in place; removed events disappear (no legacy meetings).
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { EVENTS } from '../src/data/schedule'
import { PEOPLE, person } from '../src/data/people'
import type { ScheduleEvent } from '../src/data/types'

const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'calendar')
mkdirSync(OUT, { recursive: true })

const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\n/g, '\\n')
const dt = (date: string, time: string) => `${date.replace(/-/g, '')}T${time.replace(':', '')}00`
const stamp = new Date().toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z'

function involvesPerson(e: ScheduleEvent, id: string): boolean {
  if (id === 'gareth' && e.gareth) return true
  if (id === 'vishen' && e.vishen) return true
  return (e.speakers ?? []).includes(id) || (e.crew ?? []).includes(id)
}

function vevent(e: ScheduleEvent): string {
  const who = [
    ...(e.gareth ? ['Gareth Winter'] : []),
    ...(e.speakers ?? []).map((id) => person(id).name),
    ...(e.crew ?? []).map((id) => person(id).name),
  ]
  const desc = [
    e.status && e.status !== 'confirmed' ? `Status: ${e.status.toUpperCase()}` : '',
    who.length ? `Who: ${[...new Set(who)].join(', ')}` : '',
    e.notes ?? '',
    'Full schedule: https://garethwinter-cpu.github.io/mindvalley-u-production/',
  ]
    .filter(Boolean)
    .join('\n')

  const lines = [
    'BEGIN:VEVENT',
    `UID:${e.id}@mvu2026-production`,
    `DTSTAMP:${stamp}`,
    `SUMMARY:${esc(`${e.status === 'conflict' ? '⚠️ ' : ''}${e.title}`)}`,
  ]
  if (e.start) {
    lines.push(`DTSTART;TZID=Europe/Tallinn:${dt(e.date, e.start)}`)
    lines.push(`DTEND;TZID=Europe/Tallinn:${dt(e.date, e.end ?? e.start)}`)
  } else {
    lines.push(`DTSTART;VALUE=DATE:${e.date.replace(/-/g, '')}`)
  }
  if (e.location) lines.push(`LOCATION:${esc(e.location)}`)
  lines.push(`DESCRIPTION:${esc(desc)}`)
  lines.push('END:VEVENT')
  return lines.join('\r\n')
}

const TZ = [
  'BEGIN:VTIMEZONE',
  'TZID:Europe/Tallinn',
  'BEGIN:STANDARD',
  'DTSTART:19701025T040000',
  'RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU',
  'TZOFFSETFROM:+0300',
  'TZOFFSETTO:+0200',
  'END:STANDARD',
  'BEGIN:DAYLIGHT',
  'DTSTART:19700329T030000',
  'RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU',
  'TZOFFSETFROM:+0200',
  'TZOFFSETTO:+0300',
  'END:DAYLIGHT',
  'END:VTIMEZONE',
].join('\r\n')

function calendar(name: string, events: ScheduleEvent[]): string {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MVU 2026 Production HQ//EN',
    `X-WR-CALNAME:${esc(name)}`,
    'X-WR-TIMEZONE:Europe/Tallinn',
    'METHOD:PUBLISH',
    TZ,
    ...events.map(vevent),
    'END:VCALENDAR',
    '',
  ].join('\r\n')
}

writeFileSync(join(OUT, 'all.ics'), calendar('MVU 2026 Production — All', EVENTS))
const FEEDS = ['gareth', 'vishen', 'kaitlin', 'khairul', 'nadir', 'kuhan', 'meng', 'karen', 'mardo']
for (const id of FEEDS) {
  const p = PEOPLE.find((x) => x.id === id)
  if (!p) continue
  const evts = EVENTS.filter((e) => involvesPerson(e, id))
  writeFileSync(join(OUT, `${id}.ics`), calendar(`MVU 2026 — ${p.name}`, evts))
}
console.log(`ICS feeds written: all + ${FEEDS.length} personal (${EVENTS.length} events)`)
