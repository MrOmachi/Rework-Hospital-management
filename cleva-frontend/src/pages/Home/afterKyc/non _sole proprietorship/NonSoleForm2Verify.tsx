import { E164Number } from "libphonenumber-js/types";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { AddAnotherBeneficiary2, Continue2 } from "../../../buttons/Buttons";
import { closeIcon, pencil } from "../../../../Image";

function NonSoleForm2Verify() {
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

      <div className="w-[80%] h-[90vh]">
        <div className="w-[65%] px-3 pb-2 ">
          <div>
            <h3 className="font-semibold text-[15px] pb-5 ">
              Beneficial Owners
            </h3>
            <p className="mb-6 text-[#747A80] text-[13px]">
              Due to regulatory guidelines, we’re required to collect
              information on anyone who has significant ownership of your
              business
            </p>
            <p className="text-[13px] text-[#747A80] font-semibold">
              Please add any individual who owns 25% or more of Tolus <br />{" "}
              Enterprises
            </p>
          </div>

          <div className="relative mt-8">
            <div className="mt-6 md:w-full sm:w-[90%] ">
              <b className="text-[12px] font-medium">Business Details</b>
              <div className="flex justify-between rounded-[13px] border p-3 text-[12px] text-[#747A80] bg-[#FFFCF1]">
                <div>
                  <p className="mb-2 text-[13px]">Tolu Enterprises</p>
                  <p className=" pb-2 text-[13px]">johndoe@business.com</p>
                </div>
                <img
                  className="w-[15px] absolute sm:ml-56 md:ml-[80%] cursor-pointer"
                  src={pencil}
                  alt=""
                />
                <img
                  className="w-[15px] absolute sm:ml-56 md:ml-[90%] cursor-pointer"
                  src={closeIcon}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div>
              <AddAnotherBeneficiary2 />
            </div>
            <div className="mt-4">
              <Continue2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonSoleForm2Verify;
