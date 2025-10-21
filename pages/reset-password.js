import Head from 'next/head'
import Header from '../components/Header'

export default function ResetPassword(){
  return (
    <>
      <Head>
        <title>Reset Password — OldEmployer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="page-root">
        <section className="left-side">
          <div className="reset-illustration" aria-hidden="true" />
        </section>

        <section className="right-side reset-right">
          <div className="card">
            <h2 className="title">You lost your password ?</h2>
            <p className="subtitle">No problem Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.</p>

            <form className="form">
              <label className="label">Enter your email <span className="label-right">Label</span></label>
              <input className="input" placeholder="Enter your name or email" />

              <button className="btn-primary" type="button">SUBMIT</button>

              <p style={{textAlign:'center',marginTop:18,color:'rgba(0,0,0,0.8)'}}>Already have password? <a href="/login">Login</a></p>
            </form>
          </div>
        </section>
      </main>
    </>
  )
}
