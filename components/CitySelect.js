import React, { useState, useRef, useEffect } from 'react'

const CITIES = [
  { id: 'opt1', name: 'Option 1' },
  { id: 'opt2', name: 'Option 2' },
  { id: 'opt3', name: 'Option 3' },
  { id: 'opt4', name: 'Option 4' },
  { id: 'opt5', name: 'Option 5' }
]

export default function CitySelect({ value = '', onChange }) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [highlight, setHighlight] = useState(-1)
  const containerRef = useRef(null)

  const selectedIndex = CITIES.findIndex(c => c.id === value)

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
      setTimeout(()=>setOpen(true), 10)
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
      e.preventDefault(); setHighlight(h => Math.min(h + 1, CITIES.length - 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); setHighlight(h => Math.max(h - 1, 0))
    } else if (e.key === 'Enter') {
      e.preventDefault(); if (highlight >= 0) { onChange(CITIES[highlight].id); setOpen(false); setTimeout(()=>setMounted(false), 240) }
    } else if (e.key === 'Escape') {
      e.preventDefault(); setOpen(false); setTimeout(()=>setMounted(false), 240)
    }
  }

  return (
    <div ref={containerRef} style={{position:'relative',width:220}}>
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={toggle}
        onKeyDown={handleKeyDown}
        style={{display:'flex',alignItems:'center',justifyContent:'flex-start',background:'#ffffff',border:'1px solid #e6e7eb',borderRadius:0,padding:'10px 15px',gap:8,margin:0,width:'220px',height:44,cursor:'pointer'}}
      >
        <div style={{flex:1,color:'#9B9B9B',fontWeight:500,fontSize:16,textAlign:'left',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>{CITIES.find(c=>c.id===value)?.name || 'Select City'}</div>
        <div style={{flex:'0 0 auto',transform: open ? 'rotate(180deg)' : 'none',transition:'transform 0.2s'}} aria-hidden>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M6 9l6 6 6-6" stroke="#6b7280" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {mounted && (
        <ul role="listbox" tabIndex={-1} style={{position:'absolute',left:0,top:'100%',width:220,background:'#fff',border:'1px solid #e6e7eb',boxShadow:'0 6px 20px rgba(0,0,0,0.06)',borderRadius:0,padding:0,margin:0,listStyle:'none',zIndex:40,maxHeight:220,overflow:'auto',transform: open ? 'translateY(0)' : 'translateY(-6px)',opacity: open ? 1 : 0,transition:'opacity 220ms ease, transform 220ms ease',pointerEvents: open ? 'auto' : 'none'}}>
          {CITIES.map((c, i) => (
            <li
              key={c.id}
              role="option"
              aria-selected={value===c.id}
              onMouseEnter={()=>setHighlight(i)}
              onMouseLeave={()=>setHighlight(-1)}
              onClick={()=>{ onChange(c.id); setOpen(false); setTimeout(()=>setMounted(false), 240) }}
              style={{display:'flex',alignItems:'center',gap:10,padding:'10px 12px',cursor:'pointer',background: highlight===i ? '#f7fafc' : 'transparent',borderBottom: '1px solid #f1f4f7',justifyContent:'flex-start',textAlign:'left'}}
            >
              <div style={{flex:1,color:'#374151',display:'flex',alignItems:'center',justifyContent:'flex-start'}}>{c.name}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
