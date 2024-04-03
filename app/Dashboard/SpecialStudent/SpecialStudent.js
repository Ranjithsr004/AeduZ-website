import React from 'react'
import SpecialStuData from '../SpecialStuData/SpecialStuData';

const SpecialStudent = () => {

    const data2 = [
        {
          Name: "Arnav",
          Criticalness: "1",
          Your_Comments: "Connected to parents",
          Solved: <input className='size-5' type='checkbox'/>,
        },
        {
          Name: "Ranjit",
          Criticalness: "2",
          Your_Comments: "Talked and sent to their home",
          Solved: <input className='size-5' type='checkbox'/>,
        },
        {
          Name: "Aditya",
          Criticalness: "5",
          Your_Comments: "Talked and sent to their home",
          Solved: <input className='size-5' type='checkbox'/>,
        },
        {
          Name: "Apoorv",
          Criticalness: "4",
          Your_Comments: "Talked and sent to their home",
          Solved: <input className='size-5' type='checkbox'/>,
        },
      ];  

      return (
        <div className="container mx-auto md:px-20 px-2 pb-10">
          <h1 className="text-3xl font-bold my-4 pt-12 mt-12 text-[#37517e]">Special Need Student</h1>
          <SpecialStuData data2={data2} />
          <div>
            <h2 className='text-2xl font-semibold'>NOTE -</h2>
            <div className='px-10 md:w-[40vw] pt-2'>
                <p className='md:text-md'>Special need students are those students who are depressed and need psychologist, psychiatrist or medication.</p>
                <p className='md:text-md'>Criticalness 5 - highly need help.</p>
                <p className='md:text-md'>Criticalness 1 - less critical but need help.</p>
            </div>
          </div>
          <div className='flex justify-center pt-10'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded">
              Contact Us For Any Clarifications
            </button>
          </div>
        </div>
        
      );
}

export default SpecialStudent