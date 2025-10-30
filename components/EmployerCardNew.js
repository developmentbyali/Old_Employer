import React from 'react';

export default function EmployerCard({ title, location, rating, reviews, avatar, stars = '★★★★★' }) {
  const up = parseInt(reviews, 10) || 0;
  // approximate down votes for visual parity when not provided
  const down = Math.max(0, Math.round(up / 8));

  return (
    <div className="employe-slide" role="group" aria-label={`${title} card`}>
      <div className="card-avatar">
        <img src={avatar} alt={title} className="card-avatar-img" />
      </div>

      <div className="card-details">
        <div className="card-title-row">
          <h6 className="card-title">{title}</h6>
          <p className="card-location">{location}</p>
        </div>

        <div className="card-meta">
          <div className="card-left-meta">
            <span className="card-stars">{stars}</span>
            <span className="card-overall">Overall ratings</span>
          </div>

          <div className="card-right-stats" aria-hidden="true">
            <div className="rating-badge">{rating}</div>

            <div className="card-thumb-row">
              <span className="thumb up">👍</span>
              <span className="card-thumb-count">{up}</span>
            </div>

            <div className="card-thumb-row">
              <span className="thumb down">👎</span>
              <span className="card-thumb-count">{down}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
