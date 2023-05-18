import React, { useState } from "react";
import { pencil } from "../../../Image";
import AgreeAndSubmit from "../../buttons/AgreeAndSubmit";
import SaveForLater from "../../buttons/SaveForLater";
import { useNavigate } from "react-router-dom";

function FormStep3() {
  const navigate = useNavigate()
  const upload = useState("")
  const handleSubmit = () => {
    if(upload){
      navigate('/kycDocUpload')
    }
    else{
      navigate('/startKyc2')
    }
  };
  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="w-[25%] sm:w-[40%]">
        <div className="flex ">
          <div className="items-center">
            <div className="">
              <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px] ">
                1
              </p>
            </div>
            <div className="h-[10px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">Business Information</p>
        </div>
        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px]">
              2
            </p>
            <div className="h-[10px] m-auto border w-[1px]"></div>
          </div>
          <b className="text-[10px] ml-2">Beneficiary Owners</b>
        </div>

        <div className="flex">
          <div>
            <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[7px] pt-[3px]">
              3
            </p>
          </div>
          <div className="text-[10px] ml-2">Review & Submit</div>
        </div>
      </div>

      <div className="w-[75%] sm:w-[60%] md:w-[75%]">
        <h3 className="font-semibold text-sm pb-5 ">Review & Submit</h3>
        <p className="text-[10px] mb-10 sm:mb-5 ">
          You’re almost done. Take a moment to review and confirm <br /> your
          submission.
        </p>
        <div className="mt-6 md:w-[50%] sm:w-[90%] ">
          <b className="text-[12px] font-medium">Business Details</b>
          <div className="flex justify-between rounded-[13px] border p-3 text-[12px] text-[#747A80] bg-[#FFFCF1]">
            <div>
              <p className="mb-2">Tolu Enterprises</p>
              <p className="">
                5, Tolus Street <br />
                VA, Akins 53177 US
              </p>
            </div>
            <img
              className="w-[10px] absolute sm:ml-56 md:ml-[20%] cursor-pointer"
              src={pencil}
              alt=""
            />
          </div>
        </div>

        <div className=" mt-5 md:w-[50%] sm:w-[90%]">
          <b className="text-[12px] font-medium">Management & Ownership</b>
          <div className="flex justify-between rounded-[13px] border p-3 text-[12px] text-[#747A80] bg-[#FFFCF1]">
            <div>
              <p className="mb-2">John Doe</p>
              <p className="">
                johndoe@getcleva <br />
                5, Tolus Street <br />
                VA, Akins 53177 US
              </p>
            </div>
            <img
              className="w-[10px] absolute sm:ml-56 md:ml-[20%] cursor-pointer"
              src={pencil}
              alt=""
            />
          </div>
        </div>
        <div className="">
          <div className="mb-1" onClick={handleSubmit} >
            <AgreeAndSubmit />
          </div>
          <div>
            <SaveForLater />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormStep3;
