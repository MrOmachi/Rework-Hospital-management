import React from 'react'
import { DiCssTricks } from "react-icons/di";

interface items {
 text: string;
 text1: string;
 text2: string;
 text3: string;
 title: string;
 fn: any;
 required: boolean
}

export default function Select({
 text, 
 text1, 
 text2, 
 text3, 
 title, 
 fn, 
 required 
}: items) {
  return (
    <>
    <div className="flex mt-2 md:mt-3">
     <p className="text-[11px] md:text-[12px] text-black font-normal ">
      {title}
     </p>
     {required && (
      <p className="text-[6.5px] text-[#D31D1D]">
       <DiCssTricks />
      </p>
     )}
    </div>
    <select
     onChange={fn}
     id="BusinessType"
     className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] "
    >
     <option value="" className="text-xs ">
      {text}
     </option>
     <option value="" className="text-xs ">
      {"walk in the way of God"}
     </option>
     <option value="" className="text-xs ">
      {"tell me something"}
     </option>
    </select>

    </>
  )
}
