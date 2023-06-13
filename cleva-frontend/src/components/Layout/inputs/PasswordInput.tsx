import React, { useEffect, useState } from 'react'
import { BsEyeSlash, BsEye } from "react-icons/bs"

interface input {
 title: string,
 value: any,
 fn: any,
 text: string
}

export default function PasswordInput({
 title,
 fn,
 value,
 text
}: input) {

 const [showPassword, setShowPassword] = useState(false)

 return (
  <div>
   <header className='text-[12px] pb-1 pt-5 text-left'>
    {title}
   </header>
   <div
    className='bg-[#F9F9F9] w-full flex justify-between items-center
     rounded-md font-semibold border pr-4'
   >
    <input
     className={` text-[12px] border-1 w-[80%]
     h-12 outline-none border-none bg-transparent text-[#424242]`}
     type={!showPassword ? "password" : "text"}
     onChange={fn}
     value={value}
     placeholder={text}
    />
    <div>
     {
      !showPassword &&
      <span
       className={`cursor-pointer `}
       onClick={() =>
        setShowPassword(true)}><BsEye /></span>
     }
     {
      showPassword &&
      <span
       className={`cursor-pointer `}
       onClick={() =>
        setShowPassword(false)}><BsEyeSlash /></span>
     }
    </div>
   </div>
  </div>
 )
}
