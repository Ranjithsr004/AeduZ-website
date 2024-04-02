import React from 'react'
import Link from 'next/link'

const MentorDash2 = () => {
  return (
    <div className='pt-28'>
      <div className='hidden md:flex justify-around'>
        <div>
          <div className='size-12 rounded-full bg-blue-900'>  </div>
            <div className='pt-2'>
              <h4>Step 1</h4>
            </div>
        </div>
        <div>
            <div className='size-12 rounded-full bg-blue-500'> </div>
            <div className='pt-2'>
              <h4 className='font-semibold text-xl' >Step 2</h4>
            </div>
        </div>
      </div>

        {/* TOP SECTION ENDED */}
        
        <h1 className='py-8 text-center md:text-3xl text-2xl font-semibold'>
            Complete following 2 steps to be eligible for Calls
        </h1>

        {/* FORM SECTION */}

        <div className='md:h-[60vh] w-[80vw] mx-auto border-[2px] rounded-2xl'>

            <div>
                <h1 className='text-blue-800 py-6 text-center md:text-4xl text-2xl font-semibold'>Step 2: Slots Preferences</h1>
            </div>
              <div className='w-[60vw] mx-auto'>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Slot 1:</h3>
                <div className='flex gap-4'>
                    <div className="relative mb-3 w-[50%]" data-twe-input-wrapper-init>
                        <input
                        type="date"
                        className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                        id="exampleFormControlInput3"
                        placeholder="Booking Date:" />
                    </div>
                    <div className="relative mb-3 w-[50%]" data-twe-input-wrapper-init>
                        <input
                        type="time"
                        className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                        id="exampleFormControlInput3"
                        placeholder="Preferred Time Slot" />
                    </div>
                </div>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Slot 2:</h3>
                <div className='flex gap-4'>
                    <div className="relative mb-3 w-[50%]" data-twe-input-wrapper-init>
                        <input
                        type="date"
                        className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                        id="exampleFormControlInput3"
                        placeholder="Booking Date:" />
                    </div>
                    <div className="relative mb-3 w-[50%]" data-twe-input-wrapper-init>
                        <input
                        type="time"
                        className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                        id="exampleFormControlInput3"
                        placeholder="Preferred Time Slot" />
                    </div>
                </div>
                <h3 className='py-1 text-base md:text-xl font-semibold'>Slot 3:</h3>
                <div className='flex gap-4'>
                    <div className="relative mb-3 w-[50%]" data-twe-input-wrapper-init>
                        <input
                        type="date"
                        className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                        id="exampleFormControlInput3"
                        placeholder="Booking Date:" />
                    </div>
                    <div className="relative mb-3 w-[50%]" data-twe-input-wrapper-init>
                        <input
                        type="time"
                        className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
                        id="exampleFormControlInput3"
                        placeholder="Preferred Time Slot" />
                    </div>
                </div>
              </div>

              <div className='flex justify-between'>
                <div className="md:py-2 py-6 flex justify-start px-2 md:px-40">
                      <Link
                        href="MentorDash"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                         {"<-"} Previous
                      </Link>
                </div>
                <div className="md:py-2 py-6 flex justify-end px-2 md:px-40">
                      <Link
                        href="#"
                        className="rounded-md bg-indigo-600 px-6 py-3 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        Complete
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

export default MentorDash2