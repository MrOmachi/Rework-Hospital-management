import React from "react";
import { AddBeneficialOwner, Continue } from "../../../buttons/Buttons";
import { BsCheck } from "react-icons/bs";
// import { useNavigate } from "react-router-dom";

function NonSoleForm2() {
  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="w-[20%] sm:w-[40%]">
        <div className="flex ">
          <div className="items-center">
            <div className="">
              <p className="border-[1px] rounded-full w-[16px]  h-[16px] flex text-[#FFBD59] text-[11px] justify-center items-center">
                <BsCheck />
              </p>
            </div>
            <div className="h-[10px] m-auto border w-[1px]"></div>
          </div>
          <b className="text-[10px] ml-2 font-roboto">Business Information</b>
        </div>
        <div className="flex">
          <div>
            <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[7px] pt-[3px]">
              2
            </p>
            <div className="h-[10px] m-auto border w-[1px]"></div>
          </div>
          <div className="text-[10px] ml-2">Beneficiary Owners</div>
        </div>

        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px]">
              3
            </p>
          </div>
          <div className="text-[10px] ml-2">Review & Submit</div>
        </div>
      </div>

      <div className="w-[80%] sm:w-[60%] md:w-[75%] ">
        <div className="w-[55%] px-3 pb-2 ">
          <div>
            <h3 className="font-semibold text-sm pb-5 ">Beneficial Owners</h3>
            <p className="mb-6 text-[#747A80] text-[10px]">
              Due to regulatory guidelines, we’re required to collect
              information on anyone who has significant ownership of your
              business
            </p>
            <p className="text-[11px] text-[#747A80] font-semibold">
              Please add any individual who owns 25% or more of Tolus <br />{" "}
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
