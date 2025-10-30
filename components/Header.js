import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false)
  const mobileNavRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    function onDocClick(e) {
      if (!menuOpen) return
      const nav = mobileNavRef.current
      const toggle = toggleRef.current
      if (nav && !nav.contains(e.target) && toggle && !toggle.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    function onKey(e) {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false)
    }

    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)

    if (menuOpen) {
      // lock body scroll while menu is open
      document.body.style.overflow = 'hidden'
      // focus the first link inside the mobile nav for accessibility
      const firstLink = mobileNavRef.current?.querySelector('a')
      firstLink?.focus()
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link href="/">
            <img src="/logo.png" alt="Old Employer" className="brand-logo" />
          </Link>
          <div className="brand-text-wrap">
          </div>
        </div>

        <div className="header-right">
          {/* Mobile toggle - visible on small screens */}
          <button
            ref={toggleRef}
            className="mobile-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(v => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? (
                <path d="M6 6L18 18M6 18L18 6" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <>
                  <path d="M3 7h18" stroke="#111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 12h18" stroke="#111" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 17h18" stroke="#111" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>

          <nav className="nav">
            <Link href="/">Home</Link>
            <a href="#">Companies</a>
            <a href="#">Products Timeline</a>
            <a href="#">Hall of fame</a>
            <a href="#">Blogs</a>
            <Link href="/signup">Join</Link>
          </nav>

          <div className="profile">
            <img src="/avatar.svg" alt="avatar" className="avatar-img" />
            <div className="profile-name">Employee <span className="caret">▾</span></div>
          </div>
          <div className="add-review-block">
            <button className="add-review">Add Review</button>
          </div>

          <div className="icon-column">
            <button className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="#fff"/><path d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.99 2H20l-2-2z" fill="#fff"/></svg>
              <span className="badge">3</span>
            </button>

            <button className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#fff"/></svg>
              <span className="badge">3</span>
            </button>
          </div>

          {/* backdrop sits behind the panel and closes the menu on click */}
          <div className={`mobile-backdrop ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

          {/* Mobile nav panel (shown when menuOpen) - contains same links & actions for small screens */}
          <div id="mobile-menu" ref={mobileNavRef} className={`mobile-nav ${menuOpen ? 'open' : ''}`} role="dialog" aria-modal={menuOpen} aria-hidden={!menuOpen}>
            <div className="mobile-nav-inner">
              <nav className="mobile-nav-links">
                <Link href="/">Home</Link>
                <a href="#">Companies</a>
                <a href="#">Products Timeline</a>
                <a href="#">Hall of fame</a>
                <a href="#">Blogs</a>
                <Link href="/signup">Join</Link>
              </nav>

              <div className="mobile-actions">
                <button className="add-review mobile">Add Review</button>
                <div className="mobile-profile">
                  <img src="/avatar.svg" alt="avatar" className="avatar-img" />
                  <div className="profile-name">Employee</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
