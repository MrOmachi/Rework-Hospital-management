import React, { ReactNode } from "react";
import logo from "../../asset/kyc/logo.svg";
import { IoIosAnalytics, IoMdTrendingUp } from "react-icons/io";
import { TbArrowsRightLeft } from 'react-icons/tb'
import {
  IoCardSharp,
  IoReaderOutline,
  IoFileTrayOutline,
} from "react-icons/io5";
import { useNavigate } from "react-router-dom";

interface ITab {
  id: number;
  tabName: string;
  tabIcon: ReactNode;
  onClick: () => void;
}

export default function SideBar() {
  const navigate = useNavigate();

  const Tabs: ITab[] = [
    {
      id: 1,
      tabName: "Home",
      tabIcon: <IoIosAnalytics />,
      onClick: () => navigate("/"),
    },
    {
      id: 2,
      tabName: "Accounts",
      tabIcon: <IoFileTrayOutline />,
      onClick: () => navigate("/accounts"),
    },
    {
      id: 3,
      tabName: "Transanctions",
      tabIcon: <TbArrowsRightLeft />,
      onClick: () => navigate("/Transanctions"),
    },
    {
      id: 4,
      tabName: "Transfers",
      tabIcon: <IoMdTrendingUp />,
      onClick: () => navigate("/transfers"),
    },
    {
      id: 5,
      tabName: "Recipients",
      tabIcon: <IoReaderOutline />,
      onClick: () => navigate("/recipients"),
    },
    {
      id: 6,
      tabName: "Invoices",
      tabIcon: <IoReaderOutline />,
      onClick: () => navigate("/Invoices"),
    },
    {
      id: 7,
      tabName: "Cards",
      tabIcon: <IoCardSharp />,
      onClick: () => navigate("/clevacards"),
    },
  ];

  return (
    <section id="sideBar" className="w-[20%] sticky top-0 bg-black h-[100vh]">
      <div className="p-4 cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" />
      </div>
      <ul className="text-[14px] text-[#EBF0F0] leading-[4em] font-bold px-9 mt-12 ">
        {Tabs.map((tab) => (
          <li
            key={tab.id}
            className="flex items-center space-x-4 active:text-[#FFBD59] cursor-pointer"
            onClick={tab.onClick}
          >
            <span className="text-[20px]">{tab.tabIcon}</span>
            <span className=" cursor-pointer">{tab.tabName}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
