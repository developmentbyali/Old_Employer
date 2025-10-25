import React from 'react'
import AvatarBadge from './AvatarBadge'

export default function ProfileOverlay({ percent = 60, avatarSrc = '/avt-float.png', tooltip = 'Complete your profile for get better job opportunity' }) {
  // widget size (reduced for a smaller circle)
  const size = 120
  const center = size / 2
  // keep a small inner padding from the widget edge
  const radius = center - 6
  const pct = Math.max(0, Math.min(100, percent))

  // avatar position on the circle border at angle 60deg
  const angleDeg = 60
  const angleRad = (angleDeg * Math.PI) / 180
  const avatarOffset = 12
  const avatarCx = center + (radius + avatarOffset) * Math.cos(angleRad)
  const avatarCy = center - (radius + avatarOffset) * Math.sin(angleRad)

  // tooltip sizing: allow up to 3 lines and make width double the allowed height
  const lineHeightPx = 14 // approximate line-height for the tooltip text (reduced)
  const maxLines = 3
  const paddingVertical = 6 * 2 // top+bottom padding in px (matches '6px 10px')
  const tooltipMaxHeight = lineHeightPx * maxLines + paddingVertical // max height for 3 lines
  const tooltipWidth = Math.round(tooltipMaxHeight * 2.5) // width is double the height
  // make the tail noticeably larger and proportional to the tooltip height
  const tailSize = Math.max(14, Math.round(tooltipMaxHeight * 0.22)) // tail scales with tooltip height

  // set a few CSS custom properties for dynamic values (styles themselves live in globals.css)
  const cssVars = {
    '--pw-size': `${size}px`,
    '--pw-tooltip-width': `${tooltipWidth}px`,
    '--pw-tooltip-maxheight': `${tooltipMaxHeight}px`,
    '--pw-tail-size': `${tailSize}px`,
    '--av-left': `${avatarCx - 24}px`,
    '--av-top': `${avatarCy - 24}px`
  }

  return (
    <div className="profile-widget" style={cssVars}>
      {/* Tooltip */}
      <div className="profile-tooltip">
        <p className="profile-tooltip-text" aria-hidden>{tooltip}</p>
        <span className="profile-tooltip-tail" aria-hidden />
      </div>

      <div className="profile-widget-inner">
        {/* wave visuals (CSS-driven) */}
        <div className="pal-wave-wrapper" aria-hidden>
          <div className="pal-wave one" />
          <div className="pal-wave two" />
          <div className="pal-wave three" />
          <div className="pal-pulse"><div className="ring" /></div>
        </div>

        {/* decorative border circle placed above waves but beneath content */}
        <div className="profile-border-circle" />

        {/* inner circle content (transparent background so waves show through) */}
        <div className="profile-inner">
          <div className="profile-inner-stack">
            <p className="profile-pct">{Math.round(pct)}%</p>
            <p className="profile-label">Profile</p>
          </div>
        </div>

  {/* avatar badge on border at angle (extracted component) */}
  <AvatarBadge src={avatarSrc} size={48} left={avatarCx - 24} top={avatarCy - 24} borderColor="#FC9823" zIndex={3} />
      </div>
    </div>
  )
}
