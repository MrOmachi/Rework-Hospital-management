import React from "react";

interface items {
  type: string;
  text: any;
  title: string;
  fn: any;
}

export default function Input({ type, text, title, fn }: items) {
  return (
    <>
      {/* <div>{title}</div>
     <input 
     type={type}
     placeholder={text}
     onChange={fn}
      /> */}

      <div className="flex mt-1 md:mt-2">
        <p className="text-[11px] md:text-[12px] text-black font-normal">
          {title}
        </p>
        {/* {required && (
      <p className="text-[6.5px] text-[#D31D1D]">
       <DiCssTricks />
      </p>
     )} */}
      </div>
      <input
        type={type}
        id=""
        className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
        placeholder={text}
      />
    </>
  );
}
