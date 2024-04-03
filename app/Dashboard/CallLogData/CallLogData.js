import React from 'react'

const CallLogData = ({data2}) => {
  return (
    <div className="overflow-x-auto mb-12">
      <table className="min-w-full md:max-w-4xl lg:max-w-6xl border-collapse border border-gray-900 mx-auto">
        <thead className="bg-gray-300 ">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Mentee Name</th>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Mentor Name</th>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Duration</th>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Date</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.MenteeName}</td>
              <td className="border border-gray-300 px-4 py-2">{item.MentorName}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Duration}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CallLogData
