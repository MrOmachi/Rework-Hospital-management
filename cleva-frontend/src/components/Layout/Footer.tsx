import React from 'react'
import { IoEarth } from 'react-icons/io5'
import { FaRegMoon } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className=' fixed bottom-0 w-full  m-auto border-t-2 h-20 flex justify-center items-center '>
      <section className='flex items-center justify-between w-[92%] pr-80 m-auto'>
        <ul className='flex gap-6  text-[13px] text-black'>
          <li><b>Privacy Policy</b></li>
          <li><b>License</b></li>
          <li><b>API</b></li>
          <li><b>Help Center</b></li>
          <li>© 2022 All rights reserved</li>
        </ul>
        <div className='flex items-center w-[20%] justify-evenly'>
          <span className='flex items-center gap-2'><b>English</b><b><IoEarth /></b></span>
          <span className='border-2 p-[9px]  rounded-md'><FaRegMoon /></span>
        </div>
      </section>
    </div>)
}