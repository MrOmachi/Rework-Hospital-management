import React from 'react'

interface items {
 text: string;
 title: string;
 fn: any;
}

export default function InputWithCcode({ text, title, fn }: items) {
  return (
   <div className="my-4">
    <div className=" ">
     <p className="text-[11px] md:text-[12px] text-black font-normal ">
      {title}
     </p>
    </div>
    <div className="flex border w-full rounded-[10px] text-[13px] py-2">
     <div className="border-5 ">
      <select
       // value={formData.phoneNumber}
       onChange={fn}
       id=""
       className="w-10 rounded-lg pl-2 outline-none text-[#747A80] font-semibold"
      >
       <option value="">+1</option>
       <option value="">+2</option>
       <option value="">+3</option>
       <option value="">+4</option>
       <option value="">+5</option>
       <option value="">+6</option>
      </select>

      <input
       type="text"
       name="phoneNumber"
       // value={formData.phoneNumber}
       onChange={fn}
       className="pl-2 outline-none"
       placeholder="23456789"
      />
     </div>
    </div>
   </div>
  )
}
