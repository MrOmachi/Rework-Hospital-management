import React from 'react'
import convert from "../assets/convert.svg"
import right from "../assets/right.svg"

interface IConvert { }

const Convert = (props: IConvert) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-[59.84px] md:gap-[50px] bg-[#E1DDD7] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem] pb-[2rem]'>
      <div className="order-last sm:order-first">
        <img src={convert} />
      </div>
      <div className="order-first sm:order-last">
        <div className="flex items-center break-normal justify-between sm:text-[35.2289px] leading-[43px] font-[600] text-center md:text-[30px] xl:text-[35px] mt-[2rem] sm:mt-[0rem]">
          <h1 className="sm:text-[35.2289px] text-[25px] font-[600] leading-[43px] sm:pr-[70px] text-center sm:text-left">
            Convert <span className='text-[#FF9E0B]'>USD</span> to <span className="text-[#026B00]">NGN</span> and <span className="text-[#026B00]">NGN</span> to <span className='text-[#FF9E0B]'>USD</span>
            <br /></h1>
        </div>

        <p className='text-[#000000] leading-[24px] mt-[18.41px]'>Convert currencies instantly, for free, at the best rate, and with just one click</p>
      </div>
    </div>
  )
}

export default Convert