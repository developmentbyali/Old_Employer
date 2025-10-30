import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import CountrySelect from '../components/CountrySelect'
import CitySelect from '../components/CitySelect'
import EmployerSelect from '../components/EmployerSelect'
import ProfileOverlay from '../components/ProfileOverlay'
import ScrollMouse from '../components/ScrollMouse'
import EmployerSlider from '../components/EmployerSlider'

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [country, setCountry] = useState('gb');
  const [city, setCity] = useState('')
  const [employer, setEmployer] = useState('')
  const sliderItems = [
    { title: 'Andropple lab', location: 'Pakistan', rating: '4.5', reviews: 150, avatar: '/logo 2.png' },
    { title: 'Acme Co', location: 'USA', rating: '4.2', reviews: 98, avatar: '/logo 2.png' },
    { title: 'Techrise', location: 'UK', rating: '4.8', reviews: 210, avatar: '/logo 2.png' },
    { title: 'DevWorks', location: 'Canada', rating: '4.0', reviews: 44, avatar: '/logo 2.png' },
    { title: 'NovaSoft', location: 'Germany', rating: '4.1', reviews: 72, avatar: '/logo 2.png' },
    { title: 'ByteLabs', location: 'India', rating: '4.6', reviews: 184, avatar: '/logo 2.png' },
    { title: 'GreenEdge', location: 'Netherlands', rating: '4.3', reviews: 64, avatar: '/logo 2.png' },
    { title: 'Cloud9', location: 'USA', rating: '4.7', reviews: 321, avatar: '/logo 2.png' },
    { title: 'Innova', location: 'Australia', rating: '4.0', reviews: 37, avatar: '/logo 2.png' },
    { title: 'BrightWorks', location: 'Sweden', rating: '4.4', reviews: 128, avatar: '/logo 2.png' },
    { title: 'Alpha Systems', location: 'France', rating: '3.9', reviews: 21, avatar: '/logo 2.png' },
    { title: 'Zenith Solutions', location: 'Spain', rating: '4.2', reviews: 89, avatar: '/logo 2.png' }
  ]
  return (
    <>
      <Head>
        <title>Home — OldEmployer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="home-root">
        <ProfileOverlay />

        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Look inside in any Company</h1>
            <p className="hero-desc">Read Review and discover great companies !<br />Write reviews & help other people for discover right job & great companies.</p>
          </div>
          <div className="hero-search-panel">
            <span className="search-box">
              <svg width="20" height="20" fill="none" stroke="#999" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <span
                className={`search-placeholder${searchFocused || searchValue ? ' search-placeholder-animate' : ''}`}
              >
                Search Company/Employer or key word ...
              </span>
              <input
                type="text"
                className="search-input"
                value={searchValue}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                onChange={e => setSearchValue(e.target.value)}
                aria-label="Search Company/Employer or key word ..."
              />
            </span>
            <CountrySelect value={country} onChange={setCountry} />
            <CitySelect value={city} onChange={setCity} />
            <EmployerSelect value={employer} onChange={setEmployer} />
            <button className="search-btn">Search</button>
          </div>
        </section>

        {/** Background Images */}
        <div className="hero-bg-container">
          <img src="/bg-down.png" alt="background" className="bg-down" />
          <img src="/Vector.png" alt="vector" className="bg-vector" />
          <div className="hero-bg-inner">

            {/* Top Rated Companies Section */}
            <section className="top-rated-section">
              <div className="top-rated-inner">
                <h3 className="top-rated-title">Top Rated Companies</h3>
                <div className="top-rated-accent" />
                <div className="top-rated-divider" />
                <div className="top-cards">

                  {/* Card 1 */}
                  <div className="top-card">
                    <div className="card-avatar">
                      <img src="/logo 2.png" alt="Andropple lab" className="card-avatar-img" />
                    </div>
                    <div className="card-details">
                      <div className="card-title-row">
                        <h6 className="card-title">Andropple lab</h6>
                        <p className="card-location">Pakistan</p>
                      </div>
                      <div className="card-meta">
                        <span className="card-stars">★★★★★</span>
                        <img src="/rating.svg" alt="rating" className="card-rating-img" />
                        <span className="card-overall">Overall ratings</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="top-card">
                    <div className="card-avatar">
                      <img src="/logo 2.png" alt="Andropple lab" className="card-avatar-img" />
                    </div>
                    <div className="card-details">
                      <div className="card-title-row">
                        <h6 className="card-title">Andropple lab</h6>
                        <p className="card-location">Pakistan</p>
                      </div>
                      <div className="card-meta">
                        <span className="card-stars">★★★★★</span>
                        <img src="/rating.svg" alt="rating" className="card-rating-img" />
                        <span className="card-overall">Overall ratings</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Job Opportunity Section */}
            <section className="job-cta-section">
              <div className="job-cta-inner">
                <ScrollMouse left={100} top={-80} />
                <div className="job-cta-row">
                  <h3 className="job-cta-title">Get better job that you deserve !</h3>
                  <div className="job-cta-action">
                    <Link href="/signup">
                      <button className="signup-now">Signup Now</button>
                    </Link>
                  </div>
                </div>

                <div className="job-cta-accent">
                  <div className="job-cta-bar" />
                  <div className="job-cta-divider"></div>
                </div>

                <p className="job-cta-desc">Complete your profile and get better opportunity that are most relevant to you with out apply for job !</p>

              </div>
            </section>

            {/* How can look in side in any company */}
            <section className="section-3">
              <div className="feature-inner">
                <div className="feature-card-wrap">
                  <img src="/next-move1.svg" alt="Next Move" className="feature-illustration" />
                </div>
                <div>
                  <h3 className="top-rated-title">How can look in side in any company</h3>
                  <div className="top-rated-accent" />
                  <div className="top-rated-divider" />
                  <div className="top-cards"></div>
                  <p className="feature-desc">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 falso reproduced in their exactoriginal form, accompanied by English versions</p>
                </div>
              </div>
            </section>

            {/* 2 How can look in side in any company */}
            <section className="section-3">
              <div className="feature-inner">
                <div>
                  <h3 className="top-rated-title">How can look in side in any company</h3>
                  <div className="top-rated-accent" />
                  <div className="top-rated-divider" />
                  <div className="top-cards"></div>
                  <p className="feature-desc">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 falso reproduced in their exactoriginal form, accompanied by English versions</p>

                </div>

                <div className="feature-card-wrap">
                  <img src="/look-in-side.svg" alt="Next Move" className="feature-illustration" />
                </div>
              </div>
            </section>

            {/* Join The Old Employer Community */}
            <section className="section-3">
              <div className="feature-inner">
                <div className="feature-card-wrap">
                  <img src="/frame.svg" alt="Next Move" className="feature-illustration" />
                </div>
                <div className="join-the">
                  <h3 className="top-rated-title">Join The Old Employer Community</h3>
                  <div className="top-rated-accent" />
                  <div className="top-rated-divider" />
                  <div className="top-cards"></div>
                  <p className="feature-desc">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 falso reproduced in their exactoriginal form, accompanied by English versions The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 falso reproduced in their exactoriginal form, accompanied by English versions</p>

                </div>
              </div>
            </section>

            {/* You are a owner of a company ? */}
            <section className="job-cta-left">
              <div className="job-cta-inner">
                <div className="job-cta-row">
                  <h3 className="job-cta-title">You are a owner of a company ? </h3>
                  <div className="job-cta-action">
                    <Link href="/signup">
                      <button className="signup-now">Signup Now</button>
                    </Link>
                  </div>
                </div>

                <div className="job-cta-accent">
                  <div className="job-cta-bar" />
                  <div className="job-cta-divider"></div>
                </div>

                <p className="job-cta-desc">You try to find good employs ? no need to post a job, just search your desire skills, location or industry  and its done !</p>

              </div>
            </section>

            {/* Companies Rating */}
            <section className="section-3 companies-rating-section">
              <div className="feature-inner">
                <div className="comp-rating">
                  <h3 className="top-rated-title">Companies Rating</h3>
                  <div className="top-rated-accent" />
                  <div className="top-rated-divider" />
                  <div className="top-cards"></div>
                  <p className="feature-desc">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 falso reproduced in their exactoriginal form, accompanied by English versions</p>

                </div>

                <div>
                  <EmployerSlider items={sliderItems} />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Join With Social Media */}
  <section className='feature-inner padded-section join-social-section'>
                <div className="comp-rating">
                  <h3 className="top-rated-title">Join With Social Media</h3>
                  <div className="top-rated-accent" />
                  <div className="top-rated-divider" />
                  <div className="top-cards"></div>
                  <p className="feature-desc">By creating an account, I agree to Old-Employer<Link href="/terms"> Terms </Link> of Use and<Link href="/privacy"> Privacy Policy</Link>.</p>
                <div className='social-icons'>
                  <img className="social-icon" src="/linkedin-circle 1.svg" alt="Sign up with LinkedIn" width="30" height="30" />
                  <img className="social-icon" src="/facebook-circle 1.svg" alt="Sign up with Facebook" width="30" height="30" />
                  <img className="social-icon" src="/google 1.svg" alt="Sign up with Google" width="30" height="30" />
                  <img className="social-icon" src="/twitter-circle 1.svg" alt="Sign up with Twitter" width="30" height="30" />
                </div>
                </div>
        </section>

          {/* How it work */}
          <section className='social-section '>
            <div className='feature-inner padded-section'>
                <div className="comp-rating">
                  <h3 className="top-rated-title">How it work</h3>
                  <div className="top-rated-accent" />
                  <div className="top-rated-divider" />
                  <div className="top-cards"></div>
                  <p className="feature-desc">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 falso reproduced in their exactoriginal form, accompanied by English versions.</p>
                </div>
            </div>
        </section>
      </main>
    </>
  )
}
