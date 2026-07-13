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
    title: 'Daniel Priestley Accelerator — day 1: Getting Oversubscribed (4h)',
    type: 'accelerator',
    location: 'Remote + streamed',
    speakers: ['daniel-priestley'],
    status: 'tentative',
    notes:
      'Per Gareth: remote delivery. Microsite bills it “live in-person + streamed” — confirm final format. Start time TBD. Sessions: Only Oversubscribed Businesses Make Profit / Your Capacity & Your People / Make Your Market Then Your Sales.',
  },
  {
    id: 'priestley-accel-2',
    date: '2026-07-19',
    title: 'Daniel Priestley Accelerator — day 2: Your 12-Month Customer Engine (4h)',
    type: 'accelerator',
    location: 'Remote + streamed',
    speakers: ['daniel-priestley'],
    status: 'tentative',
    notes:
      'Remote delivery per Gareth. Sessions: Three-Part Year / Short-Long-Lead Form / Telegraph Capacity / Build 12-Month Calendar live. Start time TBD.',
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
    status: 'tentative',
    notes: 'Line-up “Daniel, Vishen, John Lee?” — confirm.',
  },
  { id: 'jul20-tribe', date: '2026-07-20', start: '17:15', end: '17:45', title: 'LEARNLIFE Parent Meeting / Tribe Meeting', type: 'community', location: `${COMMUNITY} + ${EXPERIENCE}` },
  { id: 'jul20-party', date: '2026-07-20', start: '19:00', end: '23:00', title: 'Blue Block Party', type: 'social', location: VENUE },

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
  { id: 'jul21-sazerac', date: '2026-07-21', start: '19:30', end: '23:30', title: 'Sazerac', type: 'social' },

  // ================= WED 22 JUL — MANIFESTING =================
  { id: 'jul22-ja-1', date: '2026-07-22', start: '10:00', end: '11:00', title: 'Jeffrey Allen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jeffrey-allen'] },
  { id: 'jul22-ja-2', date: '2026-07-22', start: '11:00', end: '12:00', title: 'Jeffrey Allen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jeffrey-allen'] },
  { id: 'jul22-fce-dawn', date: '2026-07-22', start: '12:45', end: '13:45', title: 'First Class Experience — Dawn Hoang', type: 'experience', location: EXPERIENCE, speakers: ['dawn-hoang'] },
  { id: 'jul22-ja-3', date: '2026-07-22', start: '14:00', end: '15:00', title: 'Jeffrey Allen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jeffrey-allen'] },
  { id: 'jul22-ja-4', date: '2026-07-22', start: '15:00', end: '16:00', title: 'Jeffrey Allen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jeffrey-allen'] },
  { id: 'jul22-ja-photo', date: '2026-07-22', start: '16:15', end: '16:35', title: 'Portraits — Jeffrey Allen', type: 'portrait', crew: ['mardo'], speakers: ['jeffrey-allen'], notes: 'Location TBD' },
  { id: 'jul22-regan', date: '2026-07-22', start: '16:15', end: '17:00', title: 'Regan Hillyer', type: 'stage-talk', location: MAIN_STAGE, speakers: ['regan-hillyer'] },
  { id: 'jul22-regan-photo', date: '2026-07-22', start: '17:10', end: '17:30', title: 'Portraits — Regan Hillyer', type: 'portrait', crew: ['mardo'], speakers: ['regan-hillyer'], notes: 'Location TBD. Straight after her talk.' },
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
  { id: 'jul23-jade', date: '2026-07-23', start: '14:00', end: '15:30', title: 'Jade Shaw (90 min)', type: 'embodiment', location: EMBODIMENT, speakers: ['jade-shaw'], status: 'conflict', notes: 'Her Speaker DATES window is Jul 21 only — agenda has her Jul 23.' },
  { id: 'jul23-brule-1', date: '2026-07-23', start: '14:00', end: '15:00', title: 'Dan Brulé (embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['dan-brule'] },
  { id: 'jul23-brule-2', date: '2026-07-23', start: '15:00', end: '16:00', title: 'Dan Brulé (embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['dan-brule'] },
  { id: 'jul23-lyon', date: '2026-07-23', start: '16:15', end: '17:00', title: 'Dr. Scott Lyon', type: 'stage-talk', location: MAIN_STAGE, speakers: ['scott-lyon'] },
  { id: 'jul23-cabaret', date: '2026-07-23', start: '21:00', end: '01:00', title: 'Midnight Cabaret VIP Party', type: 'social' },

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
    title: 'Mindvalley Awards (NEW — timing TBC)',
    type: 'social',
    location: MAIN_STAGE,
    status: 'tentative',
    notes: 'NEW event, added to sheet since last check (13 Jul) — timing itself marked TBC on the source. Worth confirming whether this needs any capture.',
  },
  { id: 'jul24-party', date: '2026-07-24', start: '19:00', end: '23:00', title: 'Black Block Party', type: 'social' },

  // ================= SAT 25 / SUN 26 JUL — WEEKEND =================
  {
    id: 'regan-accel-1',
    date: '2026-07-25',
    start: '17:00',
    end: '20:00',
    title: 'Regan Wealth Code Accelerator — day 1: See It & Clear It (3h)',
    type: 'accelerator',
    location: MAIN_STAGE,
    speakers: ['regan-hillyer'],
    gareth: true,
    crew: CREW_CORE,
    status: 'tentative',
    notes:
      'CONFIRMED 5–8pm — verified against MAIN STAGE Overview sheet (13 Jul), matches the microsite; the old detailed-agenda 9am–4pm reading is stale. Session plan: Two Wealth Identities / Financial Frequency & Set Point / Inherited Money Ceiling.',
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
  { id: 'jul25-opening-party', date: '2026-07-25', start: '20:30', end: '02:00', title: 'Opening Party — Marvelous Wonderland', type: 'social' },
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
    status: 'tentative',
    notes:
      'CONFIRMED 5–9pm — verified against MAIN STAGE Overview sheet (13 Jul). She departs Estonia this day per Speaker DATES — evening finish to 9pm is tight against any departure flight; confirm her flight time. Sessions: Blocking the Receiving / Wealth Formula / Money + Meaning Fusion / Identity Installation.',
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
  { id: 'jul27-elrod', date: '2026-07-27', start: '15:00', end: '16:00', title: 'Hal Elrod', type: 'stage-talk', location: MAIN_STAGE, speakers: ['hal-elrod'], notes: 'Not on Speaker DATES — window unknown.' },
  { id: 'jul27-sheleana-wineland', date: '2026-07-27', start: '16:15', end: '17:00', title: 'Sheleana Aiyana & John Wineland', type: 'stage-talk', location: MAIN_STAGE, speakers: ['sheleana-aiyana', 'john-wineland'], status: 'conflict', notes: 'Sheleana’s Speaker DATES window is Jul 22 only.' },
  { id: 'jul27-party', date: '2026-07-27', start: '19:00', end: '23:00', title: 'White Block Party', type: 'social' },

  // ================= TUE 28 JUL — EMBODIMENT =================
  { id: 'jul28-zen', date: '2026-07-28', start: '10:00', end: '11:00', title: 'Zen Samurai (Embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['zen-samurai'] },
  { id: 'jul28-dawn', date: '2026-07-28', start: '11:00', end: '12:00', title: 'Dawn Hoang (Embodiment)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['dawn-hoang'] },
  { id: 'jul28-dawn-photo', date: '2026-07-28', start: '12:10', end: '12:30', title: 'Portraits — Dawn Hoang', type: 'portrait', crew: ['mardo'], speakers: ['dawn-hoang'], notes: 'Location TBD' },
  { id: 'jul28-sheleana', date: '2026-07-28', start: '14:00', end: '15:00', title: 'Sheleana Aiyana', type: 'stage-talk', location: MAIN_STAGE, speakers: ['sheleana-aiyana'], status: 'conflict', notes: 'Window conflict — Speaker DATES says Jul 22 only.' },
  { id: 'jul28-sheleana-photo', date: '2026-07-28', start: '15:10', end: '15:30', title: 'Portraits — Sheleana Aiyana', type: 'portrait', crew: ['mardo'], speakers: ['sheleana-aiyana'], notes: 'Location TBD' },
  { id: 'jul28-brighten', date: '2026-07-28', start: '15:00', end: '16:00', title: 'Dr. Jolene Brighten', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jolene-brighten'] },
  { id: 'jul28-jamie', date: '2026-07-28', start: '16:15', end: '17:00', title: 'Jamie Sea', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jamie-sea'], notes: 'Not on Speaker DATES — window unknown.' },
  { id: 'jul28-sazerac', date: '2026-07-28', start: '19:30', end: '00:00', title: 'Sazerac', type: 'social' },

  // ================= WED 29 JUL — INFLUENCE & WEALTH =================
  { id: 'jul29-eric', date: '2026-07-29', start: '10:00', end: '11:00', title: 'Eric Edmeades', type: 'stage-talk', location: MAIN_STAGE, speakers: ['eric-edmeades'] },
  { id: 'jul29-eric-photo', date: '2026-07-29', start: '11:10', end: '11:30', title: 'Portraits — Eric Edmeades', type: 'portrait', crew: ['mardo'], speakers: ['eric-edmeades'], notes: 'Location TBD' },
  { id: 'jul29-nick', date: '2026-07-29', start: '11:00', end: '12:00', title: 'Nick Santonastasso', type: 'stage-talk', location: MAIN_STAGE, speakers: ['nick-santonastasso'] },
  { id: 'jul29-nick-photo', date: '2026-07-29', start: '12:10', end: '12:30', title: 'Portraits — Nick Santonastasso', type: 'portrait', crew: ['mardo'], speakers: ['nick-santonastasso'], notes: 'Location TBD' },
  { id: 'jul29-wendt', date: '2026-07-29', start: '14:00', end: '15:00', title: 'Maria Wendt', type: 'stage-talk', location: MAIN_STAGE, speakers: ['maria-wendt'], notes: 'Not on Speaker DATES — window unknown.' },
  { id: 'jul29-mckenna', date: '2026-07-29', start: '15:00', end: '16:00', title: 'Paul McKenna', type: 'stage-talk', location: MAIN_STAGE, speakers: ['paul-mckenna'] },
  { id: 'jul29-mckenna-photo', date: '2026-07-29', start: '16:10', end: '16:30', title: 'Portraits — Paul McKenna', type: 'portrait', crew: ['mardo'], speakers: ['paul-mckenna'], notes: 'Location TBD' },
  { id: 'jul29-vishen', date: '2026-07-29', start: '16:15', end: '17:00', title: 'Vishen', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true },
  { id: 'jul29-fce-dawn', date: '2026-07-29', start: '16:15', end: '17:15', title: 'First Class Experience — Dawn Hoang', type: 'experience', location: EXPERIENCE, speakers: ['dawn-hoang'] },
  { id: 'jul29-author-dinner', date: '2026-07-29', start: '21:00', end: '00:30', title: 'Author Dinner', type: 'social' },

  // ================= THU 30 JUL — REINVENTION =================
  { id: 'jul30-kwik-1', date: '2026-07-30', start: '10:00', end: '11:00', title: 'Jim Kwik', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jim-kwik'] },
  { id: 'jul30-pringle', date: '2026-07-30', start: '10:00', end: '11:30', title: 'Rachel Pringle (Embodiment, 90 min)', type: 'embodiment', location: EMBODIMENT, speakers: ['rachel-pringle'] },
  { id: 'jul30-kwik-2', date: '2026-07-30', start: '11:00', end: '12:00', title: 'Jim Kwik', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jim-kwik'] },
  { id: 'jul30-kwik-3', date: '2026-07-30', start: '14:00', end: '15:00', title: 'Jim Kwik (Maya 25min + Kristina? 25min)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jim-kwik', 'maya-raichoora', 'kristina'], status: 'tentative' },
  { id: 'jul30-kwik-fireside', date: '2026-07-30', start: '15:00', end: '16:00', title: 'Vishen + Jim Kwik Fireside', type: 'stage-talk', location: MAIN_STAGE, speakers: ['jim-kwik', 'vishen'], vishen: true },
  { id: 'jul30-vishen', date: '2026-07-30', start: '16:15', end: '17:00', title: 'Vishen (swappable)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true, status: 'tentative' },
  { id: 'jul30-vishen-photo', date: '2026-07-30', start: '17:15', end: '17:35', title: 'Portraits — Vishen', type: 'portrait', crew: ['mardo'], speakers: ['vishen'], vishen: true, notes: 'Location TBD' },
  { id: 'jul30-vip', date: '2026-07-30', start: '21:00', end: '01:00', title: 'Summer By The Bay VIP Party', type: 'social' },

  // ================= FRI 31 JUL — CLOSING =================
  { id: 'jul31-grant', date: '2026-07-31', start: '10:00', end: '11:00', title: 'Robert Grant', type: 'stage-talk', location: MAIN_STAGE, speakers: ['robert-grant'], status: 'placeholder', notes: 'Marked “Robert Grant?” in agenda.' },
  { id: 'jul31-vishen-content', date: '2026-07-31', start: '11:00', end: '12:00', title: 'Vishen (content only)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true },
  { id: 'jul31-vishen-sales', date: '2026-07-31', start: '14:00', end: '15:00', title: 'Vishen (potential sales)', type: 'stage-talk', location: MAIN_STAGE, speakers: ['vishen'], vishen: true, status: 'tentative' },
  { id: 'jul31-closing', date: '2026-07-31', start: '15:00', end: '16:00', title: 'Closing Ceremony — Youth Performances + Valerija Ribbon Workshop', type: 'stage-talk', location: MAIN_STAGE, vishen: true },
  { id: 'jul31-sanctum', date: '2026-07-31', start: '16:15', end: '19:00', title: 'Sanctum?', type: 'experience', status: 'placeholder' },
  { id: 'jul31-party', date: '2026-07-31', start: '19:00', end: '23:00', title: 'Estonia Block Party', type: 'social' },

  // ================= SAT 1 AUG =================
  {
    id: 'vishen-ai-accel',
    date: '2026-08-01',
    start: '11:00',
    end: '18:00',
    title: 'Vishen AI Accelerator — “Become a World Class Expert and Authority”',
    type: 'accelerator',
    location: MAIN_STAGE,
    speakers: ['vishen'],
    vishen: true,
    gareth: true,
    crew: CREW_CORE,
  },
  { id: 'aug1-closing-party', date: '2026-08-01', start: '20:30', end: '02:00', title: 'Closing Party', type: 'social' },
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
  notes: 'Roving shooter collecting toward the daily ad-hoc social concepts + daily stage-talk snippets. See the Social tab.',
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
      '45 slate items scheduled 2 Jul against speaker windows and event commitments. Every one is tentative until author relations confirms each author’s time. Podcasts/interviews were kept off NO INTERVIEWS days (20, 23, 24, 27, 28, 31 Jul) where possible — confirm that rule actually applies to our own productions.',
  },
  {
    id: 'c-two-units',
    severity: 'medium',
    title: 'Several days assume TWO crews shooting in parallel',
    detail:
      '22, 26, 29, 30 Jul and 1–2 Aug run unit 1 (Khairul + Kuhan) and unit 2 (Nadir) simultaneously. Confirm kit and staffing supports two units, or shoots must move.',
  },
  {
    id: 'c-vishen-load',
    severity: 'medium',
    title: 'Vishen’s shoot load is heavy on 29–30 Jul',
    detail:
      '29 Jul: Superbrain masterclass (3h) + 2 podcasts + 16:15 stage slot. 30 Jul: 4 podcasts + Kwik fireside + swappable stage slot + portraits. Consider dropping 1–2 podcast episodes to Aug 2 or cutting runtime.',
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
      'To keep the studio empty on 2 Aug (pack day), the wrap-day slate moved onto 31 Jul + 1 Aug. 31 Jul now runs both units ~10:00–17:00 (Marisa masterclass + Eric workshop on unit 1; Lee interview + assets + Marisa assets on unit 2) — on Closing Ceremony day. None need Vishen (he is on stage). The pinch: Eric’s 3h full-crew workshop (14:00–17:00) overlaps the 15:00 Closing Ceremony, so Gareth can’t attend both. If tight, pull Eric earlier in week 2.',
  },
  {
    id: 'c-kwik-window',
    severity: 'medium',
    title: 'Jim Kwik compression',
    detail:
      'On the ground Jul 28–Aug 2 only. Speaks 3 blocks + fireside + portraits on Jul 30. Superbrain masterclass + accelerator recording must fit around it.',
  },
  {
    id: 'c-sheleana',
    severity: 'medium',
    title: 'Sheleana Aiyana window (Jul 22) vs talks on Jul 27 & 28',
    detail: 'Speaker DATES lists her for one day; agenda uses her three times across both weeks.',
  },
  {
    id: 'c-jade',
    severity: 'medium',
    title: 'Jade Shaw window (Jul 21) vs 90-min session Jul 23',
    detail: 'Cauldron session sits outside her listed day.',
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
  {
    id: 'a-sheleana',
    kind: 'impossible',
    owner: 'author-relations',
    title: 'Sheleana Aiyana: 1-day window vs 2 stage days',
    detail:
      'Speaker DATES says she is in Tallinn 22 Jul ONLY. The locked event agenda has her on stage 27 + 28 Jul, and her interview is pencilled 28 Jul. Both cannot be true — confirm her real arrival/departure dates.',
    due: '2026-07-09',
    people: ['sheleana-aiyana'],
  },
  {
    id: 'a-priestley-window',
    kind: 'impossible',
    owner: 'author-relations',
    title: 'Daniel Priestley now departs 21 Jul — 2 shoots still booked for the 22nd',
    detail:
      'Speaker DATES changed to 16–21 Jul (was 20–22). His podcast is REMOVED per Gareth (13 Jul) — he’ll capture that separately at a later date, outside the sprint. Still blocked: the Kaitlin interview and membership assets are both on 22 Jul — after he leaves. Move both to ≤21 (tight: 20 is opening/NO INTERVIEWS, 21 is his packed stage day) or drop.',
    due: '2026-07-14',
    people: ['daniel-priestley'],
  },
  {
    id: 'a-hal-window',
    kind: 'impossible',
    owner: 'author-relations',
    title: 'Hal Elrod now dated 24–29 Jul — his podcast is booked for the 30th (NEW)',
    detail:
      'Hal was just added to Speaker DATES as 24–29 Jul. His Scaling Wisdom podcast with Vishen is on 30 Jul — after he departs. Move to ≤29 Jul (already heavy) or record remote.',
    due: '2026-07-14',
    people: ['hal-elrod', 'vishen'],
  },
  // ---- ⚠️ Producer proposals awaiting Gareth's yes/no ----
  {
    id: 'p-marisa-podcast-count',
    kind: 'proposal',
    owner: 'gareth',
    title: 'Marisa Peer’s book podcast — recommend 3 episodes in-house (stretch 4), else external studio',
    detail:
      'Marisa’s team (Elise McDonald) wants studio time for her "Your Mind, Your Rules" book podcast. Realist capacity: the studio is one room and both crew units are heavily booked. Marisa is free 21–23, 26–30 Jul, but studio+crew gaps are thin. We can comfortably facilitate 3 episodes (stretch 4) — best batched on Mon 27 Jul (the most open studio day) plus one late-afternoon slot on 23 or 28 Jul. If she wants 5+ episodes, there is a real gap → recommend an external Tallinn studio (we have contacts). Reply to her team with the number once confirmed.',
    people: ['marisa-peer'],
  },
  {
    id: 'p-priestley-cut',
    kind: 'proposal',
    owner: 'gareth',
    title: 'Cut Priestley’s membership asset shoot to 45 min (or drop it)',
    detail:
      '22 Jul is his departure day and already carries his podcast + interview. The membership record has a “(?)” in its own title. Recommendation: keep podcast + interview sacred, shoot 45 min of membership essentials only if he offers the time.',
    people: ['daniel-priestley'],
  },
  {
    id: 'p-vishen-split',
    kind: 'proposal',
    owner: 'gareth',
    title: 'Move Hal Elrod + Jamie Sea podcasts from 30 Jul to 2 Aug morning',
    detail:
      '30 Jul currently gives Vishen four podcasts back-to-back before the Kwik fireside, a stage slot and portraits. He will be flat by episode three. 2 Aug morning is free for him — contingent on Hal and Jamie still being in town (windows unknown, see chase list).',
    people: ['vishen', 'hal-elrod', 'jamie-sea'],
  },
  {
    id: 'p-marisa-move',
    kind: 'proposal',
    owner: 'gareth',
    title: 'Move Marisa’s masterclass + assets from 2 Aug to 31 Jul',
    detail:
      'Wrap day carries seven shoots with zero slack. Marisa is in town on 31 Jul, Vishen is not needed for her masterclass, and the closing ceremony is Still Frame’s capture. Moving her to 31 Jul (10:00–13:00 + 14:00–15:30) takes wrap day to five shoots.',
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
    title: 'Shi Heng Yi landing time on 26 Jul',
    detail: 'His podcast is 10:00 and interview 15:15 on his arrival day. If he lands after ~08:30, the podcast moves.',
    due: '2026-07-11',
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
    id: 'ch-mv-awards',
    kind: 'chase',
    owner: 'production',
    title: 'Mindvalley Awards (NEW, Fri 24 Jul, ~6–7pm) — does this need capture?',
    detail: 'New event added to the Main Stage sheet since last check, timing itself marked TBC on the source. Confirm whether it needs any of our crew, or Still Frame covers it.',
    due: '2026-07-16',
  },
  {
    id: 'ch-no-interviews',
    kind: 'chase',
    owner: 'production',
    title: 'Confirm the NO INTERVIEWS rule scope',
    detail:
      'The event agenda marks 20, 23, 24, 27, 28, 31 Jul as NO INTERVIEWS. The schedule assumes it binds our podcasts/interviews too. If it only covers external press, four extra days open up and the 29–30 Jul crush relaxes.',
    due: '2026-07-10',
  },
  {
    id: 'ch-social-crew',
    kind: 'chase',
    owner: 'production',
    title: 'Dedicated social/roving shooter needed — daily capture is unstaffed',
    detail:
      'Marketing added 13 Social/Engagement items — 8 ad-hoc concepts filmed daily + daily stage-talk snippets + weekly recaps. The two production units (Khairul+Kuhan / Nadir) are fully booked on podcasts, masterclasses and interviews and cannot also cover always-on social. Assign a dedicated roving shooter/editor (marketing’s own, or an added crew member) or the social slate will not get shot. Requesters: Ishaan Jaiswal, Glen Jason Chittur.',
    due: '2026-07-11',
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
]

export const BACKLOG: BacklogItem[] = [
  { id: 'b-priestley-podcast', title: 'Scaling Wisdom Podcast: Daniel Priestley & Vishen', format: 'podcast', speakers: ['daniel-priestley', 'vishen'], constraint: 'RECORD IN LONDON — date TBC. Pulled off the Tallinn sprint (13 Jul) so it no longer collides with his 21 Jul departure; book once a London date is set.' },
  { id: 'b-accel-rec-priestley', title: 'Accelerator capture — Daniel Priestley (remote, 18–19 Jul)', format: 'accelerator-recording', speakers: ['daniel-priestley'], constraint: 'Remote delivery — capture is stream-record. Confirm who owns the recording chain (us vs Still Frame vs Zoom cloud).' },
  { id: 'b-accel-rec-regan', title: 'Accelerator capture — Regan Wealth Code (25–26 Jul, live)', format: 'accelerator-recording', speakers: ['regan-hillyer'], constraint: 'Live capture with Still Frame. Timing conflict (evenings vs 9–4) must resolve first.' },
  { id: 'b-accel-rec-vishen', title: 'Accelerator capture — Vishen AI Accelerator (1 Aug, 11–6)', format: 'accelerator-recording', speakers: ['vishen'], constraint: 'Live capture with Still Frame on the Main Stage.' },
  { id: 'b-social', title: 'Social media content — key authors', format: 'social', constraint: 'Not yet itemised in the Shoots Airtable. Opportunistic capture around stage days, portraits and shoots — needs a shot list.' },
  { id: 'b-no-items', title: 'No slate items exist for Cynthia Thurlow, Scott Lyon, Simon Ong, Lorin Krenn (interview), Natalie Ellis (interview), Kristina, Fumiko, Marisa (podcast)', format: 'social', constraint: 'Deliberate, or gaps? Cheap to add interviews while they are on site.' },
]
