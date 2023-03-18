import React from 'react'
import one from "../assets/one.svg"
import two from "../assets/two.svg"
import three from "../assets/three.svg"

interface IStopStressing { }

const StopStressing = (props: IStopStressing) => {
 return (
  <div className="bg-[#FFF8EE] flex flex-col justify-center mt-[63.61px] items-center mb-[76.33px]">
   <h1 className="text-[#000000] text-[33.2718px] leading-[41px] font-[600] mt-[45.01px]">Stop stressing about</h1>

   <div className='flex mb-[96.1px] justify-between'>
    <div className="flex flex-col">
     <img src={one} className="w-[97.86px]" />
     <h1 className='text-[33.2718px] leading-[41px] font-[600]'>Cross-border payments</h1>
    </div>
    <div className="flex flex-col">
     <img src={two} className="w-[97.86px]" />
     <h1 className='text-[33.2718px] leading-[41px] font-[600]'>Tracking employee and company spend</h1>
    </div>
    <div className="flex flex-col">
     <img src={three} className="w-[97.86px]" />
     <h1 className='text-[33.2718px] leading-[41px] font-[600]'>Paying your vendors on-time </h1>
    </div>
   </div>
  </div>
 )
}

export default StopStressing