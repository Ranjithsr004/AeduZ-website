import React from 'react'
import Link from 'next/link'

const CheckOut1 = () => {
  return (
    <div className='pt-28'>
      <div className='flex justify-around'>
        <div>
          <div className='md:size-12 size-8 rounded-full bg-blue-500'>  </div>
            <div className='pt-2'>
              <h4 className='font-semibold text-xl' >Step 1</h4>
            </div>
        </div>
        <div>
            <div className='md:size-12 size-8 rounded-full bg-blue-900'> </div>
            <div className='pt-2'>
              <h4>Step 2</h4>
            </div>
        </div>
        <div>
            <div className='md:size-12 size-8 rounded-full bg-blue-900'> </div>
            <div className='pt-2'>
              <h4>Step 3</h4>
            </div>
        </div>
        <div>
            <div className='md:size-12 size-8 rounded-full bg-blue-900'> </div>
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
                <h1 className='text-blue-800 py-6 text-center md:text-4xl text-2xl font-semibold'>Step 1:  Complete Your Profile</h1>
            </div>
              <div className='w-[60vw] mx-auto'>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="Gender :" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="Competitive Exam :" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="From Where You Heard About Us :" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="Mobile No :" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                      id="exampleFormControlInput3"
                      placeholder="Coaching Name :" />
                </div>
              </div>

              <div className="py-2 flex justify-end px-10 md:px-40">
                    <Link
                      href="CheckOut2"
                      className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Next {"->"}
                    </Link>
              </div>
        
        </div>
        <div className='invisible '>
            hi
        </div>
    </div>
  )
}

export default CheckOut1
