import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ProfileOverlay from './ProfileOverlay'
import ScrollMouse from './ScrollMouse'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {/* floating widgets placed at the start of main as requested */}
        <ProfileOverlay />
        {children}
      </main>
      <Footer />
    </>
  )
}
