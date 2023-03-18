import React from 'react'
import convert from "../assets/convert.svg"
import right from "../assets/right.svg"

interface IConvert {}

const Convert = (props: IConvert) => {
  return (
    <div className='flex bg-[#E1DDD7] justify-between items-center'>
     <div>
       <img src={convert} />
     </div>
     <div>
      <h1 className="flex items-center">Convert USD <img src={right} className='w-[15.66px] h-[7.83px]'/> NGN and NGN <img src={right} className='w-[15.66px] h-[7.83px]'/>USD</h1>
      <p className='text-[#000000] font-[500] text-[19.5716px] leading-[24px]'>Convert currencies instantly, for free, at the best rate, and with just one click</p>
     </div>
    </div>
  )
}

export default Convert