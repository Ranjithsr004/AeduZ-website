import React from 'react'
import CallTable from '../CallTable/CallTable';
import PastCall from '../PastCall/PastCall';

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
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold my-4 mt-12">Active Calls</h1>
          <CallTable data={data} />
          <h1 className="text-3xl font-bold my-4 pt-12 mt-12">Past Calls</h1>
          <PastCall data2={data2} />
        </div>
        
      );
}

export default TableData
