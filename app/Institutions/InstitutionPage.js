import React from 'react'
import Navbar from '../Navbar/page'
import Link from 'next/link'

const InstitutionPage = () => {
  return (
    <div>
        <Navbar />
        <div className='h-[80vh] mt-6 md:mt-14'>
            <div className='text-center'>
                <h1 className='md:text-5xl text-2xl font-bold pb-10 pt-24 text-blue-800'><span className='font-light'>Welcome </span> Institutes,</h1>
                <h1 className='md:text-5xl text-3xl font-semibold m-auto md:px-80 pb-10 '>Partner with AeduZ for Academic Excellence</h1>
            </div>
            <div className='flex justify-center md:mb-2 mb-10'>
                <Link
                href="Registration"
                type="submit"
                className="bg-[#4F46E5] rounded-md bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[#1266F1]"
                data-twe-ripple-color="light">
                Register Here
                </Link>
            </div>
            <div className='pt-10 md:flex flex justify-around w-full'>
            <img className='rounded-md md:h-[40vh] h-[30vh] md:w-[35%] w-[80%]' src='https://mycareersaathi.com/wp-content/uploads/2023/02/Career-Counselling-After-12th.jpg'/>
            {/* <img className='hidden md:block rounded-md md:h-[42vh] md:w-[35%]' src='https://i0.wp.com/www.mindgroom.com/wp-content/uploads/2021/08/online-career-counselling-sessions-1-e1627978053936.jpg?resize=562%2C565&ssl=1'/> */}
            </div>
        </div>
        
    </div>
  )
}

export default InstitutionPage
