import React from 'react'
import convert from "../assets/convert.svg"
import right from "../assets/right.svg"

interface IConvert { }

const Convert = (props: IConvert) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-[189.84px] bg-[#E1DDD7] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem] pb-[2rem]'>
      <div>
        <img src={convert} />
      </div>
      <div>
        <h1 className="flex items-center justify-between sm:text-[35.2289px] leading-[43px] font-[600] text-center">
          Convert{" "}
          <span className="text-[#FF9E0B]">USD</span>
          <img src={right} className='w-[15.66px] h-[7.83px]' />
          <span className="text-[#026B00]">NGN</span> and
          <span className="text-[#026B00]">NGN</span>
          <img src={right} className='w-[15.66px] h-[7.83px]' />
          <span className="text-[#FF9E0B]">USD</span>
        </h1>

        <p className='text-[#000000] sm:text-[19.5716px] leading-[24px] sm:w-[421.77px] mt-[25.56px]'>Convert currencies instantly, for free, at the best rate, and with just one click</p>
      </div>
    </div>
  )
}

export default Convert