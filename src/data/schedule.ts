import type { BacklogItem, Conflict, DayMeta, ScheduleEvent } from './types'

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
  { date: '2026-08-02', label: 'Sun 2 Aug', theme: 'Wrap', week: 2 },
]

const CREW_CORE = ['khairul', 'nadir', 'kuhan']

export const EVENTS: ScheduleEvent[] = [
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
    date: '2026-07-17',
    title: 'Regan Hillyer — The Wealth Code masterclass (remote delivery)',
    type: 'production',
    location: 'Remote — Regan delivers remotely',
    speakers: ['regan-hillyer'],
    crew: CREW_CORE,
    gareth: true,
    status: 'tentative',
    notes:
      'First production of the sprint. 1 hour: 40 min teaching + 20 min Q&A. Start time TBD — confirm and lock the remote-capture setup.',
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
  { id: 'jul20-community', date: '2026-07-20', start: '15:00', end: '16:00', title: 'Community Connections', type: 'community', location: MAIN_STAGE },
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
    status: 'conflict',
    notes:
      'TIME CONFLICT: microsite says 5–8pm; detailed agenda says 9AM–4PM. Microsite session plan: Two Wealth Identities / Financial Frequency & Set Point / Inherited Money Ceiling. Confirm which timing is real.',
  },
  { id: 'jul25-eric', date: '2026-07-25', start: '11:00', end: '12:00', title: 'Eric Edmeades', type: 'stage-talk', location: MAIN_STAGE, speakers: ['eric-edmeades'], status: 'tentative' },
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
    status: 'conflict',
    notes:
      'TIME CONFLICT: microsite says 5–9pm; detailed agenda says 9AM–4PM. She departs Estonia this day per Speaker DATES — an evening run to 9pm makes that departure impossible. Sessions: Blocking the Receiving / Wealth Formula / Money + Meaning Fusion / Identity Installation.',
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
    id: 'c-podcast-none',
    severity: 'high',
    title: 'No podcast schedule exists',
    detail:
      '“Podcast?” column empty; “NO INTERVIEWS” marked on Jul 20, 23, 24, 27, 28, 31 — leaving only Jul 21, 22, 29, 30 viable for interview capture. Needs confirming and booking.',
  },
  {
    id: 'c-slate-undocumented',
    severity: 'high',
    title: 'Gareth’s production slate undocumented',
    detail:
      'Accelerator recordings, masterclasses (Superbrain, Duality, Art of Manifesting) and social shoots appear in no source document. See Backlog.',
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

export const BACKLOG: BacklogItem[] = [
  { id: 'b-superbrain', title: 'Jim Kwik — Superbrain masterclass', format: 'masterclass', speakers: ['jim-kwik'], constraint: 'Must shoot Jul 28–Aug 2 (his window), avoiding Jul 30 (his stage day).' },
  { id: 'b-duality', title: 'Jeffrey Allen — Duality masterclass', format: 'masterclass', speakers: ['jeffrey-allen'], constraint: 'Window Jul 19–26; his stage day is Jul 22.' },
  { id: 'b-art-manifesting', title: 'Regan Hillyer — Art of Manifesting masterclass', format: 'masterclass', speakers: ['regan-hillyer'], constraint: 'Her Wealth Code masterclass is scheduled 17 Jul (remote). Confirm whether Art of Manifesting is the same deliverable or a separate shoot (window 19–26 Jul).' },
  { id: 'b-accel-rec-priestley', title: 'Accelerator recording — Daniel Priestley', format: 'accelerator-recording', speakers: ['daniel-priestley'], constraint: 'Remote delivery 18–19 Jul — capture is stream-record; confirm who owns the recording chain.' },
  { id: 'b-accel-rec-regan', title: 'Accelerator recording — Regan Hillyer', format: 'accelerator-recording', speakers: ['regan-hillyer'], constraint: 'Jul 25–26, 9am–4pm, Main Stage.' },
  { id: 'b-accel-rec-vishen', title: 'Accelerator recording — Vishen AI Accelerator', format: 'accelerator-recording', speakers: ['vishen'], constraint: 'Aug 1, 11am–6pm, Main Stage.' },
  { id: 'b-podcasts', title: 'Podcast episodes — Vishen + key authors', format: 'podcast', speakers: ['vishen'], constraint: 'Viable days (per NO INTERVIEWS markers): Jul 21, 22, 29, 30 only. Guest list TBD.' },
  { id: 'b-social', title: 'Social media content — key authors', format: 'social', constraint: 'Shot list TBD. Opportunistic around stage days + portraits.' },
]
