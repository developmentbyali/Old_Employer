import Link from 'next/link'

export default function Header(){
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="brand">
          <Link href="/">
            <img src="/logo.png" alt="Old Employer" className="brand-logo" style={{cursor: 'pointer'}} />
          </Link>
          <div className="brand-text-wrap">
          </div>
        </div>

        <div className="header-right">
          <nav className="nav">
            <Link href="/">Home</Link>
            <a href="#">Companies</a>
            <a href="#">Products Timeline</a>
            <a href="#">Hall of fame</a>
            <a href="#">Blogs</a>
            <Link href="/signup">Join</Link>
          </nav>
<div className="profile">
            <img src="/avatar.svg" alt="avatar" className="avatar-img" />
            <div className="profile-name">Employee <span className="caret">▾</span></div>
          </div>
          <div className="add-review-block">
            <button className="add-review">Add Review</button>
          </div>

          <div className="icon-column">
            <button className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2z" fill="#fff"/><path d="M18 16v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.99 2H20l-2-2z" fill="#fff"/></svg>
              <span className="badge">3</span>
            </button>

            <button className="icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="#fff"/></svg>
              <span className="badge">3</span>
            </button>
          </div>

          
        </div>
      </div>
    </header>
  )
}
