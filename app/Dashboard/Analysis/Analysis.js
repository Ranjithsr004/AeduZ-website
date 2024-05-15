"use client"
import React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';
// import { axisClasses } from '@mui/x-charts/ChartsAxis';

const dataset = [
  {
    students: 1,
    month: 'January',
  },
  {
    students: 2,
    month: 'February',
  },
  {
    students: 4,
    month: 'March',
  },
  {
    students: 7,
    month: 'April',
  },
  {
    students: 10,
    month: 'May',
  },
  {
    students: 4,
    month: 'June',
  },
  {
    students: 3,
    month: 'July',
  },
  {
    students: 9,
    month: 'August',
  },
  {
    students: 3,
    month: 'September',
  },
  {
    students: 5,
    month: 'October',
  },
  {
    students: 8,
    month: 'November',
  },
  {
    students: 5,
    month: 'December',
  },
];

const valueFormatter = (a) => `${a} calls`;

const chartSetting = {
  yAxis: [
    {
      label: 'Total no. of Calls',
    },
  ],
  series: [{ dataKey: 'students', label: 'Analysis', valueFormatter }],
  height: 400,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export default function Analysis() {

  return (
    <div className='w-full md:px-20 px-2 py-2'>
      <h1 className='text-3xl text-center font-semibold pt-10'>DASHBOARD</h1>
      <div className='md:mb-20 mb-10 mt-10 flex md:gap-10 gap-2 text-center'>
        <div className='w-[50%]'>
          <div className='mb-2 h-[15vh] w-[100%] border-[2px] rounded-2xl border-[grey] bg-[#F0F8FF] hover:scale-[1.1] hover:bg-blue-200 ease-in duration-200'>
            <h2 className='md:text-3xl text-xl md:py-4 py-2'>2000</h2>
            <p className='md:text-2xl text-sm'>Total students enrolled</p>
          </div>
          <div className='h-[15vh] w-[100%] border-[2px] rounded-2xl border-[grey] bg-[#F0F8FF] hover:scale-[1.1] hover:bg-blue-200 ease-in duration-200'>
            <h2 className='md:text-3xl text-xl md:py-4 py-2'>4000</h2>
            <p className='md:text-2xl text-sm'>Total calls</p>
          </div>
        </div>
        <div className='w-[50%]'>
          <div className='mb-2 h-[15vh] w-[100%] border-[2px] rounded-2xl border-[grey] bg-[#F0F8FF] hover:scale-[1.1] hover:bg-blue-200 ease-in duration-200'>
            <h2 className='md:text-3xl text-xl md:py-4 py-2'>3000</h2>
            <p className='md:text-2xl text-sm'>Total Hours</p>
          </div>
          <div className='h-[15vh] w-[100%] border-[2px] rounded-2xl border-[grey] bg-[#F0F8FF] hover:scale-[1.1] hover:bg-blue-200 ease-in duration-200'>
            <h2 className='md:text-3xl text-xl md:py-4 py-2'>4.9</h2>
            <p className='md:text-2xl text-sm'>Average Rating</p>
          </div>
        </div>
      </div>
      <div className='flex gap-4 items-center mb-10 md:mb-0'>
        <h2>Choose Year - </h2>
        <input className='border-[grey] border-[1px] rounded px-2 py-1' type='month'/>
      </div>
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'month' },
        ]}
        {...chartSetting}
      />
      <h2 className='text-center font-semibold'>Months</h2>
    </div>
  );
}
