import React from 'react';

export default function EmployerCard({ title, location, rating, reviews, avatar, stars = '★★★★★', width, height = 215, layout = 'vertical', className = '' }) {
  const up = parseInt(reviews, 10) || 0;
  // approximate down votes for visual parity when not provided
  const down = Math.max(0, Math.round(up / 8));
  const styleVars = {
    '--card-width': typeof width === 'number' ? `${width}px` : width || undefined,
    '--card-height': typeof height === 'number' ? `${height}px` : height
  }

  const rootClass = `company-card layout-${layout} ${className}`.trim()

  // List layout: horizontal card used in the 'list' view
  if (layout === 'list') {
    return (
      // Frame 164
      <div className={rootClass} role="group" aria-label={`${title} card`} style={{ ...styleVars, display: 'flex', flexDirection: 'row', gap: '12px' }}>
        {/* Frame 221 */}
        <div className="company-card-list">
          {/* Frame 163 */}
          <div className="company-card-avatar">
            <img src={'/logo 2.png'} alt={title} className="company-card-avatar-img company-card-avatar-img--xlarge" />
          </div>
          {/* Frame 220 */}
          <div style={{ paddingRight: '30px', paddingLeft: '30px', gap: '12px', display: 'flex', flexDirection: 'column', flex: '1 1 auto', width: '100%' }}>
            {/* Frame 157 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <h4>{title}</h4>
              <div style={{ fontSize: '12px', color: '#585858' }}>{location}</div>
            </div>
            {/* Frame 159 */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              {/* Frame 156 */}
              <div className="company-card-stars">{stars}</div>
              {/* Frame 158 */}
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '13px' }}>
                <div className="company-rating-badge" aria-label={`Rating ${rating}`} style={{ width: '32px', height: '20px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{rating}</div>
                <p style={{ margin: 0, fontSize: '14px', color: '#585858' }}>Overall rating</p>
              </div>
            </div>
          </div>
        </div>
        {/* frame 162 */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', alignItems: 'center' }}>
          {/* Frame 161 */}
          <div>
            <i className="fa-solid fa-thumbs-down" aria-hidden={true} style={{ fontSize: '17px', color: '#E41C1C' }}></i>
            <span style={{ fontSize: '12px', color: '#585858' }}>{down}</span>
          </div>
          {/* Frame 160 */}
          <div>
            <i className="fa-solid fa-thumbs-up" aria-hidden={true} style={{ fontSize: '17px', color: '#65BF73' }}></i>
            <span style={{ fontSize: '12px', color: '#585858' }}>{up}</span>
          </div>
        </div>
      </div>
    )
  }

  // Default vertical card (existing UI)
  return (
    // Frame 164
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '345px',
      height: '215px',
      gap: '12px',
      borderRadius: '15px',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: '#EAF0FF',
      padding: '30px',
      background: '#FFFFFF'
     }}>

      {/*Frame 179 - 1st div: image + thumbs */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

        {/*Frame 163 - Avatar */}
        <div >
          <img src='/logo 2.png' alt={title} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </div>

        {/* Frame 162 - Thumbs */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '18px' }}>
          
          {/* Frame 160 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <i className="fa-solid fa-thumbs-up" aria-hidden={true} style={{ color: '#65BF73', fontSize: '16px' }}></i>
            <span style={{ fontSize: '12px', color: '#585858' }}>{up}</span>
          </div>

          {/* Frame 161 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <i className="fa-solid fa-thumbs-down" aria-hidden={true} style={{ color: '#E41C1C', fontSize: '16px' }}></i>
            <span style={{ fontSize: '12px', color: '#585858' }}>{down}</span>
          </div>
        </div>

      </div>

      {/* Frame 157 - 2nd div: title + location */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <h6 style={{ fontSize: '16px', color: '#252525', margin: 0 }}>{title}</h6>
        <p style={{ fontSize: '12px', color: '#585858', margin: 0 }}>{location}</p>
      </div>

      {/* Frame 159 - 3rd div: rating, stars, etc. */}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-between'  }}>
          
          {/* Frame 156 */}
          <div style={{ color: '#FC9823', fontSize: '15px' }}>{stars}</div>

          {/* Frame 158 */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: '13px', alignItems: 'center' }}>
            <div className="company-rating-badge" aria-label={`Rating ${rating}`} style={{ width: '32px', height: '20px', fontSize: '12px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{rating}</div>
            <p style={{ margin: 0, fontSize: '14px', color: '#585858' }}>Overall rating</p>
          </div>
      </div>

    </div>
  );
}
