import type { Person } from './types'

export const PEOPLE: Person[] = [
  // ---- Production team ----
  {
    id: 'gareth',
    name: 'Gareth Winter',
    role: 'exec',
    title: 'Mindvalley Creative Director & Head of Content',
    email: 'gareth.w@mindvalley.com',
    whatsapp: '+447414716933',
    headshot: 'headshots/gareth.jpg',
  },
  { id: 'khairul', name: 'Khairul Johari', role: 'crew', title: 'Head of Film Production' },
  { id: 'nadir', name: 'Nadir Salam', role: 'crew', title: 'Production Lead' },
  { id: 'kuhan', name: 'Kuhan Kunasegaran', role: 'crew', title: 'Senior Video Editor & Videographer' },
  { id: 'jason', name: 'Jason Roper', role: 'crew', title: 'Video Editor (remote)', remote: true },
  { id: 'miguel', name: 'Miguel Angel Vazquez Alvarez', role: 'crew', title: 'Senior Video Content Producer — edits/creates the daily stage-talk snippets' },
  { id: 'meng', name: 'Meng', role: 'photographer', title: 'Photographer' },
  { id: 'karen', name: 'Karen', role: 'photographer', title: 'Photographer' },
  { id: 'mardo', name: 'Mardo', role: 'photographer', title: 'Photographer' },
  { id: 'makeup', name: 'Makeup', role: 'crew', title: 'Hair, makeup & wardrobe — call sheet across all studio shoots' },
  { id: 'still-frame', name: 'Still Frame', role: 'partner', title: 'Estonian production co — stage record & broadcast' },
  { id: 'eni', name: 'Eni Selfo', role: 'author-relations', title: "Head of Content, Social Media & Accelerators — manages Kaitlin's hosting schedule; interviewing Sheleana Aiyana" },
  {
    id: 'kaitlin',
    name: "Kaitlin O'Toole",
    role: 'crew',
    title: 'Author Interviews host (backup: Gareth)',
    window: { from: '2026-07-18', to: '2026-08-03' },
  },
  {
    id: 'chiara-king',
    name: 'Chiara King',
    role: 'speaker',
    title: 'Podcast host — guest collaboration (we facilitate her filming)',
    window: { from: '2026-07-20', to: '2026-07-25' },
  },

  // ---- Author relations (roster incomplete) ----
  { id: 'illiana', name: 'Illiana', role: 'author-relations', title: 'Author Relations' },
  { id: 'mireille', name: 'Mirell Sork', role: 'author-relations', title: 'Speaker Coordinator' },
  { id: 'marta', name: 'Marta Vusyatytska', role: 'author-relations', title: 'Tribe Storyteller' },

  // ---- Speakers (window = in-Estonia dates from Speaker DATES) ----
  { id: 'vishen', name: 'Vishen Lakhiani', role: 'speaker', title: 'CEO, Mindvalley', window: { from: '2026-07-20', to: '2026-08-02' } },
  { id: 'ailey-jolie', name: 'Ailey Jolie', role: 'speaker', window: { from: '2026-08-03', to: '2026-08-03' } },
  { id: 'cynthia-thurlow', name: 'Cynthia Thurlow', role: 'speaker', window: { from: '2026-07-21', to: '2026-07-23' } },
  { id: 'dan-brule', name: 'Dan Brulé', role: 'speaker', window: { from: '2026-07-20', to: '2026-07-28' } },
  { id: 'daniel-priestley', name: 'Daniel Priestley', role: 'speaker', window: { from: '2026-07-16', to: '2026-07-21' } },
  { id: 'dawn-hoang', name: 'Dawn Hoang', role: 'speaker', window: { from: '2026-07-17', to: '2026-08-03' } },
  { id: 'jolene-brighten', name: 'Dr. Jolene Brighten', role: 'speaker', window: { from: '2026-07-25', to: '2026-07-29' } },
  { id: 'scott-lyon', name: 'Dr. Scott Lyon', role: 'speaker', window: { from: '2026-07-20', to: '2026-07-24' } },
  { id: 'eric-edmeades', name: 'Eric Edmeades', role: 'speaker', window: { from: '2026-07-20', to: '2026-08-02' } },
  { id: 'fuckup-nights', name: 'Fuckup Nights', role: 'speaker', window: { from: '2026-07-19', to: '2026-07-29' } },
  { id: 'fumiko-takatsu', name: 'Fumiko Takatsu', role: 'speaker', window: { from: '2026-07-25', to: '2026-08-05' } },
  { id: 'jade-shaw', name: 'Jade Shaw', role: 'speaker', window: { from: '2026-07-21', to: '2026-07-30' } },
  { id: 'jeffrey-allen', name: 'Jeffrey Allen', role: 'speaker', window: { from: '2026-07-19', to: '2026-07-26' } },
  { id: 'jim-kwik', name: 'Jim Kwik', role: 'speaker', window: { from: '2026-07-28', to: '2026-08-02' } },
  { id: 'john-lee', name: 'John Lee', role: 'speaker', window: { from: '2026-07-20', to: '2026-07-22' } },
  { id: 'john-wineland', name: 'John Wineland', role: 'speaker', window: { from: '2026-07-20', to: '2026-07-27' } },
  { id: 'kristina', name: 'Kristina Mand-Lakhiani', role: 'speaker', window: { from: '2026-07-20', to: '2026-08-02' } },
  { id: 'lee-holden', name: 'Lee Holden', role: 'speaker', window: { from: '2026-07-22', to: '2026-08-02' } },
  { id: 'lorin-krenn', name: 'Lorin Krenn', role: 'speaker', window: { from: '2026-07-22', to: '2026-07-29' } },
  { id: 'marisa-peer', name: 'Marisa Peer', role: 'speaker', window: { from: '2026-07-21', to: '2026-08-02' } },
  { id: 'maya-raichoora', name: 'Maya Raichoora', role: 'speaker', window: { from: '2026-07-27', to: '2026-08-01' } },
  { id: 'natalie-ellis', name: 'Natalie Ellis', role: 'speaker', window: { from: '2026-07-19', to: '2026-07-24' } },
  { id: 'nick-santonastasso', name: 'Nick Santonastasso', role: 'speaker', window: { from: '2026-07-26', to: '2026-07-31' } },
  { id: 'paul-mckenna', name: 'Paul McKenna', role: 'speaker', window: { from: '2026-07-27', to: '2026-07-31' } },
  { id: 'rachel-pringle', name: 'Rachel Pringle', role: 'speaker', window: { from: '2026-07-29', to: '2026-08-01' } },
  { id: 'regan-hillyer', name: 'Regan Hillyer', role: 'speaker', window: { from: '2026-07-19', to: '2026-07-27' } },
  { id: 'zen-takai', name: 'Sensei Zen Takai', role: 'speaker', window: { from: '2026-07-26', to: '2026-08-01' } },
  {
    id: 'sheleana-aiyana',
    name: 'Sheleana Aiyana',
    role: 'speaker',
    window: { from: '2026-07-22', to: '2026-07-29' },
  },
  { id: 'shi-heng-yi', name: 'Shi Heng Yi', role: 'speaker', window: { from: '2026-07-26', to: '2026-07-28' } },
  { id: 'simon-ong', name: 'Simon Alexander Ong', role: 'speaker', window: { from: '2026-07-18', to: '2026-07-23' } },
  {
    id: 'iris-wagner',
    name: 'Iris Wagner',
    role: 'speaker',
    title: 'Founder & CEO, Memoirs Productions — legacy preservation; host of "Speaking of Legacy"',
    window: { from: '2026-07-27', to: '2026-08-06' },
  },
  // Vishen's parents — subjects of the Memoirs Productions legacy shoot, 3–5 Aug.
  // Local Tallinn residents (own apartment is the shoot location) — no travel window.
  { id: 'mohan-lakhiani', name: 'Mohan Lakhiani', role: 'speaker', title: "Vishen's father" },
  { id: 'roopi-lakhiani', name: 'Roopi Lakhiani', role: 'speaker', title: "Vishen's mother" },
  // Vishen's kids — join Day 3 only, for the grandparents AMA segment.
  { id: 'hayden-lakhiani', name: 'Hayden Lakhiani', role: 'speaker', title: "Vishen's son" },
  { id: 'eve-lakhiani', name: 'Eve Lakhiani', role: 'speaker', title: "Vishen's daughter" },
  // On the agenda but NOT on Speaker DATES (window unknown):
  { id: 'hal-elrod', name: 'Hal Elrod', role: 'speaker', window: { from: '2026-07-24', to: '2026-07-29' } },
  { id: 'maria-wendt', name: 'Maria Wendt', role: 'speaker', window: { from: '2026-07-27', to: '2026-07-30' } },
  { id: 'jamie-sea', name: 'Jamie Sea', role: 'speaker', window: { from: '2026-07-25', to: '2026-07-30' } },
  { id: 'jeremy-harbour', name: 'Jeremy Harbour', role: 'speaker' },
  { id: 'robert-grant', name: 'Robert Grant', role: 'speaker' },
  { id: 'zen-samurai', name: 'Zen Samurai', role: 'speaker' },
]

export const person = (id: string): Person => {
  const p = PEOPLE.find((x) => x.id === id)
  if (!p) throw new Error(`Unknown person: ${id}`)
  return p
}

export const initials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
