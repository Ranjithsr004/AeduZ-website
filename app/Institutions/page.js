import React from 'react'
import InstitutionPage from './InstitutionPage'
import InstitutionsT from './InstitutionsT'
import Footer from '../Component/Footer/Footer'
import OurServices from '../Component/OurServices/OurServices'
import WhyChooseUs from '../Component/WhyChooseUs/WhyChooseUs'
import GetStartedToday from '../Component/GetStartedToday/GetStartedToday'
// import HelloInsti from '../Component/HelloInsti/HelloInsti'

const page = () => {
  return (
    <div>
      <InstitutionPage />
      {/* <HelloInsti /> */}
      <InstitutionsT />
      <OurServices />
      <WhyChooseUs />
      <GetStartedToday />
      <Footer />
    </div>
  )
}

export default page

