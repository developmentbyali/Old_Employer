import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'
import React, { useState } from 'react'
import CountrySelect from '../components/CountrySelect'
import CitySelect from '../components/CitySelect'
import EmployerSelect from '../components/EmployerSelect'

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [country, setCountry] = useState('gb');
  const [city, setCity] = useState('')
  const [employer, setEmployer] = useState('')
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
            <p className="hero-desc">Read Review and discover great companies !<br />Write reviews & help other people for discover right job & great companies.</p>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fff',
            borderRadius: '15px',
            backdropFilter: 'blur(15px)',
            boxShadow: '0px 0px 10px 0px #0000001A',
            padding: '48px 50px',
            height: '140px',
            width: 'auto',
            maxWidth: 'none',
            margin: '0 auto',
            flexWrap: 'nowrap'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', background: '#ffffff', border: '1px solid #e6e7eb', borderRadius: '4px', padding: '0 16px', margin: 0, width: '526px', height: '44px', position: 'relative', overflow: 'hidden' }}>
              <svg width="20" height="20" fill="none" stroke="#999" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
              <span
                className={`search-placeholder${searchFocused || searchValue ? ' search-placeholder-animate' : ''}`}
                style={{ position: 'absolute', left: 60, top: 0, height: '100%', display: 'flex', alignItems: 'center', pointerEvents: 'none', fontWeight: 500, fontSize: '16px', fontStyle: 'normal' }}>
                Search Company/Employer or key word ...
              </span>
              <input
                type="text"
                className="search-input"
                style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', height: '100%' }}
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
            <button
              className="search-btn"
              style={{
                width: 174,
                height: 44,
                paddingTop: 8,
                paddingRight: 15,
                paddingBottom: 8,
                paddingLeft: 15,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#23BABC',
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 500,
                borderRadius: 0,
                margin: 0,
                background: '#23BABC'
              }}
            >
              Search
            </button>
          </div>
        </section>

        {/* Top Rated Companies Section */}
        <div style={{ width: '100%', height: '1500px', background: '#f5f7fb', position: 'relative', overflow: 'hidden', margin: '0 auto' }}>
          <img src="/bg-down.png" alt="background" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 'auto', pointerEvents: 'none', zIndex: 0 }} />
          <img src="/Vector.png" alt="vector" style={{ position: 'absolute', bottom: 0, right: 0, width: '100%', height: 'auto', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <section style={{ maxWidth: '1500px', margin: '0 auto' }}>
              <div style={{ width: '50%' }}>
                <h3 style={{ fontWeight: 600, fontStyle: 'semibold', fontSize: '28px', lineHeight: '100%', letterSpacing: 0, color: '#181818', marginBottom: '16px' }}>Top Rated Campines</h3>
                <div style={{ width: '40px', height: '3px', background: '#23BABC' }}></div>
                <div style={{width:'100%',height:'1px',background:'#EAF0FF',margin:0,padding:0}}></div>
                <div style={{display:'flex',gap:'32px',marginTop:'32px'}}>
                  {/* Card 1 */}
                  <div style={{flex:'1',background:'#fff',border:'1px solid #EAF0FF',borderRadius:'15px',padding:'15px',display:'flex',flexDirection:'row',alignItems:'center',boxSizing:'border-box',height:'80px',gap:'10px'}}>
                    <div style={{width:'50px',height:'50px',borderRadius:'50%',border:'1px solid #EAF0FF',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <img src="/logo 2.png" alt="Andropple lab" style={{width:'34.44px',height:'31.11px'}} />
                    </div>
                    <div style={{height:'41px',width:'240px'}}>
                      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:0,padding:0,height:'19px'}}>
                        <h6 style={{margin:0,padding:0,fontWeight:600,fontStyle:'semibold',fontSize:'16px',color:'#252525'}}>Andropple lab</h6>
                        <p style={{margin:0,padding:0,textAlign:'right',marginLeft:'16px',display:'inline-block'}}>Pakistan</p>
                      </div>
                      {/* <div style={{height:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>4</div> */}
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <span style={{color:'#FFA800',fontSize:'18px'}}>★★★★★</span>
                        {/* <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}> */}
                          <img src="/rating.svg" alt="rating" style={{width:'24px',height:'20px'}} />
                          <span style={{fontWeight:500,fontStyle:'medium',fontSize:'12px',color:'#585858'}}>Overall ratings</span>
                        {/* </div> */}
                        
                      </div>
                    </div>
                  </div>
                  {/* Card 2 */}
                  {/* <div style={{flex:'1',background:'#fff',border:'1px solid #EAF0FF',borderRadius:'15px',padding:'15px',display:'flex',alignItems:'center',boxSizing:'border-box',height:'80px',gap:'10px'}}>
                    <img src="/logo.png" alt="Andropple lab" style={{width:'56px',height:'56px',borderRadius:'50%',objectFit:'cover',marginRight:'20px',border:'1px solid #EAF0FF'}} />
                    <div style={{flex:'1'}}>
                      <div style={{fontWeight:'600',fontSize:'20px',marginBottom:'4px',color:'#181818'}}>Andropple lab</div>
                      <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                        <span style={{color:'#FFA800',fontSize:'15px',width:'87px'}}>★★★★★</span>
                        <span style={{background:'#23BABC',color:'#fff',borderRadius:'6px',padding:'2px 10px',fontWeight:'600',fontSize:'15px'}}>4.5</span>
                      </div>
                    </div>
                    <div style={{textAlign:'right',color:'#888',fontSize:'15px'}}>Pakistan</div>
                  </div> */}
                   <div style={{flex:'1',background:'#fff',border:'1px solid #EAF0FF',borderRadius:'15px',padding:'15px',display:'flex',flexDirection:'row',alignItems:'center',boxSizing:'border-box',height:'80px',gap:'10px'}}>
                    <div style={{width:'50px',height:'50px',borderRadius:'50%',border:'1px solid #EAF0FF',display:'flex',alignItems:'center',justifyContent:'center'}}>
                      <img src="/logo 2.png" alt="Andropple lab" style={{width:'34.44px',height:'31.11px'}} />
                    </div>
                    <div style={{height:'41px',width:'240px'}}>
                      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',margin:0,padding:0,height:'19px'}}>
                        <h6 style={{margin:0,padding:0,fontWeight:600,fontStyle:'semibold',fontSize:'16px',color:'#252525'}}>Andropple lab</h6>
                        <p style={{margin:0,padding:0,textAlign:'right',marginLeft:'16px',display:'inline-block'}}>Pakistan</p>
                      </div>
                      {/* <div style={{height:'20px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>4</div> */}
                    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                        <span style={{color:'#FFA800',fontSize:'18px'}}>★★★★★</span>
                        {/* <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}> */}
                          <img src="/rating.svg" alt="rating" style={{width:'24px',height:'20px'}} />
                          <span style={{fontWeight:500,fontStyle:'medium',fontSize:'12px',color:'#585858'}}>Overall ratings</span>
                        {/* </div> */}
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>



            <section style={{ maxWidth: '1500px', margin: '0 auto' }}>Section 2 content</section>




            
            <section style={{ maxWidth: '1500px', margin: '0 auto' }}>Section 3 content</section>
          </div>
        </div>

        {/* Top Rated Companies Section */}
        <section className="section">
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
                <img src="/logo.png" alt="Old Employer" style={{ height: 26 }} />
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
      </main>
    </>
  )
}
