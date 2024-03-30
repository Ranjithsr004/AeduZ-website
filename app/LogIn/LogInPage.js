"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Input, Ripple, initTWE } from 'tw-elements';

const InputComponent = (props) => {
    return <Input {...props} />;
};

const RippleComponent = (props) => {
  return <Ripple {...props} />;
};


const LogInPage = () => {

    useEffect(() => {
        initTWE({ Input: InputComponent, Ripple: RippleComponent });
      }, []);
      
  return (
  <div className='h-screen bg-white md:pt-0 pt-10'>
    <div className="container h-full px-6 py-24">
    <div
      className="flex h-full flex-wrap items-center justify-center lg:justify-between">

      <div className="md:block hidden mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://t3.ftcdn.net/jpg/06/77/70/46/360_F_677704687_e82VnF5bjL0pcrgI3KAAdT7x7ihlRLF8.jpg"
          className="w-full"
          alt="Phone image" />
      </div>

      <div className="md:mr-20 md:w-8/12 lg:ms-6 lg:w-5/12">
      <div className='font-semibold text-4xl text-black text-center'>
        <h1>AeduZ</h1>
      </div>
        <form>
          <div className="relative mb-6 mt-10" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none"
              id="exampleFormControlInput3"
              placeholder="Email address" />
          </div>

          <div className="relative mb-6" data-twe-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100"
              id="exampleFormControlInput33"
              placeholder="Password" />
          </div>

            <div className='mb-5'>
            <a
              href="#!"
              className="text-[#3B71CA] hover:text-[#1266F1] focus:outline-none dark:text-primary-400"
              >Forgot password?</a
            >
            </div>

          <button
            type="submit"
            className="bg-[#3B71CA] inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[#1266F1]"
            data-twe-ripple-color="light">
            Log in
          </button>

          <h1 className='font-bold text-xl text-black text-center my-3'>OR</h1>

              
              <button
                type="submit"
                className="bg-[#34A853] inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[green]"
                data-twe-ripple-color="light">
                <div className='flex gap-4 justify-center'>
                  <img className='size-6' src='https://cdn-icons-png.flaticon.com/128/300/300221.png' />
                  Continue with Google
                </div>
              </button>
              <div className='flex justify-center md:mt-4 mt-8'>
                <div>
                  <h3 className='text-black text-center mb-4'>New User?</h3>
                  <Link
                    href="RegisterNow"
                    type="submit"
                    className="bg-[#3B71CA] hover:bg-[#1266F1] text-white text-base rounded py-2 px-4"
                    data-twe-ripple-color="light">
                    Register Now
                  </Link>
                </div>
              </div>

        </form>

        </div>
      </div>
    </div>
  </div>
  )
}

export default LogInPage;
