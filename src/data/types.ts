export type PersonRole =
  | 'speaker'
  | 'crew'
  | 'exec'
  | 'author-relations'
  | 'photographer'
  | 'partner'

export interface Person {
  id: string
  name: string
  role: PersonRole
  title?: string
  /** In-Estonia window (speakers), YYYY-MM-DD inclusive */
  window?: { from: string; to: string }
  remote?: boolean
  email?: string
  /** E.164, digits only after + */
  whatsapp?: string
  /** Local headshot path (relative to base), for non-author people */
  headshot?: string
}

export type EventType =
  | 'stage-talk'
  | 'embodiment'
  | 'community'
  | 'experience'
  | 'portrait'
  | 'accelerator'
  | 'production'
  | 'podcast'
  | 'social'
  | 'social-media'
  | 'logistics'

export type EventStatus = 'confirmed' | 'tentative' | 'placeholder' | 'conflict' | 'done'

export interface ScheduleEvent {
  id: string
  date: string // YYYY-MM-DD
  start?: string // HH:MM (24h). Omitted = all-day / TBD
  end?: string
  title: string
  type: EventType
  location?: string
  /** Person ids on camera / on stage */
  speakers?: string[]
  /** Person ids required behind camera */
  crew?: string[]
  gareth?: boolean
  vishen?: boolean
  status?: EventStatus
  notes?: string
  /**
   * From the 📺 Shoots Airtable "Creative" column — who's tagged to direct/film/edit
   * this production. Gareth tagged there = director. Not yet populated in Airtable;
   * fill in as Gareth tags people, one production at a time.
   */
  director?: string
  cameraOps?: string[]
  editors?: string[]
}

export interface DayMeta {
  date: string
  label: string
  theme?: string
  week: 0 | 1 | 2
  noInterviews?: boolean
}

export interface Conflict {
  id: string
  severity: 'high' | 'medium' | 'low'
  title: string
  detail: string
}

export type ActionOwner = 'author-relations' | 'gareth' | 'production'
export type ActionKind = 'impossible' | 'proposal' | 'chase'

export interface ActionItem {
  id: string
  kind: ActionKind
  owner: ActionOwner
  title: string
  detail: string
  due?: string
  people?: string[]
}

export type FitVerdict = 'STRONG' | 'MEDIUM' | 'NICHE'

export interface PodcastBriefing {
  personId: string
  episodeId: string
  /** Omit when the episode has no fixed date yet — pair with recordLocation */
  date?: string
  start?: string
  /** Where it'll be recorded, when that's known but the date isn't (e.g. "London") */
  recordLocation?: string
  who: string
  reach: string
  topics: string[]
  credentials: string
  interviewPresence: string
  audienceOverlap: string
  fit: FitVerdict
  fitReason: string
  angle: string
  flag: string
}

export interface BacklogItem {
  id: string
  title: string
  format: 'masterclass' | 'podcast' | 'accelerator-recording' | 'social'
  speakers?: string[]
  constraint?: string
}
