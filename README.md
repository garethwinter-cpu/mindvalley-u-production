# MVU 2026 Production HQ

**The producer in your pocket** — production planning app for Mindvalley U 2026
(20 July – 2 August, Kultuurikatel, Tallinn).

## What it does

- **Overview** — two-week board of every commitment, 16 July → 2 August
- **Day** — daily call sheet: what, when, where, and who's required (author, crew, Gareth, Vishen)
- **People** — per-person itineraries, including speaker in-Estonia windows
- **Alerts** — cross-referenced conflicts between sources, plus the unscheduled production backlog

## Data sources

Typed data in `src/data/` extracted (2 Jul 2026) from:

1. Speaker DATES (Airtable) — 30 speaker in-Estonia windows
2. PHOTO ONLY Agenda (Airtable) — 13 portrait sessions
3. MVU 2026 Overview Agenda DRAFT (Google Sheet) — main/secondary stage schedules, detailed adults agenda

Update the data by editing `src/data/schedule.ts` and `src/data/people.ts`.

## Develop

```
npm install
npm run dev
```

Built with Vite + React + TypeScript. Styled with the Wellness design system
(Google Sans, brand purple, cool greys, pill buttons).
