import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const COUNTRIES = [
  { code: 'us', name: 'United State' },
  { code: 'pk', name: 'Pakistan' },
  { code: 'gb', name: 'United Kingdom' },
  { code: 'ae', name: 'UAE' },
  { code: 'tr', name: 'Turkiye' }
]

export default function CountrySelect({ value = 'gb', onChange }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [highlight, setHighlight] = useState(-1)
  const containerRef = useRef(null)
  const [portalStyle, setPortalStyle] = useState({ left: 0, top: 0, width: 0 })

  const selectedIndex = COUNTRIES.findIndex(c => c.code === value)

  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target)) {
        setOpen(false)
        // wait for transition to finish then unmount
        setTimeout(()=>setMounted(false), 340)
      }
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [])

  useEffect(() => {
    if (open) setHighlight(selectedIndex >= 0 ? selectedIndex : 0)
    else setHighlight(-1)
  }, [open, selectedIndex])

  function toggle() {
    if (!mounted) {
      setMounted(true)
      // allow mounted to apply then open to trigger transition
      setTimeout(()=>{
        setOpen(true)
        // compute portal position
        const rect = containerRef.current && containerRef.current.getBoundingClientRect()
        if (rect) setPortalStyle({ left: rect.left + window.scrollX, top: rect.bottom + window.scrollY, width: rect.width })
      }, 10)
    } else {
      setOpen(v => !v)
      // if closing, unmount after transition
      if (open) setTimeout(()=>setMounted(false), 240)
    }
  }

  function handleKeyDown(e) {
    if (!open) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        e.preventDefault(); setOpen(true)
      }
      return
    }
    if (e.key === 'ArrowDown') {
      e.preventDefault(); setHighlight(h => Math.min(h + 1, COUNTRIES.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); setHighlight(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault(); if (highlight >= 0) { onChange(COUNTRIES[highlight].code); setOpen(false); setTimeout(()=>setMounted(false), 240) }
    } else if (e.key === 'Escape') {
      e.preventDefault(); setOpen(false); setTimeout(()=>setMounted(false), 240)
    }
  }

  return (
    <div ref={containerRef} className="select-container select-250">
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className={`select-trigger select-250 ${open ? 'open' : ''}`}
      >
        <img src={`https://flagcdn.com/${value}.svg`} alt={value} className="flag-img flag-22-16" />
        <div className="select-value">{COUNTRIES.find(c=>c.code===value)?.name || 'Select'}</div>
        <div className={`select-chevron ${open ? 'open' : ''}`} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {mounted && containerRef.current && createPortal(
        <ul
          role="listbox"
          tabIndex={-1}
          className={`select-list select-250 ${open ? 'open' : ''} portal`}
          style={{ position: 'absolute', left: portalStyle.left, top: portalStyle.top, width: portalStyle.width }}
        >
          {COUNTRIES.map((c, i) => (
            <li
              key={c.code}
              role="option"
              aria-selected={value===c.code}
              onMouseEnter={()=>setHighlight(i)}
              onMouseLeave={()=>setHighlight(-1)}
              onClick={()=>{ onChange(c.code); setOpen(false); setTimeout(()=>setMounted(false), 240) }}
              className={`select-option ${highlight===i ? 'highlight' : ''}`}
            >
              <img src={`https://flagcdn.com/${c.code}.svg`} alt={c.code} className="flag-img flag-20-14" />
              <div className="select-option-label">{c.name}</div>
            </li>
          ))}
        </ul>,
        document.body
      )}
    </div>
  )
}
