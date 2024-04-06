import React from 'react'

const PaySuccess = () => {
  return (
    <div className='w-full'>
        <div className='flex flex-col pt-[25vh] py-[14vh] items-center'>
            <img className='md:size-44 size-36' src='https://cdn-icons-png.flaticon.com/128/5290/5290058.png' alt='Logo-Success'/>
            <h2 className='md:text-4xl text-2xl text-center font-semibold pt-6'>Your Payment has been Recieved.</h2>
        </div>
        {/* <div className='pt-20 flex md:flex-row flex-col items-center justify-around'>
            <h2 className='text-base md:text-xl text-[grey]'>Copyright @AeduZ team 2024</h2>
            <h2 className='pt-1 text-base md:text-xl text-[grey]'>Privacy Policy</h2>
            <h2 className='pt-1 text-base md:text-xl text-[grey]'>Terms of Services</h2>
        </div> */}
    </div>
  )
}

export default PaySuccess
