import Head from 'next/head'
import Header from '../components/Header'

export default function Signup(){
  return (
    <>
      <Head>
        <title>Sign up — OldEmployer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="signup-root">
        <div className="signup-card">
          <h2 className="signup-title">Join the OldEmployer Family!</h2>
          <p className="signup-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>

          <form className="signup-form">
            <div>
              <label className="label">First name</label>
              <input className="input" placeholder="Example: Johan" />
            </div>
            <div>
              <label className="label">Last Name</label>
              <input className="input" placeholder="Example: Smith" />
            </div>

            <div>
              <label className="label">Enter your email</label>
              <input className="input" placeholder="Enter your name or email" />
            </div>
            <div>
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="********" />
            </div>

            <div>
              <label className="label">Phone number</label>
              <input className="input" placeholder="+1 123-456-7890" />
            </div>
            <div>
              <label className="label">Label</label>
              <select className="input"><option>Select Option</option></select>
            </div>

            <div className="full-col">
              <label className="label">Industry</label>
              <select className="input"><option>Select Option</option></select>
            </div>

            <div className="full-col">
              <button className="btn-primary full">Join Now</button>
            </div>
          </form>

          <div className="social-box">
            <strong>Join with socialmedia</strong>
            <div className="social-icons">
              <span className="social">in</span>
              <span className="social">f</span>
              <span className="social">G</span>
              <span className="social">x</span>
            </div>
          </div>
        </div>

      </main>
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
    </>
  )
}
