import React from 'react'

const SpecialStuData = ({data2}) => {
  return (
    <div className="overflow-x-auto mb-12">
      <table className="min-w-full md:max-w-4xl lg:max-w-6xl border-collapse border border-gray-900 mx-auto">
        <thead className="bg-gray-300 ">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Criticalness (out of 5)</th>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Your Comments</th>
            <th className="border border-gray-300 px-4 py-2 text-[#37517e]">Solved</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item, index) => (
            <tr key={index} className="text-center hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{item.Name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Criticalness}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Your_Comments}</td>
              <td className="border border-gray-300 px-4 py-2">{item.Solved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SpecialStuData
