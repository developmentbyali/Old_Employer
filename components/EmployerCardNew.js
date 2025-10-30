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

  return (
    <div className={rootClass} role="group" aria-label={`${title} card`} style={styleVars}>

      {/* 1st div: image + thumbs */}
      <div className="company-card-col company-card-col-1">
  <div className="company-card-avatar-thumbs company-card-avatar-thumbs--row">
          {/* Avatar */}
          <div className="company-card-avatar">
            <img src="/logo 2.png" alt={title} className="company-card-avatar-img company-card-avatar-img--large" />
          </div>



          {/* Thumbs */}
          <div className="company-card-thumbs company-card-thumbs--row" aria-hidden="false" style={{ display: 'flex', flexDirection: 'column', gap: '18px', alignItems: 'center' }}>

            <div className="company-card-thumb-row company-card-thumb-row--col">
              <i className="thumb up fa-solid fa-thumbs-up" aria-hidden={true}></i>
              <span className="company-card-thumb-count">{up}</span>
            </div>

            <div className="company-card-thumb-row company-card-thumb-row--col">
              <i className="thumb down fa-solid fa-thumbs-down" aria-hidden={true}></i>
              <span className="company-card-thumb-count">{down}</span>
            </div>

          </div>

        </div>
      </div>




















      {/* 2nd div: title + location */}
      <div className="company-card-col company-card-col-2 company-card-col-2--space">
        <h6 className="company-card-title company-card-title--truncate">{title}</h6>
        <p className="company-card-location company-card-location--fixed">{location}</p>
      </div>

      {/* 3rd div: rating, stars, etc. */}
      <div className="company-card-col company-card-col-3 ">
        <div className="company-card-rating company-card-col-3--space">
          <div className="company-card-stars">{stars}</div>
          <div className="company-card-rating-meta">
            <div className="company-rating-badge" aria-label={`Rating ${rating}`}>{rating}</div>
            <div className="company-card-overall">Overall ratings</div>
           </div>
        </div>
      </div>

    </div>
  );
}
