import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { arrowRight } from "../../Image";
import { IoIosArrowBack } from "react-icons/io";
import { MdKeyboardArrowLeft } from "react-icons/md";

export const AgreeAndSubmit = () => {
  return (
    <div>
      <button className="bg-[#FFBD59] w-full lg:text-[15px] sm:text-[13px] font-semibold p-2 rounded-lg mt-7  ">
        Agree and Submit
      </button>
    </div>
  );
};


export const AddBeneficialOwner = () => {
  const navigate = useNavigate();
  const handleBeneficiaryOwner = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleForm2Beneficiary");
  };
  return (
    <div className=" relative font-extrabold text-[15px]">
      <button
        onClick={handleBeneficiaryOwner}
        className="w-full text-[15px] font-semibold p-3 rounded-lg mt-2 border-[#747A80] border bg-[#FAFAFA]"
      >
        Add beneficial owner
      </button>
      <p className="absolute text-black w-[15px] ml-[110px] -mt-[33px] font-bold">
        <PlusIcon />
      </p>
    </div>
  );
};

export const Continue = (props:any) => {
  const handleContinue = () => {
    props.onClick();
  };
  return (
    <div className="font-extrabold">
      <button
        onClick={()=>handleContinue}
        className={` text-[13px] font-bold  px-6 rounded-lg  mt-2 ${
          props.isButtonDisabled ? "bg-[#FFBD59]"
             : "bg-[#FFF5D9] text-[#5F5D5D]"
         }`}
      >
        Continue
      </button>
    </div>
  );
};


export const AddBeneficialOwner2 = () => {
  const navigate = useNavigate();

  const handleBeneficiaryOwner2 = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/verifyBeneficiary");
  };
  return (
    <div className="font-extrabold">
      <button
        onClick={handleBeneficiaryOwner2}
        className="bg-[#FFBD59]  w-full text-[13px] font-semibold p-2 rounded-lg mt-5 "
      >
        Add Beneficial Owner
      </button>
    </div>
  );
};





export const AddAnotherBeneficiary = () => {
  const navigate = useNavigate();

  const handleAddAnotherBeneficiary = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/verifyBeneficiary");
  };
  return (
    <div className="font-extrabold">
      <button
        onClick={handleAddAnotherBeneficiary}
        className="bg-[#FAFAFA] border-2  w-full text-[13px] font-semibold p-2 rounded-lg mt-5 "
      >
        Add another beneficial owner
      </button>
    </div>
  );
};

export const AddAnotherBeneficiary2 = () => {
  const navigate = useNavigate();

  const handleAddAnotherBeneficiary2 = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleDocUpload");
  };
  return (
    <div className="font-extrabold">
      <button
        onClick={handleAddAnotherBeneficiary2}
        className="bg-[#FAFAFA] border-2  w-full text-[13px] font-semibold p-2 rounded-lg mt-5 "
      >
        Add another beneficial owner
      </button>
    </div>
  );
};

export const Cancel = () => {
  const navigate = useNavigate();

  const handleCancel = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleForm2Beneficiary");
  };

  return (
    <div className="font-extrabold mt-2">
      <button
        onClick={handleCancel}
        className=" text-[13px] font-semibold p-2 w-full rounded-lg border-2"
      >
        Cancel
      </button>
    </div>
  );
};
export const NonSoleSubmit = () => {
  return (
    <div className="font-extrabold mt-1">
      <button className="bg-[#FFF5D9] mt-5 text-[13px] font-semibold p-2 w-full rounded-lg border-2 cursor-pointer">
        Submit
      </button>
    </div>
  );
};
export const SaveAndContinue = () => {
  return (
    <div className="flex float-right">
      <button className="relative text-[13px] bg-[#FFF5D9] py-3 px-6 rounded-[10px] text-[#747A80] mt-2 mb-[100px]  font-medium border-2">
        Save and Continue
      </button>
      <img className="absolute mt-[24px] ml-[150px]" src={arrowRight} alt="" />
    </div>
  );
};
export const SaveAndContinue2 = () => {
  return (
    <div className="flex float-right">
      <button className="text-[10px] bg-[#FFBD59] py-3 px-6 rounded-[10px] text-[#747A80] mt-2 mb-[100px]  font-bold border-2">
        Save and Continue
      </button>
      <img className="-ml-8 -mt-[93px] p-3" src={arrowRight} alt="" />
    </div>
  );
};
export const SaveForLater = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        className="border-[1px] border-[#747A80] lg:text-[15px]  sm:text-[13px] font-semibold p-2 w-full rounded-lg mt-2 bg-[#F2F2F2] "
      >
        Save for later
      </button>
    </div>
  );
};
export const SaveForLaterLong = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        className="border-[1px] border-[#ADADADB2] text-[15px] font-bold p-3 w-full rounded-lg mt-2 mb-20 bg-[#FAFAFA]"
      >
        Save for later
      </button>
    </div>
  );
};
export const Previous = () => {
  return (
    <div className="flex relative">
      <button className=" text-[13px] border-[1px] border-gray-600 py-2 px-4 pl-6 rounded-lg mt-2 font-medium">
        Previous
      </button>
      <p className="absolute pl-2 w-[32px] mt-[17px] font-extrabold text-[20px]  ">
        <MdKeyboardArrowLeft />
      </p>
    </div>
  );
};
export const NonSoleSaveForLaterLong = () => {
  return (
    <div>
      <button className="border-2 text-[13px] font-bold p-2 w-full rounded-lg  ">
        Save for later
      </button>
    </div>
  );
};
