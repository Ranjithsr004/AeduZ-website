import React from 'react'
import Navbar2 from '@/app/Navbar2/page'
import PayFailed from './PayFailed'
import Footer from '../Footer/Footer'

const page = () => {
  return (
    <div>
        <Navbar2 />
        <PayFailed />
        <Footer />
    </div>
  )
}

export default page