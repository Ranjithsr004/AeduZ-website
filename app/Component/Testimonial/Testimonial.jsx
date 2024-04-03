"use client"
import React from 'react'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from 'react';
import TestiData from '../TestiData/TestiData';


const Testimonial = (props) => {
    let reviews = props.reviews;
    const [index, setIndex] = useState(0);

    function leftShiftHandler() {
        if(index - 1 < 0) {
            setIndex(reviews.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function rightShiftHandler() {
        if(index + 1 >=reviews.length) {
            setIndex(0);
        }
        else {
            setIndex(index+1);
        }

    }

    function surpriseHandler() {
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setIndex(randomIndex);
    }

  return (
    <div className="md:pt-0 py-10 flex flex-col w-[full] h-[screen] justify-center items-center bg-[#F0F8FF]">
    <div className="text-center">
    <h1 className="text-3xl md:text-4xl lg:text-5xl lg:py-12   font-bold  text-[#37517e] mb-12">Testimonials</h1>
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>

        <TestiData review = {reviews[index]}></TestiData>

      <div className='flex text-3xl mt-10 gap-3 text-[#37517e] font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-blue-500 '>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-blue-500 '>
            <FiChevronRight/>
        </button>
      </div>

      {/* <div className='mt-6'>
        <button
        onClick={surpriseHandler}
         className='bg-blue-500 hover:bg-blue-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
            Surprise Me
        </button>
      </div> */}
    </div>
    </div>
    </div>
  )
}

export default Testimonial