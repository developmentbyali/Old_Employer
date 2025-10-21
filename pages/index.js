import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home(){
  return (
    <>
      <Head>
        <title>Home — OldEmployer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="home-root">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Look inside in any Company</h1>
            <p className="hero-desc">See insights on salary, reviews, photos and enjoy stories alike in brand companies.</p>
          </div>

          <div className="search-box">
            <input type="text" placeholder="Search Company Employer or top search" className="search-input" />
            <select className="search-select">
              <option>United State</option>
            </select>
            <select className="search-select">
              <option>Select City</option>
            </select>
            <input type="text" placeholder="Employee" className="search-input" />
            <button className="search-btn">Search</button>
          </div>
        </section>

        {/* Top Rated Companies Section */}
        <section className="section">
          <h2 className="section-title">Top Rated Camnpanies</h2>
          <div className="companies-grid">
            <div className="company-card">
              <div className="company-triangle">▲</div>
              <h3>Acndrigth Ink</h3>
              <div className="rating">★★★★★ 23</div>
              <div className="company-label">Founded</div>
            </div>
            <div className="company-card">
              <div className="company-triangle">▲</div>
              <h3>Acndrigth Ink</h3>
              <div className="rating">★★★★★ 23</div>
              <div className="company-label">Founded</div>
            </div>
          </div>
        </section>

        {/* Job Opportunity Section */}
        <section className="job-section">
          <div className="job-left">
            <h2>Get better job that you deserve !</h2>
            <p>Complete your profile and get better opportunity that we most relevant to you with our apply for Job.</p>
            <Link href="/signup">
              <button className="btn-apply">Apply now</button>
            </Link>
          </div>
          <div className="job-right">
            <img src="/look-in-side.png" alt="Job opportunity" className="job-illustration" />
          </div>
        </section>

        {/* How it works Section */}
        <section className="section">
          <h2 className="section-title">How can look in side in any company</h2>
          <div className="how-works-container">
            <div className="how-left">
              <img src="/Frame 371.png" alt="How it works" className="how-illustration" />
            </div>
            <div className="how-right">
              <h3>How can look in side in any company</h3>
              <p>The standard chunk of Lorem ipsum used since the 1950s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" accompanied by English versions.</p>
            </div>
          </div>
        </section>

        {/* Join Community Section */}
        <section className="community-section">
          <h2>Join The Old Employer Community</h2>
          <p>The standard chunk of Lorem Ipsum used since the 1950s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" accompanied by English versions.</p>
          <img src="/Frame.png" alt="Community" className="community-illustration" />
        </section>

        {/* How it can look section */}
        <section className="section">
          <div className="how-works-container">
            <div className="how-left">
              <h3>How can look in side in any company</h3>
              <p>The standard chunk of Lorem ipsum text used since the 1950s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" accompanied by English versions.</p>
            </div>
            <div className="how-right">
              <img src="/Frame 177.png" alt="How to look" className="how-illustration" />
            </div>
          </div>
        </section>

        {/* Companies Owner Section */}
        <section className="section">
          <h2 className="section-title">You are a owner of a company ?</h2>
          <p className="section-desc">We'd be that analyzed you need to track your and add search your desired skills, location or industry and others.</p>
          <Link href="/signup">
            <button className="btn-outline">Sign up</button>
          </Link>
        </section>

        {/* Companies Rating Section */}
        <section className="section">
          <h2 className="section-title">Companies Rating</h2>
          <p className="section-desc">The standard chunk of Lorem ipsum text used since the 1950s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" accompanied by English versions.</p>
          <div className="ratings-list">
            <div className="rating-item">
              <div className="rating-triangle">▲</div>
              <h4>Andirguh Ink</h4>
              <div className="stars">★★★★★ <span>23</span></div>
              <div className="label">Founded</div>
            </div>
            <div className="rating-item">
              <div className="rating-triangle">▲</div>
              <h4>Andirguh Ink</h4>
              <div className="stars">★★★★★ <span>23</span></div>
              <div className="label">Founded</div>
            </div>
            <div className="rating-item">
              <div className="rating-triangle">▲</div>
              <h4>Andirguh Ink</h4>
              <div className="stars">★★★★★ <span>23</span></div>
              <div className="label">Founded</div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="social-section">
          <h2>Join With Social Media</h2>
          <p>By creating an account, I agree to Old Employer's <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></p>
          <div className="social-buttons">
            <button className="social-btn">f</button>
            <button className="social-btn">in</button>
            <button className="social-btn">𝕏</button>
            <button className="social-btn">G</button>
          </div>
        </section>

        {/* How it works detail Section */}
        <section className="section">
          <h2 className="section-title">How it work</h2>
          <p className="section-desc">The standard chunk of Lorem ipsum text used since the 1950s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" accompanied by English versions.</p>
        </section>

        {/* Footer */}
        <footer className="site-footer">
          <div className="footer-inner">
            <div className="footer-box">
              <div className="footer-brand">
                <img src="/logo.png" alt="Old Employer" style={{height:26}} />
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
                  {Array.from({length:12}).map((_,i)=> (
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
      </main>
    </>
  )
}
