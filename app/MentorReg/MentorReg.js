import React from 'react'
import Link from 'next/link'

const MentorReg = () => {
    return (
        <div className='h-screen relative mt-10 md:mt-10'>
            <div>
              <Link
                href="MentorDash"
                type="submit"
                className="bg-[#3B71CA] inline-block absolute md:top-20 top-20 md:right-6 right-4 rounded bg-primary px-2 py-2 md:text-sm text-xs font-medium uppercase leading-normal text-white hover:bg-[#1266F1]"
                data-twe-ripple-color="light">
                SKIP NOW {">"}
              </Link>
                <div className='md:pt-28 pt-32'>
                    <h1 className='text-center md:text-4xl text-2xl font-semibold'>Mentor Registration</h1>
                    <p className='text-center md:text-base text-sm py-2'>Start earning right from your first year of your college</p>
                </div>
                <div className='w-[90vw] md:w-[80vw] m-auto pt-6'>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                        <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>Full Name: </h1>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                          id="exampleFormControlInput3"
                          placeholder="Full Name.." />
                    </div>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                        <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>Gender: </h1>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                          id="exampleFormControlInput3"
                          placeholder="Gender.." />
                    </div>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                        <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>College Name: </h1>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                          id="exampleFormControlInput3"
                          placeholder="College Name.." />
                    </div>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                        <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>College Roll No: </h1>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                          id="exampleFormControlInput3"
                          placeholder="College Roll no.." />
                    </div>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                        <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>Year of College: </h1>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                          id="exampleFormControlInput3"
                          placeholder="Year of College.." />
                    </div>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                        <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>Home City: </h1>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                          id="exampleFormControlInput3"
                          placeholder="Home City.." />
                    </div>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                        <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>Institute: </h1>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                          id="exampleFormControlInput3"
                          placeholder="Institute (from which you studied JEE)" />
                    </div>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                      <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>Drop (Yes or No): </h1>
                      <div className="w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]">
                        <select className='w-full outline-none' name="dropdown" id="dropdown">
                          <option value="-1">Select</option>
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                        </select>
                      </div>
                    </div>
                    <div className="relative mb-3 flex" data-twe-input-wrapper-init>
                        <h1 className='md:w-[10vw] w-[50vw] flex md:justify-center items-center font-semibold text-black'>Languages: </h1>
                        <input
                          type="text"
                          className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                          id="exampleFormControlInput3"
                          placeholder="Languages you speak.." />
                    </div>
                </div>
                <div className='m-auto md:w-[20vw] w-[40vw]'>
                    <Link
                        href="MentorDash"
                        type="submit"
                        className="text-center bg-[#3B71CA] md:my-10 my-6 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[#1266F1]"
                        data-twe-ripple-color="light">
                        Register
                    </Link>
                </div>
            </div>
          
        </div>
      )
}

export default MentorReg
