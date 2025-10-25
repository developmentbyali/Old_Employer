import React, { useRef, useEffect, useState } from 'react'
import EmployerCard from './EmployerCard'

export default function EmployerSlider({ items = [] }) {
  const listRef = useRef(null)
  const [slideHeight, setSlideHeight] = useState(0)
  const [canUp, setCanUp] = useState(false)
  const [canDown, setCanDown] = useState(true)

  useEffect(() => {
    const node = listRef.current
    if (!node) return

    function update() {
      const first = node.firstElementChild
      const gap = 16
      const h = first ? first.offsetHeight + gap : 100
      setSlideHeight(h)
      setCanUp(node.scrollTop > 0)
      setCanDown(node.scrollTop + node.clientHeight < node.scrollHeight - 1)
    }

    update()
    node.addEventListener('scroll', update)
    window.addEventListener('resize', update)
    return () => {
      node.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  function scroll(dir) {
    if (!listRef.current) return
    const delta = dir === 'up' ? -slideHeight : slideHeight
    listRef.current.scrollBy({ top: delta, behavior: 'smooth' })
  }

  return (
    <div className="employer-slider-wrap">
      <button
        type="button"
        className="arrow-btn arrow-up"
        onClick={() => scroll('up')}
        aria-label="Scroll up"
        disabled={!canUp}
      >
        <svg className="arrow-svg" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M2 9l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div className="employe-slider" ref={listRef} aria-live="polite">
        {items.map((it, idx) => (
          <EmployerCard key={idx} {...it} />
        ))}
      </div>

      <button
        type="button"
        className="arrow-btn arrow-down"
        onClick={() => scroll('down')}
        aria-label="Scroll down"
        disabled={!canDown}
      >
        <svg className="arrow-svg" width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M16 3l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
