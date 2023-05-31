import React from 'react'

interface select {
 title: string,
 arr: any,
 fn: any,
 err: string,
 xtstyles: string,
 placeholder?: string,
}

export default function Select({
 title,
 fn,
 arr,
 err,
 xtstyles,
 placeholder
}: select) {
 return (
  <div>
   <header className='text-[14px] pb-1 pt-5 text-left'>
    {title}
   </header>
   <select
    onChange={fn}
    className={`bg-[#F9F9F9] ${xtstyles} w-full
     rounded-md  text-[14px] border-1
     h-12 outline-none border text-[#424242] focus:outline-none focus:ring-cleva-gold focus:border-cleva-gold`}
    name=""
    id=""
   >
    <option value="" disabled selected hidden>
        {placeholder}
      </option>
      {
     arr.map((options: any) => (
      <option key={options.value} value={options.value}>
       {options.label}
      </option>
     ))
    }
   
   </select>
   <span className='text-[10px] text-red-600'>{err}</span>
  </div>
 )
}
