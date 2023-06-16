import React from "react";
import { AddBeneficialOwner, Continue } from "../../../buttons/Buttons";
import { BsCheck } from "react-icons/bs";
import { checkSymbol, line } from "../../../../Image";

function NonSoleForm2() {
  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="w-[25%] md:w-[25%] sm:w-[35%]">
        <div className="flex">
          <div className="items-center">
            <div className="border border-[#FFBD59]  rounded-full w-[16px]  h-[16px] flex items-center  text-[8px] justify-center ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
            <img className="h-[25px] m-auto" src={line} alt="" />
          </div>
          <p className="text-[11px]  ml-2 font-medium">Business Information</p>
        </div>

        <div className="flex">
          <div>
            <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center text-[#747A80] text-[8px] justify-center flex">
              2
            </p>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <div className="flex text-[11px] font-medium   ml-2">
            Beneficiary Owners
          </div>
        </div>

        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center justify-center text-[#747A80] flex text-[8px]">
              3
            </p>
          </div>
          <div className="text-[#747A80] text-[11px]  ml-2">
            Review & Submit
          </div>
        </div>
      </div>

      <div className="w-[75%] md:w-[75%] sm:w-65% sm:ml-12">
        <div className="w-[60%]">
          <div>
            <h3 className="font-semibold text-[18px] -mt-1  ">Beneficial Owners</h3>
            <p className="pt-3 text-[#747A80] text-[13px]">
              Due to regulatory guidelines, we’re required to collect
              information on anyone who has significant ownership of your
              business
            </p>
            <p className="text-[13px] text-[#747A80] font-semibold my-8">
              Please add any individual who owns 25% or more of Tolus
              Enterprises
            </p>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-none">
              <AddBeneficialOwner />
            </div>
            <div className="mt-[10px]">
              <Continue />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonSoleForm2;
