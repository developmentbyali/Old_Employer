import React from 'react'

export default function EmployerCard({ title, location, rating, reviews, avatar, stars = '★★★★★' }) {
  return (
    <div className="employe-slide" role="group" aria-label={`${title} card`}>
      <div className="card-avatar">
        <img src={avatar} alt={title} className="card-avatar-img" />
      </div>
      <div className="card-details" style={{ width: '100%' }}>
        <div className="card-title-row">
          <h6 className="card-title">{title}</h6>
          <p className="card-location">{location}</p>
        </div>
        <div className="card-meta" style={{ alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="card-stars">{stars}</span>
            <span className="card-overall">Overall ratings</span>
          </div>
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="rating-badge">{rating}</div>
            <div style={{ color: '#22c55e', fontSize: 18 }}>👍</div>
            <div style={{ color: '#9ca3af', fontSize: 13 }}>{reviews}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
