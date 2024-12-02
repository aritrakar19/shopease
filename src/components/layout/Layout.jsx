import React from 'react'
import Navbar from '../navber/Navbar'
import Footer from '../footer/Footer'

function Layout({children}) {
  return (
    <>
        <Navbar />
        <div className="main-contant">
            {children}
        </div>
        <Footer />
    </>
  )
}

export default Layout