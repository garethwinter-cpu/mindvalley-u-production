export type SocialMode = 'ad-hoc' | 'scheduled'

export interface SocialItem {
  id: string
  airtableId: string
  title: string
  brief: string
  requester: string
  mode: SocialMode
  /** for scheduled items: publish/deliver cadence or date */
  when?: string
}

/**
 * Social / Engagement content from the marketing team (📺 Shoots Airtable,
 * Style = Social/Engagement). Per Gareth: MOST of this is ad-hoc — captured
 * opportunistically every day during the event, not slotted as fixed shoots.
 * Requesters: Ishaan Jaiswal (concepts) & Glen Jason Chittur (recaps).
 */
export const SOCIAL_CONTENT: SocialItem[] = [
  // ---- Ad-hoc: filmed daily / opportunistically across the event ----
  {
    id: 's-whatbrought',
    airtableId: 'recud0xeGF6DR9Mom',
    title: '"What brought you here?" — 60-second origin story',
    brief: 'Ask every author and many attendees the same question. The range of answers (grief, burnout, curiosity, divorce, a recommendation) shows MVU isn’t one type of person. Strongest top-of-funnel piece — the viewer sees themselves in someone.',
    requester: 'Ishaan Jaiswal',
    mode: 'ad-hoc',
    when: 'All event days — catch authors + attendees between sessions',
  },
  {
    id: 's-kids',
    airtableId: 'reciMdxIcr0ECdWqB',
    title: 'Kids interviewing the authors',
    brief: 'Put a 10-year-old in front of a world-class author and let them ask anything. Kids ask what adults are too self-conscious to ("Do you ever feel like you’re faking it?"). Disarming, highly watchable — and quietly shows the youth program.',
    requester: 'Ishaan Jaiswal',
    mode: 'ad-hoc',
    when: 'Around author availability — pair with portrait/interview slots',
  },
  {
    id: 's-parents',
    airtableId: 'recrpPqtQDlBJ2P5N',
    title: 'Parents on why they brought their kids',
    brief: 'Parents — not pitching MVU, just explaining their reasoning ("She’s 13 and disengaged from school; I needed her to meet people who love ideas"). Reaches growth-minded parents who don’t yet see themselves in the brand.',
    requester: 'Ishaan Jaiswal',
    mode: 'ad-hoc',
    when: 'All event days',
  },
  {
    id: 's-older',
    airtableId: 'recsVBUMrPPkbCM0K',
    title: 'The attendee in their 60s/70s — reinvention later in life',
    brief: 'The older attendee who shows up to reinvent is often the most compelling story in the room. Speaks to the private question millions sit with: "Is it too late for me?" Reaches an underserved, high-purchasing-power demographic.',
    requester: 'Ishaan Jaiswal',
    mode: 'ad-hoc',
    when: 'Find the person early, film across the fortnight',
  },
  {
    id: 's-veteran',
    airtableId: 'recbl2B9XJ33BbjyM',
    title: 'I’ve attended every MVU since 2017 — what actually changed',
    brief: 'Long-form interview with an MVU veteran (attendee or team) on how the event and their life evolved in parallel. Brand-history piece only MVU can tell — positions the brand as a decade-long institution, not an annual event.',
    requester: 'Ishaan Jaiswal',
    mode: 'ad-hoc',
    when: 'Book once the right veteran is identified — flexible day',
  },
  {
    id: 's-asmr',
    airtableId: 'reclYTKG08ewIJfV2',
    title: 'The sounds of MVU (ASMR)',
    brief: 'A reel built entirely around sound — crowd hum, a burst of workshop laughter, corridor conversation, midnight music. Cut to visuals only when the sound demands. Audio-first stops the scroll differently.',
    requester: 'Ishaan Jaiswal',
    mode: 'ad-hoc',
    when: 'Gather audio throughout; assemble late in each week',
  },
  {
    id: 's-disposable',
    airtableId: 'recGi36QtFNeZMs87',
    title: 'Give attendees a disposable camera for the week',
    brief: 'Hand ~10 attendees a disposable camera at the start of Week 1, collect at the end, develop the film, reveal the photos. The unposed lens catches the texture no official photographer gets — a stairwell chat, someone crying laughing at 2am, a child asleep on a beanbag.',
    requester: 'Ishaan Jaiswal',
    mode: 'ad-hoc',
    when: 'Hand out 20 Jul, collect end of Week 1 (26 Jul), develop + reveal',
  },
  {
    id: 's-rayban',
    airtableId: 'recjhU194inx6S09S',
    title: 'A full day at MVU through Meta Ray-Ban glasses',
    brief: 'One author or attendee wears Meta Ray-Bans for a full day — first-person, no crew to perform for. Cut two ways: a raw 60–90s reel of the single most unexpected moment, and an 8–10 min YouTube cut of the full arc (quiet morning → late dinner).',
    requester: 'Ishaan Jaiswal',
    mode: 'ad-hoc',
    when: 'Pick one strong day mid-event; needs the glasses + a willing subject',
  },

  // ---- Scheduled deliverables: recaps + daily snippets (edit/publish cadence) ----
  {
    id: 's-recap-day1',
    airtableId: 'recYColVDkXY13m68',
    title: 'MVU Day 1 Recap — "We’re Open!"',
    brief: 'Fast turnaround recap of opening day energy — registration, orientation, first party. Publish next morning.',
    requester: 'Glen Jason Chittur',
    mode: 'scheduled',
    when: 'Publish 21 Jul (recaps 20 Jul opening)',
  },
  {
    id: 's-recap-w1',
    airtableId: 'rec33hLYbGKo0UuOU',
    title: 'MVU Week 1 Recap',
    brief: 'Highlights sizzle of Week 1 (Opening → Relationships). Cut from daily footage + stage snippets.',
    requester: 'Glen Jason Chittur',
    mode: 'scheduled',
    when: 'Publish ~26 Jul',
  },
  {
    id: 's-recap-w2',
    airtableId: 'recjJgowy1Pv3kWNx',
    title: 'MVU Week 2 Recap',
    brief: 'Highlights sizzle of Week 2 (Healing → Reinvention).',
    requester: 'Glen Jason Chittur',
    mode: 'scheduled',
    when: 'Publish ~1–2 Aug',
  },
  {
    id: 's-recap-final',
    airtableId: 'recNzosj9F9SU9E2T',
    title: 'MVU Final Recap / Closing',
    brief: 'The emotional close-out film — the whole fortnight in one piece. Hero asset for post-event and next-year sales.',
    requester: 'Glen Jason Chittur',
    mode: 'scheduled',
    when: 'Publish post-event (from 2 Aug)',
  },
  {
    id: 's-snippets',
    airtableId: 'reccPkWCHofNTu1NM',
    title: 'Daily Stage Talk Snippets (highlights)',
    brief: 'Pull the strongest 1–3 moments from each day’s stage talks and cut short-form highlights. Feeds daily posting cadence and the weekly recaps.',
    requester: 'Glen Jason Chittur',
    mode: 'scheduled',
    when: 'Every event day (20 Jul – 1 Aug) — same-day or next-morning',
  },
]

export const AD_HOC_SOCIAL = SOCIAL_CONTENT.filter((s) => s.mode === 'ad-hoc')
export const SCHEDULED_SOCIAL = SOCIAL_CONTENT.filter((s) => s.mode === 'scheduled')
