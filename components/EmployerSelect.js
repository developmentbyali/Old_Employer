import React, { useState, useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

const EMPLOYERS = [
  { id: 'e1', name: 'Employer 1' },
  { id: 'e2', name: 'Employer 2' },
  { id: 'e3', name: 'Employer 3' },
  { id: 'e4', name: 'Employer 4' },
  { id: 'e5', name: 'Employer 5' }
]

export default function EmployerSelect({ value = '', onChange }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [highlight, setHighlight] = useState(-1)
  const containerRef = useRef(null)
  const [portalStyle, setPortalStyle] = useState({ left: 0, top: 0, width: 0 })

  const selectedIndex = EMPLOYERS.findIndex(c => c.id === value)

  useEffect(() => {
    function onDocClick(e) {
      if (!containerRef.current) return
      if (!containerRef.current.contains(e.target)) {
        setOpen(false)
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
      setTimeout(()=>{
        setOpen(true)
        const rect = containerRef.current && containerRef.current.getBoundingClientRect()
        if (rect) setPortalStyle({ left: rect.left + window.scrollX, top: rect.bottom + window.scrollY, width: rect.width })
      }, 10)
    } else {
      setOpen(v => !v)
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
      e.preventDefault(); setHighlight(h => Math.min(h + 1, EMPLOYERS.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); setHighlight(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault(); if (highlight >= 0) { onChange(EMPLOYERS[highlight].id); setOpen(false); setTimeout(()=>setMounted(false), 240) }
    } else if (e.key === 'Escape') {
      e.preventDefault(); setOpen(false); setTimeout(()=>setMounted(false), 240)
    }
  }

  return (
    <div ref={containerRef} className="select-container">
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        className={`select-trigger ${open ? 'open' : ''}`}
      >
        <div className="select-value">{EMPLOYERS.find(c=>c.id===value)?.name || 'Employer'}</div>
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
          className={`select-list ${open ? 'open' : ''} portal`}
          style={{ position: 'absolute', left: portalStyle.left, top: portalStyle.top, width: portalStyle.width }}
        >
          {EMPLOYERS.map((c, i) => (
            <li
              key={c.id}
              role="option"
              aria-selected={value===c.id}
              onMouseEnter={()=>setHighlight(i)}
              onMouseLeave={()=>setHighlight(-1)}
              onClick={()=>{ onChange(c.id); setOpen(false); setTimeout(()=>setMounted(false), 240) }}
              className={`select-option ${highlight===i ? 'highlight' : ''}`}
            >
              <div className="select-option-label">{c.name}</div>
            </li>
          ))}
        </ul>,
        document.body
      )}
    </div>
  )
}
