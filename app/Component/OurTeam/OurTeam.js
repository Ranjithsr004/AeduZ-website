import React from 'react'

const OurTeam = () => {
  return (
    <div className='py-10'>
      <div className='text-center mx-auto w-[80vw] md:w-[60vw]'>
        <h1 className='pt-10 font-semibold text-5xl text-[#37517e]'>Meet Our Team</h1>
        <p className='md:text-base text-xs pt-6 text-[grey]'>We are to-be graduates from IIT Bombay, aspires to deliver high quality mentorship through our qualified mentors
          and committed to serve every Indian aspirant who dreaming to serve our nation and become an asset in future.
        </p>
      </div>

      <div className='md:flex mb-4 mt-10 md:mx-20'>
        <div className='py-4 mb-4 md:h-[50vh] md:w-[20vw] h-[50vh] mx-auto w-[70vw] bg-[#F0F8FF] hover:bg-[#bbd2e6] transition-all hover:scale-[1.1] duration-500 rounded-xl'>
          <div className='flex justify-center'>
            <img src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' />
          </div>
          <div className='py-2'>
            <h2 className='text-center font-semibold text-xl'>Dhananjay Kumar</h2>
            <p className='text-center font-base'>
              “The compassionate mentor, 
              lighting path for students to 
              achieve their dreams.”
            </p>
          </div>
          <div className='mt-2 flex justify-center'>
            <img className='size-10' src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' />
          </div>
        </div>

        <div className='py-4 mb-4 md:h-[50vh] md:w-[20vw] h-[50vh] mx-auto w-[70vw] bg-[#F0F8FF] hover:bg-[#bbd2e6] transition-all hover:scale-[1.1] duration-500 rounded-xl'>
          <div className='flex justify-center'>
            <img src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' />
          </div>
          <div className='py-2'>
            <h2 className='text-center font-semibold text-xl'>Aditya Malhotra</h2>
            <p className='text-center font-base'> 
              “Burning fire inside aspirants.”
            </p>
          </div>
          <div className='md:mt-14 mt-2 flex justify-center'>
            <img className='size-10' src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' />
          </div>
        </div>

        <div className='py-4 mb-4 md:h-[50vh] md:w-[20vw] h-[50vh] mx-auto w-[70vw] bg-[#F0F8FF] hover:bg-[#bbd2e6] transition-all hover:scale-[1.1] duration-500 rounded-xl'>
          <div className='flex justify-center'>
            <img src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' />
          </div>
          <div className='py-2'>
            <h2 className='text-center font-semibold text-xl'>Shubham Jadhav</h2>
            <p className='text-center font-base'>
              “AeduZ connects future 
              IITians with IITians.”
            </p>
          </div>
          <div className='md:mt-8 mt-2 flex justify-center'>
            <img className='size-10' src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' />
          </div>
        </div>

        <div className='py-4 mb-4 md:h-[50vh] md:w-[20vw]  h-[50vh] mx-auto w-[70vw] bg-[#F0F8FF] hover:bg-[#bbd2e6] transition-all hover:scale-[1.1] duration-500 rounded-xl'>
          <div className='flex justify-center'>
            <img src='https://cdn-icons-png.flaticon.com/128/3135/3135715.png' />
          </div>
          <div className='py-2'>
            <h2 className='text-center font-semibold text-xl'>Akshat Jain</h2>
            <p className='text-center font-base'>
              “Solving aspirant's problems 
              with our experience and 
              infrastructure.”
            </p>
          </div>
          <div className='md:mt-6 mt-2 flex justify-center'>
            <img className='size-10' src='https://cdn-icons-png.flaticon.com/128/3536/3536505.png' />
          </div>
        </div>
        

      </div>
    </div>
  )
}

export default OurTeam
