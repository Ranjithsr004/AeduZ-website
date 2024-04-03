import React from 'react'

const MentorCallTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full md:max-w-4xl lg:max-w-6xl border-collapse border border-gray-900 mx-auto mb-12">
        <thead className="bg-gray-300 ">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Booking date</th>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Booking time</th>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Joining Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.bookingDate}</td>
              <td className="border border-gray-300 px-4 py-2">{item.bookingTime}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Meet Now
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MentorCallTable
