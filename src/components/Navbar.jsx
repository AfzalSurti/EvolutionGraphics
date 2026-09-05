import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { nav, shopHref } from '../content/site.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()
  const location = useLocation()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const solid = scrolled || open || !onHome

  return (
    <header>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <nav className={`nav ${solid ? 'is-scrolled' : ''}`} aria-label="Primary">
        <div className="nav-inner">
          <Link className="logo" to="/" onClick={() => window.scrollTo(0, 0)}>
            Luzel
          </Link>
          <div className="nav-links">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="link-underline">
                {item.label}
              </a>
            ))}
          </div>
          <div className="nav-cta">
            <a className="btn btn-primary" href={shopHref}>
              Shop Chai <span className="arrow">→</span>
            </a>
          </div>
          <button
            className={`menu-btn ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-panel"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a className="btn btn-ink" href={shopHref} onClick={() => setOpen(false)}>
              Shop Chai <span className="arrow">→</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
