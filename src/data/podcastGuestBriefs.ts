import type { PodcastGuestBrief } from './types'

/**
 * Deep per-guest briefings for Vishen's "Scaling Wisdom" podcast, built on the
 * 3-Act blueprint (Cold Open → Origin → Blueprint → Tear Down the Paper Wall →
 * Curveball) and Mindvalley's Social Media Mastery storytelling/hook principles.
 * Researched 14 Jul 2026 by a per-guest research pass: mined from Mindvalley
 * Quest/Mastery transcripts where the guest has content, otherwise from deep web
 * research. The vishenNotes field flags anything to verify with the guest on-air.
 */
export const PODCAST_GUEST_BRIEFS: PodcastGuestBrief[] = [
  {
    id: 'john-lee',
    name: 'John Lee',
    oneLiner: `The dyslexic kid told "you can't even spell" who became a self-made property millionaire at 27 — now teaching that money is energy before it's ever a spreadsheet, and that the best-KNOWN beats the best.`,
    movementFrame: `John turned one reframe — that wealth is a frequency you tune before it's a strategy you execute — into books, a Mindvalley Quest ("The 7-Figure Creator") and a following in the millions. The tension worth mining: he preaches "money is energy" to hard-nosed entrepreneurs AND "here's the funnel" to spiritual seekers, and gets both camps to follow. How do you sell woo to bankers and maths to mystics? (Grounded in his own Mindvalley teaching, not a web bio.)`,
    hasLocalContent: true,
    sources: [
      `Quest: "The 7-Figure Creator" (his flagship Career Quest) — full transcript`,
      `Masters of Manifesting 2025 — "Manifesting Wealth" (Day 1) + "The Wealth Ecosystem" (Day 2)`,
      `Manifesting Mastery 2025 — "Money Flow: Unlocking the Energetics of Financial Abundance"`,
      `Social Media Mastery 2025 — "From Followers to Freedom: Building Passive Income with Social Media"`,
      `Web (verify): Wealth Dragons history, exact book title/publisher, self-reported figures`,
    ],
    background: `British entrepreneur, investor, author and speaker of Chinese heritage, raised in the north of England (his mum was a chef — he now talks about "retiring my parents" and turning her recipes into an AI so "our family recipes live forever"). Openly dyslexic, which he weaponises rather than hides ("you can't even spell — I'm rich"). Self-made property millionaire at 27 after selling his car to pay a mentor £10k and buying stakes in 35 houses in six months on other people's money. Co-founded Wealth Dragons (UK wealth/property education — see SENSITIVE below). Now rebrands as an "AI expert / futurist" chasing an "AI consulting" venture, and teaches the Mindvalley Quest "The 7-Figure Creator." Met Ken Honda at A-Fest Cartagena, which he credits for both his Hay House book deal and his connection to Vishen. A genuine friend of the Mindvalley world.`,
    originStory: `The story to pull live is his SPEAKING origin, not a CV. In property he wrote deal reports; a man named Steve Foley invited him to speak — he arrived to "six people, and one guy stood at the door in case it was really bad," and read from his guide. Two weeks later, another call: he drove three hours, the car park was full ("must be a wedding"), 250 people, introduced as "the author," and finished to a standing ovation. A man asked the price of his report — "I said, I don't know, £47. He takes out his wallet, gives me £50 and says keep the change. THAT'S when I realised what's in my head is worth more to other people than it does to me." It escalated to 10,000-seat arenas alongside Alan Sugar and Tony Robbins. Underneath it: the 35-houses bet (he sold his car to pay a mentor everyone called a scammer), and the young man who stood outside a Lamborghini showroom being told "stop dreaming, John" — who now owns ten. The manifestation beat: at A-Fest, a written intention ("I want to become a best-selling author") passed around the room came back to him via Ken Honda, who said "book deal." One year later, Hay House signed him.`,
    framework: {
      name: 'Money = Energy + the Financial Thermostat (with Make / Keep / Multiply underneath)',
      summary: `His spine is a perspective shift: "Energy is the cause, money is the effect — and most people reverse it." Your relationship with money is energetic FIRST, practical second, so the question isn't "what strategy makes me rich?" but "who do I have to become to attract it?" The mechanism he teaches is the FINANCIAL THERMOSTAT — everyone has a set-point ("mine was £50k, because that's what I saw growing up"); you can't out-earn your thermostat until you reset it (beliefs, environment, the five people around you). Once the frequency is right, the mechanics take over: MAKE IT / KEEP IT / MULTIPLY IT ("most people only learn to make it, which is why lottery winners go broke"), a 30/30/30/10 income split (own business / others' businesses / growth assets / moonshot), and for creators, AWARENESS × ATTENTION = INCOME — because "the best KNOWN beats the best." Supporting laws: scarcity chokes the flow like gripping a hose; capacity is a muscle ("go from an espresso cup to a water tank"); "money is a magnifier — it makes you more of who you already are."`,
    },
    paperWall: `His genuinely spiky, debate-worthy positions (this is the clip gold): "SAVING money is a bad strategy" and "DON'T pay off your mortgage — your money's not working for you." "If hard work made people wealthy, every nurse and doctor would be rich." His own mum's rule — "never buy anything you can't afford to pay for in full" — is, he says, "the exact belief that keeps working people poor" (his billionaire friends buy with other people's money). "SELL it first, then build it" (not the other way round). Followers and likes are vanity — "I'd rather have 100,000 emails than a million followers," and "hater comments help you — the algorithm doesn't know it's a hater, it just sees engagement." And the values curveball: "giving money is the LOWEST form of giving — your time is the highest, because money you can always make back."`,
    clipMoments: [
      `"You can't even spell — I'm rich." The dyslexia reframe: mocked online for his spelling, he flips it into his punchline. (Vulnerability + identity — the trust-builder.)`,
      `"Saving money is a bad strategy." / "Don't pay off your mortgage." The myth-bust that stops the scroll — a hard perspective shift on the one topic everyone cares about (money).`,
      `The Steve Foley origin: six people, one man at the door "in case it's bad" → a standing ovation two weeks later → a stranger presses £50 into his hand → "that's when I realised what's in my head is worth more to others than it does to me." (Tension-to-payoff story arc.)`,
      `The Slovakia girl: mid-talk, he pledges to match every donation for a child's operation — "by the time I walked off stage the money was raised, and the next year I saw her again. We saved her life." (The emotional, recency-effect closer.)`,
      `"Want to become a millionaire? Help a million people. Want to become a billionaire? Help a billion." — the contribution reframe, tailor-made for Vishen's audience.`,
    ],
    questions: {
      coldOpen: [
        `You say if hard work made people rich, every nurse and doctor on earth would be a millionaire. So if it isn't work — what actually decides who gets wealthy and who doesn't?`,
        `You tell people to STOP saving money. To most of us that sounds insane. Defend it.`,
      ],
      act1_origin: [
        `You're dyslexic, and people still comment "you can't even spell." You've turned that into a punchline — "you can't spell, but I'm rich." Take me to the moment it stopped hurting and started fuelling you.`,
        `Your first proper talk: six people showed up, and one guy stood by the door in case it was a disaster. What happened two weeks later that changed your life?`,
        `You sold your car to pay a mentor £10,000 and everyone told you you'd been scammed. Six months later you owned stakes in 35 houses. Walk me through the night you made that bet.`,
        `There's a young John standing outside a Lamborghini showroom being told "stop dreaming." You own ten now. What was actually happening in your head at that window that everyone else missed?`,
      ],
      act2_blueprint: [
        `Explain the financial thermostat. You say yours was set at £50k because that's what you saw growing up — so how does someone stuck at their number actually reset it?`,
        `"Money is energy, energy is the cause." Give me the version a total sceptic — the spreadsheet guy — could test for himself on Monday morning.`,
        `Your whole model is make it, keep it, multiply it. Why does almost everyone only ever learn the first, and that's exactly why lottery winners are broke in five years?`,
        `You've got a split — 30/30/30/10 — for what to do with money once it arrives. Give me the version a 25-year-old on an ordinary salary could start this week.`,
      ],
      act3_paperwall: [
        `Your mum told you: never buy anything you can't afford to pay for in full. It sounds like wisdom. You say it's the exact belief that keeps working people poor. Why is she wrong, and what do your billionaire friends do instead?`,
        `You'd rather have 100,000 emails than a million followers, and you say hater comments actually help you. Unpack that — it's heresy from a man with millions of followers.`,
        `You tell creators "the best KNOWN beats the best," and "content for free, implementation for a fee." What does the person who's brilliant but invisible need to hear?`,
      ],
      curveball: [
        `You have a Chinese metaphysics teacher who walks your house with a compass, and a fountain in the garden for money flow — and you're also the guy with the spreadsheet and the funnel. How do those two live in the same head?`,
        `You're retiring your parents, and turning your mum's recipes into an AI so they outlive her. What did chasing money finally teach you that the money itself couldn't buy?`,
        `On a stage in Slovakia there was a little girl, a tube up her nose, fundraising for an operation. Tell me what you did in the middle of your own talk — because it says more about your relationship with money than any strategy in your book.`,
      ],
    },
    vishenNotes: `THE ONE BIG IDEA (per SMM's long-form principle — build the whole episode on this): "You don't get rich by working harder, you raise your financial thermostat. Money is energy: energy is the cause, money is the effect, and almost everyone has it backwards." It fuses consciousness (energy, identity, beliefs) with hard mechanics (Make/Keep/Multiply, 30/30/30/10) and hits the "big three" (money) that every travelling clip needs. META-ANGLE worth telling on-air: it was YOU (via Ken Honda at A-Fest) who set his book deal in motion — a genuine shared-world story. PRODUCTION DIRECTIVES (from Social Media Mastery): open on a hook in the first line (a perspective shift, not a bio); hold him to the ONE big idea and cut the AI-tooling tangents; DON'T let him give the payoff early on the story beats (Steve Foley, Slovakia, the lost-and-regained million) — make the viewer wait; his contrarian lines ("saving is bad", "don't pay your mortgage") are the highest-performing clip candidates (perspective shift + high stakes on money); mine 3-4 self-contained clip moments where his answer is quotable on its own. TWO PERSONAS: wealth-and-energy John (rich, emotional, on-brand) vs AI-futurist John (product demos) — steer hard to the former. SENSITIVE / VERIFY: (1) WEALTH DRAGONS — not in his Mindvalley content, but external reporting ties him to a UK property-education company that hit financial/reputational trouble; do NOT raise as fact, vet with legal before any reference, and be ready if he volunteers the "lost and made back a fortune" comeback. (2) Self-reported numbers (£100k/keynote, "35 houses in 6 months", unicorn stats) are his claims, not verified. (3) He makes flat financial calls ("don't pay your mortgage", Bitcoin) — frame as opinion, not advice. (4) He live-demos his own funnel software — steer him off the sales pitch.`,
  },
  {
    id: 'jeffrey-allen',
    name: 'Jeffrey Allen',
    oneLiner: `The software engineer who became one of the world's most-trusted energy healers by turning "woo-woo" intuition into a step-by-step system a skeptic can follow.`,
    movementFrame: `Jeffrey took energy healing and intuition out of the fringe and rebuilt it as "graduate-level training anyone can digest." By stripping away the cult, the religion and the jargon and answering the one question nobody in his field was asking — "why would this help my everyday life?" — he has introduced 1M+ people to personal energy work. The movement: making intuition and self-healing as normal, teachable and measurable as physical fitness.`,
    hasLocalContent: true,
    sources: [
      `Quest transcript: Duality (SOUL)`,
      `Quest transcript: Unlocking Transcendence (SOUL)`,
      `mindvalley.com/duality · iamjeffreyallen.com · blog.mindvalley.com/jeffrey-allen`,
    ],
    background: `Jeffrey Allen holds degrees in Computer Science and Mathematics and worked as a software engineer, including a job with the U.S. Department of Energy. For roughly 15 years he lived a double life: software engineer by day, and by night a student of clairvoyant training, energy-healing apprenticeships and trance mediumship, serving on the board of the clairvoyant school he trained at. By 2005 he had flipped his life — energy work became his career, engineering his hobby — and he used his engineer's mind to organise what he'd learned into a teachable system. He founded his own teaching centre in Japan, then met Vishen at A-Fest, which led to the Mindvalley Quests Duality and Unlocking Transcendence. He records alone (no crew) from Sedona, Arizona for its "activation energy." Mindvalley credits him with introducing 1M+ people to personal energy healing.`,
    originStory: `He wasn't looking for any of it. Finishing degrees in Computer Science and Math, already hired by the U.S. Department of Energy ("a whole different kind of energy"), certain that success came from hard work and a sharp mind, Jeffrey started having experiences he couldn't explain: seeing light around people, speaking telepathically, spontaneous energy-healing moments. The scientist in him couldn't dismiss the data, so he did what any good scientist would — he started experimenting, quietly, so people wouldn't think he'd gone off the deep end. For 15 years he lived two parallel lives. The turning point wasn't mystical, it was a measurement: he realised he was making more real impact in a few weekend hours of healing than in a month at his "real" job. So he leaned in — went full-time, built a system, founded a centre in Japan, and still felt he was playing small. Then he met Vishen at A-Fest, who asked the question that reframed his whole life's work: not HOW does energy work, but WHY — why would an ordinary person want this, and what problem does it solve on a Tuesday? That single reframe became Duality.`,
    framework: {
      name: 'Spiritual Fitness (the awareness workout)',
      summary: `Jeffrey's core reframe is that intuition and energy work aren't gifts you either have or don't — they're fitness you build, exactly like physical fitness. Most people fail at spiritual practice because their "awareness fitness" is too low. His system trains that base level with a repeatable 6-step activation loop: (1) self-assessment / break old habits, (2) an easy success, (3) a challenge, (4) a "wow" (do something you didn't think was possible), (5) practice, (6) share to integrate. He separates the three ways humans learn — information (forgettable), activation (assisted practice that "never goes away once you get it"), and practice (the only non-negotiable) — and deliberately weights training 10% information / 90% activation. In Duality this is delivered as engineer-clean "energy tools": grounding, running energy, the gold sun, the permission rose, clearing foreign energy, chakra healing, and clearing limiting beliefs stored as energetic "pictures."`,
    },
    paperWall: `The conventional wisdom Jeffrey broke: that energy healing and intuition are woo-woo, fringe, faith-based, something you're either born with or not, and something that requires joining a cult or changing your religion. His spiky counter-position: he's a Department-of-Energy software engineer who treats energy like a system to be debugged; intuition is a trainable fitness, not a gift; "everyone is intuitive, everyone is a healer"; and a total skeptic can run the exercises and get tangible results without believing a word up front. A sharper wall: your deepest truths aren't truth at all — they're old energy stored as "pictures" that literally filter what you're able to perceive.`,
    clipMoments: [
      `The measurement that changed his life: "I was making more impact in a few hours with my hobby than an entire month in my real job."`,
      `The reframe from Vishen: he'd spent his whole career "preaching to the choir" and had never asked WHY an ordinary person would want energy work — until Vishen made that the whole point.`,
      `"Everyone is intuitive. Everyone is a healer. Everyone is amazing. And that includes you." — delivered by a former software engineer, not a mystic.`,
      `"Your truth may just be beliefs — old energies stored as pictures" — and those pictures make it literally hard to see anything that contradicts them.`,
    ],
    questions: {
      coldOpen: [
        `You had the American dream — a math degree, a software job at the Department of Energy — and one day you started seeing light around people and hearing thoughts. Most people would book a doctor. What did you do instead?`,
        `You told nobody for years. What were you afraid people would think?`,
      ],
      act1_origin: [
        `For 15 years you lived two lives — engineer by day, secret energy healer by night. What was the exact moment you realised you were living a lie in one of them?`,
        `You've said you were making more impact in a weekend hobby than in a month at your real job. When that math hit you, what did it cost you to walk away from the salary and the status?`,
        `You were already a full-time healer, running your own centre, when you met Vishen at A-Fest. He asked one question you'd somehow never asked in your entire career. What was it, and why did it stop you cold?`,
        `Before Vishen, you were "preaching to the choir." What belief about your own audience was quietly keeping your work small?`,
      ],
      act2_blueprint: [
        `You treat intuition like physical fitness, not a gift. Break that down for someone convinced they're "just not intuitive" — why is that like saying you're "just not fit"?`,
        `You say most spiritual programs fail people for the same reason a beginner fails a marathon. What's the missing "base level of fitness" nobody trains?`,
        `You split learning into information, activation and practice, and say information is basically forgettable entertainment. Why did you build your training to be only 10% teaching and 90% doing?`,
        `Give me the one tool a total beginner could run tonight — the grounding cord, or "the centre of your head" — and tell me what actually changes in their day tomorrow.`,
      ],
      act3_paperwall: [
        `A lot of people hear "energy healer" and think cult, incense, giving up their religion. You're an engineer who thinks energy is a system to debug. Why is almost everything people assume about this work wrong?`,
        `You tell skeptics: don't believe me, just run the exercise and decide for yourself. Why is that more honest than asking for faith — and why does the wellness industry rarely do it?`,
        `You teach that your deepest beliefs aren't truth, they're old "pictures" that literally stop you seeing reality. How much of what someone is certain about right now is just stored energy filtering their eyes?`,
        `You say "everyone is a healer." That threatens an entire industry built on gatekeeping healing to experts. Do you mean that literally?`,
      ],
      curveball: [
        `You once figured out multi-location awareness from a near-rollover in a 4x4 — a voice in the trees said "let off the brake," and later, in meditation, you went back to see who saved you. Who was standing there?`,
        `You explained one of your core teaching principles using your puppy Lucas and a daybed he couldn't climb onto. How did a dog crack the code on how humans actually learn?`,
        `You record everything alone in Sedona — no crew, helicopters overhead, imperfect audio, on purpose. Why would a teacher deliberately choose to look less polished?`,
      ],
    },
    vishenNotes: `STRONGEST EMOTIONAL BEAT: the "secret double life" and the impact-per-hour realisation — that's your Act 1 spine and it's genuinely vulnerable (fear of being seen as crazy). BEST SPIKY LINE FOR ACT 3: "everyone is a healer" + "your truths are just pictures that stop you seeing reality." MOVEMENT HOOK: the Vishen "why" reframe is meta-perfect for Scaling Wisdom — you personally are the character who turned Jeffrey's expertise into a movement. Lean into that on-air. BEST CURVEBALL: the 4x4 / future-self story (uncanny, visual); the puppy Lucas story is warmest for the humanising close. Coined terms are clip gold: "sleepitation," "visualization insecurity syndrome," "boundary ninja." VERIFY LIVE: the 1M+ reach figure is Mindvalley marketing copy; the Japan centre and board role are from his own narration; confirm the A-Fest year/location with him. Duality = foundational; Unlocking Transcendence = the advanced 60-day follow-on — don't conflate.`,
  },
  {
    id: 'shi-heng-yi',
    name: 'Shi Heng Yi',
    oneLiner: `Shaolin master and headmaster of Shaolin Temple Europe whose TEDx talk on the "5 hindrances to self-mastery" turned an ancient monastic discipline into a self-development movement for millions.`,
    movementFrame: `Shi Heng Yi took a 1,500-year-old monastic tradition trapped behind temple walls and translated it into a language a stressed, over-thinking modern audience could actually use — then scaled it: a 12-month "Way to Self-Mastery" online academy, a large YouTube following, and a TEDx talk watched tens of millions of times. The extraction: how do you turn something sacred, slow, and non-commercial into a global movement WITHOUT diluting it into another hustle-culture self-help brand?`,
    hasLocalContent: false,
    sources: [
      `shaolintemple.eu · shihengyi.online · /self-mastery-training`,
      `TED — "5 Hindrances to Self-Mastery"`,
      `Diary of a CEO transcript (singjupost) · Dr Chatterjee · Behind Greatness`,
    ],
    background: `Born 1983 in Kaiserslautern, Germany, to ethnic-Chinese parents who fled Vietnam/Laos as refugees in 1979. His father, a martial-arts enthusiast, enrolled him at Shaolin Kung Fu training at age 4. In 2001 he became a disciple of Songshan Shaolin monks sent from China to establish the order in Germany, receiving the monastic name Shi Heng Yi (35th generation Shaolin lineage). He pursued a full academic/professional life in parallel for ~20 years. In 2011, aged 28, he founded Shaolin Temple Europe in the Palatinate Forest (Otterberg, Germany), a live-in monastery where students train Kung Fu, Qi Gong, Chan (Zen) meditation and self-mastery. He rose to global fame after his January 2020 TEDxVitosha talk "5 hindrances to self-mastery." Today he teaches through Shaolin.Online, a 12-month "Way to Self-Mastery" program, retreats, and a large YouTube channel. Married with a young son.`,
    originStory: `The emotional spine is his father. Shi Heng Yi was put into brutal Shaolin discipline at 4 ("if you got a B, why not an A? if 100 pushups, why not 150?") — a childhood of "never enough" that built self-reliance and emotional walls but also disconnection. He spent 20 years partly chasing academic success to earn his father's recognition. His father died of cancer when Shi Heng Yi was 28 — and per Asian tradition he was instructed NOT to cry, because grief binds the departed spirit to earth. He never received the explicit approval he was chasing, and says that ache still drives him — now he is learning to give that validation to himself, and consciously refusing to repeat the "never enough" pattern with his own newborn son. His father's death is also what pulled him home in 2011, where — disillusioned by institutional squabbling between martial-arts factions — he broke away to found his own temple. The movement was born from grief, not ambition.`,
    framework: {
      name: 'The 5 Hindrances to Self-Mastery',
      summary: `Self-mastery is not about adding control; it is about removing the 5 states of mind that blind you to clear decisions. (1) Sensual Desire — chasing a pleasant sensation through the "five gates" until craving becomes obsession. (2) Ill-Will — aversion, rejection, dislike. (3) Sloth & Torpor — heaviness of body and dullness of mind. (4) Restlessness — the mind fleeing into past regret or future fantasy. (5) Skeptical Doubt — indecisiveness that disconnects you from your own goals. His practical tool for any hindrance is to make it RAIN: Recognise it, Accept it, Investigate why it's there, Non-identify with it. Crucially, discipline alone is useless without AWARENESS — you must feel the pattern the instant it begins. His 12-month academy runs chronologically: Months 1-3 refine body/mind awareness, 4-6 nourish and strengthen, 7-9 flexibility and motion, 10-12 clarity and calmness of mind.`,
    },
    paperWall: `The self-help world sells you MORE: more goals, more identity, more affirmations, more doing. Shi Heng Yi's break: mastery comes from REMOVING, not adding. "There is nothing I can give to anyone — I try to take stuff away that covers that you are already complete." He rejects goal-setting culture outright, arguing ambitious goals come from a psychological position of LACK. He refuses to chase happiness ("I'm not searching for happiness, I'm searching for peace" — because happiness requires sadness as its opposite). And he tells people to release identity, not build it. He also breaks the fantasy that a monastery is an escape — Shaolin Kung Fu, he says, literally means "walking through the valley of pain"; the temple is training TO meet difficulty, not to hide from it.`,
    clipMoments: [
      `The father story: 20 years chasing a recognition he never got, forbidden to cry at the funeral because grief "binds the spirit to earth" — and now giving himself the approval his father never spoke.`,
      `"I'm not searching for happiness. I'm searching for peace" — the reframe that quietly indicts the entire happiness-industrial complex.`,
      `"It's not about what you possess — it's about what of your possessions are possessing you."`,
      `"Shaolin Kung Fu literally means walking through the valley of pain" — reframing the monastery as a gym for suffering, not an escape from it.`,
    ],
    questions: {
      coldOpen: [
        `A four-year-old is told: you did 100 pushups, why not 150? You got a B, why not an A? That was your childhood. Did that make you strong, or did it break something?`,
        `You've been watched by tens of millions of people and you've said you felt completely alone. What does that teach you about everything the rest of us are chasing?`,
      ],
      act1_origin: [
        `Your parents fled Vietnam as refugees and your father put you in a Shaolin temple at four years old. What was he actually trying to give you — or protect you from?`,
        `Your father died when you were 28, and you were told not to cry. Walk me through that room. What did that silence cost you?`,
        `You spent twenty years chasing an approval from your father that never came. He's gone now. So who are you training for today?`,
        `In 2011 you walked away from the martial-arts institutions and built your own temple in a forest. What made you say "enough — I'll do this my own way"?`,
      ],
      act2_blueprint: [
        `You say there are five hindrances that stop any human from mastering themselves. If I only understood ONE of them today, which one is quietly running most people's lives?`,
        `Most people think discipline is the answer. You say discipline is almost useless without something else. What's the missing piece — and why does willpower keep failing us?`,
        `Teach me the RAIN method like I'm one of your students on day one. What do I actually DO the next time desire or doubt hijacks me?`,
        `You built a 12-month path — awareness, then strength, then flexibility, then calm — in that exact order. Why does the sequence matter? What happens to people who skip to the calm part?`,
      ],
      act3_paperwall: [
        `The entire self-help industry tells us to set bigger goals and build a stronger identity. You say the opposite — release identity, drop the goals. Aren't you telling ambitious people to give up?`,
        `You said, "There is nothing I can give anyone — I only take away what covers the fact that you are already complete." If that's true, what is anyone paying you for?`,
        `You refuse to chase happiness. For a Western audience raised to pursue it, that sounds almost offensive. Why is peace the better bet?`,
        `You say a monastery isn't an escape from pain — it's a place you go to walk straight into it. Why would anyone volunteer for more suffering?`,
      ],
      curveball: [
        `You have a young son now. When he brings you a B and asks "is that good enough?" — knowing what your own childhood did to you — what are you going to say?`,
        `If tomorrow the temple, the YouTube channel, the whole movement disappeared — no students, no cameras — would you still get up at 4am and train? Why?`,
        `You say "you come with nothing, you go with nothing — the universe will make sure of it." So what, in your view, is actually worth doing with the years in between?`,
      ],
    },
    vishenNotes: `ACCURACY FLAGS: (1) the "5 hindrances" are NOT original to him — they're the classical Buddhist pañca nīvaraṇāni. His contribution is popularising/repackaging them for a modern audience via the viral TEDx. Credit the translation and the movement, not the invention. (2) RAIN (Recognise/Accept/Investigate/Non-identify) is a widely-used mindfulness tool (associated with Tara Brach), not his invention — treat as a tool he teaches. (3) net worth and subscriber counts come from tracker sites — soft numbers; say "one of the most-watched TEDx talks" rather than a precise figure. (4) the rich personal material (father's death, "never enough," loneliness despite fame, the son) is largely from his Diary of a CEO appearance — mine that vein; it's the emotional-contrast gold. (5) he is genuinely soft-spoken and deliberate — slow down, sit in silence, let pauses do the work; pushing for punchy soundbites will make him retreat. (6) MOVEMENT THESIS friction: he is arguably ANTI-scale-for-its-own-sake — he built a large movement while preaching detachment from outcomes. That contradiction IS the episode. (7) confirm the 35th-generation lineage number with his team before stating on air.`,
  },
  {
    id: 'lorin-krenn',
    name: 'Lorin Krenn',
    oneLiner: `The man who turned 3am grief-poetry into a global masculine-feminine movement — a relationship teacher who says desire dies the moment a couple becomes "equal" in the wrong way.`,
    movementFrame: `Lorin took the most private thing imaginable — poems he woke at night to scribble down while healing his own trauma — and built a 347K+ Instagram following, two books, a 160-episode podcast, and a trademarked coaching method (The Core Method) around one claim: that 99% of people suffer in their intimate lives because they've lost the polarity between masculine and feminine. The movement question: how did private pain, written for no one, become a teaching millions now repeat back to him?`,
    hasLocalContent: false,
    sources: [
      `lorinkrenn.com/about · /trainings/the-core-method · /trainings/deep-polarity-program`,
      `Book preview — Understand Women Better (origin story) · Love, Relationships & Awakening (2024)`,
      `podcast.lorinkrenn.com · mkpusa.org interview`,
    ],
    background: `Internationally recognised transformational teacher, coach, speaker, author and IAPCP-accredited hypnotherapist (trained under Paul McKenna). Creator of The Core Method, a trademarked coaching framework. Teaches masculine-feminine polarity, conscious relationships and intimacy. Author of two books: "Understand Women Better" and "Love, Relationships & Awakening" (Feb 2024). Hosts the podcast "Masculine & Feminine Dynamics" (also "The Core"), 160+ episodes. Built his audience on Instagram (started Nov 2015, ~347K followers) via poetic, aphoristic relationship writing. Runs the Deep Polarity Program (8-week couples immersion), The Awakened Masculine Program, and Healing the Father Wound. Married; frequently frames his own marriage as his living laboratory.`,
    originStory: `His father died in his arms when Lorin was 15, after a three-year battle with colon cancer — "For three years, I slowly watched my father becoming thinner and weaker each second." The trauma triggered years of intense daily anxiety and Neurodermatitis, an autoimmune skin condition that left him with constant rashes and open wounds. In his own words: "I hated life. I hated waking up." He escaped through sleep, breathwork and spiritual literature — which regulated him but left a hole. Then a sharper failure: despite trying to be "spiritual," he was "entirely out of integrity" in his dating life — a charismatic serial dater his friends nicknamed "Casanova," who felt "empty and depleted within." The turn came in his second serious relationship, which he treated as a "training ground." When it ended, heartbroken, "I made the decision to become the man I have always yearned to be, and a new fire awoke within me." He began waking in the middle of the night to write — poetry about the feminine "downloaded" faster than his mind could explain: "My mind could not understand women, but my heart did, and it was crystal-clear." Clients had breakthroughs, he posted the writing publicly, and hundreds of messages poured in. His father — who wanted him to become a physicist — had left him with no role model for the emotional questions Lorin was drawn to; the movement is, in part, him building the framework he wishes he'd been handed.`,
    framework: {
      name: 'The Core Method',
      summary: `A trademarked, discipline-agnostic methodology built on one guiding principle: "Go to the core — quickly, precisely, and compassionately." Krenn's claim is that most coaching and self-work "remains stuck at the mind level," treating symptoms; The Core Method pierces surface-level stories to find the true root of a pattern or rupture, so change is durable. In the relationship application, the "core" is polarity: every partnership has a masculine (grounded, present, clear, energetically leading) and feminine (open, radiant, fierce) pole, and desire lives in the charge between them. The masculine partner's job is to create safety ("it is our duty as men to make women feel safe again") and hold space for the full range of the feminine. Delivered as a 9-week coach-certification training and, for couples, as the 8-week Deep Polarity Program.`,
    },
    paperWall: `The modern belief that equality in love means sameness — that the healthiest couple is a 50/50 pair of interchangeable best friends who've flattened out any "gendered" roles. Krenn argues the opposite: when a couple erases polarity, they also erase desire; someone must energetically lead and someone must radiantly receive (regardless of gender or orientation) or the erotic charge collapses. His spikier corollaries: "true acceptance and true sacred love never means putting up with someone's shadow — it means calling them out"; and that the rational mind is the wrong tool entirely — "only your heart can understand the feminine." In an era suspicious of anything resembling traditional gender roles, he tells men they have a duty to lead and make women feel safe, and tells women that polarity crumbles the moment they abandon their own inner voice.`,
    clipMoments: [
      `"My father died in my arms. I was 15. For three years I watched him become thinner and weaker — and I woke up every day with anxiety and open wounds on my skin." (raw origin — pain before wisdom)`,
      `"My friends called me Casanova. I got every number, every woman. And I felt completely empty." (the shameful before-state that sets up the turn)`,
      `"My mind could not understand women. But my heart did — and it was crystal clear." (the reframe that made him teachable)`,
      `"True love isn't putting up with someone's shadow. It's loving them enough to call it out." + "It is our duty as men to make women feel safe again."`,
    ],
    questions: {
      coldOpen: [
        `You said 99% of people are quietly suffering in their intimate lives and don't even know why. What's the one thing almost every couple gets wrong?`,
        `You built a movement out of poems you woke up at 3am to write — for no one. Why did the most private thing you'd ever made become the thing millions repeat back to you?`,
        `You teach that the moment a couple becomes "equal" in a certain way, desire dies. Say that to the person who thinks they have a perfectly happy relationship.`,
      ],
      act1_origin: [
        `Your father died in your arms when you were 15 — and he'd wanted you to become a physicist, not whatever this is. What did losing him with that unfinished expectation between you actually do to you?`,
        `Before any of this, your body was covered in rashes and open wounds and you woke up hating being alive. Take me to the lowest morning. What was going through your head?`,
        `Your friends called you "Casanova" — you could get any woman, and you felt completely empty. What was the exact moment you realised the charm was the problem, not the win?`,
        `You say a new fire woke in you the night a relationship ended and you decided to "become the man you'd always yearned to be." What did that man do the next morning that the old you never would have?`,
      ],
      act2_blueprint: [
        `You called it The Core Method — "go to the core, quickly, precisely, compassionately." Most coaching, you say, stays stuck at the mind. What does "the core" actually look like when you find it in someone in real time?`,
        `Give me the mechanics of polarity. If desire lives in the charge between a masculine and a feminine pole — what's the specific move that kills that charge in an ordinary Tuesday-night marriage?`,
        `You tell men their duty is to "make women feel safe." That word gets used a lot and understood rarely. What does safety mean that most men completely misread?`,
        `You say the mind literally cannot understand the feminine — only the heart can. As a teacher, how do you teach something you insist can't be understood intellectually?`,
      ],
      act3_paperwall: [
        `The culture says the ideal couple is 50/50, best friends, roles dissolved. You say that's exactly how couples kill their desire. Why is the thing everyone's aiming for quietly castrating their relationships?`,
        `You teach that someone must lead and someone must receive — even in same-sex relationships. To a listener hearing "traditional gender roles" and getting uncomfortable, what are they misunderstanding?`,
        `You said sacred love is NOT putting up with someone's shadow — it's calling it out. Where's the line between that and just being controlling or judgmental of your partner?`,
        `What's the belief about relationships you used to hold and teach, that you now think is actively harmful — that you had to publicly walk back?`,
      ],
      curveball: [
        `You wake in the night with "downloads" you have to write down and you say you don't know where they come from. Be honest — do you actually believe you're the author of your work, or the antenna?`,
        `You teach millions how to have safe, alive relationships. What's the fight you and your wife have that you still can't fix with any of your own frameworks?`,
        `If your 15-year-old self — holding his dying father's hand, no role model, covered in rashes — could see the man teaching this today, what would he not believe?`,
      ],
    },
    vishenNotes: `STRENGTHS: the origin is unusually cinematic and self-incriminating (father dying in his arms at 15; autoimmune disease; the shameful "Casanova" phase). That before→after arc is pure extraction gold — push hard on the pain and shame before letting him deliver wisdom; mystery beats value. The paper wall (polarity vs "equality-as-sameness") is genuinely spiky and clips well, but it's POLARIZING — masculine/feminine "roles" reads to some as regressive gender essentialism. Lean into the tension productively ("say this to the feminist in the room") but let Lorin define terms first (he explicitly says polarity is not about biological sex or orientation). ACCURACY FLAGS: (1) nationality is NOT confirmed — the name reads Germanic/Austrian but no source states it; don't assert. (2) age at father's death: his book says 15 (trust that). (3) reach: ~347K on Instagram — frame as "hundreds of thousands of engaged followers plus millions of content views," not "millions of followers." TONE: he speaks in a poetic, devotional register — puncture the poetry occasionally with a blunt "okay, but on an ordinary Tuesday night, what does that actually look like?"`,
  },
  {
    id: 'maria-wendt',
    name: 'Maria Wendt',
    oneLiner: `The business coach who built an 8-figure empire selling $27 courses to ~150,000 women — proving you can out-earn the high-ticket gurus while working roughly one day a week.`,
    movementFrame: `Maria turned one belief into a movement: that ordinary women don't need a high-ticket funnel, a big team, or a launch calendar to get rich online. She democratised "making money online" by making the price of entry $27, and gathered a 316,000-member Facebook tribe around it. Her wisdom is a permission slip: sell cheap, sell daily, stay small, and keep your life.`,
    hasLocalContent: false,
    sources: [
      `scottdclary.com / successstorypodcast.com interview`,
      `joshmasters.substack.com — teardown of the $27 comment-to-DM funnel`,
      `loriharder.com · bossbabe podcast · mariawendt.com (product ladder + FB group rules) · Forbes Coaches Council`,
    ],
    background: `US-based business & marketing coach who teaches practical, step-by-step online-business and organic-marketing strategy. She has generated roughly $20M selling digital products, and now runs at ~$650K-$700K/month (on track for ~$10M/year) with a lean team of THREE: Maria, her sister Rose, and one assistant. Reported ~150,000 (she often says 100,000+) students have bought her courses; ~200+ new customers per day; a ~60% repeat-purchase rate vs a ~15% industry norm. Her price points are deliberately tiny: $24-$247 courses, templates, scripts and tools. She anchors a 316,000+ member Facebook group, "Successful Female Entrepreneurs." Featured on Forbes Coaches Council, bossbabe, Lori Harder, Success Story.`,
    originStory: `Maria started scrappy — designing websites for women business owners while sharing an apartment with five other girls — and grew into high-ticket coaching and done-for-you client work. The turn came when she became a mother (and, per some interviews, later went through divorce and single motherhood). She needed a business that made money without her constant presence. Against the advice of her network — everyone said abandoning high-ticket was career suicide — she built and launched her first automated product FROM THE HOSPITAL after giving birth: a $27 Instagram monetization guide. It made 53 sales in the first 24 hours with zero sales calls, zero conversations. She had about 847 followers at the time. That single asymmetry — money arriving while she held her newborn, with no one to talk to — became the whole thesis: automate the sale, drop the price, remove herself from the transaction.`,
    framework: {
      name: 'The Rule of Five Ones (delivered via the $27 Comment-to-DM Funnel)',
      summary: `Two nested pieces. (1) THE RULE OF FIVE ONES — her focus formula: ONE target market, ONE problem, ONE offer, ONE platform, for ONE year. Stop "starting over"; let effort compound. (2) THE MECHANISM — the low-ticket, high-volume funnel: an Instagram post with a single CTA ("comment a keyword") triggers a ManyChat DM with the offer link; checkout closes in ~60 seconds with no human conversation. Each micro-step (comment → open DM → click → buy) feels like a natural, low-commitment progression. Entry $27 templates/scripts → $97 courses → $247 flagships; average customer buys ~3.2 products in six months. Copy is the make-or-break variable, and she warns against pricing "dead zones." She sells DAILY rather than in quarterly launches. The insight underneath: people don't buy a $27 PDF for the information — "they're buying 40 hours of saved work."`,
    },
    paperWall: `"You must go high-ticket to scale." The coaching industry preaches that past ~$300K you hit a ceiling and MUST raise prices — $2K, $10K, masterminds, sales calls, launch season. Maria did the exact opposite: she went DOWN in price ($24-$247) and up in volume, and built an 8-figure business with three people and a one-day work week. Her spikier corollary walls: launches are a trap (predictable daily sales beat feast-or-famine launches); you don't need a big audience (she started at ~847 followers); you don't need a team (three people); and "high ticket offers suck" because they chain you to sales calls and to being the product. She rejects "hustle" outright — "work-life harmony," not balance.`,
    clipMoments: [
      `The hospital launch: "I gave birth, and from the hospital bed I launched a $27 guide. 53 sales in 24 hours — I never talked to a single person."`,
      `The reframe on what a cheap product actually is: "When someone buys my exact ManyChat flows they can clone in 10 minutes, they're not buying knowledge — they're buying 40 hours of saved work."`,
      `The contrarian gut-punch: everyone told her going low-ticket would kill her business; she now out-earns most high-ticket coaches selling $27 courses with a team of three.`,
      `The lifestyle flex that reframes success: "$650K a month, working less than two days a week" — and "I just create content, that's the only job I have."`,
    ],
    questions: {
      coldOpen: [
        `You gave birth, and then — from the hospital bed — you launched a $27 product and made 53 sales before you'd talked to a single human being. What was going through your head as those notifications came in while you were holding your daughter?`,
        `Every coach in your network told you that dropping your prices would end your business. You're now doing over half a million a month. What did they see that you didn't — or what did you see that they couldn't?`,
      ],
      act1_origin: [
        `Take me back before the hospital. You were sharing an apartment with five girls, building websites for other women. When did you first feel the ceiling of trading your time for money?`,
        `Becoming a mother is the hinge of your whole story. What specifically broke — or became unbearable — that made you willing to blow up a working high-ticket business?`,
        `You launched with about 847 followers. Most people would say that's not enough to build anything. What did you understand about those 847 people that made the number irrelevant?`,
        `There's a version of this where the 53 sales are a fluke and you go back to the "safe" high-ticket model. What made you bet the whole business on the cheap product instead?`,
      ],
      act2_blueprint: [
        `You call it the Rule of Five Ones — one market, one problem, one offer, one platform, one year. Why is FOCUS the thing that compounds, when the whole internet is telling entrepreneurs to diversify?`,
        `Let's get tactical on the funnel. Someone comments a keyword on your Instagram post — and 60 seconds later they've bought. Break down what happens in those 60 seconds and why each tiny step matters.`,
        `You say copy makes or breaks a low-ticket business, and you warn about pricing "dead zones." What's a dead zone, and what's the price most people get wrong?`,
        `Your customer buys 3.2 products in six months and 60% come back — triple the industry norm. What are you doing after the $27 sale that almost nobody else does?`,
      ],
      act3_paperwall: [
        `You've said, bluntly, that high-ticket offers suck. That's heresy in your industry. What's the lie inside the high-ticket dream that keeps smart people trapped?`,
        `You don't do launches — you sell every single day instead. Why is launch culture, the thing everyone teaches, actually the fragile way to build?`,
        `Three people. $10 million a year. No sales calls. What belief about "scaling requires a team" did you have to kill to build it this way?`,
        `You replaced work-life balance with "work-life harmony" and a one-day work week. Is that a productivity hack, or a rejection of the entire premise that building wealth has to cost you your life?`,
      ],
      curveball: [
        `You've helped 150,000 women make their first dollar online. Strip away the money — what's the real thing that changes in a woman the day she makes a sale while she's asleep?`,
        `AI can now write the copy, build the funnel, and run the DMs that took you years to learn. Does that democratize your movement — or flood the world with $27 offers until none of them work? Where does the human still have to show up?`,
        `If everything vanished tomorrow — the 316,000-member group, the courses, the revenue — and you had $200 and one week, exactly what would you do to make your first sale again?`,
      ],
    },
    vishenNotes: `POSITIONING: Maria is a perfect Scaling Wisdom guest because her wisdom IS a scaling mechanism — she turned one insight (cheap + automated + daily) into a 316K-person movement and 150K paying students. Lean on the emotional contrast: hospital bed + newborn + first automated sale is the single best origin beat; open there. Her whole worldview is anti-guru, so let her play the heretic — "high-ticket sucks," "launches are a trap," "you don't need a team." EXTRACTOR TARGETS: (1) the psychology of the 60-second comment-to-checkout — push past the tech (ManyChat) into WHY the brain says yes four times in a row. (2) the "40 hours of saved work, not knowledge" reframe — her deepest idea. (3) the tension between "work one day a week" and running a $10M business — is it real, and what's the cost she's not naming? ACCURACY FLAGS: numbers drift (student count 100K-150K; revenue $650K-$700K/mo; annual $7-10M); the 316K group and divorce/single-mother detail appear in some sources not all — confirm live. "Rule of Five Ones" is genuinely hers; the "$27 hospital launch / 53 sales / 847 followers" story is consistent and safe to lead with. Tie everything to MONEY + FREEDOM + motherhood/identity.`,
  },
]
