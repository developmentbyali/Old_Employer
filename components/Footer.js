import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-box">
          <div className="footer-brand">
            <img src="/logo.png" alt="Old Employer" />
          </div>
        </div>

        <div className="footer-box">
          <div className="links-column">
            <h4>Links of Interest</h4>
            <ul>
              <li>About</li>
              <li>Help Center</li>
              <li>Business Services</li>
              <li>Ad Choices</li>
              <li>Advertising</li>
            </ul>
          </div>
        </div>

        <div className="footer-box">
          <div className="links-column">
            <h4>Talent Solutions</h4>
            <ul>
              <li>Talent Solutions</li>
              <li>Professional Community Policies</li>
              <li>Careers</li>
              <li>Marketing Solutions</li>
              <li>Sales Solutions</li>
            </ul>
          </div>
        </div>

        <div className="footer-box">
          <div className="industry-column">
            <h4>Search by Industry</h4>
            <div className="industry-grid">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="industry-item">Industry</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <div className="bar-inner">
          <div>Corporation © 2024</div>
          <div className="bar-right">Privacy & Terms</div>
        </div>
      </div>
    </footer>
  )
}
