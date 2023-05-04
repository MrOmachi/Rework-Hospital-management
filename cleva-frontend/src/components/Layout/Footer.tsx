import React from 'react'
import {  IoEarth  } from 'react-icons/io5'
import { FaRegMoon  } from 'react-icons/fa'

export default function Footer() {
 return (
  <div className=' pl-[21%] fixed bottom-0 pr-[6%] w-full  m-auto border-t-2 h-24 '>
   <section className='flex items-center justify-between pt-8'>
    <ul className='flex gap-6'>
     <li><b>Privacy Policy</b></li>
     <li><b>License</b></li>
     <li><b>API</b></li>
     <li><b>Help Center</b></li>
     <li>© 2022 All rights reserved</li>
    </ul>
    <div className='flex items-center w-[40%] justify-evenly'>
     <span className='flex items-center gap-2'><b>English</b><b><IoEarth /></b></span>
     <span className='border-2 p-[9px]  rounded-md'><FaRegMoon /></span>
    </div>
   </section>
  </div>)
}
