import React from 'react'

interface input {
 title: string,
 value: string,
 fn: any,
 type: string,
 err: string
}

export default function Input({
 title,
 type,
 fn,
 value,
 err
}: input) {
 return (
  <div>
   <header className='text-[12px] pb-1 pt-5 text-left'>
    {title}
   </header>
   <input
    className={`bg-[#F9F9F9] w-full
     rounded-md text-[14px] border-1
     h-12 outline-none border text-[#424242]`}
    type={type}
    onChange={fn}
    placeholder={value}
   />
   <span className='text-[10px] text-red-600'>{err}</span>
  </div>
 )
}
