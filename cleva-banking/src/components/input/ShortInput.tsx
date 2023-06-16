import React from 'react'

interface items {
text: string;

}

export default function ShortInput({ text }: items) {
  return (
   <div className="mt-4 ">
    <input
     type="text"
     name="phoneNumber"
     className="w-[25%] text-[12px] py-2 
                px-2 rounded-md pl-3  font-[800] outline-none border-2 "
     placeholder={text}
    />
   </div>
  )
}
