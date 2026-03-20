import { profile } from '../data/profile'

export default function Recommendations() {
  return (
    <section id="recommendations" className="bg-[var(--color-surface)] border-t border-[var(--color-border)] scroll-mt-0">
      <div className="px-6 sm:px-10 lg:px-14 py-12 lg:py-14 max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10">
          Recommendations Received
        </h2>
        <div className="space-y-6">
          {profile.recommendations.map((rec) => (
            <article key={rec.name} className="rounded-2xl border border-[var(--color-border)] bg-white p-6 lg:p-7 shadow-[0_10px_26px_rgba(15,23,42,0.04)]">
              <h3 className="text-base font-semibold text-slate-900">{rec.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{rec.role}</p>
              <p className="text-xs text-slate-500">{rec.relationship} · {rec.date}</p>
              <p className="text-sm text-slate-700 leading-relaxed mt-4">{rec.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
