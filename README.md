# MVU 2026 Production HQ

**The producer in your pocket** — production planning app for Mindvalley U 2026
(20 July – 2 August, Kultuurikatel, Tallinn).

## What it does

- **Overview** — two-week board of every commitment, 16 July → 2 August
- **Day** — daily call sheet: what, when, where, and who's required (author, crew, Gareth, Vishen)
- **People** — per-person itineraries, including speaker in-Estonia windows
- **Alerts** — cross-referenced conflicts between sources, plus the unscheduled production backlog

## Standing rule: sources of truth

**Whenever this project is opened or updated, re-sync from these live sources** (linked in the app footer):

1. [📺 Shoots — production slate](https://airtable.com/appFEFygXo2pRc8AR/tblcZ8OIxfgnlUowC/viwYl9ljifiEfE4a5)
2. [Speaker DATES](https://airtable.com/app9UTVMuHPC8uTbx/shrCxxat2D62hM9pD/tblVLN5NGa6eaLJbd)
3. [PHOTO ONLY Agenda](https://airtable.com/appAfQ2fXkHb5H9Cc/shrXMmbgBdmsbNzaE)
4. [MVU 2026 Overview Agenda](https://docs.google.com/spreadsheets/d/1IHbxuFBnDIjKOdO43Oqx5_I6Cfcr7LoAwJ0UjDpaYXk/edit) (Chrome only — AI-blocked in Drive)
5. [✍🏻 Authors — bios & headshots](https://airtable.com/appFEFygXo2pRc8AR/tblGecx2i4ge9KYmU)

The slate grows and changes — treat the Airtables as upstream, this app as the compiled schedule.

## Calendar feeds

`public/calendar/*.ics` are regenerated on every build (stable UIDs — subscribed
calendars update in place, moved shoots move, deleted shoots vanish).
Subscribe in Google Calendar: Settings → Add calendar → From URL →
`https://garethwinter-cpu.github.io/mindvalley-u-production/calendar/gareth.ics`
(or `all.ics`, `vishen.ics`, `kaitlin.ics`, per-crew feeds).

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
