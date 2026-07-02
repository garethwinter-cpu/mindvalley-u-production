import { useState } from 'react'
import Overview from './views/Overview'
import DayView from './views/DayView'
import PeopleView from './views/PeopleView'
import AlertsView from './views/AlertsView'
import { CONFLICTS } from './data/schedule'

type Tab = 'overview' | 'day' | 'people' | 'alerts'

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
    <div>
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
          <button className={tab === 'alerts' ? 'active' : ''} onClick={() => setTab('alerts')}>
            Alerts ({CONFLICTS.length})
          </button>
        </nav>
        <div className="mv-countdown">{daysToKickoff()} · First shoot 17 Jul</div>
      </header>
      <main className="mv-page">
        {tab === 'overview' && <Overview onOpenDay={openDay} />}
        {tab === 'day' && <DayView date={day} onPick={setDay} />}
        {tab === 'people' && <PeopleView />}
        {tab === 'alerts' && <AlertsView />}
      </main>
    </div>
  )
}
