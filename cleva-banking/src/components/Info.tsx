import React from 'react'
import fdic from "../assets/fdic.svg"
import ndic from "../assets/ndic.svg"

interface IInfo { }

const Info = (props: IInfo) => {
 return (
  <div className='bg-[#FFF7EB] text-center flex flex-col'>
   <div className='flex mt-[29.36px] items-center justify-center'>
    <img src={fdic} className="w-[97.86px]" />
    <img src={ndic}className="w-[97.86px]" />
   </div>
   <p className='text-[#000000] text-[19.5716px] leading-[24px] font-[500] my-[28.84px]'>Cleva USD funds are FDIC-insured while Naira funds are NDIC-insured</p>

  </div>
 )
}

export default Info