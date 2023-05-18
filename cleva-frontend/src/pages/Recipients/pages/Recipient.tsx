import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BsPersonPlusFill } from 'react-icons/bs'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import arrow from '../../../images/right-arrow.png'

export default function Recipient() {
 const navigate = useNavigate()
 return (
  <div>
   <header className='
    flex justify-between items-center 
    text-[12px] font-semibold
    '>
    <div>All recipients</div>
    <button
     onClick={() => navigate("")}
     className='flex items-center gap-1'>
     <span>
      <BsPersonPlusFill />
     </span>
     <span>Add new recipient</span>
    </button>
   </header>

   <div className='flex justify-between pt-5'>
    <div className='w-[40%] text-[13px] font-semibold'>
     <div className='flex items-center justify-between'>
      <div className='
      border rounded-md 
      py-4 ps-5 w-[70%]
      hover:bg-lime-50'>
      Jason Obi
     </div>
     <span className='w-[30%] text-[70px] text-sm'>
      <img className='h-10 w-[100px]' src={arrow} alt="" />
      </span>
     </div>
    </div>
    <div className='bg-gray-100 w-[60%]'>
     <h1>hello people</h1>
    </div>
   </div>
  </div>
 )
}
