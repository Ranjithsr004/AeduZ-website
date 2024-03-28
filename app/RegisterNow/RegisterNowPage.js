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


const RegisterNowPage = () => {

    useEffect(() => {
        initTWE({ Input: InputComponent, Ripple: RippleComponent });
      }, []);
      
  return (
  <div className='h-screen'>
    <div className="container h-full px-6 py-24">
    <div
      className="flex h-full flex-wrap items-center justify-center lg:justify-between">

      <div className="md:block hidden mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="w-full"
          alt="Phone image" />
      </div>

      <div className="md:mr-20 md:w-8/12 lg:ms-6 lg:w-5/12">
      <div className='font-semibold text-4xl text-black text-center'>
        <h1>Register Now</h1>
      </div>
        <form>
          <div className="relative mb-3 mt-10" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
              id="exampleFormControlInput3"
              placeholder="Username" />
          </div>

          <div className="relative mb-4" data-twe-input-wrapper-init>
            <input
              type="text"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
              id="exampleFormControlInput3"
              placeholder="Email" />
          </div>

          <div className="relative mb-4" data-twe-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
              id="exampleFormControlInput3"
              placeholder="Password" />
          </div>

          <div className="relative mb-3" data-twe-input-wrapper-init>
            <input
              type="password"
              className="peer block min-h-[auto] w-full rounded border-[1px] border-[grey] bg-transparent px-3 py-[0.32rem] leading-[2.15]"
              id="exampleFormControlInput33"
              placeholder="Confirm Password" />
          </div>

          {/* END OF FORMS */}

          <Link
            href="Registration"
            type="submit"
            className="bg-[#3B71CA] text-center w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[#1266F1]"
            data-twe-ripple-color="light">
            Register Now
          </Link>

          <h1 className='font-bold text-xl text-black text-center my-3'>OR</h1>

              <button
                type="submit"
                className="bg-[#34A853] inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:bg-[green]"
                data-twe-ripple-color="light">
                  <div className='flex gap-4 justify-center'>
                    <img className='size-6' src='https://cdn-icons-png.flaticon.com/128/300/300221.png' />
                    Register with Google
                </div>
              </button>

        </form>

        </div>
      </div>
    </div>
  </div>
  )
}

export default RegisterNowPage;
