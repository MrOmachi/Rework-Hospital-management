import React from 'react'
import { arrowLeft } from '../../Image'
import { BsBoxArrowLeft } from 'react-icons/bs'
import { IoIosArrowBack } from 'react-icons/io'

function Previous() {
  return (
    <div className="flex">
      <button className="text-[10px] border-2 py-2 px-6 rounded-[10px] text-[#747A80] mt-3 font-medium">
        Previous
      </button>
      {/* <img className="-ml-28 w-[32px] mt-3 p-3 bg-black mr-1" src={arrowLeft}  alt="" /> */}
      {/* <BsBoxArrowLeft/> */}
      <p className="-ml-[80%] w-[32px] mt-3 p-3 text-[#747A80] font-bold"><IoIosArrowBack/></p>
    </div>
  )
}

export default Previous