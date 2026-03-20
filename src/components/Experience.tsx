import { profile, type Role } from '../data/profile'

function BulletItem({ bullet }: { bullet: Role['bullets'][number] }) {
  if (typeof bullet === 'string') {
    return <li className="text-slate-600 leading-relaxed">{bullet}</li>
  }
  return (
    <li className="text-slate-600 leading-relaxed">
      {bullet.text}{' '}
      <a
        href={bullet.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline text-sm font-medium"
      >
        View PR
      </a>
    </li>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="bg-[var(--color-surface)] border-t border-[var(--color-border)] scroll-mt-0">
      <div className="px-6 sm:px-10 lg:px-14 py-12 lg:py-14 max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10">
          Experience
        </h2>
        <div className="space-y-14">
          {profile.experience.map((company) => (
            <article key={company.name} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 lg:p-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-3 mb-6">
                {company.logo && (
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-8 h-8 rounded object-contain bg-white p-0.5 shadow-sm"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                  />
                )}
                <h3 className="text-lg font-semibold text-slate-900">{company.name}</h3>
                <span className="text-sm text-slate-400">{company.duration}</span>
              </div>
              <div className="space-y-8 pl-4 border-l border-slate-200">
                {company.roles.map((role) => (
                  <div key={role.title}>
                    <h4 className="text-sm font-semibold text-slate-800 mb-1">{role.title}</h4>
                    <p className="text-sm text-slate-400 mb-3">
                      {role.period}
                      {role.location && <span> · {role.location}</span>}
                    </p>
                    {role.description && (
                      <p className="text-slate-600 text-sm mb-3 leading-relaxed">{role.description}</p>
                    )}
                    {role.bullets.length > 0 && (
                      <ul className="space-y-2 list-disc list-outside ml-4 text-sm">
                        {role.bullets.map((bullet, i) => (
                          <BulletItem key={i} bullet={bullet} />
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
