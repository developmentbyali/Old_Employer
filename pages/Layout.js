import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProfileOverlay from '../components/ProfileOverlay'
import ScrollMouse from '../components/ScrollMouse'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        {/* floating widgets placed at the start of main as requested */}
        {/* <ProfileOverlay /> */}
        {children}
      </main>
      <Footer />
    </>
  )
}
