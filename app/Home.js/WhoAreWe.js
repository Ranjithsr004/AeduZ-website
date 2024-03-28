import React from 'react'

const WhoAreWe = () => {
  return (
    <div className='md:h-screen bg-[aliceblue] pt-10'>
        <div className='px-4'>
            <div className='flex'>
            <div className='w-[100%] md:w-[60%]'>
                <h1 className='font-semibold md:text-5xl text-[#37517e] text-2xl text-center mb-10'>Who Are We?</h1>
                <p className='md:text-lg text-sm m-auto w-[80%]'>AeduZ is your premier destination for personalized mentorship. Through our innovative platform & network of experienced mentors, we empower the students, filled them with confidence & resilience to overcome challenges & achieve their educational goals.</p>
                <div className='flex justify-center md:mt-6 mt-10'>
                    <a href="#" className="rounded-md bg-indigo-600 md:px-6 px-4 md:py-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Know more</a>
                </div>
            </div> 
            <div className='hidden md:block w-[40%]'>
                <img className='rounded-3xl h-[18vw] w-[25vw]' src='https://img.freepik.com/free-vector/university-lecture-hall-with-teacher-students-sitting-desks-concept-education-conference-public-seminar-vector-flat-illustration-speaker-audience-college-classroom_107791-11162.jpg?size=626&ext=jpg&ga=GA1.1.1746878901.1686458492&semt=ais'/>
            </div>
            </div>    
        </div>

        <div className='md:py-28 py-20 md:px-10 px-4'>
            <div className='flex'>
            <div className='hidden md:block pl-[5%] w-[40%]'>
                <img className='rounded-3xl h-[18vw] w-[25vw]' src='https://paytelgroup.com/assets/img/vision-mission.png'/>
            </div>
            <div className='w-[100%] md:w-[60%]'>
                <h1 className='font-semibold md:text-5xl text-2xl text-center text-[#37517e] mb-10'>Our Vision</h1>
                <p className='md:text-lg text-sm m-auto w-[80%]'>We aim to facilitate uninterrupted and hassle-free study experiences for nationwide students, ensuring they can focus on their academic pursuits without unnecessary stress or distractions.</p>
            </div> 
            </div>
        </div>
    </div>
  )
}

export default WhoAreWe
