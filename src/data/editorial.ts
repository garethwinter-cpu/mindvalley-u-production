import type { ScheduleEvent } from './types'

/**
 * Post-production / edit deliverables that live ONLY in the Shoots Airtable
 * "Creative" column — recaps and the daily stage-talk snippets. These aren't
 * studio call-times, they're edit responsibilities, so they're kept out of the
 * venue-day Overview and merged only into each person's scheduler (People view)
 * to block out their days. Editor is set via the `editors` field, matching the
 * Creative column (checked 13 Jul).
 */

const EDIT_LOC = 'Post-production (edit)'

// Recaps — dated to publish day, one named editor each (per Creative column)
const RECAPS: ScheduleEvent[] = [
  {
    id: 'ed-recap-day1',
    date: '2026-07-21',
    title: 'MVU Day 1 Recap — "We\'re Open!" (edit + publish)',
    type: 'social',
    location: EDIT_LOC,
    editors: ['jason'],
    status: 'tentative',
    notes: 'Creative: Jason Roper. Fast-turnaround recap of opening day, publish next morning.',
  },
  {
    id: 'ed-recap-w1',
    date: '2026-07-26',
    title: 'MVU Week 1 Recap (edit + publish)',
    type: 'social',
    location: EDIT_LOC,
    editors: ['kuhan'],
    status: 'tentative',
    notes: 'Creative: Kuhan. Week 1 highlights sizzle, cut from daily footage + stage snippets.',
  },
  {
    id: 'ed-recap-w2',
    date: '2026-08-01',
    title: 'MVU Week 2 Recap (edit + publish)',
    type: 'social',
    location: EDIT_LOC,
    editors: ['kuhan'],
    status: 'tentative',
    notes: 'Creative: Kuhan. Week 2 highlights sizzle.',
  },
  {
    id: 'ed-recap-final',
    date: '2026-08-02',
    title: 'MVU Final Recap / Closing film (edit)',
    type: 'social',
    location: EDIT_LOC,
    editors: ['kuhan'],
    status: 'tentative',
    notes: 'Creative: Kuhan. Hero close-out film — the whole fortnight in one piece.',
  },
]

// Daily stage-talk snippets — Miguel owns all of them (Creative column).
// One deliverable per keynote day (2 snippets per keynote; see the "2 Snippets"
// records in Airtable + the Social tab for the per-author breakdown).
const SNIPPET_DAYS = [
  '2026-07-20', '2026-07-21', '2026-07-22', '2026-07-23', '2026-07-24', '2026-07-25',
  '2026-07-27', '2026-07-28', '2026-07-29', '2026-07-30', '2026-07-31',
]
const SNIPPETS: ScheduleEvent[] = SNIPPET_DAYS.map((date) => ({
  id: `ed-snippets-${date}`,
  date,
  title: 'Stage-talk snippets — cut the day\'s keynotes (2 per author)',
  type: 'social',
  location: EDIT_LOC,
  editors: ['miguel'],
  status: 'tentative',
  notes: 'Creative: Miguel. Same-day / next-morning short-form cuts from the day\'s stage talks. See the Social tab + Airtable for the per-keynote list.',
}))

export const EDITORIAL_EVENTS: ScheduleEvent[] = [...RECAPS, ...SNIPPETS]
