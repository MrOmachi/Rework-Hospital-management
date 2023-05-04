import React from "react";
import { AiOutlineBell, AiOutlineSearch } from "react-icons/ai";

export default function Nav() {
  return (
    <div className=" m-auto">
      <section className="flex items-center justify-between">
        <div>
          <b className=" font-extrabold ">Home</b>
        </div>
        <div className="flex items-center w-[40%] justify-evenly">
          <span className="border-2 flex items-center gap-1 p-2 rounded-md w-[70%] text-[18px] ">
            <AiOutlineSearch />
            <input
              className="text-[12px]"
              type="text"
              placeholder="Type to search ..."
            />
          </span>
          <span className="border-2 p-[9px]  rounded-md ">
            <AiOutlineBell />
          </span>
          <span className="rounded-full bg-[#F2F2F2] border-2 py-[6px] px-2">
            <b>TA</b>
          </span>
        </div>
      </section>
    </div>
  );
}
