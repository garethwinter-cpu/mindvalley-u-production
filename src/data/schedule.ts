import type { ActionItem, BacklogItem, Conflict, DayMeta, ScheduleEvent } from './types'
import { PRODUCTION_EVENTS } from './productions'

export const MAIN_STAGE = 'Main Stage (Black Box)'
export const COMMUNITY = 'Community Stage (Small Hall)'
export const EMBODIMENT = 'Embodiment Stage (Cauldron Hall)'
export const EXPERIENCE = 'Experience Stage (Stalker Hall)'
export const VENUE = 'Kultuurikatel, Tallinn'

export const DAYS: DayMeta[] = [
  { date: '2026-07-06', label: 'Mon 6 Jul', theme: 'Pre-sprint — remote', week: 0 },
  { date: '2026-07-16', label: 'Thu 16 Jul', theme: 'Pre-event', week: 0 },
  { date: '2026-07-17', label: 'Fri 17 Jul', theme: 'Pre-event — Production kickoff', week: 0 },
  { date: '2026-07-18', label: 'Sat 18 Jul', theme: 'Pre-event', week: 0 },
  { date: '2026-07-19', label: 'Sun 19 Jul', theme: 'Pre-event', week: 0 },
  { date: '2026-07-20', label: 'Mon 20 Jul', theme: 'Opening', week: 1, noInterviews: true },
  { date: '2026-07-21', label: 'Tue 21 Jul', theme: 'Entrepreneurship', week: 1 },
  { date: '2026-07-22', label: 'Wed 22 Jul', theme: 'Manifesting', week: 1 },
  { date: '2026-07-23', label: 'Thu 23 Jul', theme: 'Longevity', week: 1, noInterviews: true },
  { date: '2026-07-24', label: 'Fri 24 Jul', theme: 'Relationships', week: 1, noInterviews: true },
  { date: '2026-07-25', label: 'Sat 25 Jul', theme: 'Weekend — Accelerators', week: 1 },
  { date: '2026-07-26', label: 'Sun 26 Jul', theme: 'Weekend — Accelerators', week: 1 },
  { date: '2026-07-27', label: 'Mon 27 Jul', theme: 'Healing', week: 2, noInterviews: true },
  { date: '2026-07-28', label: 'Tue 28 Jul', theme: 'Embodiment', week: 2, noInterviews: true },
  { date: '2026-07-29', label: 'Wed 29 Jul', theme: 'Influence & Wealth', week: 2 },
  { date: '2026-07-30', label: 'Thu 30 Jul', theme: 'Reinvention', week: 2 },
  { date: '2026-07-31', label: 'Fri 31 Jul', theme: 'Closing Ceremony', week: 2, noInterviews: true },
  { date: '2026-08-01', label: 'Sat 1 Aug', theme: 'Vishen AI Accelerator', week: 2 },
  { date: '2026-08-02', label: 'Sun 2 Aug', theme: 'Wrap — studio pack/travel', week: 2 },
  { date: '2026-08-03', label: 'Mon 3 Aug', theme: 'Post-event', week: 2 },
  { date: '2026-08-04', label: 'Tue 4 Aug', theme: 'Post-event', week: 2 },
  { date: '2026-08-05', label: 'Wed 5 Aug', theme: 'Post-event', week: 2 },
]

const CREW_CORE = ['khairul', 'nadir', 'kuhan']

const EVENT_ITEMS: ScheduleEvent[] = [
  // ================= PRE-EVENT =================
  {
    id: 'priestley-webinar',
    date: '2026-07-06',
    start: '19:00',
    end: '20:30',
    title: 'Daniel Priestley — accelerator webinar (Zoom, self-hosted)',
    type: 'logistics',
    location: 'Remote — Zoom',
    speakers: ['daniel-priestley'],
    status: 'done',
    notes:
      'Handled — no crew required. 5pm London = 7pm Tallinn, 90 min. Funnel webinar driving signups to the 18–19 Jul intensive.',
  },
  {
    id: 'regan-webinar',
    date: '2026-07-16',
    start: '19:00',
    end: '20:00',
    title: 'Regan Hillyer + Vishen — "Break Through Your Money Block" (free live webinar)',
    type: 'logistics',
    location: 'Remote — Regan + Vishen deliver remotely',
    speakers: ['regan-hillyer', 'vishen'],
    vishen: true,
    status: 'confirmed',
    notes:
      'CONFIRMED via promo (13 Jul) — moved from 17 to 16 Jul. Fully remote, self-produced — Gareth’s team NOT needed. Times: 9am LA / 12pm NY / 5pm London = 7pm Tallinn. Funnel webinar for the Wealth Code Accelerator (25–26 Jul).',
  },
  {
    id: 'priestley-accel-1',
    date: '2026-07-18',
    title: 'Daniel Priestley Accelerator — day 1: Getting Oversubscribed (4h) + Upsell Landing Page Video',
    type: 'accelerator',
    location: 'Remote + streamed',
    speakers: ['daniel-priestley'],
    director: 'gareth',
    status: 'tentative',
    notes:
      'Per Gareth: remote delivery. Microsite bills it “live in-person + streamed” — confirm final format. Start time TBD. Sessions: Only Oversubscribed Businesses Make Profit / Your Capacity & Your People / Make Your Market Then Your Sales. Matches the Airtable "Science of Growing Customers" Shoots record, split Day 1/Day 2 (13 Jul). SANDWICHED per Gareth (13 Jul): also capturing the "Upsell Landing Page Video" for this intensive in this same session — the product recording and the sales video for it, shot together with the same resource while Priestley is in this environment. Only one landing-page record exists (dated Day 1), so that’s the priority day for it.',
  },
  {
    id: 'priestley-accel-2',
    date: '2026-07-19',
    title: 'Daniel Priestley Accelerator — day 2: Your 12-Month Customer Engine (4h)',
    type: 'accelerator',
    location: 'Remote + streamed',
    speakers: ['daniel-priestley'],
    director: 'gareth',
    status: 'tentative',
    notes:
      'Remote delivery per Gareth. Sessions: Three-Part Year / Short-Long-Lead Form / Telegraph Capacity / Build 12-Month Calendar live. Start time TBD. Day 2 of the Airtable "Science of Growing Customers" record split (13 Jul).',
  },

  // ================= MON 20 JUL — OPENING =================
  { id: 'jul20-reg', date: '2026-07-20', start: '09:30', end: '12:00', title: 'Registration', type: 'logistics', location: VENUE },
  {
    id: 'jul20-welcome',
    date: '2026-07-20',
    start: '11:00',
    end: '13:30',
    title: 'Welcome / Orientation by Vishen',
    type: 'stage-talk',
    location: MAIN_STAGE,
    speakers: ['vishen'],
    vishen: true,
    status: 'tentative',
    notes: 'Slot is “11–12:30 OR 12–1:30” in the detailed agenda — confirm.',
  },
  { id: 'jul20-community', date: '2026-07-20', start: '15:00', end: '16:00', title: 'Community Connections with Eric Edmeades', type: 'community', location: MAIN_STAGE, speakers: ['eric-edmeades'], notes: 'Author now attributed per 13 Jul sheet check (was unattributed).' },
  {
    id: 'jul20-fuckup',
    date: '2026-07-20',
    start: '16:00',
    end: '17:00',
    title: '“Fuck Up” Session Open Mic',
    type: 'stage-talk',
    location: MAIN_STAGE,
    speakers: ['daniel-priestley', 'vishen', 'john-lee'],
    vishen: true,
    party: true,
    cameraOps: ['jason', 'kuhan'],
    status: 'confirmed',
    notes: 'CONFIRMED happening — line-up Daniel, Vishen, John Lee. CONTENT ANGLE: Daniel Priestley is a DJ by passion (serial entrepreneur who secretly spins) — have him close the session with a short DJ set. The roving social team (Jason + Kuhan) grab it: the "the growth guy is also a DJ" reveal is a strong personal/social piece, and it sets up a lovely thread in his 14:00 interview earlier the same day. His only 20 Jul commitment before this is that interview, so he is free to lean in.',
  },
  { id: 'jul20-tribe', date: '2026-07-20', start: '17:15', end: '17:45', title: 'LEARNLIFE Parent Meeting / Tribe Meeting', type: 'community', location: `${COMMUNITY} + ${EXPERIENCE}` },
  { id: 'jul20-party', date: '2026-07-20', start: '19:00', end: '23:00', title: 'Blue Block Party', type: 'social', location: VENUE, crew: ['jason'], notes: 'Ad-hoc party filming — Jason (roving social). Alternating with Kuhan across the parties so each gets rest nights. OPPORTUNITY: Daniel Priestley (a hobby DJ, and it is his last night — he departs the 21st) is a natural fit to DJ this party; if he is up for it, it extends the afternoon open-mic DJ moment into a bigger evening social piece.' },

  // ================= TUE 21 JUL — ENTREPRENEURSHIP =================
  { id: 'jul21-priestley-1', date: '2026-07-21', start: '10:00', end: '11:00', title: 'Daniel Priestley', type: 'stage-talk', location: MAIN_STAGE, speakers: ['daniel-priestley'] },
  {
    id: 'jul21-priestley-2',
    date: '2026-07-21',
    start: '11:00',
    end: '12:00',
    title: 'Daniel Priestley + Jeremy Harbour (25min + 5)',
    type: 'stage-talk',
    location: MAIN_STAGE,
    speakers: ['daniel-priestley', 'jeremy-harbour'],
  },
  { id: 'jul21-priestley-photo', date: '2026-07-21', start: '12:10', end: '12:30', title: 'Portraits — Daniel Priestley', type: 'portrait', crew: ['karen'], speakers: ['daniel-priestley'], notes: 'Location TBD' },
  { id: 'jul21-bookclub', date: '2026-07-21', start: '12:30', end: '13:15', title: 'Book Club', type: 'community', location: VENUE },
  { id: 'jul21-vishen', date: '2026-07-21', start: '14:00', end: '15:00', title: 'Vishen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true },
  { id: 'jul21-john-lee', date: '2026-07-21', start: '15:00', end: '16:00', title: 'John Lee', type: 'stage-talk', location: MAIN_STAGE, speakers: ['john-lee'] },
  { id: 'jul21-vishen-photo', date: '2026-07-21', start: '15:15', end: '15:35', title: 'Portraits — Vishen', type: 'portrait', crew: ['meng'], speakers: ['vishen'], vishen: true, notes: 'Location TBD' },
  { id: 'jul21-johnlee-photo', date: '2026-07-21', start: '16:10', end: '16:30', title: 'Portraits — John Lee', type: 'portrait', crew: ['meng'], speakers: ['john-lee'], notes: 'Location TBD' },
  { id: 'jul21-natalie', date: '2026-07-21', start: '16:15', end: '17:00', title: 'Natalie Ellis', type: 'stage-talk', location: MAIN_STAGE, speakers: ['natalie-ellis'] },
  { id: 'jul21-sazerac', date: '2026-07-21', start: '19:30', end: '23:30', title: 'Sazerac', type: 'social', crew: ['kuhan'], notes: 'Ad-hoc party filming — Kuhan (roving social).' },

  // ================= WED 22 JUL — MANIFESTING =================
  { id: 'jul22-ja-1', date: '2026-07-22', start: '10:00', end: '11:00', title: 'Jeffrey Allen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jeffrey-allen'], notes: 'Jeffrey\'s accelerator material is captured live across his four stage sessions today (per the Overview agenda) — the separate studio accelerator recording days (25/26 Jul) were removed as redundant (13 Jul).' },
  { id: 'jul22-ja-2', date: '2026-07-22', start: '11:00', end: '12:00', title: 'Jeffrey Allen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jeffrey-allen'] },
  { id: 'jul22-ja-3', date: '2026-07-22', start: '14:00', end: '15:00', title: 'Jeffrey Allen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jeffrey-allen'] },
  { id: 'jul22-ja-4', date: '2026-07-22', start: '15:00', end: '16:00', title: 'Jeffrey Allen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jeffrey-allen'] },
  { id: 'jul22-ja-photo', date: '2026-07-22', start: '16:15', end: '16:35', title: 'Portraits — Jeffrey Allen', type: 'portrait', crew: ['mardo'], speakers: ['jeffrey-allen'], notes: 'Location TBD' },
  { id: 'jul22-regan', date: '2026-07-22', start: '16:15', end: '17:00', title: 'Regan Hillyer', type: 'stage-talk', location: MAIN_STAGE, speakers: ['regan-hillyer'] },
  { id: 'jul22-regan-photo', date: '2026-07-22', start: '17:10', end: '17:30', title: 'Portraits — Regan Hillyer', type: 'portrait', crew: ['mardo'], speakers: ['regan-hillyer'], notes: 'Location TBD. Straight after her talk.' },
  { id: 'jul22-fce-dawn', date: '2026-07-22', start: '12:45', end: '13:45', title: 'First Class Experience — Dawn Hoang', type: 'experience', location: EXPERIENCE, speakers: ['dawn-hoang'] },
  { id: 'jul22-author-dinner', date: '2026-07-22', start: '21:00', end: '00:30', title: 'Author Dinner', type: 'social' },

  // ================= THU 23 JUL — LONGEVITY =================
  {
    id: 'jul23-ong',
    date: '2026-07-23',
    start: '10:00',
    end: '11:00',
    title: 'Simon Alexander Ong (2 × 25min + 5)',
    type: 'stage-talk',
    location: MAIN_STAGE,
    speakers: ['simon-ong'],
    status: 'tentative',
    notes: 'Marked “to confirm” in agenda.',
  },
  { id: 'jul23-thurlow', date: '2026-07-23', start: '11:00', end: '12:00', title: 'Cynthia Thurlow', type: 'stage-talk', location: MAIN_STAGE, speakers: ['cynthia-thurlow'] },
  { id: 'jul23-jade', date: '2026-07-23', start: '14:00', end: '15:30', title: 'Jade Shaw (90 min)', type: 'embodiment', location: EMBODIMENT, speakers: ['jade-shaw'] },
  { id: 'jul23-brule-1', date: '2026-07-23', start: '14:00', end: '15:00', title: 'Dan Brulé (embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['dan-brule'] },
  { id: 'jul23-brule-2', date: '2026-07-23', start: '15:00', end: '16:00', title: 'Dan Brulé (embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['dan-brule'] },
  { id: 'jul23-lyon', date: '2026-07-23', start: '16:15', end: '17:00', title: 'Dr. Scott Lyon', type: 'stage-talk', location: MAIN_STAGE, speakers: ['scott-lyon'] },
  { id: 'jul23-cabaret', date: '2026-07-23', start: '21:00', end: '01:00', title: 'Midnight Cabaret VIP Party', type: 'social', crew: ['jason'], notes: 'Ad-hoc party filming — Jason (roving social).' },

  // ================= FRI 24 JUL — RELATIONSHIPS =================
  { id: 'jul24-wineland-1', date: '2026-07-24', start: '10:00', end: '11:00', title: 'John Wineland (Embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['john-wineland'] },
  { id: 'jul24-wineland-2', date: '2026-07-24', start: '11:00', end: '12:00', title: 'John Wineland (Embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['john-wineland'] },
  { id: 'jul24-peer', date: '2026-07-24', start: '14:00', end: '15:00', title: 'Marisa Peer', type: 'stage-talk', location: MAIN_STAGE, speakers: ['marisa-peer'] },
  { id: 'jul24-peer-photo', date: '2026-07-24', start: '16:10', end: '16:30', title: 'Portraits — Marisa Peer', type: 'portrait', crew: ['karen'], speakers: ['marisa-peer'], notes: 'Location TBD' },
  { id: 'jul24-krenn-1', date: '2026-07-24', start: '15:00', end: '16:00', title: 'Lorin Krenn', type: 'stage-talk', location: MAIN_STAGE, speakers: ['lorin-krenn'] },
  { id: 'jul24-krenn-2', date: '2026-07-24', start: '16:15', end: '17:00', title: 'Lorin Krenn', type: 'stage-talk', location: MAIN_STAGE, speakers: ['lorin-krenn'] },
  {
    id: 'jul24-awards',
    date: '2026-07-24',
    start: '18:00',
    end: '19:00',
    title: 'Mindvalley Awards Ceremony — FULL VIDEO TEAM (timing still TBC on source)',
    type: 'production',
    location: MAIN_STAGE,
    speakers: ['kaitlin'],
    gareth: true,
    crew: CREW_CORE,
    party: true,
    status: 'tentative',
    notes: 'Per Fisher (voice note, 13 Jul): this needs the full production team\'s focus, not passive coverage — many speakers fly in specifically for the video/photo opportunity here, and a strong asset can lift a speaker\'s fee by 10–20k. Plan wide shots + a rehearsed handheld move (reference: the Lynda piece Kuhan shot handheld) rather than one static camera. Only 1hr — crew is free from 4pm that day (Jeffrey Allen MC/assets wrap by 4). CREW CONFIRMED (13 Jul): full core team (Khairul, Nadir, Kuhan) + Gareth — they\'re all already on-site for the awards, working together, so no separate resourcing needed. Kaitlin O\'Toole hosting. Only open item is the exact timing on the source sheet (see ch-mv-awards-timing).',
  },
  { id: 'jul24-party', date: '2026-07-24', start: '19:00', end: '23:00', title: 'Black Block Party', type: 'social', crew: ['kuhan'], notes: 'Ad-hoc party filming — Kuhan (roving social).' },

  // ================= SAT 25 / SUN 26 JUL — WEEKEND =================
  {
    id: 'regan-accel-1',
    date: '2026-07-25',
    start: '17:00',
    end: '20:00',
    title: 'Regan Wealth Code Accelerator — day 1: See It & Clear It (3h) + Upsell Landing Page Video',
    type: 'accelerator',
    location: MAIN_STAGE,
    speakers: ['regan-hillyer'],
    gareth: true,
    crew: CREW_CORE,
    director: 'gareth',
    status: 'tentative',
    notes:
      'CONFIRMED 5–8pm — verified against MAIN STAGE Overview sheet (13 Jul), matches the microsite; the old detailed-agenda 9am–4pm reading is stale. Session plan: Two Wealth Identities / Financial Frequency & Set Point / Inherited Money Ceiling. SANDWICHED per Gareth (13 Jul): also capturing the "Upsell Landing Page Video" for the Wealth Code Accelerator in this same session — product + sales video shot together while Regan and the crew are already set up. Only one landing-page record exists (dated Day 1).',
  },
  {
    id: 'jul25-eric-allday',
    date: '2026-07-25',
    start: '09:00',
    end: '16:00',
    title: 'Eric Edmeades — all-day stage commitment (NEW, 9am–4pm)',
    type: 'stage-talk',
    location: MAIN_STAGE,
    speakers: ['eric-edmeades'],
    status: 'tentative',
    notes:
      'NEW as of 13 Jul sheet check — replaces the old single-hour tentative slot. Runs parallel to Regan’s accelerator. No studio shoots are booked against Eric this day, so no clash — but he is unavailable for anything else on the 25th.',
  },
  { id: 'jul25-opening-party', date: '2026-07-25', start: '20:30', end: '02:00', title: 'Opening Party — Marvelous Wonderland', type: 'social', crew: ['jason'], notes: 'Ad-hoc party filming — Jason (roving social).' },
  {
    id: 'regan-accel-2',
    date: '2026-07-26',
    start: '17:00',
    end: '21:00',
    title: 'Regan Wealth Code Accelerator — day 2: Become It & Activate It (4h)',
    type: 'accelerator',
    location: MAIN_STAGE,
    speakers: ['regan-hillyer'],
    gareth: true,
    crew: CREW_CORE,
    director: 'gareth',
    status: 'tentative',
    notes:
      'CONFIRMED 5–9pm — verified against MAIN STAGE Overview sheet (13 Jul). Regan departs 27 Jul per Speaker DATES, so this 9pm finish sits safely inside her window (the previous note saying she left on the 26th was wrong). Sessions: Blocking the Receiving / Wealth Formula / Money + Meaning Fusion / Identity Installation.',
  },

  // ================= MON 27 JUL — HEALING =================
  { id: 'jul27-reg', date: '2026-07-27', start: '08:30', end: '10:00', title: 'Registration (week 2)', type: 'logistics', location: VENUE },
  { id: 'jul27-shy-1', date: '2026-07-27', start: '10:00', end: '11:00', title: 'Shi Heng Yi (Embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['shi-heng-yi'] },
  { id: 'jul27-shy-2', date: '2026-07-27', start: '11:00', end: '12:00', title: 'Shi Heng Yi (Embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['shi-heng-yi'] },
  { id: 'jul27-krenn-men', date: '2026-07-27', start: '11:00', end: '12:00', title: 'Lorin Krenn (men only)', type: 'experience', location: EXPERIENCE, speakers: ['lorin-krenn'] },
  { id: 'jul27-shy-photo', date: '2026-07-27', start: '12:10', end: '12:30', title: 'Portraits — Shi Heng Yi', type: 'portrait', crew: ['karen'], speakers: ['shi-heng-yi'], notes: 'Location TBD' },
  { id: 'jul27-newbie', date: '2026-07-27', start: '13:00', end: '14:00', title: 'Newbie Orientation', type: 'logistics', location: MAIN_STAGE },
  { id: 'jul27-shy-fireside', date: '2026-07-27', start: '14:00', end: '15:00', title: 'Shi Heng Yi Fireside with Vishen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['shi-heng-yi', 'vishen'], vishen: true },
  { id: 'jul27-krenn-women', date: '2026-07-27', start: '14:00', end: '15:00', title: 'Lorin Krenn (women only)', type: 'experience', location: EXPERIENCE, speakers: ['lorin-krenn'] },
  { id: 'jul27-elrod', date: '2026-07-27', start: '15:00', end: '16:00', title: 'Hal Elrod', type: 'stage-talk', location: MAIN_STAGE, speakers: ['hal-elrod'] },
  { id: 'jul27-sheleana-wineland', date: '2026-07-27', start: '16:15', end: '17:00', title: 'Sheleana Aiyana & John Wineland', type: 'stage-talk', location: MAIN_STAGE, speakers: ['sheleana-aiyana', 'john-wineland'] },
  { id: 'jul27-party', date: '2026-07-27', start: '19:00', end: '23:00', title: 'White Block Party', type: 'social', crew: ['kuhan'], notes: 'Ad-hoc party filming — Kuhan (roving social).' },

  // ================= TUE 28 JUL — EMBODIMENT =================
  { id: 'jul28-zen', date: '2026-07-28', start: '10:00', end: '11:00', title: 'Zen Samurai (Embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['zen-samurai'] },
  { id: 'jul28-dawn', date: '2026-07-28', start: '11:00', end: '12:00', title: 'Dawn Hoang (Embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['dawn-hoang'] },
  { id: 'jul28-dawn-photo', date: '2026-07-28', start: '12:10', end: '12:30', title: 'Portraits — Dawn Hoang', type: 'portrait', crew: ['mardo'], speakers: ['dawn-hoang'], notes: 'Location TBD' },
  { id: 'jul28-sheleana', date: '2026-07-28', start: '14:00', end: '15:00', title: 'Sheleana Aiyana', type: 'stage-talk', location: MAIN_STAGE, speakers: ['sheleana-aiyana'] },
  { id: 'jul28-sheleana-photo', date: '2026-07-28', start: '15:10', end: '15:30', title: 'Portraits — Sheleana Aiyana', type: 'portrait', crew: ['mardo'], speakers: ['sheleana-aiyana'], notes: 'Location TBD' },
  { id: 'jul28-brighten', date: '2026-07-28', start: '15:00', end: '16:00', title: 'Dr. Jolene Brighten', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jolene-brighten'] },
  { id: 'jul28-jamie', date: '2026-07-28', start: '16:15', end: '17:00', title: 'Jamie Sea', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jamie-sea'], notes: 'Not on Speaker DATES — window unknown.' },
  { id: 'jul28-sazerac', date: '2026-07-28', start: '19:30', end: '00:00', title: 'Sazerac', type: 'social', crew: ['jason'], notes: 'Ad-hoc party filming — Jason (roving social).' },

  // ================= WED 29 JUL — INFLUENCE & WEALTH =================
  { id: 'jul29-eric', date: '2026-07-29', start: '10:00', end: '11:00', title: 'Eric Edmeades', type: 'stage-talk', location: MAIN_STAGE, speakers: ['eric-edmeades'] },
  { id: 'jul29-eric-photo', date: '2026-07-29', start: '11:10', end: '11:30', title: 'Portraits — Eric Edmeades', type: 'portrait', crew: ['mardo'], speakers: ['eric-edmeades'], notes: 'Location TBD' },
  { id: 'jul29-nick', date: '2026-07-29', start: '11:00', end: '12:00', title: 'Nick Santonastasso', type: 'stage-talk', location: MAIN_STAGE, speakers: ['nick-santonastasso'] },
  { id: 'jul29-nick-photo', date: '2026-07-29', start: '12:10', end: '12:30', title: 'Portraits — Nick Santonastasso', type: 'portrait', crew: ['mardo'], speakers: ['nick-santonastasso'], notes: 'Location TBD' },
  { id: 'jul29-wendt', date: '2026-07-29', start: '14:00', end: '15:00', title: 'Maria Wendt', type: 'stage-talk', location: MAIN_STAGE, speakers: ['maria-wendt'], notes: 'Not on Speaker DATES — window unknown.' },
  { id: 'jul29-mckenna', date: '2026-07-29', start: '15:00', end: '16:00', title: 'Paul McKenna', type: 'stage-talk', location: MAIN_STAGE, speakers: ['paul-mckenna'] },
  { id: 'jul29-mckenna-photo', date: '2026-07-29', start: '16:10', end: '16:30', title: 'Portraits — Paul McKenna', type: 'portrait', crew: ['mardo'], speakers: ['paul-mckenna'], authorConfirmed: true, notes: 'Location TBD. Confirmed by author (Paul McKenna, email 14 Jul).' },
  { id: 'jul29-vishen', date: '2026-07-29', start: '16:15', end: '17:00', title: 'Vishen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true },
  { id: 'jul29-fce-dawn', date: '2026-07-29', start: '16:15', end: '17:15', title: 'First Class Experience — Dawn Hoang', type: 'experience', location: EXPERIENCE, speakers: ['dawn-hoang'] },
  { id: 'jul29-author-dinner', date: '2026-07-29', start: '21:00', end: '00:30', title: 'Author Dinner', type: 'social' },

  // ================= THU 30 JUL — REINVENTION =================
  { id: 'jul30-kwik-1', date: '2026-07-30', start: '10:00', end: '11:00', title: 'Jim Kwik — Accelerator (stage, part 1)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jim-kwik'], notes: 'Jim\'s accelerator is delivered live on the Main Stage on the 30th (per the Google Sheet) — this and part 2 are the accelerator itself, captured live by the stage team. The Vishen fireside at 15:00 is separate.' },
  { id: 'jul30-pringle', date: '2026-07-30', start: '10:00', end: '11:30', title: 'Rachel Pringle (Embodiment, 90 min)', type: 'embodiment', location: EMBODIMENT, speakers: ['rachel-pringle'] },
  { id: 'jul30-kwik-2', date: '2026-07-30', start: '11:00', end: '12:00', title: 'Jim Kwik — Accelerator (stage, part 2)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jim-kwik'] },
  { id: 'jul30-kwik-3', date: '2026-07-30', start: '14:00', end: '15:00', title: 'Jim Kwik (stage)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jim-kwik'], notes: 'Per the MVU Overview sheet, the 2–3pm Main Stage slot is Jim Kwik solo. Corrected 14 Jul — the old "Maya 25min + Kristina? 25min" was wrong: Maya is in the Small Hall at this time (see jul30-maya-smallhall), and Kristina is not listed in this slot.' },
  { id: 'jul30-maya-smallhall', date: '2026-07-30', start: '14:00', end: '15:00', title: 'Maya Raichoora — Small Hall talk (20 min)', type: 'stage-talk', location: COMMUNITY, speakers: ['maya-raichoora'], notes: 'From the MVU Overview sheet (Small Hall tab, per Gareth): the 2–3pm slot is Maya Raichoora 20 min + Maha Rouabhia 20 min (shared hour). Added to Maya\'s schedule 14 Jul.' },
  { id: 'jul30-kwik-fireside', date: '2026-07-30', start: '15:00', end: '16:00', title: 'Vishen + Jim Kwik Fireside', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jim-kwik', 'vishen'], vishen: true, notes: 'Part of Jim\'s stage event on the 30th — separate from his Superbrain masterclass (the standalone studio session with Vishen on the 29th). Both feature Vishen but they are different deliverables.' },
  { id: 'jul30-vishen', date: '2026-07-30', start: '16:15', end: '17:00', title: 'Vishen (swappable)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true, status: 'tentative' },
  { id: 'jul30-vishen-photo', date: '2026-07-30', start: '17:15', end: '17:35', title: 'Portraits — Vishen', type: 'portrait', crew: ['mardo'], speakers: ['vishen'], vishen: true, notes: 'Location TBD' },
  { id: 'jul30-vip', date: '2026-07-30', start: '21:00', end: '01:00', title: 'Summer By The Bay VIP Party', type: 'social', crew: ['kuhan'], notes: 'Ad-hoc party filming — Kuhan (roving social).' },

  // ================= FRI 31 JUL — CLOSING =================
  { id: 'jul31-grant', date: '2026-07-31', start: '10:00', end: '11:00', title: 'Robert Grant', type: 'stage-talk', location: MAIN_STAGE, speakers: ['robert-grant'], status: 'placeholder', notes: 'Marked “Robert Grant?” in agenda.' },
  { id: 'jul31-vishen-content', date: '2026-07-31', start: '11:00', end: '12:00', title: 'Vishen (content only)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true },
  { id: 'jul31-vishen-sales', date: '2026-07-31', start: '14:00', end: '15:00', title: 'Vishen (potential sales)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true, status: 'tentative' },
  { id: 'jul31-closing', date: '2026-07-31', start: '15:00', end: '16:00', title: 'Closing Ceremony — Youth Performances + Valerija Ribbon Workshop', type: 'stage-talk', location: MAIN_STAGE, vishen: true },
  { id: 'jul31-sanctum', date: '2026-07-31', start: '16:15', end: '19:00', title: 'Sanctum?', type: 'experience', status: 'placeholder' },
  { id: 'jul31-party', date: '2026-07-31', start: '19:00', end: '23:00', title: 'Estonia Block Party', type: 'social', crew: ['jason'], notes: 'Ad-hoc party filming — Jason (roving social).' },

  // ================= SAT 1 AUG =================
  {
    id: 'vishen-ai-accel',
    date: '2026-08-01',
    start: '11:00',
    end: '18:00',
    title: 'Vishen AI Accelerator — “Become a World Class Expert and Authority” + Upsell Landing Page Video',
    type: 'accelerator',
    location: MAIN_STAGE,
    speakers: ['vishen'],
    vishen: true,
    gareth: true,
    crew: ['khairul', 'kuhan'],
    director: 'gareth',
    notes:
      'SANDWICHED per Gareth (13 Jul): also capturing the "Upsell Landing Page Video" for this accelerator in the same session — Still Frame\'s live capture covers the product recording, our crew grabs the sales-video footage alongside it while Vishen and the environment are already set up. FIXED (data audit, 13 Jul): crew was all 3 (khairul+nadir+kuhan), which silently conflicted with Nadir\'s parallel unit-2 studio shoots this same window (assets-rachel-membership, int-maya) — narrowed to unit 1 (khairul+kuhan) so Nadir stays free for the studio, matching those events\' existing notes.',
  },
  { id: 'aug1-closing-party', date: '2026-08-01', start: '20:30', end: '02:00', title: 'Closing Party', type: 'social', crew: ['kuhan'], notes: 'Ad-hoc party filming — Kuhan (roving social).' },
  { id: 'aug1-soiree', date: '2026-08-01', start: '19:00', end: '23:00', title: 'Nordic Summer Soiree', type: 'social', status: 'tentative', notes: 'From overview tab — may be the same event as Closing Party. Confirm.' },
]

// One entry per event day (20 Jul – 1 Aug) for the roving ad-hoc social capture +
// daily stage-talk snippets — see src/data/social.ts for the full brief list.
const SOCIAL_MEDIA_EVENTS: ScheduleEvent[] = DAYS.filter(
  (d) => d.date >= '2026-07-20' && d.date <= '2026-08-01',
).map((d) => ({
  id: `social-media-${d.date}`,
  date: d.date,
  title: 'Daily social media capture (ad-hoc + stage snippets)',
  type: 'social-media',
  location: 'Roaming — across venue',
  cameraOps: ['jason', 'kuhan'],
  notes: 'Roving social team = Jason + Kuhan (ad-hoc, all day). They tag-team so each gets rolling meal/refreshment breaks and neither is on camera the whole day — one roams while the other rests/edits. Collecting toward the daily ad-hoc concepts + stage-talk snippets. See the Social tab.',
}))

export const EVENTS: ScheduleEvent[] = [...EVENT_ITEMS, ...SOCIAL_MEDIA_EVENTS, ...PRODUCTION_EVENTS]

export const CONFLICTS: Conflict[] = [
  {
    id: 'c-regan-accel-time',
    severity: 'high',
    title: 'Regan Accelerator timing: microsite (5–8pm / 5–9pm) vs detailed agenda (9am–4pm)',
    detail:
      'Customer-facing microsite sells evenings; internal detailed agenda says daytime. Day 2 running to 9pm also collides with her listed departure day (26 Jul). Resolve before crew scheduling.',
  },
  {
    id: 'c-priestley-format',
    severity: 'low',
    title: 'Priestley Accelerator format: remote (per Gareth) vs “live in-person + streamed” (microsite)',
    detail:
      'Gareth says remote delivery, resolving the old window conflict (his Speaker DATES arrival is 20 Jul). Microsite still bills in-person — confirm final format and streaming setup for 18–19 Jul.',
  },
  {
    id: 'c-slate-proposed',
    severity: 'high',
    title: 'The whole production slate is a PROPOSAL — nothing confirmed with authors yet',
    detail:
      '45 slate items scheduled 2 Jul against speaker windows and event commitments. Every one is tentative until author relations confirms each author’s time. Podcasts/interviews were originally kept off NO INTERVIEWS days (20, 23, 24, 27, 28, 31 Jul) — confirmed via Eni (13 Jul) that rule only means no stage/press interviews, so those days are open for our studio capture too.',
  },
  {
    id: 'c-two-units',
    severity: 'medium',
    title: 'Two-unit model vs the Creative column — is Kuhan on studio camera or purely editorial?',
    detail:
      'The app runs a two-unit model (unit 1 = Khairul + Kuhan, unit 2 = Nadir) so shoots can run in parallel on 22, 26, 29, 30 Jul + 1–2 Aug. BUT the Shoots Airtable "Creative" column (audited 13 Jul) lists only Gareth + Nadir + Khairul on the studio shoots — Kuhan appears there as an EDITOR (recaps + social), not a studio camera op. These disagree. If Kuhan is editorial-only, the two-unit parallelism needs a different second shooter (or shoots go sequential). If he does shoot, add him to the Creative column. Decide before locking — it changes both crew blocking and whether parallel days are staffable. His scheduler currently still shows the studio shoots via the crew model, pending this call.',
  },
  {
    id: 'c-podcast-90',
    severity: 'medium',
    title: 'Podcasts now booked at 90 min — 8 don\'t fit on the stacked days',
    detail:
      'New policy (13 Jul): book podcasts for 1h30 (wrap early if it flows). Applied to the 10 that fit — John Lee, Natalie, both Chiara episodes, Dan Brulé (pushed Shi\'s interview 15 min), Hal Elrod, Jamie Sea + Marisa Ep3 (run to ~8pm on 28), Marisa Ep1. CAN\'T fit at 90 (kept shorter): 25 Jul (Jeffrey Allen + Wineland stacked before Regan\'s 5pm accelerator); 27 Jul (Shi + Marisa Ep2 + Maya interview + Hal); 29 Jul (Jolene + Lorin — already the broken Gareth chain); 30 Jul (Maria + Nick, back-to-back before Nick\'s interview). Root cause: those guests are only in town that day, so their episodes can\'t spread out. To give them 90 too, decide per day: fewer episodes, or accept 60, or Vishen does fewer.',
  },
  {
    id: 'c-vishen-load',
    severity: 'medium',
    title: 'Vishen’s shoot load is heavy on 29–30 Jul',
    detail:
      '29 Jul: Superbrain masterclass (3h) + 2 podcasts + 16:15 stage slot. 30 Jul: 3 podcasts + Kwik fireside + swappable stage slot + portraits. Consider dropping a podcast episode to Aug 2 or cutting runtime.',
  },
  {
    id: 'c-gareth-interview-load',
    severity: 'medium',
    title: 'Gareth double-booked on 29 Jul — his reassigned interviews collide with shoots he directs',
    detail:
      'AUDIT (13 Jul): the prioritization pass handed Gareth 9 of Kaitlin\'s interviews; some overlapped big shoots he\'s also on. RESOLVED since: 25 Jul (Dan Brulé) cleared when Jeffrey\'s studio accelerator was removed; 1 Aug (Maya) moved to 27 Jul. STILL OPEN — 29 Jul: Jolene interview (14:30) and Zen Takai interview (15:30) chain-overlap the Lorin podcast (15:00), on top of the Kwik masterclass + Jolene podcast (five Gareth commitments 10am-4:15pm). Needs Gareth\'s call: hand Jolene/Zen back to Kaitlin/Eni, or re-space. Recommendation: hand them to a host, since that\'s what freed his time in the first place.',
  },
  {
    id: 'c-wineland-27',
    severity: 'medium',
    title: 'John Wineland on the 27 Jul stage panel — but his window ends 26 Jul',
    detail:
      'AUDIT (13 Jul): the app has a "Sheleana Aiyana & John Wineland" panel on 27 Jul (16:15), but Wineland\'s Speaker DATES window is 20-26 Jul — he departs before it. His only other stage day is 24 Jul (Embodiment), so the 27 Jul pairing looks like an authoring error (likely Sheleana-only, or a wrong date/partner). Confirm with author relations before it locks; don\'t assume he\'s on it.',
  },
  {
    id: 'c-departure-day-shoots',
    severity: 'medium',
    title: 'Six shoots sit on author departure days',
    detail:
      'Priestley + John Lee (22 Jul), Jeffrey Allen accel day 2 + Wineland (26 Jul), Jolene Brighten (29 Jul), Rachel Pringle (1 Aug), Jim Kwik (2 Aug). All need flight times confirmed before locking.',
  },
  {
    id: 'c-jul31-crunch',
    severity: 'medium',
    title: '31 Jul is now the heaviest studio day (2 Aug cleared for pack/travel)',
    detail:
      'To keep the studio empty on 2 Aug (pack day), the wrap-day slate moved onto 31 Jul + 1 Aug. 31 Jul now runs both units ~10:00–15:15 (Marisa masterclass on unit 1; Lee interview + assets + Marisa assets on unit 2) — on Closing Ceremony day, but nothing now runs into it. None need Vishen (he is on stage). Eric Edmeades\' "One Talk Workshop" was pulled from this day entirely (13 Jul) — it\'s actually 7 Aug, outside the MVU sprint, and had been scheduled here in error.',
  },
  {
    id: 'c-kwik-window',
    severity: 'medium',
    title: 'Jim Kwik compression',
    detail:
      'On the ground Jul 28–Aug 2 only. Speaks 3 blocks + fireside + portraits on Jul 30. Superbrain masterclass + accelerator recording must fit around it.',
  },
  {
    id: 'c-photo-locations',
    severity: 'medium',
    title: 'All 13 portrait sessions have no location',
    detail: 'PHOTO ONLY Agenda has an empty Location column throughout.',
  },
  {
    id: 'c-no-windows',
    severity: 'low',
    title: 'Speakers on agenda but missing from Speaker DATES',
    detail: 'Hal Elrod, Maria Wendt, Jamie Sea, Jeremy Harbour, Robert Grant, Zen Samurai, Johan Urb, Vanja Moves, Valerija.',
  },
  {
    id: 'c-author-relations',
    severity: 'low',
    title: 'Author-relations roster incomplete',
    detail: 'Illiana and Mireille named; remaining team members to be added.',
  },
]

export const ACTIONS: ActionItem[] = [
  // ---- ⛔ Physically impossible as the data stands ----
  // ---- ⚠️ Producer proposals awaiting Gareth's yes/no ----
  {
    id: 'p-marisa-podcast-count',
    kind: 'proposal',
    owner: 'gareth',
    title: 'Marisa Peer’s book podcast — 3 episodes pencilled in-house (stretch 4), else external studio',
    detail:
      'Marisa’s team (Elise McDonald) wants studio time for her "Your Mind, Your Rules" book podcast. Realist capacity: the studio is one room and both crew units are heavily booked. Marisa is free 21–23, 26–30 Jul, but studio+crew gaps are thin. We can comfortably facilitate 3 episodes (stretch 4). PENCILLED IN (13 Jul) as placeholders: 27 Jul 11–12 + 2–3 (most open studio day), plus 28 Jul 5:30–6:30pm — see pod-marisa-own-1/2/3. No guest/topic confirmed yet. If she wants 5+ episodes, there is a real gap → recommend an external Tallinn studio (we have contacts). Reply to her team with the number once confirmed.',
    people: ['marisa-peer'],
  },

  // ---- 📋 Author-relations chase list ----
  {
    id: 'ch-flights',
    kind: 'chase',
    owner: 'author-relations',
    title: 'Flight times for the six departure-day shoots',
    detail:
      'Shoots are scheduled on the departure day of: Daniel Priestley + John Lee (22 Jul), John Wineland + Jeffrey Allen accel day 2 (26 Jul), Dr. Jolene Brighten (29 Jul), Rachel Pringle (1 Aug), Jim Kwik (2 Aug). Exact flight times decide whether each slot survives.',
    due: '2026-07-11',
    people: ['daniel-priestley', 'john-lee', 'john-wineland', 'jeffrey-allen', 'jolene-brighten', 'rachel-pringle', 'jim-kwik'],
  },
  {
    id: 'ch-windows',
    kind: 'chase',
    owner: 'author-relations',
    title: 'Missing windows — mostly resolved; only Jeremy Harbour left',
    detail:
      'UPDATE: Speaker DATES now has Hal Elrod (24–29), Maria Wendt (27–30) and Jamie Sea (25–30) — Maria & Jamie confirm their 30 Jul slots work; Hal creates a new conflict (see above). Still missing: Jeremy Harbour (Priestley’s 21 Jul stage co-presenter) — no window on file.',
    due: '2026-07-11',
    people: ['jeremy-harbour'],
  },
  {
    id: 'ch-shy-landing',
    kind: 'chase',
    owner: 'author-relations',
    title: 'Shi Heng Yi landing time on 26 Jul (low risk now)',
    detail: 'His podcast moved to 27 Jul, so the arrival-day risk is largely gone. Only his Kaitlin interview stays on arrival day (26 Jul, 15:15) — an afternoon slot, so almost certainly fine, but worth a glance at his landing time.',
    due: '2026-07-16',
    people: ['shi-heng-yi'],
  },
  {
    id: 'ch-regan-flight',
    kind: 'chase',
    owner: 'author-relations',
    title: 'Regan’s departure flight on 26 Jul — accelerator now confirmed to run 5–9pm',
    detail:
      'Main Stage sheet confirms her accelerator day 2 is 5–9pm on her departure day. Confirm her actual flight time — a 9pm finish only works if she flies very late or the next morning.',
    due: '2026-07-14',
    people: ['regan-hillyer'],
  },
  {
    id: 'ch-mv-awards-timing',
    kind: 'chase',
    owner: 'production',
    title: 'Mindvalley Awards timing still TBC on the source sheet',
    detail: 'Answered by Fisher (13 Jul): yes, needs our full crew — timing itself just hasn\'t been locked on the Main Stage sheet yet. Confirm the actual 6–7pm slot once the source updates.',
    due: '2026-07-20',
  },
  {
    id: 'ch-locations',
    kind: 'chase',
    owner: 'production',
    title: 'Lock remaining locations: portraits + any on-venue capture rooms',
    detail:
      'RESOLVED for premium productions: podcasts, masterclasses and author interviews shoot at Energiakeskus Studio, Tallinn. Still open: locations for the 13 portrait sessions (venue-side, with Meng/Karen/Mardo) and any Kultuurikatel rooms needed for event-day pickups.',
    due: '2026-07-13',
  },
  {
    id: 'a-iris-vip-passes',
    kind: 'chase',
    owner: 'author-relations',
    title: 'Issue 2 VIP/Speaker passes for Iris Wagner + assistant, starting 27 Jul',
    detail: 'Her arrival moved up to Mon 27 Jul (from the studio-time-only window) since she\'s now speaking on 30 Jul. Needs 2 passes from day one, not just for her talk day.',
    due: '2026-07-24',
    people: ['iris-wagner'],
  },
  {
    id: 'a-vishen-intro-iris',
    kind: 'chase',
    owner: 'gareth',
    title: 'Confirm whether Vishen attends + introduces Iris\'s 30 Jul talk',
    detail: 'Iris has asked Vishen directly to attend her Community Stage talk (30 Jul, 11am) and introduce her if appropriate. Awaiting his yes/no.',
    due: '2026-07-24',
    people: ['vishen', 'iris-wagner'],
  },
  {
    id: 'a-iris-social-support',
    kind: 'chase',
    owner: 'gareth',
    title: 'Confirm social media support for Iris\'s talk + the Legacy Project',
    detail: 'Per the fall proposal Iris references, Mindvalley owes social support around both her presentation and the Legacy Project. She\'s asked for confirmation of how this will be handled — still open.',
    due: '2026-07-24',
    people: ['iris-wagner'],
  },
  {
    id: 'a-vishen-window-legacy',
    kind: 'chase',
    owner: 'author-relations',
    title: 'Confirm Vishen (+ Hayden & Eve) availability for Day 3 of the legacy shoot (5 Aug)',
    detail:
      'Vishen\'s tracked window currently ends 2 Aug (MVU wrap). Iris wants Hayden & Eve in for a grandparents "Ask Me Anything" on Day 3 (5 Aug) — needs Vishen to confirm the kids (and himself, if joining) are actually around that day.',
    due: '2026-07-27',
    people: ['vishen', 'hayden-lakhiani', 'eve-lakhiani'],
  },
  {
    id: 'a-kaitlin-hosting-schedule',
    kind: 'chase',
    owner: 'author-relations',
    title: 'Waiting on Eni for Kaitlin\'s hosting-day schedule',
    detail:
      'Per Eni\'s briefing (13 Jul): Kaitlin is at MVU 18 Jul-3 Aug, hosting ~6 days (roughly 3/week, 9:30am-5pm + some author dinners). Eni manages that schedule and hasn\'t shared it yet — it\'s the anchor everything else maps onto. Once we have it, batch interviews right after she wraps hosting (she\'s already hair/makeup ready) instead of the current one-per-day spread across the sprint.',
    due: '2026-07-16',
    people: ['kaitlin'],
  },
  {
    id: 'p-kaitlin-batching',
    kind: 'proposal',
    owner: 'production',
    title: 'Kaitlin\'s interviews batched into dense days (v1 — nudge to hosting days once Eni confirms)',
    detail:
      'SCHEDULED (13 Jul) per Gareth\'s go-ahead, using author windows + Kaitlin\'s stated preference (batch 3-4/day, right after she wraps, already hair/makeup ready). Her 10 interviews now sit across 5 days instead of 7: WEEK 1 consolidated to two batch days — 21 Jul (Jeffrey Allen, John Lee, Jade Shaw, Regan Hillyer) and 26 Jul (Eric Edmeades, Marisa Peer, Shi Heng Yi); moves: John Lee 22→21, Marisa 25→26. WEEK 2 left one-per-day (Paul McKenna 30, Lee Holden 31, Rachel Pringle 1 Aug) — consolidating those would overload Nadir (sole unit-2 operator) on already-dense days. Two open caveats: (1) the John Lee + Marisa moves assume they\'re free on the new day (their windows cover it, no clashing events) — confirm with author relations; (2) final slot times will nudge to sit right after Kaitlin\'s actual hosting blocks once Eni sends her hosting-day schedule (a-kaitlin-hosting-schedule).',
    due: '2026-07-18',
    people: ['kaitlin'],
  },
  {
    id: 'ch-marisha-priority-final',
    kind: 'chase',
    owner: 'author-relations',
    title: 'Author wishlist priority rankings still being finalized with Marisha',
    detail:
      'Per Eni (13 Jul): the Priority Ranking field on Kaitlin\'s interviews (used to sequence the batching plan) is provisional — Marisha is still finalizing the author wishlist. Re-check before locking the final batched schedule.',
    due: '2026-07-20',
  },
]

export const BACKLOG: BacklogItem[] = [
  { id: 'b-iris-podcast', title: 'Scaling Wisdom Podcast: Iris Wagner & Vishen — preserving personal legacy in the age of AI', format: 'podcast', speakers: ['iris-wagner', 'vishen'], constraint: 'Iris raised this in her 13 Jul brief while she\'s in Tallinn for the Memoirs Productions shoot (27 Jul–6 Aug) — no date set yet.' },
  { id: 'b-priestley-podcast', title: 'Scaling Wisdom Podcast: Daniel Priestley & Vishen', format: 'podcast', speakers: ['daniel-priestley', 'vishen'], constraint: 'RECORD IN LONDON — date TBC. Pulled off the Tallinn sprint (13 Jul) so it no longer collides with his 21 Jul departure; book once a London date is set.' },
  { id: 'b-accel-rec-priestley', title: 'Accelerator capture — Daniel Priestley (remote, 18–19 Jul)', format: 'accelerator-recording', speakers: ['daniel-priestley'], constraint: 'Remote delivery — capture is stream-record. Confirm who owns the recording chain (us vs Still Frame vs Zoom cloud).' },
  { id: 'b-accel-rec-regan', title: 'Accelerator capture — Regan Wealth Code (25–26 Jul, live)', format: 'accelerator-recording', speakers: ['regan-hillyer'], constraint: 'Live capture with Still Frame. Timing conflict (evenings vs 9–4) must resolve first.' },
  { id: 'b-accel-rec-vishen', title: 'Accelerator capture — Vishen AI Accelerator (1 Aug, 11–6)', format: 'accelerator-recording', speakers: ['vishen'], constraint: 'Live capture with Still Frame on the Main Stage.' },
  { id: 'b-social', title: 'Social media content — key authors', format: 'social', constraint: 'Not yet itemised in the Shoots Airtable. Opportunistic capture around stage days, portraits and shoots — needs a shot list.' },
  { id: 'b-no-items', title: 'No slate items exist for Cynthia Thurlow, Scott Lyon, Simon Ong, Lorin Krenn (interview), Natalie Ellis (interview), Kristina, Fumiko', format: 'social', constraint: 'Deliberate, or gaps? Cheap to add interviews while they are on site.' },
]
