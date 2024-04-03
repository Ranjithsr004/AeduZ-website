import React from 'react'
import CallLogData from '../CallLogData/CallLogData';

const CallLog = () => {

    const data2 = [
        {
          MenteeName: "Mentee 1",
          MentorName: "Mentor 1",
          Duration: "Duration 1",
          Date: "Date 1",
        },
        {
          MenteeName: "Mentee 2",
          MentorName: "Mentor 2",
          Duration: "Duration 2",
          Date: "Date 2",
        },
        {
          MenteeName: "Mentee 3",
          MentorName: "Mentor 3",
          Duration: "Duration 3",
          Date: "Date 3",
        },
        {
          MenteeName: "Mentee 4",
          MentorName: "Mentor 4",
          Duration: "Duration 4",
          Date: "Date 4",
        },
      ];  

      return (
        <div className="container mx-auto md:px-20 px-2">
          <h1 className="text-3xl font-bold my-4 pt-12 mt-12 text-[#37517e]">Call Logs</h1>
          <CallLogData data2={data2} />
          <div className='flex justify-end'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Export Full Data
            </button>
          </div>
        </div>
        
      );
}

export default CallLog