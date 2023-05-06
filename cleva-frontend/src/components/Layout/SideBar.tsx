import React from "react";
import logo from "../../asset/kyc/logo.svg";
import { IoIosAnalytics, IoMdTrendingUp } from "react-icons/io";
import {
  IoCardSharp,
  IoReaderOutline,
  IoFileTrayOutline,
  IoRepeatOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SideBar() {
  const navigate = useNavigate();

  return (
    <div id="sideBar" className="w-[20%] bg-black h-[100vh]">
      <div className=" ">
        <div className="bg-black z-10 ">
          <section>
            <div className="p-4 cursor-pointer" onClick={() => navigate("/")}>
              <img src={logo} alt="" />
            </div>
            <ul className="text-[14px] text-[#EBF0F0] leading-[4em] font-bold px-9 pt-12 ">
              <li
                className="flex items-center gap-4 active:text-[#FFBD59] "
                onClick={() => navigate("/")}
              >
                <span className="text-[20px] cursor-pointer">
                  <IoIosAnalytics />
                </span>
                <span className=" cursor-pointer">Home</span>
              </li>
              <li
                className="flex items-center gap-4 active:text-[#FFBD59]"
                onClick={() => navigate("/Accounts")}
              >
                <span className="text-[20px] cursor-pointer">
                  <IoFileTrayOutline />
                </span>
                <span className=" cursor-pointer">Accounts</span>
              </li>
              <li
                className="flex items-center gap-4 active:text-[#FFBD59]"
                onClick={() => navigate("/transanctions")}
              >
                <span className="text-[20px] cursor-pointer">
                  <IoRepeatOutline />
                </span>
                <span className=" cursor-pointer">Transanctions</span>
              </li>
              <li
                className="flex items-center gap-4 active:text-[#FFBD59]"
                onClick={() => navigate("/Payments")}
              >
                <span className="text-[20px] cursor-pointer">
                  <IoMdTrendingUp />
                </span>
                <span className=" cursor-pointer">Payments</span>
              </li>
              <li
                className="flex items-center gap-4 active:text-[#FFBD59]"
                onClick={() => navigate("/Invoices")}
              >
                <span className="text-[20px] cursor-pointer">
                  <IoReaderOutline />
                </span>
                <span className=" cursor-pointer">Invoices</span>
              </li>
              <li
                className="flex items-center gap-4 active:text-[#FFBD59]"
                onClick={() => navigate("/ClevaCards")}
              >
                <span className="text-[20px] cursor-pointer">
                  <IoCardSharp />
                </span>
                <span className=" cursor-pointer">Cards</span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
