import { createContext, useContext, useState, type ReactNode } from 'react'
import { person, initials, PEOPLE } from './data/people'
import { AUTHOR_PROFILES, AUTHORS_TABLE_URL } from './data/authors'
import { EVENTS, DAYS } from './data/schedule'
import { involvesPerson, fmtTime } from './ui'

const ProfileCtx = createContext<{ open: (id: string) => void }>({ open: () => {} })

export const useProfile = () => useContext(ProfileCtx)

export function Headshot({ id, size = 40 }: { id: string; size?: number }) {
  const p = person(id)
  const profile = AUTHOR_PROFILES[id]
  const shot = p.headshot ?? profile?.headshot
  if (shot) {
    return (
      <img
        className="mv-headshot"
        style={{ width: size, height: size }}
        src={`${import.meta.env.BASE_URL}${shot}`}
        alt={p.name}
        loading="lazy"
      />
    )
  }
  return (
    <span
      className="mv-avatar"
      style={{ width: size, height: size, fontSize: Math.max(10, size * 0.34) }}
      title={p.name}
    >
      {initials(p.name)}
    </span>
  )
}

/** Clickable person name — opens the profile modal from anywhere */
export function PersonLink({ id, avatar = false, size = 28 }: { id: string; avatar?: boolean; size?: number }) {
  const { open } = useProfile()
  const p = person(id)
  return (
    <button className="pl-link" onClick={(e) => { e.stopPropagation(); open(id) }} title={`Open ${p.name}'s profile`}>
      {avatar ? <Headshot id={id} size={size} /> : p.name}
    </button>
  )
}

function fmtDate(d: string) {
  return DAYS.find((x) => x.date === d)?.label ?? d.slice(5)
}

function Modal({ id, onClose }: { id: string; onClose: () => void }) {
  const p = person(id)
  const profile = AUTHOR_PROFILES[id]
  const upcoming = EVENTS.filter((e) => involvesPerson(e, id)).sort((a, b) =>
    (a.date + (a.start ?? '')).localeCompare(b.date + (b.start ?? '')),
  )
  const wa = p.whatsapp?.replace(/[^0-9]/g, '')

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className="modal-head">
          <Headshot id={id} size={72} />
          <div>
            <div className="modal-name">{p.name}</div>
            <div className="modal-title">{profile?.title ?? p.title ?? '—'}</div>
            {p.window && (
              <div className="modal-window">
                In Estonia {fmtDate(p.window.from)} → {fmtDate(p.window.to)}
              </div>
            )}
          </div>
        </div>

        <div className="modal-actions">
          {p.email && (
            <a className="mv-btn-secondary" href={`mailto:${p.email}`}>
              Email
            </a>
          )}
          {wa && (
            <a className="mv-btn-secondary" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer">
              WhatsApp
            </a>
          )}
          {profile && (
            <a
              className="mv-btn-secondary"
              href={`${AUTHORS_TABLE_URL}/${profile.airtableId}`}
              target="_blank"
              rel="noreferrer"
            >
              Airtable record
            </a>
          )}
        </div>
        {!p.email && !wa && (
          <div className="modal-nocontact">No contact details on file yet — add them in the People data.</div>
        )}

        {profile?.bio && <p className="modal-bio">{profile.bio}</p>}

        {upcoming.length > 0 && (
          <>
            <div className="modal-sched-label">Schedule ({upcoming.length})</div>
            <div className="modal-sched">
              {upcoming.map((e) => (
                <div key={e.id} className="modal-sched-row">
                  <span className="modal-sched-when">
                    {fmtDate(e.date)} {e.start ? fmtTime(e.start) : ''}
                  </span>
                  <span className={`dot t-${e.type}`} />
                  <span className="modal-sched-title">{e.title}</span>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [openId, setOpenId] = useState<string | null>(null)
  return (
    <ProfileCtx.Provider value={{ open: setOpenId }}>
      {children}
      {openId && PEOPLE.some((p) => p.id === openId) && <Modal id={openId} onClose={() => setOpenId(null)} />}
    </ProfileCtx.Provider>
  )
}
