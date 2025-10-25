import React from 'react'

export default function ScrollMouse({ left, right, top, bottom, zIndex = 9999 }) {
  const posStyle = {
    left: left !== undefined ? left : undefined,
    right: right !== undefined ? right : undefined,
    top: top !== undefined ? top : undefined,
    bottom: bottom !== undefined ? bottom : undefined,
    zIndex
  }

  return (
    <div className="scroll-mouse" style={posStyle} aria-hidden>
      <svg width="32" height="64" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="scroll-mouse-svg">
        <rect x="8" y="2" width="16" height="32" rx="8" stroke="#181818" strokeWidth="2" fill="none" />
        <rect className="mouse-anim-rect" x="15" y="10" width="2" height="8" rx="1" fill="#181818" />
      </svg>

      <div className="scroll-mouse-arrows">
        <svg className="mouse-arrow arrow-1" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12L6 6H18L12 12Z" fill="#181818" />
        </svg>
        <svg className="mouse-arrow arrow-2" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12L6 6H18L12 12Z" fill="#181818" />
        </svg>
        <svg className="mouse-arrow arrow-3" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12L6 6H18L12 12Z" fill="#181818" />
        </svg>
      </div>
    </div>
  )
}
