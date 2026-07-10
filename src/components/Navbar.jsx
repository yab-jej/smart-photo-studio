import { useState } from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/#services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Packages', to: '/packages' },
  { label: 'Contact', to: '/#contact' },
]

function Navbar({ isDark, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300 ${isDark ? 'border-[#b8924f]/20 bg-[#050505]/95' : 'border-[#d8b06a]/40 bg-[#f8f1e7]/95'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
        <Link to="/#home" className="flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]">
          <div className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-semibold tracking-[0.2em] shadow-[0_0_20px_rgba(201,169,107,0.25)] ${isDark ? 'border-[#c9a96b] bg-[#111111] text-[#f3d096]' : 'border-[#b8863c] bg-[#fdf7ee] text-[#9a6e2d]'}`}>
            SS
          </div>
          <div>
            <p className={`text-sm font-semibold uppercase tracking-[0.35em] ${isDark ? 'text-[#e8c98b]' : 'text-[#9a6e2d]'}`}>Smart Studio</p>
            <p className={`text-xs uppercase tracking-[0.3em] ${isDark ? 'text-stone-400' : 'text-stone-600'}`}>Luxury Photography</p>
          </div>
        </Link>

        <div className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${isDark ? 'text-stone-300 hover:bg-[#151515] hover:text-[#f3d096]' : 'text-stone-700 hover:bg-[#efe3c8] hover:text-[#9a6e2d]'}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${isDark ? 'border-[#c9a96b]/40 bg-[#111111] text-[#f3d096] hover:border-[#c9a96b] hover:bg-[#171717]' : 'border-[#b8863c]/30 bg-[#fdf7ee] text-[#9a6e2d] hover:border-[#b8863c] hover:bg-[#f5ebd8]'}`}
            aria-label="Toggle light and dark mode"
          >
            {isDark ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4.2" />
                <path strokeLinecap="round" d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>

          <Link
            to="/#contact"
            className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${isDark ? 'border-[#c9a96b] bg-[#c9a96b] text-[#090909] hover:bg-[#e0b86f]' : 'border-[#b8863c] bg-[#b8863c] text-[#fffdf8] hover:bg-[#a4712a]'}`}
          >
            Book Now
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${isDark ? 'border-[#c9a96b]/40 bg-[#111111] text-[#f3d096] hover:border-[#c9a96b] hover:bg-[#171717]' : 'border-[#b8863c]/30 bg-[#fdf7ee] text-[#9a6e2d] hover:border-[#b8863c] hover:bg-[#f5ebd8]'}`}
            aria-label="Toggle light and dark mode"
          >
            {isDark ? (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="12" r="4.2" />
                <path strokeLinecap="round" d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
              </svg>
            ) : (
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 ${isDark ? 'border-[#c9a96b]/40 bg-[#111111] text-[#f3d096] hover:border-[#c9a96b] hover:bg-[#171717]' : 'border-[#b8863c]/30 bg-[#fdf7ee] text-[#9a6e2d] hover:border-[#b8863c] hover:bg-[#f5ebd8]'}`}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className={`border-t px-4 py-4 md:hidden ${isDark ? 'border-[#b8924f]/20 bg-[#060606]' : 'border-[#d8b06a]/40 bg-[#f9f3e9]'}`}>
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${isDark ? 'text-stone-200 hover:bg-[#151515] hover:text-[#f3d096]' : 'text-stone-700 hover:bg-[#efe3c8] hover:text-[#9a6e2d]'}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/#contact"
              className={`mt-2 inline-flex items-center justify-center rounded-full border px-4 py-3 text-sm font-semibold transition-all duration-300 ${isDark ? 'border-[#c9a96b] bg-[#c9a96b] text-[#090909] hover:bg-[#e0b86f]' : 'border-[#b8863c] bg-[#b8863c] text-[#fffdf8] hover:bg-[#a4712a]'}`}
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
