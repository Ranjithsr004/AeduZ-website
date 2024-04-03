import React from 'react';

const EarningPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-8">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-3xl font-bold text-[#37517e]">Hello, Akshat 👋</h1>
        </div>
        <div>
          <a href="#" className="text-blue-500 hover:underline">Withdraw Amount</a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
          <h2 className="text-lg font-bold mb-2 text-[#37517e]">Total Earning</h2>
          <p className="text-2xl font-bold">Rs 500</p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
          <h2 className="text-lg font-bold mb-2 text-[#37517e]">Wallet Amount</h2>
          <p className="text-2xl font-bold">Rs 40</p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-[#37517e]">Earning History</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
            <p className="font-bold">Call No: #1</p>
            <p>Earned Amount: Rs.40</p>
            <p>With Mentee: Shubham</p>
            <p>Date: 03-04-2024</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
            <p className="font-bold">Call No: #2</p>
            <p>Earned Amount: Rs.40</p>
            <p>With Mentee: Shubham</p>
            <p>Date: 03-04-2024</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
            <p className="font-bold">Call No: #3</p>
            <p>Earned Amount: Rs.40</p>
            <p>With Mentee: Shubham</p>
            <p>Date: 03-04-2024</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
            <p className="font-bold">Call No: #4</p>
            <p>Earned Amount: Rs.40</p>
            <p>With Mentee: Shubham</p>
            <p>Date: 03-04-2024</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
            <p className="font-bold">Call No: #5</p>
            <p>Earned Amount: Rs.40</p>
            <p>With Mentee: Shubham</p>
            <p>Date: 03-04-2024</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
            <p className="font-bold">Call No: #6</p>
            <p>Earned Amount: Rs.40</p>
            <p>With Mentee: Shubham</p>
            <p>Date: 03-04-2024</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
            <p className="font-bold">Call No: #7</p>
            <p>Earned Amount: Rs.40</p>
            <p>With Mentee: Shubham</p>
            <p>Date: 03-04-2024</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
            <p className="font-bold">Call No: #8</p>
            <p>Earned Amount: Rs.40</p>
            <p>With Mentee: Shubham</p>
            <p>Date: 03-04-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningPage;
