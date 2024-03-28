import React from 'react'
const RegistrationPage = () => {
  return (
    <div className='h-screen relative mt-10 md:mt-10'>
        <div>
          <button
            type="submit"
            className="bg-[#3B71CA] inline-block absolute md:top-10 top-8 md:right-6 right-4 rounded bg-primary px-2 pb-2.5 pt-3 md:text-sm text-xs font-medium uppercase leading-normal text-white hover:bg-[#1266F1]"
            data-twe-ripple-color="light">
            SKIP NOW {">"}
          </button>
            <div className='pt-20'>
                <h1 className='text-center md:text-4xl text-2xl font-semibold'>Registration</h1>
                <p className='text-center md:text-base text-sm py-2'>Upskill yourself by optmizing your study strategies</p>
            </div>
            <div className='w-[80vw] m-auto'>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="Full Name" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="Gender" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="Competitive Exam" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="From Where You Heard About Us" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="Mobile No" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="Coaching Name" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="Coaching Roll No" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
                      id="exampleFormControlInput3"
                      placeholder="Location" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="Weakest Subject" />
                </div>
                <div className="relative mb-3" data-twe-input-wrapper-init>
                    <input
                      type="text"
                      className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-stat"
                      id="exampleFormControlInput3"
                      placeholder="Class" />
                </div>
            </div>
            <div className='m-auto md:w-[20vw] w-[40vw]'>
                <button
                    type="submit"
                    className="bg-[#3B71CA] md:my-10 my-6 inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[#1266F1]"
                    data-twe-ripple-color="light">
                    Register
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default RegistrationPage