import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login — OldEmployer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="page-root">
        <section className="left-side">
          <div className="illustration-bg" aria-hidden="true" />
        </section>

        <section className="right-side">
          <div className="card">
            <h1 className="title">Login to OldEmployer</h1>
            <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>

            <form className="form">
              <label className="label">Enter your email <span className="label-right">Label</span></label>
              <input className="input" placeholder="Enter your name or email" />

              <label className="label">Password <span className="label-right">Label</span></label>
              <input type="password" className="input" placeholder="********" />

              <Link href="/signup">
                <button className="btn-primary" type="button">Join Now</button>
              </Link>
              <div style={{height:12}} />
              <p style={{textAlign:'center',marginTop:8}}><a href="/reset-password">Reset password</a></p>
              <div className="divider" />

              <button className="btn-google" type="button">
                <span className="avatar">m</span>
                <div className="google-text">Continue as mudassar<br/><span className="muted">mudassar.pk@gmail.com</span></div>
                <svg className="google-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.6 12.227c0-.78-.07-1.53-.2-2.254H12v4.27h5.6c-.24 1.37-1.02 2.53-2.175 3.31v2.758h3.51c2.05-1.88 3.24-4.67 3.24-8.083z" fill="#4285F4"/><path d="M12 22c2.7 0 4.97-.9 6.63-2.45l-3.51-2.76c-.98.66-2.24 1.05-3.12 1.05-2.4 0-4.44-1.62-5.17-3.79H3.17v2.38C4.83 19.9 8.14 22 12 22z" fill="#34A853"/><path d="M6.83 13.05c-.22-.66-.35-1.36-.35-2.05s.12-1.39.35-2.05V6.57H3.17C2.39 7.78 2 9.33 2 11s.39 3.22 1.17 4.43l3.66-2.38z" fill="#FBBC05"/><path d="M12 4.5c1.47 0 2.78.51 3.82 1.52l2.86-2.86C16.96 1.6 14.7 1 12 1 8.14 1 4.83 3.1 3.17 6.57l3.66 2.38C7.56 6.12 9.6 4.5 12 4.5z" fill="#EA4335"/></svg>
              </button>

              <p className="links"><a href="#">Not you? Use another account</a></p>
              <p className="links"><strong>Don't you have an account? <a href="/signup">Sign up</a></strong></p>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
