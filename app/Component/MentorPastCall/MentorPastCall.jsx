import React from 'react'

const MentorPastCall = ({data2}) => {
  return (
    <div className="overflow-x-auto mb-12">
      <table className="min-w-full md:max-w-4xl lg:max-w-6xl border-collapse border border-gray-900 mx-auto">
        <thead className="bg-gray-300 ">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Booking date</th>
            <th className="border border-gray-300 px-4 py-2">Booking time</th>
            <th className="border border-gray-300 px-4 py-2">Status</th>
            <th className="border border-gray-300 px-4 py-2">Feedback</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.bookingDate}</td>
              <td className="border border-gray-300 px-4 py-2">{item.bookingTime}</td>
              <td className="border border-gray-300 px-4 py-2">{item.status}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Feedback
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MentorPastCall
