import React from 'react'

export default function AvatarBadge({ src = '/logo 2.png', size = 48, left = 0, top = 0, borderColor = '#FC9823', zIndex = 3 }) {
  // use CSS variables for dynamic values while keeping static styles in external CSS
  const cssVars = {
    '--av-left': typeof left === 'number' ? `${left}px` : left,
    '--av-top': typeof top === 'number' ? `${top}px` : top,
    '--av-size': typeof size === 'number' ? `${size}px` : size,
    '--av-border': borderColor,
    zIndex
  }

  return (
    <div className="avatar-badge" style={cssVars}>
      <img src={src} alt="avatar" className="avatar-badge-img" />
    </div>
  )
}
