import { E164Number } from "libphonenumber-js/types";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { AddAnotherBeneficiary, Continue2 } from "../../../buttons/Buttons";
import { closeIcon, pencil } from "../../../../Image";

function NonSoleRev_Submit() {
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

      <div className="w-[80%] h-[100vh] mb-[15%]">
        <div className="w-[65%] px-3 pb-2 ">
          <div>
            <h3 className="font-semibold text-[15px] pb-3 ">Review & Submit</h3>
            <p className="mb-6 text-[#747A80] text-[13px]">
              You’re almost done. Take a moment to review and confirm your
              submission.
            </p>
          </div>

          <div className="relative mt-8">
            <div className="mt-6 md:w-full sm:w-[90%] ">
              <b className="text-[12px] font-medium">Business Details</b>
              <div className="flex justify-between rounded-[13px] border p-3 text-[12px] text-[#747A80] bg-[#FFFCF1]">
                <div>
                  <p className="mb-2 text-[13px]">Tolu Enterprises</p>
                  <p className=" pb-2 text-[13px]">5,Tolus Street</p>
                  <p className=" pb-2 text-[13px]">VA, Akins 53177 US</p>
                </div>
                <img
                  className="w-[15px] absolute sm:ml-56 md:ml-[90%] cursor-pointer"
                  src={pencil}
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-6 md:w-full sm:w-[90%] ">
              <b className="text-[12px] font-medium">Management & Ownership</b>
              <div className="flex justify-between rounded-[13px] border p-3 text-[12px] text-[#747A80] bg-[#FFFCF1]">
                <div>
                  <p className="mb-2 text-[13px]">John Doe</p>
                  <p className=" pb-2 text-[13px]">johndoe@getcleva</p>
                  <p className=" pb-2 text-[13px]">5, Tolus Street</p>
                  <p className=" pb-2 text-[13px]">VA, Akins 53177 US</p>
                </div>
                <img
                  className="w-[15px] absolute sm:ml-56 md:ml-[90%] cursor-pointer"
                  src={pencil}
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-2 md:w-full sm:w-[90%] ">
              <div className="flex justify-between rounded-[13px] border p-3 text-[12px] text-[#747A80] bg-[#FFFCF1]">
                <div>
                  <p className="mb-2 text-[13px]">John Doe</p>
                  <p className=" pb-2 text-[13px]">maryjane@getcleva</p>
                  <p className=" pb-2 text-[13px]">5, Tolus Street</p>
                  <p className=" pb-2 text-[13px]">VA, Akins 53177 US</p>
                </div>
                <img
                  className="w-[15px] absolute sm:ml-56 md:ml-[90%] cursor-pointer"
                  src={pencil}
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div>
              <AddAnotherBeneficiary />
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

export default NonSoleRev_Submit;
