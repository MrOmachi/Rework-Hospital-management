import React from "react";
import { arrowRight } from "../../Image";

function SaveAndContinue2() {
  return (
    <div className="flex float-right">
      <button className="text-[10px] bg-[#FFBD59] py-3 px-6 rounded-[10px] text-[#747A80] mt-2 mb-[100px]  font-bold border-2">
        Save and Continue
      </button>
      <img className="-ml-8 -mt-[93px] p-3" src={arrowRight} alt="" />
    </div>
  );
}

export default SaveAndContinue2;
