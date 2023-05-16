import React from 'react'

interface input {
 title: string,
 value: string,
 fn: any,
 type: string,
 width: string,
 err: string
}

export default function Input({
 title,
 type,
 fn,
 value,
 width,
 err
}: input) {
 return (
  <div>
   <header className='text-[10px] pb-1 pt-3'>
    {title}
   </header>
   <input
    className={`
    ${width}
     bg-[#F9F9F9] 
     rounded-md 
     font-semibold 
     text-[10px] 
     outline-none border text-black`}
    type={type}
    onChange={fn}
    placeholder={value}
   />
   <span className='text-[10px] text-red-600'>{err}</span>
  </div>
 )
}
