import Head from 'next/head'
// Header and Footer are provided by Layout

export default function Signup(){
  return (
    <>
      <Head>
        <title>Sign up — OldEmployer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
    </>
  )
}
