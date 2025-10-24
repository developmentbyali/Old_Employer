import React from 'react'
import AvatarBadge from './AvatarBadge'

export default function ProfileOverlay({ percent = 60, avatarSrc = '/avt-float.png', tooltip = 'Complete your profile for get better job opportunity' }) {
  // widget size (reduced for a smaller circle)
  const size = 120
  const center = size / 2
  // keep a small inner padding from the widget edge
  const radius = center - 6
  const pct = Math.max(0, Math.min(100, percent))
  const clippedHeight = Math.round(size * (1 - pct / 100))

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

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 10000, width: `${size + 40}px`, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
      {/* Tooltip */}
        <div style={{
          position: 'absolute',
          right: 140,
          top: 14,
          background: '#ffffff',
          boxShadow: '0 8px 24px rgba(2,6,23,0.08)',
          // explicit width and a maxHeight so the tooltip can grow up to 3 lines
          width: tooltipWidth,
          maxHeight: tooltipMaxHeight,
          display: 'flex',
          alignItems: 'center',
          padding: '6px 10px',
          borderRadius: 12,
          border: '1px solid rgba(2,6,23,0.04)',
          WebkitBackdropFilter: 'blur(4px)',
          backdropFilter: 'blur(4px)',
          overflow: 'visible'
        }}>
  <p style={{ margin: 0, fontSize: 12, color: '#374151', lineHeight: `${lineHeightPx}px`, display: '-webkit-box', WebkitLineClamp: maxLines, WebkitBoxOrient: 'vertical', overflow: 'hidden', textAlign: 'center', width: '100%' }}>{tooltip}</p>
          {/* right-pointing tail (rotated square) */}
          <span style={{
            position: 'absolute',
            right: -Math.round(tailSize / 2),
            top: '50%',
            width: tailSize,
            height: tailSize,
            transform: 'translateY(-50%) rotate(45deg)',
            background: '#ffffff',
            border: '1px solid rgba(2,6,23,0.04)',
            boxShadow: '0 8px 24px rgba(2,6,23,0.08)'
          }} />
        </div>

      <div style={{ width: size, height: size, position: 'relative' }}>
        {/* Component-scoped CSS for rotating waves (derived from the provided demo) */}
        <style>{`
          .pal-wave-wrapper { position: absolute; inset: 0; overflow: hidden; border-radius: 50%; background-color: transparent; }
          .pal-wave { position: absolute; top: 50%; left: -50%; width: ${size * 2}px; height: ${size * 2}px; background-color: #FFA800; border-radius: 35%; transform-origin: 50% 50%; will-change: transform; -webkit-backface-visibility: hidden; backface-visibility: hidden; animation-name: pal-waves-rotate; animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1); animation-iteration-count: infinite; }
          .pal-wave.one { animation-duration: 10000ms; opacity: 1; }
          .pal-wave.two { animation-duration: 12000ms; opacity: 1; }
          .pal-wave.three { animation-duration: 15000ms; opacity: 1; }

          @keyframes pal-waves-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

          /* periodic subtle pulse overlay to emphasize motion every 5s */
          .pal-pulse { position: absolute; inset: 0; border-radius: 50%; pointer-events: none; mix-blend-mode: overlay; }
          @keyframes pal-pulse-anim { 0% { opacity: 0; transform: scale(0.98); } 10% { opacity: 0.35; transform: scale(1.03); } 30% { opacity: 0.12; transform: scale(1.01); } 100% { opacity: 0; transform: scale(0.98); } }
          .pal-pulse .ring { position: absolute; inset: 0; border-radius: 50%; background: radial-gradient(circle at 50% 40%, rgba(255,255,255,0.45), rgba(255,255,255,0) 40%); opacity: 0; animation: pal-pulse-anim 5000ms linear infinite; }
        `}</style>

        {/* wave visuals (CSS-driven) */}
        <div className="pal-wave-wrapper" aria-hidden style={{ zIndex: 0 }}>
          <div className="pal-wave one" />
          <div className="pal-wave two" />
          <div className="pal-wave three" />
          <div className="pal-pulse"><div className="ring" /></div>
        </div>

  {/* decorative border circle placed above waves but beneath content */}
  <div style={{ position: 'absolute', top: 0, left: 0, width: size, height: size, borderRadius: '50%', boxSizing: 'border-box', border: '3px solid #FC9823', zIndex: 1, pointerEvents: 'none' }} />

        {/* inner circle content (transparent background so waves show through) */}
        <div style={{ position: 'absolute', top: 12, left: 12, width: size - 24, height: size - 24, borderRadius: '999px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', boxSizing: 'border-box', zIndex: 2, color: '#ffffff' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#ffffff', mixBlendMode: 'normal', padding: '4px 8px', borderRadius: 8, textShadow: '0 0 0 #FC9823, 1px 0 0 #FC9823, -1px 0 0 #FC9823, 0 1px 0 #FC9823, 0 -1px 0 #FC9823, 1px 1px 0 #FC9823, -1px -1px 0 #FC9823' }}>{Math.round(pct)}%</p>
            <p style={{ marginTop: 6, marginBottom: 0, fontSize: 24, fontWeight: 600, color: '#ffffff', mixBlendMode: 'normal', padding: '3px 8px', borderRadius: 6, textShadow: '0 0 0 #FC9823, 1px 0 0 #FC9823, -1px 0 0 #FC9823, 0 1px 0 #FC9823, 0 -1px 0 #FC9823, 1px 1px 0 #FC9823, -1px -1px 0 #FC9823' }}>Profile</p>
          </div>
        </div>

  {/* avatar badge on border at angle (extracted component, animation removed) */}
  <AvatarBadge src={avatarSrc} size={48} left={avatarCx - 24} top={avatarCy - 24} borderColor="#FC9823" zIndex={3} />
      </div>
    </div>
  )
}
