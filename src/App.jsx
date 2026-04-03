import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import './App.css'
import Home from './pages/Home.jsx'
import Team from './pages/Team.jsx'
import Terminal22 from './pages/Terminal22.jsx'
import VioletMansion from './pages/VioletMansion.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionClass, setTransitionClass] = useState('')
  const isInitial = useRef(true)
  const timers = useRef([])

  useEffect(() => {
    if (isInitial.current) {
      isInitial.current = false
      setDisplayLocation(location)
      return
    }
    if (location.pathname === displayLocation.pathname) return

    timers.current.forEach(clearTimeout)

    // Fade out current page
    setTransitionClass('page-exit')

    const t1 = setTimeout(() => {
      // Swap route while invisible
      setDisplayLocation(location)
      window.scrollTo(0, 0)
      setTransitionClass('page-enter')
    }, 350)

    const t2 = setTimeout(() => {
      setTransitionClass('')
    }, 750)

    timers.current = [t1, t2]
    return () => timers.current.forEach(clearTimeout)
  }, [location])

  return (
    <div className="app">
      <Navbar />
      <div className={`page-transition-wrapper ${transitionClass}`}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/main/terminal22" element={<Terminal22 />} />
          <Route path="/main/violetmansion" element={<VioletMansion />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
