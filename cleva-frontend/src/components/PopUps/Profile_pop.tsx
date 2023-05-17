import React from "react";
import { IoPersonOutline } from "react-icons/io5";
import { TbArrowBarRight, TbUpload } from "react-icons/tb";
import { GrShieldSecurity } from "react-icons/gr";
import { Interface } from "readline";
import { useNavigate } from "react-router";

export default function Profile_pop({ handleModal }: any) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-10 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
      <div className="fixed right-0 mr-[5%] mt-[3%] top-6 py-5 border w-52 shadow-lg rounded-md bg-white">
        <ul className="leading-[3em]">
          <li
            onClick={() => {
              navigate("/profile/before");
              handleModal();
            }}
            className=" cursor-pointer hover:bg-slate-100 flex items-center gap-3 px-8"
          >
            {" "}
            <span className="text-[20px]">
              <IoPersonOutline />
            </span>{" "}
            Profile
          </li>
          <li 
            onClick={() =>{ navigate("/password"); handleModal();}}
          className=" cursor-pointer hover:bg-slate-100 flex items-center gap-3 px-8 pb-2">
            {" "}
            <span className="text-[20px]">
              <GrShieldSecurity />
            </span>{" "}
            Security
          </li>
          <li className=" cursor-pointer hover:bg-slate-100 flex items-center gap-3 border-t pt-2 px-8 ">
            {" "}
            <span className="text-[20px]">
              <TbArrowBarRight />
            </span>{" "}
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
}
