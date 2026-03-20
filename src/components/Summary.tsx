import { profile } from '../data/profile'

export default function Summary() {
  return (
    <section id="summary" className="bg-white/75 border-b border-[var(--color-border)] px-6 sm:px-10 lg:px-14 py-12 lg:py-14">
      <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-7">About</h2>
      <div className="space-y-4 max-w-3xl">
        {profile.summary.map((para, i) => (
          <p
            key={i}
            className={`leading-relaxed ${i === 0 ? 'text-[1.02rem] text-slate-700 font-medium' : 'text-slate-600'}`}
          >
            {para}
          </p>
        ))}
      </div>
    </section>
  )
}
