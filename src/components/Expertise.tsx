import { profile } from '../data/profile'

export default function Expertise() {
  return (
    <section id="expertise" className="bg-white/75 border-t border-[var(--color-border)] scroll-mt-0">
      <div className="px-6 sm:px-10 lg:px-14 py-12 lg:py-14 max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-10">
          Technical and Domain Expertise
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.expertise.map((group) => (
            <article key={group.area} className="rounded-2xl border border-[var(--color-border)] bg-white p-5">
              <h3 className="text-sm font-semibold text-slate-800 mb-2">{group.area}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{group.items.join(', ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
