import React from 'react'

const PayFailed = () => {
  return (
    <div className='h-screen w-full'>
        <div className='flex flex-col pt-[25vh] items-center'>
            <img className='md:size-44 size-32' src='https://cdn-icons-png.flaticon.com/128/1828/1828843.png' alt='Logo-Success'/>
            <h2 className='md:text-4xl text-2xl text-center font-semibold pt-6'>Your Payment has Failed.</h2>
        </div>
        <div className='pt-20 flex md:flex-row flex-col items-center justify-around'>
            <h2 className='text-base md:text-xl text-[grey]'>Copyright @AeduZ team 2024</h2>
            <h2 className='pt-1 text-base md:text-xl text-[grey]'>Privacy Policy</h2>
            <h2 className='pt-1 text-base md:text-xl text-[grey]'>Terms of Services</h2>
        </div>
    </div>
  )
}

export default PayFailed