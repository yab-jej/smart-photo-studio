import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Packages from './components/pack'
import './styles/photo.css'

function App() {
  const [isDark, setIsDark] = useState(true)
  const location = useLocation()

  const toggleTheme = () => setIsDark((prev) => !prev)

  useEffect(() => {
    const hash = location.hash.replace('#', '')

    if (hash) {
      const element = document.getElementById(hash)
      if (element) {
        window.setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 50)
      }
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname, location.hash])

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-[#050505] text-stone-100' : 'bg-[#f8f1e7] text-[#17120d]'}`}>
      <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <main id="home" className="mx-auto flex w-full flex-col">
                <About />
                <Services />
                <Gallery />
                <Packages />
                <Contact />
              </main>
            </>
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:category" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </div>
  )
}

export default App
