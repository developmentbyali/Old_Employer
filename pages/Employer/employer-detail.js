import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

export default function EmployerDetail() {
    return (
        <>
            <Head>
                <title>Employer Detail — OldEmployer</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className='emplyerDetails'>

                {/* Frame 650 - hero/banner with background image */}
                <section style={{ height: '300px', backgroundImage: "url('/background.svg')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-between' }} aria-label="Employer hero background">

                {/* Frame 115 */}
                <div style={{ maxWidth: '1520px', width: '100%', display: 'flex', flexDirection: 'row', gap: '14px', justifyContent: 'flex-end',padding: '20px' }}>
                    <i className="fa-regular fa-pen-to-square" style={{ color: '#FFFFFF', fontSize: '18px', cursor: 'pointer' }}></i>
                    <i className="fa-solid fa-ellipsis-vertical" style={{ color: '#FFFFFF', fontSize: '18px', cursor: 'pointer' }}></i>
                </div>

                    {/* Frame 122 - constrained inner container */}
                    <div style={{ maxWidth: '1520px', width: '100%', padding: '20px', margin: '0 auto', display: 'flex', flexDirection: 'row', alignItems: 'flex-end', gap: '20px' }}>

                        <img src="/avatar.png" alt="Employer logo" style={{ width: '96px', height: '96px', objectFit: 'cover', borderRadius: '8px' }} />

                        {/* Frame 121 */}
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', alignItems: 'center', justifyContent: 'space-between',width:'100%' }}>

                            {/* content < Frame 16 */}
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px' }}>
                                <p style={{ fontSize: '18px', color: '#FFFFFF', margin: 0, whiteSpace: 'nowrap' }}>Mudassar Hussain</p>
                                <div style={{ width: '1.5px', height: '28px', background: '#FFFFFF', opacity: 0.7 }} />
                                <p style={{ fontSize: '14px', color: '#FFFFFF', margin: 0, whiteSpace: 'nowrap' }}>UI/UX Developer</p>
                            </div>

                            {/* Frame 145 */}
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '30px', alignItems: 'center' }}>
                                <p style={{ fontSize: '16px', color: '#FFFFFF', margin: 0 }}>354 follower</p>

                                {/* Frame 372 */}
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                                    <button
                                        style={{
                                            padding: '8px 15px',
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            borderColor: '#23BABC',
                                            borderRadius: '6px',
                                            background: '#23BABC',
                                            color: '#FFFFFF',
                                            fontSize: '12px',
                                            cursor: 'pointer',
                                            fontWeight: 500
                                        }}
                                    >
                                        Claim Company
                                    </button>

                                    <button
                                        style={{
                                            padding: '8px 15px',
                                            borderWidth: '1px',
                                            borderStyle: 'solid',
                                            borderColor: '#23BABC',
                                            borderRadius: '6px',
                                            background: '#23BABC',
                                            color: '#FFFFFF',
                                            fontSize: '12px',
                                            cursor: 'pointer',
                                            fontWeight: 500,
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}
                                    >
                                        Add to watch List
                                        <i className="fa-regular fa-eye" style={{ marginLeft: '6px', fontSize: '14px' }}></i>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Frame 724 */}
                <section></section>

                {/* Frame 727 */}
                <section></section>
            </main>

        </>
    )
}
