import React from 'react'

export default function Pagination({ current = 1, total = 4, onChange = () => {} }) {
  const pages = Array.from({ length: total }, (_, i) => i + 1)
  return (
    <nav className="employer-pagination-row" aria-label="Pagination">
      <button className="employer-pagination-btn employer-pagination-arrow" aria-label="Previous" onClick={() => onChange(Math.max(1, current - 1))}>
        <i className="fa-solid fa-arrow-left" aria-hidden={true}></i>
      </button>

      {pages.map((p) => (
        <button
          key={p}
          className={`employer-pagination-btn${p === current ? ' active' : ''}`}
          aria-current={p === current ? 'page' : undefined}
          onClick={() => onChange(p)}
        >
          {p}
        </button>
      ))}

      <button className="employer-pagination-btn employer-pagination-arrow" aria-label="Next" onClick={() => onChange(Math.min(total, current + 1))}>
        <i className="fa-solid fa-arrow-right" aria-hidden={true}></i>
      </button>
    </nav>
  )
}
