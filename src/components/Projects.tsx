import { profile } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="bg-[var(--color-surface)] border-t border-[var(--color-border)] scroll-mt-0">
      <div className="px-6 sm:px-10 lg:px-14 py-12 lg:py-14 max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10">
          Projects
        </h2>
        <div className="space-y-4">
          {profile.projects.map((project) => (
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
