import type { ScheduleEvent } from './types'

/**
 * Gareth's production slate — from the 📺 Shoots Airtable (MVU 2026 view),
 * scheduled 2 Jul against speaker windows and stage commitments. NO INTERVIEWS
 * days (per the event agenda) turned out to mean no stage/press interviews —
 * confirmed via Eni (13 Jul) that it doesn't restrict our studio capture, so
 * those days are fair game for podcasts/interviews too. Everything here is a
 * PROPOSAL (status: tentative) until confirmed with authors and author relations.
 *
 * Crew shorthand: unit 1 (khairul + kuhan) carries big shoots;
 * unit 2 (nadir) carries parallel interviews/assets. Adjust as needed.
 *
 * director/cameraOps are synced from the Shoots Airtable "Creative" column
 * (checked 13 Jul) — Gareth tagged = director, named camera crew = cameraOps.
 * Kuhan isn't tagged as Creative on anything yet, only Khairul + Nadir.
 *
 * Kaitlin's author-interview priority (1-10) is synced from the Shoots
 * Airtable "Priority Ranking (Manual)" field (checked 13 Jul, per Eni's
 * briefing) — provisional until Marisha finalizes the author wishlist.
 */

// Crew model (confirmed 14 Jul). STUDIO unit = Gareth (director) + Khairul + Nadir,
// recording the formal captures (podcasts, masterclasses, author interviews). Kuhan is
// NOT studio camera — he roams with Jason (social/soul capture across stage, event spaces,
// parties and breakouts, plus a small studio for off-the-cuff vox pops). Parallel studio
// days split Khairul (unit 1) and Nadir (unit 2) with Gareth floating.
const UNIT1 = ['khairul']
const UNIT2 = ['nadir']
const FULL = ['khairul', 'nadir']
const CAMERA_CREW = ['khairul', 'nadir']

/** Premium studio for podcasts, masterclasses and author interviews.
 *  Walkable from Kultuurikatel — no travel buffers needed between venue and studio. */
export const STUDIO = 'Energiakeskus Studio, Tallinn'

export const PRODUCTION_EVENTS: ScheduleEvent[] = [
  // Dawn Hoang's studio interview with Gareth removed (14 Jul, per Gareth) — she stays
  // on the schedule for her agenda pieces (2× First Class Experience, Embodiment) + portraits.

  // ---------- TUE 21 JUL ----------
  {
    id: 'int-jeffrey-allen',
    date: '2026-07-21',
    start: '10:00',
    end: '10:45',
    title: 'Author Interview: Kaitlin & Jeffrey Allen',
    type: 'production',
    location: STUDIO,
    speakers: ['jeffrey-allen', 'kaitlin'],
    crew: UNIT2,
    director: 'gareth',
    priority: 10,
    status: 'done',
    authorConfirmed: true,
    notes: 'MOVED to 10:00 at Jeffrey\'s request (email 14 Jul): he collects Hisami from TLL (lands 7:30am), so a 9am start was too tight. Pushed John Lee\'s interview to 11:00 to clear the slot. Day before his 4-block stage day.',
  },
  {
    id: 'int-regan',
    date: '2026-07-21',
    start: '15:30',
    end: '16:15',
    title: 'Author Interview: Kaitlin & Regan Hillyer',
    type: 'production',
    location: STUDIO,
    speakers: ['regan-hillyer', 'kaitlin'],
    crew: UNIT2,
    director: 'gareth',
    priority: 10,
    status: 'confirmed',
  },

  // ---------- WED 22 JUL ----------
  // NOTE: Daniel Priestley podcast REMOVED per Gareth (13 Jul) — he'll capture it at a later date, outside the MVU sprint.
  {
    id: 'pod-john-lee',
    date: '2026-07-21',
    start: '16:30',
    end: '18:00',
    title: 'Scaling Wisdom Podcast: John Lee & Vishen',
    type: 'podcast',
    location: STUDIO,
    speakers: ['john-lee', 'vishen'],
    vishen: true,
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'done',
    notes: 'DONE (recorded 21 Jul). John flies the morning of the 22nd; the 21st was the only window all four were free — John after his 16:30 portrait, Vishen after his 15:35 portrait, studio + unit 1 after the Regan interview. Wrapped by 6pm before the 7:30 Sazerac.',
  },
  {
    id: 'int-john-lee',
    date: '2026-07-21',
    start: '11:00',
    end: '11:45',
    title: 'Author Interview: Kaitlin & John Lee',
    type: 'production',
    location: STUDIO,
    speakers: ['john-lee', 'kaitlin'],
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 10,
    status: 'done',
    notes: 'BATCHED to 21 Jul (from 22, his departure day) — pairs with Kaitlin\'s Jeffrey Allen interview in a morning block. Nudged from 10:30 to 11:00 (14 Jul) after Jeffrey\'s interview moved to 10:00–10:45 at his request, so the two no longer overlap. John Lee free this slot (his stage talk is 3pm); before Jade\'s noon assets. Kaitlin batching plan (13 Jul).',
  },
  // John Lee marketing assets NOT scheduled (per Gareth, 14 Jul): his diary is just the
  // Scaling Wisdom podcast (21 Jul) + the Kaitlin interview (21 Jul). Ads dropped even
  // though he offered a Mon 1pm slot — keeping his week light.
  {
    id: 'vishen-tribe-training',
    date: '2026-07-21',
    start: '13:15',
    end: '14:00',
    title: 'Vishen — Tribe Speaker storytelling training (run-and-gun capture)',
    type: 'production',
    location: 'Main Stage (Black Box)',
    speakers: ['vishen'],
    vishen: true,
    crew: ['kuhan'],
    cameraOps: ['kuhan'],
    priority: 9,
    status: 'done',
    notes:
      'Vishen request (WhatsApp, 16 Jul): "Tues 1:15pm to 2pm I need someone with me at MVU as I\'m doing live training with Tribe Speakers on storytelling. I want this filmed. One cam, Hormozi style interacting w students. Can be filmed w one human, iPhone and two lapel mics." ROAMING-UNIT job, not a studio shoot: Kuhan is primary shooter (Jason backup) with a light kit (iPhone + 2 lapel mics) — no draw on the studio unit or the studio room. Sits cleanly between the 11:00 Kaitlin/John Lee interview and the 16:30 John Lee podcast; Kuhan is otherwise roaming until the 19:30 Sazerac, so pulling him for 45 min is the low-cost option. Kit + one-cam spec logged in the Shoots Airtable "Capture Brief / Kit" field so it does not get lost among the studio slate.',
  },

  // ---------- TOM KIRBY — "funny interviews" (social content) ----------
  // Marisa's request (21 Jul): Tom Kirby (MV Head of Customer Experience) does light,
  // funny interviews with 5 authors for social. Per Gareth, these shoot RUN-AND-GUN in the
  // Woodblock (Studio 2) with the roaming social team (Kuhan primary, Jason backup) — NO draw
  // on the Energiakeskus studio or the studio unit. Each is anchored right after that author's
  // existing on-site slot so they're already camera-ready (worked backwards from author time).
  // 20-min quick captures per Gareth (21 Jul). All tentative — movable per author.
  // Tom Kirby "funny interview" series (tom-dan 22 Jul, tom-jade 23 Jul, tom-dawn 28 Jul) —
  // ALL REMOVED (Gareth, 27 Jul): Tom Kirby has left Mindvalley U and gone home. The 22 + 23 Jul
  // captures are in the past (may already be filmed — content still usable if so); the 28 Jul
  // Dawn Hoang one is dropped from the forward schedule. Tom × Regan was already killed (21 Jul).

  // ---------- REGAN × VISHEN SEQUENCE (Gareth priority, 21 Jul): scripts Fri → shoot Sat → ads Sun ----------
  {
    id: 'regan-vishen-scripts',
    date: '2026-07-24',
    start: '15:00',
    end: '16:00',
    title: 'Regan × Vishen — script working session',
    type: 'production',
    location: 'Author Lounge / VIP Area',
    speakers: ['regan-hillyer', 'vishen'],
    vishen: true,
    gareth: true,
    status: 'confirmed',
    notes: 'PRIORITY (Gareth, 21 Jul). Vishen + Regan work on the masterclass scripts ahead of Saturday\'s shoot — a working/prep session, not a camera shoot, so no studio or camera crew. Both free Fri afternoon (Vishen clear after his 11:30 Jeffrey masterclass, Regan otherwise free). MAKEUP FLAG: Gareth noted "MUA 4pm" but that falls after this 3–4pm session — set to 1:00pm at the Nuune Hotel to match the Sat/Sun pattern (glam ~2h before, travel in); confirm.',
  },
  {
    id: 'makeup-regan-scripts',
    date: '2026-07-24',
    start: '13:00',
    end: '14:00',
    title: 'Makeup & wardrobe — Regan Hillyer',
    type: 'makeup',
    location: 'Nuune Boutique Hotel',
    speakers: ['regan-hillyer'],
    crew: ['makeup'],
    notes: 'For Regan\'s 3–4pm Vishen script session. At her hotel (travels in). NOTE: Gareth wrote "MUA 4pm" but that\'s after the session — placed at 1pm (2h before) to match the Sat/Sun pattern; confirm the time.',
  },
  {
    id: 'ads-regan-accel',
    date: '2026-07-26',
    start: '16:00',
    end: '17:00',
    title: 'Regan Hillyer — Wealth Code Accelerator ads / upsell',
    type: 'production',
    location: 'Main Stage (Black Box)',
    speakers: ['regan-hillyer'],
    gareth: false,
    crew: ['kuhan'],
    director: 'kuhan',
    cameraOps: ['kuhan'],
    status: 'confirmed',
    notes: 'PRIORITY (Gareth, 21 Jul). Accelerator upsell ads, Main Stage, right before Regan\'s 17:00 accelerator. Makeup 2:00pm at the Nuune Hotel. KUHAN runs it solo (24 Jul) — Gareth is on the Lorin×Vishen podcast until 16:30 (it moved to 15:00–16:30), so a simple pre-accel ad capture goes to Kuhan, who then continues onto the accelerator on the same stage. Regan\'s window closes 27 Jul.',
  },
  {
    id: 'makeup-ads-regan-accel',
    date: '2026-07-26',
    start: '14:00',
    end: '15:00',
    title: 'Makeup & wardrobe — Regan Hillyer',
    type: 'makeup',
    location: 'Nuune Boutique Hotel',
    speakers: ['regan-hillyer'],
    crew: ['makeup'],
    notes: 'For Regan\'s 4pm accelerator ads (and rolling into her 5pm accelerator). At her hotel, travels in — per Gareth (21 Jul).',
  },
  // tom-jade (23 Jul) + tom-dawn (28 Jul) — REMOVED with the rest of the Tom Kirby series
  // (Gareth, 27 Jul — he has left MVU). Tom × Vishen and Tom × Regan were already killed.

  {
    id: 'int-daniel-combined',
    date: '2026-07-21',
    start: '12:30',
    end: '13:45',
    title: 'Daniel Priestley — combined block: Gareth interview + Eric’s-daughter podcast',
    type: 'production',
    location: STUDIO,
    speakers: ['daniel-priestley', 'gareth'],
    gareth: true,
    crew: FULL,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 3,
    status: 'tentative',
    notes:
      'COMBINED per Gareth (16 Jul): one ~75-min premium-studio block straight off Daniel’s 12:10–12:30 portrait, so he arrives already in hair/makeup (no separate glam). Two deliverables in ~1h of his time: (1) Eric Edmeades’s daughter interviews Daniel for her podcast (~35–40 min — a favour; Daniel and Eric are close friends), then (2) Gareth’s own short segment with Daniel (~15–20 min). Pulled EARLY (off the portrait) rather than the 3pm slot. HARD STOP: Daniel departs 14:30 (2:30pm) on the 21st (confirmed 16 Jul), so this block wraps at 13:45 with a 45-min buffer, and the events team’s 3pm "Author Interview: Gareth & Daniel Priestley" filming slot (15:00–15:20, record recznJLe2Kzvnnts8) is now IMPOSSIBLE — he is gone by then — and must be dropped. Replaces the standalone Woodblock favour shoot too. Studio + Gareth + both units free; verified clean.',
  },

  // ---------- THU 23 JUL ----------
  {
    id: 'mc-regan-aom',
    date: '2026-07-25',
    start: '12:00',
    end: '15:00',
    title: 'Regan Hillyer — NEW Art of Manifesting Masterclass (with Vishen)',
    type: 'production',
    location: STUDIO,
    speakers: ['regan-hillyer', 'vishen'],
    vishen: true,
    gareth: true,
    crew: FULL,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'done',
    notes: 'POSTPONED from Thu 23 to Sat 25 Jul, expanded to a full 3-hour record 12:00–15:00 (Gareth, 21 Jul — top priority). Makeup 10:00 at the Nuune Boutique Hotel (Regan preps off-site, travels in). Regan\'s marketing assets are captured WITHIN this 3h block (the separate Thu assets slot is folded in). Vishen is free 12:00–15:00 once the Jeffrey×Vishen podcast is cancelled (see pod-ja removal). Studio free from 10:30 (after Kristina×Marisa) through 15:00. Part of the Fri script → Sat shoot → Sun ads Regan sequence.',
  },
  {
    id: 'pod-chiara-marisa',
    date: '2026-07-23',
    start: '13:00',
    end: '14:30',
    title: 'Chiara King podcast — guest Marisa Peer (we facilitate)',
    type: 'podcast',
    location: STUDIO,
    speakers: ['chiara-king', 'marisa-peer'],
    gareth: true,
    crew: UNIT1,
    status: 'confirmed',
    notes: 'LOCKED (Gareth, 21 Jul). Chiara’s own podcast, we facilitate (FX3 + Rode). Chiara (20–25) and Marisa both in town; both free this afternoon (no stage). Thu 23 Jul 13:00–14:30, right after Regan’s assets and before Chiara’s Lorin episode (14:30). PULLED from 16:30 to 13:00 (16 Jul) after the Regan masterclass shortened to 2h.',
  },
  {
    id: 'pod-chiara-lorin',
    date: '2026-07-23',
    start: '14:30',
    end: '16:00',
    title: 'Chiara King podcast — guest Lorin Krenn (we facilitate)',
    type: 'podcast',
    location: STUDIO,
    speakers: ['chiara-king', 'lorin-krenn'],
    gareth: true,
    crew: UNIT1,
    status: 'tentative',
    notes: 'CONFIRMED (replaces the cancelled Chiara + Paul McKenna episode). Back-to-back with her Marisa episode — one studio setup, both her guests in a row. Lorin in Tallinn 22–29, free this afternoon. PULLED to 14:30 with the Marisa episode (16 Jul optimisation) — the old 18:00 slot made 23 Jul a very long studio day. In Airtable.',
  },
  {
    id: 'pod-chiara-emelia',
    date: '2026-07-23',
    start: '16:00',
    end: '17:00',
    title: 'Chiara King podcast — guest Emilia Niglas (we facilitate)',
    type: 'podcast',
    location: STUDIO,
    speakers: ['chiara-king'],
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: ['khairul'],
    priority: 6,
    status: 'tentative',
    notes: 'ADDED per Gareth (21 Jul) — third Chiara episode, straight after her Lorin episode (wraps 16:00). 4:00–5:00pm in the Energiakeskus studio; studio + unit 1 free after Lorin. Chiara does her own makeup, and she\'s warm off the back-to-back session. This makes it three Chiara episodes in a row (Marisa 13:00, Lorin 14:30, Emilia 16:00). Guest Emilia Niglas is external — named in the title, not the speaker roster.',
  },

  // ---------- FRI 24 JUL ----------
  {
    id: 'mc-ja-duality',
    date: '2026-07-24',
    start: '11:00',
    end: '12:30',
    title: 'Jeffrey Allen — NEW Duality Masterclass (with Vishen)',
    type: 'production',
    location: STUDIO,
    speakers: ['jeffrey-allen', 'vishen'],
    vishen: true,
    gareth: true,
    crew: FULL,
    status: 'confirmed',
    authorConfirmed: true,
    notes: 'CONFIRMED BY AUTHOR (Jeffrey Allen, email 14 Jul — "this is great planning... everything else looks great"). MC DNA 2.0, a refresh in the new format (not a straight reshoot). Suggested teaching: The Mental Noise Dial / Energetic Grounding Technique.',
  },
  {
    id: 'shoot-kaitlin',
    date: '2026-07-24',
    start: '13:00',
    end: '14:00',
    title: 'Kaitlin O’Toole — studio shoot',
    type: 'production',
    location: STUDIO,
    speakers: ['kaitlin'],
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 5,
    status: 'confirmed',
    notes: 'ADDED per Gareth (23 Jul) — 1-hour Kaitlin studio shoot, Fri 24 1:00–2:00pm. Studio free after Jeffrey’s masterclass (wraps 12:00); Kaitlin free until the 6pm Awards; Gareth free before his 3pm script session. CONTENT TBC — confirm what we’re filming (host links / interview / her own piece) to finalise. Makeup 12:00–13:00 (green room).',
  },
  {
    id: 'makeup-shoot-kaitlin',
    date: '2026-07-24',
    start: '12:00',
    end: '13:00',
    title: 'Makeup & wardrobe — Kaitlin O’Toole',
    type: 'makeup',
    location: 'Makeup / Green Room',
    speakers: ['kaitlin'],
    crew: ['makeup'],
    notes: '60-min call so Kaitlin’s camera-ready for her 1:00pm studio shoot.',
  },
  {
    id: 'assets-ja',
    date: '2026-07-24',
    start: '12:30',
    end: '13:00',
    title: 'Jeffrey Allen — Masterclass Marketing Assets (Duality + Manifesting collection)',
    type: 'production',
    location: STUDIO,
    speakers: ['jeffrey-allen'],
    crew: UNIT1,
    gareth: true,
    status: 'tentative',
    notes: 'Captured in the 30 min right after the masterclass while Jeffrey\'s still lit, mic\'d and in makeup. MOVED to 12:30–13:00 (Gareth, 23 Jul) with the masterclass, which shifted to an 11:00 start. SCOPE: the THREE hero items live — Straight Up Invite, Story Ad, Technique Demo. Snappy guest-swap into Kaitlin\'s 13:00 studio shoot (same crew). Jeffrey approved the fuller set; stays tentative until acknowledged.',
  },

  // ---------- SAT 25 JUL ----------
  {
    id: 'pod-kristina-marisa',
    date: '2026-07-25',
    start: '10:00',
    end: '11:30',
    title: 'Kristina Mand-Lakhiani × Marisa Peer podcast',
    type: 'podcast',
    location: STUDIO,
    speakers: ['kristina', 'marisa-peer'],
    gareth: true,
    crew: FULL,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 7,
    status: 'done',
    notes:
      'MOVED to 10:00–11:30 (Gareth, 21 Jul) — the studio isn\'t accessible before 10am on the weekend, so the old 09:00 start was impossible. 90-min record, then a 30-min reset before Regan\'s 12:00 masterclass. Two-hander, no Vishen. Both women, so a 60-min makeup call 09:00–10:00 (green room — assumes green-room access before the 10am studio open; else they prep at their hotel).',
  },
  {
    id: 'int-dan-brule',
    date: '2026-07-22',
    start: '10:30',
    end: '11:15',
    title: 'Author Interview: Gareth & Dan Brulé',
    type: 'production',
    location: STUDIO,
    speakers: ['dan-brule', 'gareth'],
    gareth: true,
    crew: UNIT2,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 4,
    status: 'tentative',
    notes: 'MOVED to Wed 22 Jul (Gareth, 21 Jul) to decompress the tight Sat 25th (Jeffrey\'s two-podcast day). The 22nd is Jeffrey\'s main-stage day, so the Energiakeskus studio + our unit sit idle — perfect for a couple of Gareth-led interviews. First call 10:00 (nothing before 10am per Gareth): makeup 10:00, interview 10:30–11:15, then a 15-min reset into John Wineland at 11:30. Dan is in town 20–28 Jul; reassigned from Kaitlin to Gareth (13 Jul).',
  },
  {
    id: 'int-marisa',
    date: '2026-07-26',
    start: '11:00',
    end: '11:45',
    title: 'Author Interview: Kaitlin & Marisa Peer',
    type: 'production',
    location: STUDIO,
    speakers: ['marisa-peer', 'kaitlin'],
    crew: UNIT2,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 10,
    status: 'tentative',
    notes: 'SLID to 11:00–11:45 (Gareth, 24 Jul) to sit ahead of the Eric × Vishen masterclass. Kaitlin rolls off her 10:00 content shoot; Marisa glams 10:00–11:00 (green room opens 10 on the weekend). Kaitlin batching plan.',
  },
  // Eric Edmeades — The Stage Effect Masterclass with Vishen (mc-eric-stage-effect, last at
  // Thu 30 Jul 13:00–15:00) — REMOVED (Gareth, 27 Jul). Priority-10 capture, cancelled after
  // four attempted homes (Sun 26 → Tue 28 → Fri 31 → Thu 30): Vishen cancelled the original
  // session, Eric couldn't do Tuesday, and Friday turned out to be a full Vishen stage day.
  // NOTE: the Nick Santonastasso + Jamie Sea author interviews were dropped on 27 Jul purely
  // to clear the Thursday window for this — they can be reinstated if wanted, since the
  // masterclass no longer needs that slot.
  // Scaling Wisdom Podcast: Jeffrey Allen × Vishen — CANCELLED (Gareth, 21 Jul):
  // Regan's masterclass was postponed onto Sat 25 Jul 12:00–15:00, which needs the
  // studio + Vishen exactly when this ran. Jeffrey flies Sun 26, so it can't move to
  // another day — "we can't make time for it." Airtable record marked Cancelled.
  {
    id: 'pod-marisa-jeffrey',
    date: '2026-07-25',
    start: '16:00',
    end: '17:30',
    title: 'Marisa Peer podcast: Marisa × Jeffrey Allen',
    type: 'podcast',
    location: STUDIO,
    speakers: ['marisa-peer', 'jeffrey-allen'],
    gareth: false,
    crew: ['khairul', 'nadir'],
    director: 'nadir',
    cameraOps: ['khairul', 'nadir'],
    priority: 6,
    status: 'done',
    authorConfirmed: true,
    notes: 'LOCKED 4:00–5:30pm (Gareth, 21 Jul) — Matt\'s requested time. Works now that Regan\'s accelerator camera is Kuhan+Jason: that frees Khairul + Nadir to run this in the studio while Gareth produces the accelerator on the Main Stage (Gareth won\'t be present for the whole podcast — the unit handles it, it\'s Marisa\'s facilitated 2-hander). Jeffrey\'s LAST day (flies 26 Jul) so it stays Saturday. Runs after Regan\'s 12:00–15:00 masterclass. Marisa\'s 2nd podcast of the day (after Kristina 09:00).',
  },

  // ---------- SUN 26 JUL ----------
  // Shi Heng Yi's Scaling Wisdom podcast is NOT a separate studio shoot — it's recorded
  // ON STAGE as his 27 Jul fireside with Vishen (jul27-shy-fireside) and cut into the
  // launch episode. Studio slot removed 14 Jul per Gareth's call with Vishen.
  {
    id: 'int-wineland',
    date: '2026-07-22',
    start: '11:30',
    end: '12:15',
    title: 'Author Interview: Gareth & John Wineland',
    type: 'production',
    location: STUDIO,
    speakers: ['john-wineland', 'gareth'],
    gareth: true,
    crew: UNIT2,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 2,
    status: 'tentative',
    notes: 'MOVED to Wed 22 Jul (Gareth, 21 Jul) to lift it off the heaviest studio day (Sun 26th). Runs second in the 22nd\'s open studio: 15-min reset off Dan Brulé\'s interview, makeup 11:00, interview 11:30–12:15. John is in town 20–27 Jul (the old note calling the 26th his departure day was stale — he has a 27th stage slot), so the 22nd is well within his window. Reassigned from Kaitlin to Gareth (13 Jul).',
  },
  // Kaitlin × Eric Edmeades author interview — KILLED (Gareth, 24 Jul): Eric is now
  // covered by the 2-hour Eric × Vishen "Stage Effect" masterclass on Sun 26, so the
  // separate interview is redundant. Airtable record marked Cancelled.
  {
    id: 'ads-vishen',
    date: '2026-07-28',
    start: '15:00',
    end: '16:00',
    title: 'Vishen — ads shoot',
    type: 'production',
    location: STUDIO,
    speakers: ['vishen'],
    vishen: true,
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 5,
    status: 'confirmed',
    notes: 'MOVED to Tue 28 Jul 15:00–16:00 (Gareth, 27 Jul) — takes the studio slot Marisa\'s marketing assets vacated (those were removed). Off Monday evening, where it was jammed straight after Marisa\'s podcast (17:15) and ran up against the 19:00 party. Tuesday 3pm is clean: Vishen free after the 11:00–13:00 McKenna masterclass, studio clear after Marisa\'s podcast (14:45). CONTENT TBC — confirm product/campaign.',
  },
  // Kaitlin content shoot (Sun 26 10:00–11:00) + its hotel makeup — REMOVED (Gareth, 24 Jul).
  {
    id: 'int-shy',
    date: '2026-07-27',
    start: '12:30',
    end: '13:15',
    title: 'Author Interview: Kaitlin & Shi Heng Yi',
    type: 'production',
    location: STUDIO,
    speakers: ['shi-heng-yi', 'kaitlin'],
    crew: UNIT2,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 10,
    status: 'tentative',
    notes: 'MOVED off Sun 26 to Mon 27 12:30–13:15 (Gareth, 24 Jul) to de-clutter a busy Sunday. Shi is camera-ready off his 12:10 portrait; Kaitlin is off the morning main-stage hosting (ends 12:00); studio free 12:30–14:00 between Marisa\'s two own-podcast slots. Nadir operates.',
  },

  // ---------- MON 27 JUL ----------
  // Marisa Peer podcast "Your Mind, Your Rules" (pod-marisa-own-1, 11:00–12:30 placeholder)
  // — REMOVED (Gareth, 26 Jul). It was a pencilled extra episode; Marisa has confirmed her
  // 15:45 YMYR slot (pod-marisa-own-2) instead, so this speculative morning hold is dropped.
  {
    id: 'pod-marisa-own-2',
    date: '2026-07-27',
    start: '15:45',
    end: '17:15',
    title: 'Marisa Peer podcast (YMYR) — 90-min slot, guest TBC',
    type: 'podcast',
    location: STUDIO,
    speakers: ['marisa-peer'],
    crew: UNIT1,
    status: 'tentative',
    notes: 'MOVED off the original 2pm (Gareth, 26 Jul): the 2pm slot collided with the Shi × Vishen fireside, which takes BOTH Nadir + Khairul to the Black Box. This now runs 15:45–17:15, once the crew has moved the kit back up from the Black Box (15:00–15:45). Takes the studio slot Maya\'s interview vacated (Maya moved to Tue 28). 90-min YMYR booking; guest still TBC (Sabrina Stocker is on Tue 28th). Confirm guest with Elise/Nicola.',
  },

  // ---------- TUE 28 JUL ----------
  {
    id: 'mc-mckenna',
    date: '2026-07-28',
    start: '11:00',
    end: '13:00',
    title: 'Paul McKenna & Vishen — NEW EB / Total Self Confidence Masterclass',
    type: 'production',
    location: STUDIO,
    speakers: ['paul-mckenna', 'vishen'],
    vishen: true,
    gareth: true,
    crew: FULL,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'confirmed',
    authorConfirmed: true,
    notes:
      'CONFIRMED BY AUTHOR (Paul McKenna, email 14 Jul — "this all looks good to me"). MC DNA 2.0. Time-saver per brief: use the Hypnotic Trance Audio for the teaching segment — Paul & Vishen open and intro into it; Vishen does the entrepreneur-pathway close.',
  },
  {
    id: 'assets-mckenna',
    date: '2026-07-30',
    start: '15:15',
    end: '17:15',
    title: 'Paul McKenna — Masterclass Marketing Assets',
    type: 'production',
    location: STUDIO,
    speakers: ['paul-mckenna'],
    crew: UNIT1,
    gareth: true,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'confirmed',
    authorConfirmed: true,
    notes: 'MOVED to 30 Jul (14 Jul) to protect Paul\'s voice: he flagged his voice won\'t hold for a full day, so we split his load across two days. The Hypnotherapy Cert assets are time-sensitive and stay on the 28th; these masterclass assets are NOT urgent, so they move to the 30th afternoon (after his 12:00 interview, once the studio clears at 15:00). Confirmed by author for the shoot itself; the date split needs his OK (see email).',
  },
  {
    id: 'assets-mckenna-cert',
    date: '2026-07-28',
    start: '10:00',
    end: '11:00',
    title: 'Paul McKenna — Hypnotherapy Cert Marketing Assets',
    type: 'production',
    location: STUDIO,
    speakers: ['paul-mckenna'],
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'confirmed',
    authorConfirmed: true,
    notes: 'PULLED to 10:00–11:00 (Gareth, 27 Jul) as the lead-in to the McKenna × Vishen masterclass (11:00–13:00) — one continuous 3-hour McKenna studio block 10:00–13:00, Vishen joins at 11:00. Still hits the launch-deadline requirement to capture on the 28th. Glam once at 09:30. NOTE: this reverses the earlier voice-rest placement (was 15:00 to rest Paul\'s voice after the masterclass, per his 14 Jul stamina email) — now he records cert assets then straight into the masterclass. Mitigated because the masterclass is largely Trance-Audio-driven (light on his live voice), but flag to Paul.',
  },
  // Author Interview: Eni & Sheleana Aiyana (int-sheleana, Tue 28 09:00–09:45) —
  // REMOVED (Gareth, 27 Jul): Sheleana can't make it. Her Tue 28 Main Stage talk
  // (jul28-sheleana) and 27 Jul stage session are the event's and are untouched.
  {
    id: 'pod-marisa-own-3',
    date: '2026-07-28',
    start: '16:00',
    end: '17:30',
    title: 'Marisa Peer podcast (YMYR) — guest Sabrina Stocker',
    type: 'podcast',
    location: STUDIO,
    speakers: ['marisa-peer'],
    crew: UNIT1,
    status: 'confirmed',
    notes:
      'MOVED to 16:00–17:30 (Gareth, 27 Jul — was 13:15–14:45). Guest: Sabrina Stocker, an external YMYR guest (not an MVU author), so named in the title rather than the speaker roster. Now the last studio session of Tuesday, straight after the Vishen ads shoot (ends 16:00). CONFIRM the new 4pm start with Matt/Elise — it was booked at 13:00.',
  },

  // ---------- WED 29 JUL ----------
  {
    id: 'mc-kwik-superbrain',
    date: '2026-07-29',
    start: '10:00',
    end: '12:00',
    title: 'Jim Kwik — Superbrain Masterclass (with Vishen)',
    type: 'production',
    location: STUDIO,
    speakers: ['jim-kwik', 'vishen'],
    vishen: true,
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'tentative',
    notes: 'Day after he lands; his stage day is the 30th (where his accelerator is delivered live). One continuous 10:00–13:00 studio block: teaching with Vishen runs to ~12:15 (the Quest teaching-audio time-saver keeps it tight), then Vishen wraps and Jim stays on solo for the accelerator landing-page video (see accel-upsell-kwik) in the same session. The studio flips to the Jolene podcast at 13:30. (Nadir back on camera here — the Zen Samurai meditation that ran parallel was killed 14 Jul.)',
  },
  // Zen Samurai "5 Elements Meditations" KILLED (14 Jul) — not producing these. Sensei Zen
  // Takai keeps his Gareth interview (29 Jul) and his 28 Jul Embodiment stage session.
  // Author Interview: Gareth & Dr. Jolene Brighten (int-jolene, Wed 29 14:45–15:30) —
  // REMOVED (Gareth, 27 Jul). Her Scaling Wisdom podcast was already cut (16 Jul); this
  // low-priority (pri 4) author interview sat on her departure day (flight risk) and on the
  // overloaded Wednesday, so it's dropped. Her Tue 28 Main Stage talk (jul28-brighten) is the
  // event's session and is untouched.
  {
    id: 'pod-lorin',
    date: '2026-07-26',
    start: '15:00',
    end: '16:30',
    title: 'Scaling Wisdom Podcast: Lorin Krenn & Vishen',
    type: 'podcast',
    location: STUDIO,
    speakers: ['lorin-krenn', 'vishen'],
    vishen: true,
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'tentative',
    notes: 'PUSHED to 15:00–16:30 (Gareth, 24 Jul) so Vishen gets an hour\'s break after the 12:00–14:00 Eric masterclass instead of going straight from one into the other. Lorin flies 6am Wed 29 so Sunday is his window. Runs into the Regan ads slot for Gareth, so the Regan pre-accelerator ads (16:00–17:00, Main Stage) run on Kuhan solo while Gareth stays on this podcast. Lorin makeup 14:00–15:00 (green room).',
  },
  // Author Interview: Gareth & Sensei Zen Takai (int-zen-takai, was Wed 29 15:45–16:30) —
  // REMOVED (Gareth, 27 Jul): the studio time is reallocated to Vishen's YouTube talking-heads
  // shoot (th-vishen-1), which extends to fill it. His Tue 28 Main Stage session is unaffected.

  // ---------- THU 30 JUL ----------
  {
    id: 'talk-iris-wagner',
    date: '2026-07-30',
    start: '11:00',
    end: '11:20',
    title: 'Iris Wagner — "Your Voice. Your Message. Before It\'s Too Late: How to Preserve Your Authentic Legacy in the Age of AI." (20 min)',
    type: 'stage-talk',
    location: 'Community Stage (Small Hall)',
    speakers: ['iris-wagner'],
    status: 'confirmed',
    notes: 'CONFIRMED via 2026 SMALL HALL Overview sheet — 20-min Tribe slot, Thu 30 Jul, 11–12 block. Sticking to this stage slot only — no separate studio content shoot (decided 13 Jul). Per Iris\'s 13 Jul brief: venue not yet confirmed to her by Mirell Sork (we have it as Community Stage) — she\'s asked Vishen to attend and, if appropriate, introduce her; awaiting his confirmation.',
  },
  {
    id: 'pod-maria-wendt',
    date: '2026-07-30',
    start: '11:00',
    end: '11:45',
    title: 'Scaling Wisdom Podcast: Maria Wendt & Vishen',
    type: 'podcast',
    location: STUDIO,
    speakers: ['maria-wendt', 'vishen'],
    vishen: true,
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'conflict',
    notes: 'AVAILABILITY FLAG (source audit, 25 Jul): Author x Event Airtable shows Maria in Tallinn 27 Jul → 30 Jul. This 11:00 podcast is on her DEPARTURE DAY — a morning record on her flight-out day is a real risk. She arrives 27 Jul, so 28 or 29 Jul are safer. Confirm her flight time or move earlier before locking. (Back to 11:00 — the 11:15 nudge is no longer needed now that Marisa\'s masterclass moved off Thursday to Mon 27.)',
  },
  {
    id: 'int-mckenna',
    date: '2026-07-30',
    start: '12:15',
    end: '13:00',
    title: 'Author Interview: Kaitlin & Paul McKenna',
    type: 'production',
    location: STUDIO,
    speakers: ['paul-mckenna', 'kaitlin'],
    crew: UNIT2,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 10,
    status: 'confirmed',
    authorConfirmed: true,
    notes: 'CONFIRMED BY AUTHOR (Paul McKenna, email 14 Jul). NUDGED 12:00→12:15 (16 Jul): Kaitlin is MC\'ing the main stage until 12:00 (Jim Kwik session), so she can\'t start at 12:00. Now straight after she comes off stage — she\'s already in hair/makeup from hosting (no separate glam), just Paul gets a touch-up. Keeps Kaitlin as interviewer per Gareth.',
  },
  // Author interviews with Nick Santonastasso (int-nick, was Thu 30 13:00–13:45, pri 2) and
  // Jamie Sea (int-jamie-sea, was Thu 30 14:15–15:00, pri 4) — BOTH REMOVED (Gareth, 27 Jul)
  // to clear Thu 13:00–15:00 for the Eric × Vishen masterclass, which had to come off Friday
  // (Vishen is on stage all Friday). Both were low-priority standalone interviews whose
  // Scaling Wisdom podcasts were already cut on 16 Jul, and Jamie's sat on her departure day.

  // ---------- SAT 1 AUG ----------
  {
    id: 'int-rachel',
    date: '2026-07-31',
    start: '17:45',
    end: '18:30',
    title: 'Author Interview: Kaitlin & Rachel Pringle',
    type: 'production',
    location: STUDIO,
    speakers: ['rachel-pringle', 'kaitlin'],
    crew: UNIT2,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 9,
    status: 'tentative',
    notes: 'MOVED from 1 Aug to Thu 31 Jul (source audit, 25 Jul) — 1 Aug is Rachel\'s departure/flight day AND Vishen\'s all-day accelerator AND the last studio day. She\'s already in-studio 31st 16:00–17:30 for the Marisa YMYR podcast, so she does her own interview straight after (camera-ready, no new makeup call). Priority 9 shoot now off the flight-day crunch.',
  },
  {
    id: 'assets-rachel-membership',
    date: '2026-07-31',
    start: '18:30',
    end: '20:00',
    title: 'Rachel Pringle — Membership Marketing Assets (“Sing from the Same Hymn Sheet” — Relationships)',
    type: 'production',
    location: STUDIO,
    speakers: ['rachel-pringle'],
    crew: UNIT2,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'tentative',
    notes: 'MOVED from 1 Aug to Thu 31 Jul (source audit, 25 Jul), straight after her author interview — keeps all of Rachel\'s captures on the 31st (a day she\'s confirmed in-studio) and off her 1 Aug departure day. Evening block on the studio; Rachel camera-ready from the Marisa podcast.',
  },

  // (2 Aug is studio pack/travel — no shoots)

  // ---------- POST-EVENT: 3–5 AUG (blocked out, 3-day shoot) ----------
  {
    id: 'shoot-iris-vishen-parents-d1',
    date: '2026-08-03',
    start: '09:30',
    end: '16:30',
    title: 'Memoirs Productions with Mohan & Roopi (Day 1 of 3)',
    type: 'production',
    location: "Mohan & Roopi's apartment, Tallinn (~10 min walk from Kultuurikatel)",
    speakers: ['iris-wagner', 'mohan-lakhiani', 'roopi-lakhiani'],
    director: 'iris-wagner',
    status: 'tentative',
    notes: 'IRIS-RUN — Gareth decided (13 Jul) no MV crew stays on for this; Iris resources it entirely herself (crew, kit, catering all her side). On the calendar for awareness only (Vishen\'s parents, post-event). 9:30am–4:30pm, flexible around Mohan & Roopi\'s energy; some segments a closed set for privacy. Vishen welcome to join.',
  },
  {
    id: 'shoot-iris-vishen-parents-d2',
    date: '2026-08-04',
    start: '09:30',
    end: '16:30',
    title: 'Memoirs Productions with Mohan & Roopi (Day 2 of 3)',
    type: 'production',
    location: "Mohan & Roopi's apartment, Tallinn (~10 min walk from Kultuurikatel)",
    speakers: ['iris-wagner', 'mohan-lakhiani', 'roopi-lakhiani'],
    director: 'iris-wagner',
    status: 'tentative',
    notes: 'Day 2 of 3 — Iris-run, no MV crew. See Day 1 notes.',
  },
  {
    id: 'shoot-iris-vishen-parents-d3',
    date: '2026-08-05',
    start: '09:30',
    end: '16:30',
    title: 'Memoirs Productions with Mohan & Roopi (Day 3 of 3 — + Hayden & Eve AMA)',
    type: 'production',
    location: "Mohan & Roopi's apartment, Tallinn (~10 min walk from Kultuurikatel)",
    speakers: ['iris-wagner', 'mohan-lakhiani', 'roopi-lakhiani', 'hayden-lakhiani', 'eve-lakhiani'],
    director: 'iris-wagner',
    status: 'tentative',
    notes: 'Day 3 of 3 — Iris-run, no MV crew. Iris wants Hayden & Eve in for a grandparents "Ask Me Anything" (needs Vishen to confirm the kids\' availability — his tracked window ends 2 Aug; see a-vishen-window-legacy).',
  },
  {
    id: 'accel-upsell-kwik',
    date: '2026-07-29',
    start: '12:00',
    end: '12:45',
    title: 'Jim Kwik — Accelerator Landing Page Video',
    type: 'production',
    location: STUDIO,
    speakers: ['jim-kwik'],
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'tentative',
    notes: 'The accelerator itself is delivered LIVE on the Main Stage on 30 Jul (per the Google Sheet) — this is just the sales/landing-page video for it. Folded into the tail of Jim\'s 29 Jul masterclass session (after Vishen wraps ~12:15, Jim stays on solo), since his 30th is stage-packed all day. No extra studio slot; frees his departure-eve.',
  },
  // Marisa Peer & Vishen — NEW RTHA / Uncompromised Life Masterclass (mc-marisa, was Wed 29
  // 17:15–19:15) — REMOVED (Gareth, 27 Jul): "we will not film it". Her RTHA marketing assets
  // (assets-marisa) were already dropped on 27 Jul, so Marisa now has no masterclass or asset
  // capture this run — only her podcasts (YMYR Ep2 Mon 27, Ep3 Tue 28, Rachel Fri 31) and the
  // completed Kristina/Jeffrey/Chiara episodes + her Kaitlin author interview.
  {
    id: 'int-lee-holden',
    date: '2026-07-30',
    start: '17:15',
    end: '19:15',
    title: 'Author Interview: Kaitlin & Lee Holden (2-hour session)',
    type: 'production',
    location: STUDIO,
    speakers: ['lee-holden', 'kaitlin'],
    crew: UNIT2,
    director: 'nadir',
    priority: 6,
    status: 'confirmed',
    notes: 'LOCKED + EXTENDED to a full 2 hours (Gareth, 27 Jul). Moved off Fri 31 (was 14:45–15:30): Friday couldn\'t hold a buffered 2h block — a 14:00–16:00 slot would jam between the Eric masterclass and Rachel\'s locked podcast with zero reset, and Rachel flies Sat so her block can\'t move. Thu 30 17:15–19:15 is the clean 2h home (after the McKenna assets wrap 17:15), and it also lightens Friday. Kaitlin hosts; Lee makeup 16:45–17:15. Nadir operates. No other shoots displaced.',
  },
  {
    id: 'pod-marisa-rachel',
    date: '2026-07-31',
    start: '15:30',
    end: '17:00',
    title: 'Marisa Peer podcast (YMYR) — guest Rachel Pringle Urb',
    type: 'podcast',
    location: STUDIO,
    speakers: ['marisa-peer', 'rachel-pringle'],
    crew: UNIT1,
    director: 'gareth',
    cameraOps: ['khairul'],
    priority: 6,
    status: 'confirmed',
    authorConfirmed: true,
    notes: 'PULLED 30 min earlier to Fri 31 Jul 15:30–17:00 (Gareth, 27 Jul — was 16:00–17:30). Rachel Pringle Urb (arrives 29th) on Marisa\'s "Your Mind, Your Rules" podcast, 90 min. Friday afternoon is wide open after the Eric masterclass (ends 14:00) — Lee\'s interview moved to Thursday. Marisa + Rachel both free; unit 1 (Khairul). Both women — one 60-min makeup call at 14:30. CONFIRM the new 3:30pm start with Matt/Rachel (was confirmed at 4pm). Rachel\'s own interview + assets follow this evening.',
  },
  // Lee Holden — Masterclass Marketing Assets (assets-lee-holden, was Tue 28 17:15–19:15) —
  // REMOVED (Gareth, 27 Jul): Lee is already in the studio Thursday for his 2h interview
  // (int-lee-holden, Thu 30 17:15–19:15), so the separate Tuesday assets shoot is dropped —
  // capture what's needed within/around the Thursday session instead.
  {
    id: 'int-maya',
    date: '2026-07-29',
    start: '16:30',
    end: '17:15',
    title: 'Author Interview: Gareth & Maya Raichoora',
    type: 'production',
    location: STUDIO,
    speakers: ['maya-raichoora', 'gareth'],
    crew: UNIT2,
    gareth: true,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    priority: 5,
    status: 'tentative',
    notes: 'MOVED to Wed 29 Jul 16:30–17:15 (source audit, 27 Jul). The earlier Thu 30 10:00 slot CLASHED with Maya\'s Juniors talk (Terrace Hall, Thu 30 10:00–10:45) — surfaced when her sessions were re-pulled from Author x Event. Wednesday is her one clear day (adult talk is Tue 28 15:00–16:00; Juniors is Thu 30 morning), so her interview lands here, off the heavy Tuesday, with no clash. Straight after int-zen-takai; makeup ~15:30–16:30.',
  },
  // Marisa Peer — Masterclass Marketing Assets (assets-marisa, was Tue 28 16:00–17:15) —
  // REMOVED (Gareth, 27 Jul), replaced in the Tuesday schedule by the Vishen ads shoot at
  // 15:00. Marisa is still in the studio Wed 29 for her 17:15–19:15 masterclass, so capture
  // any needed RTHA assets within/around that session (same pattern as Lee Holden's).
  {
    id: 'th-vishen-1',
    date: '2026-07-29',
    start: '12:45',
    end: '16:00',
    title: 'Vishen — Talking Heads (YouTube)',
    type: 'production',
    location: STUDIO,
    speakers: ['vishen'],
    vishen: true,
    gareth: true,
    crew: UNIT1,
    director: 'gareth',
    cameraOps: CAMERA_CREW,
    status: 'tentative',
    notes: 'EXTENDED to 12:45–16:00 (Gareth, 27 Jul — "we need this time for Vishen YouTube"): the Zen Takai interview was removed and its studio time reallocated here, giving a 3h15 Vishen solo talking-head run instead of 2h. Capped at 16:00 to leave a 15-min buffer before his 16:15 Main Stage slot. Vishen solo, unit 1, Gareth directs.',
  },
]
