import { useState } from 'react'
import Overview from './views/Overview'
import DayView from './views/DayView'
import PeopleView from './views/PeopleView'
import AlertsView from './views/AlertsView'
import PodcastBriefingsView from './views/PodcastBriefingsView'
import SocialView from './views/SocialView'
import { ACTIONS, CONFLICTS } from './data/schedule'
import { PODCAST_BRIEFINGS } from './data/podcastBriefings'
import { SOCIAL_CONTENT } from './data/social'
import { ProfileProvider } from './profile'

type Tab = 'overview' | 'day' | 'people' | 'alerts' | 'podcast' | 'social'

const SOURCES = [
  { label: '📺 Shoots (production slate)', url: 'https://airtable.com/appFEFygXo2pRc8AR/tblcZ8OIxfgnlUowC/viwYl9ljifiEfE4a5' },
  { label: 'Speaker DATES', url: 'https://airtable.com/app9UTVMuHPC8uTbx/shrCxxat2D62hM9pD/tblVLN5NGa6eaLJbd' },
  { label: 'PHOTO ONLY Agenda', url: 'https://airtable.com/appAfQ2fXkHb5H9Cc/shrXMmbgBdmsbNzaE' },
  { label: 'MVU 2026 Overview Agenda', url: 'https://docs.google.com/spreadsheets/d/1IHbxuFBnDIjKOdO43Oqx5_I6Cfcr7LoAwJ0UjDpaYXk/edit' },
  { label: '✍🏻 Authors (bios)', url: 'https://airtable.com/appFEFygXo2pRc8AR/tblGecx2i4ge9KYmU' },
]

function daysToKickoff(): string {
  const now = new Date()
  const kickoff = new Date('2026-07-17T09:00:00+03:00')
  const wrap = new Date('2026-08-02T23:59:00+03:00')
  if (now > wrap) return 'Wrapped'
  if (now >= kickoff) return 'In production'
  const d = Math.ceil((kickoff.getTime() - now.getTime()) / 86_400_000)
  return `T-minus ${d} day${d === 1 ? '' : 's'}`
}

export default function App() {
  const [tab, setTab] = useState<Tab>('overview')
  const [day, setDay] = useState('2026-07-17')

  const openDay = (date: string) => {
    setDay(date)
    setTab('day')
  }

  return (
    <ProfileProvider>
      <header className="mv-topbar">
        <div className="mv-wordmark">
          MVU 2026 <span>Production HQ</span>
        </div>
        <nav className="mv-nav">
          <button className={tab === 'overview' ? 'active' : ''} onClick={() => setTab('overview')}>
            Overview
          </button>
          <button className={tab === 'day' ? 'active' : ''} onClick={() => setTab('day')}>
            Day
          </button>
          <button className={tab === 'people' ? 'active' : ''} onClick={() => setTab('people')}>
            People
          </button>
          <button className={tab === 'podcast' ? 'active' : ''} onClick={() => setTab('podcast')}>
            Podcast ({PODCAST_BRIEFINGS.length})
          </button>
          <button className={tab === 'social' ? 'active' : ''} onClick={() => setTab('social')}>
            Social ({SOCIAL_CONTENT.length})
          </button>
          <button className={tab === 'alerts' ? 'active' : ''} onClick={() => setTab('alerts')}>
            Actions ({ACTIONS.length + CONFLICTS.length})
          </button>
        </nav>
        <div className="mv-countdown">{daysToKickoff()} · First shoot 17 Jul</div>
      </header>
      <main className="mv-page">
        {tab === 'overview' && <Overview onOpenDay={openDay} />}
        {tab === 'day' && <DayView date={day} onPick={setDay} />}
        {tab === 'people' && <PeopleView />}
        {tab === 'podcast' && <PodcastBriefingsView />}
        {tab === 'social' && <SocialView />}
        {tab === 'alerts' && <AlertsView />}
      </main>
      <footer className="mv-footer">
        <span>Sources of truth:</span>
        {SOURCES.map((s) => (
          <a key={s.url} href={s.url} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
        <a href={`${import.meta.env.BASE_URL}calendar/all.ics`}>📅 Calendar feed (.ics)</a>
      </footer>
    </ProfileProvider>
  )
}
