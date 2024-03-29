import React from 'react'
import CallTable from '../CallTable/CallTable';
import PastCall from '../PastCall/PastCall';
import Navbar2 from '@/app/Navbar2/page';

const TableData = () => {
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
        <div>
          <Navbar2 />
          <div className="container mx-auto py-20 px-20 ">
            <h1 className="text-3xl font-bold my-4 mt-12">Active Calls</h1>
            <CallTable data={data} />
            <h1 className="text-3xl font-bold my-4 pt-8 mt-12">Past Calls</h1>
            <PastCall data2={data2} />
          </div>
        </div>
        
      );
}

export default TableData
