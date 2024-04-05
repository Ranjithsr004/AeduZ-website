import React from 'react'
import Analysis from './Analysis'
import Navbar from '@/app/Navbar/page'
import CallLog from '../CallLog/CallLog'
import SpecialStudent from '../SpecialStudent/SpecialStudent'
import Footer from '@/app/Component/Footer/Footer'

const page = () => {

  return (
    <div>
      <Navbar />
      <Analysis />
      <CallLog />
      <SpecialStudent />
      <Footer />
    </div>
  )
}

export default page
