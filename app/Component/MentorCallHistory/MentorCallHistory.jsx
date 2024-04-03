import React from 'react'
import MentorCallTable from '../MentorCallTable/MentorCallTable';
import MentorPastCall from '../MentorPastCall/MentorPastCall';

const MentorCallHistory = () => {
    const data = [
        {
          bookingDate: "20-03-2024",
          bookingTime: "10:00 - 11.30 AM",
          joiningLink: "example.com/join1",
        },
        {
          bookingDate: "20-03-2024",
          bookingTime: "10:00 - 11.30 AM",
          joiningLink: "example.com/join1",
        },
        {
          bookingDate: "20-03-2024",
          bookingTime: "10:00 - 11.30 AM",
          joiningLink: "example.com/join1",
        },
        {
          bookingDate: "20-03-2024",
          bookingTime: "10:00 - 11.30 AM",
          joiningLink: "example.com/join1",
        },
      ];
    const data2 = [
        {
          bookingDate: "20-03-2024",
          bookingTime: "11:00 - 12.30 AM",
          status: "Completed",
          joiningLink: "example.com/join1",
        },
        {
          bookingDate: "20-03-2024",
          bookingTime: "11:00 - 12.30 AM",
          status: "Completed",
          joiningLink: "example.com/join1",
        },
        {
          bookingDate: "20-03-2024",
          bookingTime: "11:00 - 12.30 AM",
          status: "Completed",
          joiningLink: "example.com/join1",
        },
        {
          bookingDate: "20-03-2024",
          bookingTime: "11:00 - 12.30 AM",
          status: "Completed",
          joiningLink: "example.com/join1",
        },
      ];  

      return (
        <div className="container mx-auto pt-20 md:px-20 px-2">
          <h1 className="text-3xl font-bold my-4 mt-12 text-[#37517e]">Active Calls</h1>
          <MentorCallTable data={data} />
          <h1 className="text-3xl font-bold my-4 pt-12 mt-12 text-[#37517e]">Past Calls</h1>
          <MentorPastCall data2={data2} />
        </div>
        
      );
}

export default MentorCallHistory
