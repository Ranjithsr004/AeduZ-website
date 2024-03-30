"use client"
import Link from 'next/link'

function Hero() {

  return (
    <div className="bg-white h-screen w-full">

      <div className="md:flex relative isolate px-6 md:pt-24 pt-5 lg:px-8">
        <div className="md:w-[50%] mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
          <div animate={{y:0,opacity:1}} initial={{y:-150, opacity:0}} transition={{duration:1.5}} className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-blue-800 sm:text-6xl">
                <span className='text-2xl md:text-4xl'>Through</span> AeduZ
            </h1>
            <p className="mt-6 mb-12 text-2xl md:text-4xl  leading-8 text-[#37517e]">
                Guiding Dreams, Unlocking Potential
            </p>
              <Link href="CheckOut" className="rounded-md bg-indigo-600 md:px-10 px-6 md:py-5 py-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Book 1:1 call
              </Link>
          </div>
        </div>

        <div className='md:w-[50%] flex justify-center items-center'>
          <img className='md:rounded-3xl rounded-2xl h-[25vh] md:h-[25vw] w-[60vw] md:w-[35vw]' src='https://img.freepik.com/free-vector/university-lecture-hall-with-teacher-students-sitting-desks-concept-education-conference-public-seminar-vector-flat-illustration-speaker-audience-college-classroom_107791-11162.jpg?size=626&ext=jpg&ga=GA1.1.1746878901.1686458492&semt=ais' alt='HOME PAGE IMAGE'/>
        </div>

      </div>
    </div>
  )
}

export default Hero