import { E164Number } from "libphonenumber-js/types";
import React from "react";
import { BsCheck } from "react-icons/bs";
import { AddAnotherBeneficiary, Continue2 } from "../../../buttons/Buttons";
import { checkSymbol, closeIcon, line, pencil } from "../../../../Image";
import Button from "../../../../components/Layout/buttons/Button";
import { useNavigate } from "react-router-dom";

function NonSoleRev_Submit() {
  const navigate = useNavigate();
  // btn styling starts
  const btnAddNewBeneficiary =
    "w-full text-[15px] font-semibold p-3 rounded-lg mt-5 border-[#747A80] border bg-[#FAFAFA]";
  const btnContinue =
    "bg-[#FFBD59] text-[15px] font-semibold p-3 w-full rounded-lg mt-3";

  // btn styling ends here

  // btn function
  const handleAddAnotherBeneficiary = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleForm2Beneficiary");
  };
  const handleContinue = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleDocUpload");
  };
  // btn function ends here

  // Getting data from storage
  const CustomerDetails = JSON.parse(
    localStorage.getItem("customerData") as string
  );
  // Getting data from deux ends here
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

      <div className="w-[75%] sm:w-[60%] md:w-[75%] h-[90vh]">
        <div className="w-[63%] px-3 pb-[4em] ">
          <div>
            <h3 className="font-semibold text-[20px] pb-3 ">Review & Submit</h3>
            <p className="mb-7 text-[#747A80] text-[15px]">
              You’re almost done. Take a moment to review and confirm your
              submission.
            </p>
          </div>

          <div className="relative mt-8">
            <div className="mt-6 md:w-full sm:w-[90%] ">
              <b className="text-[15px] font-semibold">Business Details</b>
              <div className="flex justify-between rounded-[13px] border mt-2 p-3 text-[14px] capitalize font-medium  bg-[#FFFCF1]">
                <div >
                  <p className="mb-3">Tolu Enterprises</p>
                  <p className=" text-[#747A80]">5,Tolus Street</p>
                  <p className=" text-[#747A80] py-1">VA, Akins 53177 US</p>
                </div>
                <img
                  className="w-[15px] absolute sm:ml-56 md:ml-[90%] cursor-pointer"
                  src={pencil}
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-6 md:w-full sm:w-[90%] ">
              <b className="text-[15px] font-semibold">Management & Ownership</b>
              <div className="flex justify-between rounded-[13px] border mt-2 p-3 text-[14px] capitalize font-medium  bg-[#FFFCF1]">
                <div >
                  <p className="mb-3">John Doe</p>
                  <p className=" text-[#747A80]">johndoe@getcleva</p>
                  <p className=" text-[#747A80] py-1">5, Tolus Street</p>
                  <p className=" text-[#747A80]">VA, Akins 53177 US</p>
                </div>
                <img
                  className="w-[15px] absolute sm:ml-56 md:ml-[90%] cursor-pointer"
                  src={pencil}
                  alt=""
                />
              </div>
            </div>

            <div className="relative mt-2 md:w-full sm:w-[90%] ">
              <div className="flex justify-between rounded-[13px] border mt-3 p-3 text-[14px] capitalize font-medium  bg-[#FFFCF1]">
                <div>
                  <p className="mb-3 ">John Doe</p>
                  <p className="text-[#747A80]">maryjane@getcleva</p>
                  <p className="text-[#747A80] py-1">5, Tolus Street</p>
                  <p className="text-[#747A80]">VA, Akins 53177 US</p>
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
            <Button
              styles={`${btnAddNewBeneficiary}`}
              text="Add Another Beneficiary"
              fn={handleAddAnotherBeneficiary}
              status={false}
            />
            <Button
              styles={`${btnContinue}`}
              text="Continue"
              fn={handleContinue}
              status={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonSoleRev_Submit;
