import React from "react";
import logo from "../../asset/kyc/logo.svg";
import { IoIosAnalytics, IoMdTrendingUp } from "react-icons/io";
import {
  IoCardSharp,
  IoReaderOutline,
  IoFileTrayOutline,
  IoRepeatOutline,
} from "react-icons/io5";

export default function SideBar() {
  return (
    <div id="sideBar" className="w-[20%] bg-black h-[100vh]">
      <div className=" ">
        <div className="bg-black z-10 ">
          <section>
            <div className="p-4">
              <img src={logo} alt="" />
            </div>
            <ul className="text-[16px] text-[#EBF0F0] leading-[3em] font-bold px-9 pt-12 ">
              <li className="flex items-center gap-4 active:text-[#FFBD59] ">
                {" "}
                <span className="text-[20px]">
                  <IoIosAnalytics />
                </span>
                Home
              </li>
              <li className="flex items-center gap-4 active:text-[#FFBD59]">
                <span className="text-[20px]">
                  <IoFileTrayOutline />
                </span>
                Accounts
              </li>
              <li className="flex items-center gap-4 active:text-[#FFBD59]">
                {" "}
                <span className="text-[20px]">
                  <IoRepeatOutline />
                </span>{" "}
                Transactions
              </li>
              <li className="flex items-center gap-4 active:text-[#FFBD59]">
                {" "}
                <span className="text-[20px]">
                  <IoMdTrendingUp />
                </span>
                Payments
              </li>
              <li className="flex items-center gap-4 active:text-[#FFBD59]">
                <span className="text-[20px]">
                  <IoReaderOutline />
                </span>
                Invoices
              </li>
              <li className="flex items-center gap-4 active:text-[#FFBD59]">
                <span className="text-[20px]">
                  <IoCardSharp />
                </span>
                Cards
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
