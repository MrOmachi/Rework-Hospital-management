import React from "react";
import { hand_icon } from "../../../../Image";
import { CardArr, DarkCard } from "../../../../components/Layout/CardObject";
import Card from "../../../../components/Layout/Card";
import BlackCard from "../../../../components/Layout/BlackCard";

function AfterKyc() {
  return (
    <div className=" mt-9">
      {" "}
      <div className="">
        <div className="flex">
          {" "}
          <p className="mr-3 text-[16px] font-normal">
            Welcome, <b>Tolu Enterprises</b>{" "}
          </p>
          <img className="w-4" src={hand_icon} alt="" />{" "}
        </div>

        <p className="text-[#696969] text-[14px] font-normal mb-6 leading-6 ">
          what would you like to do today?
        </p>
      </div>
      <b className="">To do</b>
      <Card card={CardArr} />
      <BlackCard drkCard={DarkCard as any} />
    </div>
  );
}

export default AfterKyc;
