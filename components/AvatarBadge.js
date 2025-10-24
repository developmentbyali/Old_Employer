import React from 'react'

export default function AvatarBadge({ src = '/logo 2.png', size = 48, left = 0, top = 0, borderColor = '#FC9823', zIndex = 3 }) {
  const wrapperStyle = {
    position: 'absolute',
    left,
    top,
    width: size,
    height: size,
    borderRadius: '50%',
    overflow: 'hidden',
    border: `3px solid ${borderColor}`,
    boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
    zIndex,
    background: '#fff'
  }

  return (
    <div style={wrapperStyle}>
      <img src={src} alt="avatar" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}
