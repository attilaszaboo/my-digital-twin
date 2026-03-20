import { profile } from '../data/profile'

const monthMap: Record<string, number> = {
  january: 1,
  february: 2,
  march: 3,
  april: 4,
  may: 5,
  june: 6,
  july: 7,
  august: 8,
  september: 9,
  october: 10,
  november: 11,
  december: 12,
}

function recencyKey(period: string) {
  const parts = period.split('–').map((p) => p.trim())
  const target = parts.length > 1 ? parts[1] : parts[0]
  const yearMatch = target.match(/\b(19|20)\d{2}\b/)
  const year = yearMatch ? Number(yearMatch[0]) : 0
  const monthMatch = target.match(/\b([A-Za-z]+)\b/)
  const month = monthMatch ? monthMap[monthMatch[1].toLowerCase()] || 12 : 12
  return year * 100 + month
}

export default function Projects() {
  const sortedProjects = [...profile.projects].sort((a, b) => recencyKey(b.period) - recencyKey(a.period))

  return (
    <section id="projects" className="bg-[var(--color-surface)] border-t border-[var(--color-border)] scroll-mt-0">
      <div className="px-6 sm:px-10 lg:px-14 py-12 lg:py-14 max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10">
          Projects
        </h2>
        <div className="space-y-4">
          {sortedProjects.map((project) => (
            <article key={project.name} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 lg:p-7">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="text-base font-semibold text-slate-900">
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-600 underline decoration-blue-300 underline-offset-3 transition-colors duration-150"
                    >
                      {project.name}
                    </a>
                  ) : (
                    project.name
                  )}
                </h3>
                <span className="text-sm text-slate-400 shrink-0">{project.period}</span>
              </div>
              <p className="text-xs text-slate-400 mb-3">{project.role}</p>
              <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
