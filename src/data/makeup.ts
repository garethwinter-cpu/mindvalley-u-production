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

// On-camera talent who are women — 60-min buffer. Everyone else in a studio
// shoot gets 30. Kaitlin is our interview host but she's on camera and needs her
// own hair/makeup (per Gareth, 16 Jul), so she's treated as talent here — the
// "already camera-ready" check below skips it when she runs back-to-back
// interviews, so she isn't re-made-up needlessly.
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
  'kaitlin',
])

// Made up once in a morning call, not per shoot — so they don't drive a buffer.
// (Kaitlin was here but is now treated as talent — she's on camera interviewing.)
const HOSTS = new Set(['gareth', 'vishen', 'eni'])

// Talent who do their own hair/makeup — never get an MUA buffer generated for them
// (Chiara King does her own, per Gareth 21 Jul).
const SELF_MAKEUP = new Set(['chiara-king'])

// Types that mean a person is already in hair/makeup (so a following studio
// shoot needs a touch-up, not a fresh buffer).
const ON_CAMERA: ReadonlySet<string> = new Set(['production', 'podcast', 'portrait', 'stage-talk', 'hosting'])

const isStudioShoot = (e: ScheduleEvent) =>
  !!e.start && (e.id.startsWith('mc-') || e.id.startsWith('int-') || e.type === 'podcast')

const toMin = (t: string) => +t.split(':')[0] * 60 + +t.split(':')[1]
const fromMin = (m: number) =>
  `${String(Math.floor(m / 60)).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`
const bufferFor = (id: string) => (FEMALE_TALENT.has(id) ? 60 : 30)

// Coming off a main-stage HOSTING block, the host is fully done up and stays
// camera-ready for a good while (per Gareth) — so a following interview needs a
// touch-up, not a fresh call, even with a modest gap. Grace window in minutes.
const STILL_CAMERA_READY_AFTER_HOSTING = 150

// Per-shoot overrides for a makeup block's time/location — for talent who prep
// off-site or in a specific room instead of the default green room. Keyed by the
// SHOOT id (the makeup block is `makeup-<shootId>`).
const MAKEUP_OVERRIDES: Record<
  string,
  { start?: string; end?: string; location?: string; note?: string }
> = {
  // Regan preps at her hotel and comes to the venue camera-ready (Gareth, 21 Jul).
  // Masterclass is now Sat 25 Jul 12:00–15:00 → makeup 10:00 at the hotel (travel in).
  'mc-regan-aom': {
    start: '10:00',
    end: '11:00',
    location: 'Nuune Boutique Hotel',
    note: 'At her hotel — Regan gets ready off-site from 10:00, then travels in for the 12:00 masterclass shoot.',
  },
  // Chiara + Marisa glam in the Author Lounge / VIP Area (Gareth, 21 Jul).
  'pod-chiara-marisa': { location: 'Author Lounge / VIP Area' },
}

/**
 * Derive the makeup/wardrobe blocks from the base schedule. Returns one block
 * per studio shoot that has at least one "cold" guest (not already camera-ready).
 */
export function buildMakeupEvents(base: ScheduleEvent[]): ScheduleEvent[] {
  const out: ScheduleEvent[] = []
  for (const shoot of base.filter(isStudioShoot)) {
    const call = toMin(shoot.start!)
    const guests = (shoot.speakers ?? []).filter((p) => !HOSTS.has(p) && !SELF_MAKEUP.has(p))

    // A guest is "cold" unless they finished an on-camera slot shortly before this
    // call time (then they're already made up). The grace window is their buffer,
    // except off a hosting block it's longer — a host fresh off stage is camera-ready.
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
          call - toMin(o.end) < (o.type === 'hosting' ? STILL_CAMERA_READY_AFTER_HOSTING : buf),
      )
      return !alreadyMadeUp
    })
    if (cold.length === 0) continue

    const buf = cold.some((g) => FEMALE_TALENT.has(g)) ? 60 : 30
    const names = cold.map((id) => person(id).name).join(', ')
    const ov = MAKEUP_OVERRIDES[shoot.id] ?? {}
    const baseNote = `${buf}-min pre-shoot buffer (${
      buf === 60 ? 'includes a female author — up to 1h' : 'men — 30 min'
    }) so talent is camera-ready for ${shoot.title} at ${shoot.start}. Hair, makeup & wardrobe.`
    out.push({
      id: `makeup-${shoot.id}`,
      date: shoot.date,
      start: ov.start ?? fromMin(call - buf),
      end: ov.end ?? shoot.start,
      title: `Makeup & wardrobe — ${names}`,
      type: 'makeup',
      location: ov.location ?? 'Makeup / Green Room',
      speakers: cold,
      // Attach the makeup artist so all these blocks roll up into the "Makeup"
      // person page — a shareable call sheet of every time the MUA is needed.
      crew: ['makeup'],
      notes: ov.note ? `${baseNote} ${ov.note}` : baseNote,
    })
  }
  return out
}
