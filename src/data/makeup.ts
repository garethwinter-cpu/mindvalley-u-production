import type { ScheduleEvent } from './types'
import { person } from './people'

/**
 * Makeup & wardrobe buffers before studio shoots (per Gareth, 16 Jul).
 *
 * Rule: every author coming into the studio to record gets a hair/makeup/wardrobe
 * buffer BEFORE their call time so they're camera-ready when they sit down —
 * up to 60 min for women, 30 min for men. Applies to the four studio-shoot
 * types only: masterclasses (mc-*), author interviews with Gareth or Kaitlin
 * (int-*), and podcasts (type 'podcast').
 *
 * Two refinements so we don't reserve makeup that isn't needed:
 *  1. HOSTS (Gareth, Kaitlin, Vishen, Eni) are made up once in a morning call,
 *     not per shoot — they don't drive a per-shoot buffer.
 *  2. If a guest is ALREADY on camera in the buffer window before their call
 *     (a back-to-back shoot, a portrait, or a stage talk that just finished),
 *     they're already made up — we skip the block (touch-up only).
 *
 * These blocks are generated from the live schedule, so they track automatically
 * as shoots move.
 */

// On-camera guest talent who are women — 60-min buffer. Everyone else in a
// studio shoot gets 30. (Hosts are handled separately, see HOSTS.)
const FEMALE_TALENT = new Set([
  'regan-hillyer',
  'marisa-peer',
  'jolene-brighten',
  'jamie-sea',
  'maria-wendt',
  'jade-shaw',
  'maya-raichoora',
  'rachel-pringle',
  'sheleana-aiyana',
  'chiara-king',
])

// Made up once in a morning call, not per shoot — so they don't drive a buffer.
const HOSTS = new Set(['gareth', 'kaitlin', 'vishen', 'eni'])

// Types that mean a person is already in hair/makeup (so a following studio
// shoot needs a touch-up, not a fresh buffer).
const ON_CAMERA: ReadonlySet<string> = new Set(['production', 'podcast', 'portrait', 'stage-talk'])

const isStudioShoot = (e: ScheduleEvent) =>
  !!e.start && (e.id.startsWith('mc-') || e.id.startsWith('int-') || e.type === 'podcast')

const toMin = (t: string) => +t.split(':')[0] * 60 + +t.split(':')[1]
const fromMin = (m: number) =>
  `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
const bufferFor = (id: string) => (FEMALE_TALENT.has(id) ? 60 : 30)

/**
 * Derive the makeup/wardrobe blocks from the base schedule. Returns one block
 * per studio shoot that has at least one "cold" guest (not already camera-ready).
 */
export function buildMakeupEvents(base: ScheduleEvent[]): ScheduleEvent[] {
  const out: ScheduleEvent[] = []
  for (const shoot of base.filter(isStudioShoot)) {
    const call = toMin(shoot.start!)
    const guests = (shoot.speakers ?? []).filter((p) => !HOSTS.has(p))

    // A guest is "cold" unless they finished an on-camera slot within their own
    // buffer window before this call time (then they're already made up).
    const cold = guests.filter((g) => {
      const buf = bufferFor(g)
      const alreadyMadeUp = base.some(
        (o) =>
          o.id !== shoot.id &&
          o.date === shoot.date &&
          !!o.end &&
          ON_CAMERA.has(o.type) &&
          (o.speakers ?? []).includes(g) &&
          toMin(o.end) <= call &&
          call - toMin(o.end) < buf,
      )
      return !alreadyMadeUp
    })
    if (cold.length === 0) continue

    const buf = cold.some((g) => FEMALE_TALENT.has(g)) ? 60 : 30
    const names = cold.map((id) => person(id).name).join(', ')
    out.push({
      id: `makeup-${shoot.id}`,
      date: shoot.date,
      start: fromMin(call - buf),
      end: shoot.start,
      title: `Makeup & wardrobe — ${names}`,
      type: 'makeup',
      location: 'Makeup / Green Room',
      speakers: cold,
      notes: `${buf}-min pre-shoot buffer (${
        buf === 60 ? 'includes a female author — up to 1h' : 'men — 30 min'
      }) so talent is camera-ready for ${shoot.title} at ${shoot.start}. Hair, makeup & wardrobe.`,
    })
  }
  return out
}
