import { useEffect, useState } from 'react'
import { profile } from '../data/profile'

const navLinks = [
  { label: 'About', href: '#summary' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recs', href: '#recommendations' },
]

export default function Sidebar() {
  const [activeHash, setActiveHash] = useState('#summary')

  useEffect(() => {
    const syncHash = () => {
      setActiveHash(window.location.hash || '#summary')
    }

    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  return (
    <aside className="lg:h-full overflow-y-auto bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 text-white flex flex-col">
      <div className="p-4 sm:p-5 flex flex-col gap-4">
        <div className="rounded-2xl bg-slate-700/50 border border-slate-500/70 p-5 shadow-lg shadow-slate-950/30">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/photos/Attila.Szabo.small.jpg"
              alt="Attila Szabo"
              className="w-14 h-14 rounded-xl object-cover border border-slate-400/60 shadow-md shadow-slate-950/30"
            />
            <div>
              <h1 className="text-lg font-bold text-white leading-tight tracking-tight">{profile.name}</h1>
              <p className="text-[11px] text-slate-300 uppercase tracking-wide">Profile</p>
            </div>
          </div>
          <p className="text-xs text-slate-200 leading-relaxed">{profile.title}</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="block text-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg px-3 py-2 transition-colors duration-150"
            >
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-xs text-slate-200 hover:text-white border border-slate-500 hover:border-slate-300 rounded-lg px-3 py-2 transition-colors duration-150"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-700/35 border border-slate-500/60 p-2">
          <p className="text-[10px] text-slate-400 uppercase tracking-widest mb-1 px-2">Quick Jump</p>
          <nav role="navigation">
            <ul className="grid grid-cols-2 gap-1">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`block text-[11px] text-center border rounded-md px-2 py-1.5 transition-colors duration-150 ${
                      activeHash === href
                        ? 'text-white bg-slate-700 border-blue-300 underline decoration-blue-300 underline-offset-2'
                        : 'text-slate-100 underline decoration-slate-500 underline-offset-2 border-slate-600 hover:text-white hover:bg-slate-700 hover:border-blue-300 hover:decoration-blue-300'
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="rounded-2xl bg-slate-800/45 border border-slate-700 p-4">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3">Technical and Domain Expertise</p>
          <ul className="space-y-2.5">
            {profile.expertise.map((group) => (
              <li key={group.area}>
                <p className="text-[11px] font-semibold text-slate-200 mb-1">{group.area}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{group.items.join(', ')}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-800/45 border border-slate-700 p-4">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3">Certifications</p>
          <ul className="space-y-3">
            {profile.certifications.map((cert) => (
              <li key={cert.name} className="flex items-start gap-2">
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={`${cert.name} logo`}
                    className="w-5 h-5 rounded object-cover mt-0.5"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                )}
                <div>
                  {cert.href ? (
                    <a
                      href={cert.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-blue-300 hover:text-blue-200 transition-colors duration-150 leading-snug block"
                    >
                      {cert.name}
                    </a>
                  ) : (
                    <span className="text-xs text-slate-400 leading-snug block">{cert.name}</span>
                  )}
                  {cert.date && (
                    <span className="text-xs text-slate-500">{cert.date}</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-800/45 border border-slate-700 p-4">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3">Patents</p>
          <ul className="space-y-1.5">
            {profile.patents.map((p) => (
              <li key={p} className="text-xs text-slate-400 leading-snug">{p}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-800/45 border border-slate-700 p-4">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3">Education</p>
          <ul className="space-y-3">
            {profile.education.map((edu) => (
              <li key={edu.school} className="flex items-start gap-2">
                {edu.logo && (
                  <img
                    src={edu.logo}
                    alt={`${edu.school} logo`}
                    className="w-5 h-5 rounded object-cover mt-0.5"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                )}
                <div>
                  <p className="text-xs text-slate-200 leading-snug">{edu.school}</p>
                  <p className="text-xs text-slate-400 leading-snug">{edu.degree}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl bg-slate-800/45 border border-slate-700 p-4">
          <p className="text-[11px] text-slate-500 uppercase tracking-widest mb-3">Languages</p>
          <ul className="space-y-1.5">
            {profile.languages.map((l) => (
              <li key={l} className="text-xs text-slate-300">{l}</li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  )
}
