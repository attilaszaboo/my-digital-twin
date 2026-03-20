import { profile } from '../data/profile'

export default function Education() {
  return (
    <section id="education" className="bg-white/75 border-t border-[var(--color-border)] scroll-mt-0">
      <div className="px-6 sm:px-10 lg:px-14 py-12 lg:py-14 max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10">
          Education
        </h2>
        <div className="space-y-4">
          {profile.education.map((edu) => (
            <article key={edu.school} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <div>
                <div className="flex items-center gap-2">
                  {edu.logo && (
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-7 h-7 rounded object-cover"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                    />
                  )}
                  <h3 className="text-base font-semibold text-slate-900">{edu.school}</h3>
                </div>
                <p className="text-sm text-slate-600 mt-1">
                  {edu.degree}
                  {edu.field && <span> — {edu.field}</span>}
                </p>
              </div>
              <span className="text-sm text-slate-400 shrink-0">{edu.period}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
