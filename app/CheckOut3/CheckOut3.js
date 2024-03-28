import React from 'react'
import Link from 'next/link'

const CheckOut3 = () => {
  return (
    <div className='pt-28'>
      <div className='flex justify-around'>
        <div>
          <div className='size-12 rounded-full bg-blue-900'>  </div>
            <div className='pt-2'>
              <h4>Step 1</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-900'> </div>
            <div className='pt-2'>
              <h4 className='font-semibold text-xl' >Step 2</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-500'> </div>
            <div className='pt-2'>
              <h4>Step 3</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-900'> </div>
            <div className='pt-2'>
              <h4>Step 4</h4>
            </div>
        </div>
      </div>

        {/* TOP SECTION ENDED */}
        
        <h1 className='py-8 text-center md:text-3xl text-2xl font-semibold'>
          Complete all 4 steps to Book your 1:1 Call
        </h1>

        {/* FORM SECTION */}

        <div className='md:h-[60vh] w-[80vw] mx-auto border-[2px] rounded-2xl'>

            <div>
                <h1 className='py-6 text-center md:text-4xl text-2xl font-semibold'>Step 3: Select your Pricing Plan</h1>
            </div>
              <div className='w-[60vw] mx-auto'>
                <div className='flex md:w-[80%] mx-auto h-[22vh] md:gap-10 gap-4 mb-6'>
                  <div className='md:px-10 px-2 w-[50%] border-[1px] border-[grey] rounded-md'>
                    <h2 className='text-center font-semibold md:text-4xl py-4'>Basic </h2>
                    <p className='text-xs md:text-base pb-1'>INR 50</p>
                    <p className='text-xs md:text-base pb-1'>INR <span className='text-decoration-line: line-through'>50</span> 1 for first 2 calls !</p>
                    <p className='text-xs md:text-base'>1 call - 30 Minutes</p>
                  </div> 
                  <div className='md:px-10 px-2 w-[50%] border-[1px] border-[grey] rounded-md'>
                    <h2 className='text-center font-semibold md:text-4xl py-4'>Advanced</h2>
                    <p className='text-xs md:text-base pb-1'>INR <span className='text-decoration-line: line-through'>900</span> 225</p>
                    <p className='text-xs md:text-base pb-1'>Feature to be mentioned</p>
                    <p className='text-xs md:text-base'>1 call - 30 Minutes</p>
                  </div>
                </div>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Pricing Plan:</h3>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="Pricing Plan:" />
                </div>
              </div>

              <div className='flex justify-between'>
                <div className="md:py-2 py-6 flex justify-start px-2 md:px-40">
                      <Link
                        href="CheckOut2"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                         {"<-"} Previous
                      </Link>
                </div>
                <div className="md:py-2 py-6 flex justify-end px-2 md:px-40">
                      <Link
                        href="CheckOut4"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Next {"->"}
                      </Link>
                </div>
              </div>

        </div>
        <div className='invisible '>
            hi
        </div>

    </div>
  )
}

export default CheckOut3