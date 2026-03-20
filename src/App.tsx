import Sidebar from './components/Sidebar'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Recommendations from './components/Recommendations'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'

export default function App() {
  return (
    <div className="h-screen lg:px-5 lg:py-5 overflow-hidden print:h-auto print:overflow-visible print:p-0">
      <div className="mx-auto max-w-[1400px] h-full lg:flex lg:rounded-3xl lg:overflow-hidden lg:border lg:border-[var(--color-border)] lg:shadow-[0_20px_60px_rgba(15,23,42,0.08)] bg-[var(--color-surface)]/90 backdrop-blur-sm print:block print:h-auto print:max-w-none print:shadow-none print:border-0">
        <div className="w-full lg:w-80 lg:shrink-0 lg:h-full print:hidden">
          <Sidebar />
        </div>
        <div className="flex-1 min-w-0 lg:h-full lg:overflow-y-auto print:h-auto print:overflow-visible">
        <main>
          <Summary />
          <Experience />
          <Projects />
          <Recommendations />
        </main>
        <Footer />
        <Analytics />
        </div>
      </div>
    </div>
  )
}
