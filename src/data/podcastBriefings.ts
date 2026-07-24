import type { PodcastBriefing } from './types'

/**
 * Scaling Wisdom podcast guest briefings for the YouTube agency.
 * Bios live in authors.ts (from the Airtable). These fields are web research
 * synthesised 6 Jul 2026 as a starting point for the agency's own vetting.
 * Reach figures are indicative — verify before booking.
 *
 * SLATE LOCKED (16 Jul, per Vishen's call): Vishen records only the podcasts he
 * rated ABOVE 2 stars in the Shoots Airtable — five in total. The eight low-star /
 * de-prioritised guests (Wineland, Jolene Brighten, Natalie Ellis, Nick
 * Santonastasso, Jamie Sea, Dan Brulé, Hal Elrod, and the earlier-cut Daniel
 * Priestley) have been removed from this page. Chiara King and Marisa Peer
 * podcasts are produced for those individuals, not for Vishen, and live in the
 * production slate rather than here.
 */
export const PODCAST_BRIEFINGS: PodcastBriefing[] = [
  // ===== Vishen's 5 confirmed Scaling Wisdom episodes, in recording order =====
  {
    personId: 'john-lee',
    episodeId: 'pod-john-lee',
    date: '2026-07-21',
    start: '16:30',
    who: 'British property/wealth-education entrepreneur and motivational speaker; co-founder of Wealth Dragons.',
    reach: 'Instagram @john_lee_official claimed ~2.2M (self-improvement-cartoon content), TikTok ~300K; Wealth Dragons company IG only ~9.5K; no significant personal YouTube. Large on paper but single-platform, uncertain authenticity, hustle-audience — transferable value to a personal-growth channel is questionable.',
    topics: ['property investing', 'passive income & wealth', 'entrepreneurship', 'social-media growth', 'motivational mindset'],
    credentials: 'Co-founder/former CEO of Wealth Dragons Group PLC (was Vienna-listed); author of "The Wealth Dragon Way" (Wiley); shared stages with Branson, Clinton, Sugar; Forbes feature (2020).',
    interviewPresence: 'Experienced, comfortable, story-rich, motivational — leans hype-y rags-to-riches over data. London Real, Unscripted with Spencer Lodge, plus smaller "how to get rich" slots. Polished salesmanship over analytical depth.',
    audienceOverlap: 'Partial and shallow — shares an "entrepreneur mindset / financial freedom" edge, but his audience is wealth-hustle/property/seminar-funnel driven, a different psychographic from Mindvalley’s consciousness base. Significant tonal mismatch.',
    fit: 'NICHE',
    fitReason: 'Brand-safety risk and audience-tone mismatch outweigh a large but single-platform, hustle-oriented following that doesn’t transfer to a consciousness-first channel.',
    angle: 'If pursued at all, a de-risked personal story: From a Takeaway Kitchen to Financial Freedom — steered away from any course/seminar promotion.',
    flag: 'SIGNIFICANT BRAND-SAFETY RISK: litigation with his own company (Wealth Dragons Group PLC, 2024); the PLC was delisted from the Vienna Stock Exchange (Jul 2024) citing the dispute; the UK property-seminar space around him carries documented high-pressure upsell + refund/"scam" complaints. Vet litigation status; never repeat "listed PLC / current CEO". Note: Vishen rated this ★9 and it is on the slate — legal vetting still advised.',
  },
  // Jeffrey Allen's Scaling Wisdom podcast (pod-ja) was CANCELLED (21 Jul — no time,
  // he flies 26 Jul), so his guest-briefing card is removed from the Podcast tab.
  // (He still guests on Marisa's YMYR podcast, which is Marisa's show, not a Scaling
  // Wisdom episode.) Fit/angle data preserved in git history if the episode revives.
  {
    personId: 'shi-heng-yi',
    episodeId: 'jul27-shy-fireside',
    date: '2026-07-27',
    start: '14:00',
    recordLocation: 'Main Stage — recorded live as the 27 Jul fireside with Vishen, cut into the first Scaling Wisdom launch episode (no separate studio shoot)',
    who: '35th-generation Shaolin master and headmaster of Shaolin Temple Europe; a global self-mastery figure.',
    reach: 'The standout. TEDxVitosha "5 Hindrances to Self-Mastery" 17M+ views; YouTube ~680K subs; Instagram approaching ~1M. Major proven cross-promo value and a demonstrated viral ceiling.',
    topics: ['self-mastery', 'discipline', 'mind-body integration', 'Kung Fu / Qi Gong', 'focus'],
    credentials: 'Headmaster, Shaolin Temple Europe; author of "Shaolin Spirit: The Way to Self-Mastery"; 30+ years of mind-body discipline.',
    interviewPresence: 'Proven at the highest level — Diary of a CEO (Apr 2025, 2hr+), Sounds True, Mulligan Brothers. Measured, precise, quietly authoritative with sticky one-liners. Fluent, deliberate English.',
    audienceOverlap: 'High — self-mastery, discipline and mind/body integration are squarely Vishen’s wheelhouse, same personal-growth/global-English demographic.',
    fit: 'STRONG',
    fitReason: 'Huge proven audience, documented viral track record, and a self-mastery message tailor-made for the channel, with DOAC confirming he performs in long-form.',
    angle: 'A Shaolin Master’s 5 Rules for Self-Mastery (and the One Habit Destroying Your Focus)',
    flag: 'THE LAUNCH EPISODE — captured on stage, so editing carries the whole first impression. Possibly over-exposed on the big podcasts; needs a fresh angle to avoid feeling like a rerun; deliberate pace needs tight editing.',
  },
  {
    personId: 'lorin-krenn',
    episodeId: 'pod-lorin',
    date: '2026-07-26',
    start: '14:00',
    who: 'Transformational teacher and founder of The Core Method; best known online as a masculine/feminine polarity and relationships teacher.',
    reach: 'Instagram ~347K (strongest channel, polarity/relationship quote-posts); own YouTube and a long-running podcast since ~2019. Solid mid-tier owned audience, real cross-promo value to a relationships-interested segment.',
    topics: ['masculine / feminine polarity', 'relationships', 'conscious sexuality', 'emotional presence', 'purpose'],
    credentials: 'Founder of the trademarked The Core Method (8-week); The Awakened Masculine; author of two books; hypnotherapist; hosts his own guest podcast.',
    interviewPresence: 'Hosts his own interview podcast and guests elsewhere. Intense, earnest, deep-relational; polished on his core topic but narrow — nearly everything routes back to polarity.',
    audienceOverlap: 'Good on the relationships/consciousness slice; weaker on biohacking, longevity, entrepreneurship.',
    fit: 'MEDIUM',
    fitReason: 'Relationships/polarity are proven Vishen topics and he brings a real 300K+ audience, but single-lane focus in a saturated niche caps the ceiling.',
    angle: 'Why Modern Relationships Are Failing: The Polarity You Lost',
    flag: 'Topic saturation; can read as gendered/traditionalist to some audiences; verify no positioning controversy before booking.',
  },
  {
    personId: 'maria-wendt',
    episodeId: 'pod-maria-wendt',
    date: '2026-07-30',
    start: '11:00',
    who: 'Online business coach specializing in low-ticket digital products and organic (non-ads) selling for women entrepreneurs.',
    reach: 'Instagram ~797K; a 40,000-member Facebook group in a 100K+ community; YouTube modest/undisclosed; products ~$7–$300. Real but niche, concentrated on IG + Facebook rather than YouTube — moderate, niche-skewed cross-promo.',
    topics: ['low-ticket digital products', 'online business', 'Instagram monetization', 'organic marketing', 'community building'],
    credentials: 'Built a 7-/8-figure digital-products business (self-reported $15–20M+); ~100K students; Forbes Coaches Council; no mainstream trade-published book. Single-mom-to-multimillionaire origin.',
    interviewPresence: 'Appears on business/marketing podcasts (Digital Social Hour, Success Story) and produces heavy self-published content. Practical, implementation-focused and salesy; leans on rags-to-riches + student income-proof. Not a mind/body/spirit interview name.',
    audienceOverlap: 'Weak on Vishen’s core themes — a marketing tactician, not a consciousness/longevity/spirituality voice. Only bridge is her single-mom transformation story and a generic "financial freedom for women" angle.',
    fit: 'NICHE',
    fitReason: 'A capable business/marketing tactician whose subject matter and salesy, income-proof style sit well outside Vishen’s personal-growth lane, with only a thin transformation-story bridge.',
    angle: 'Single Mom to Millions: The Mindset Shift Behind Building an Income From Nothing (transformation-led, not a how-to)',
    flag: 'Hard-business/marketing focus risks feeling like a "make money online" pitch; income claims self-reported. Steer to the single-mom transformation story, not tactics.',
  },
]
