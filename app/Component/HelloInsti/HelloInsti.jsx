import React from 'react'
import Link from 'next/link'

const HelloInsti = () => {
  return (
    <div className='md:pt-20'>
      <div className="md:flex relative isolate px-6 md:pt-24 pt-5 lg:px-8">
        <div className="md:w-[50%] mx-auto max-w-2xl pt-32 pb-10 sm:py-48 lg:py-10">
          <div  className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#37517e] sm:text-5xl">
                HELLO, INSTITUTIONS
            </h1>
            <p className="mt-6 text-2xl md:text-2xl leading-8 ">
                Empowering your students with personalized mentorship for academic excellence
            </p>
          </div>
        </div>

        <div className='md:w-[50%] lg:pt-10 flex justify-center items-center lg:block md:block'>
          <img className='md:rounded-3xl rounded-2xl h-[25vh] md:h-[35vh] w-[70vw] md:w-[35vw]' src='https://mycareersaathi.com/wp-content/uploads/2023/02/Career-Counselling-After-12th.jpg' alt='HOME PAGE IMAGE'/>
        </div>

      </div>
      <div className="flex justify-center items-center mt-5">
      <Link href="Dashboard/Analysis" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold md:py-4 py-2 px-8 md:px-12 mb-12 rounded-lg shadow-lg">
          Contact Us
        </Link>
      </div>
      
    </div>
  )
}

export default HelloInsti
