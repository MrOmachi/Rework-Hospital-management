import { PlusIcon } from "@heroicons/react/24/solid";
import e from "express";
import React from "react";
import { useNavigate } from "react-router-dom";
import { arrowRight } from "../../Image";
import { IoIosArrowBack } from "react-icons/io";

export const AgreeAndSubmit = () => {
  return (
    <div>
      <button className="bg-[#FFBD59] text-[10px] font-semibold p-2 md:w-[50%] sm:w-[90%] rounded-md mt-5 ">
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
    <div className=" relative font-extrabold">
      <button
        onClick={handleBeneficiaryOwner}
        className="w-full text-[13px] font-semibold p-2 rounded-md mt-5 border-2"
      >
        {" "}
        Add beneficial owner
      </button>
      <p className="absolute w-[12px] - ml-[65px] -mt-[26px] font-extrabold">
        <PlusIcon />{" "}
      </p>
    </div>
  );
};

export const Continue = () => {
  const navigate = useNavigate();

  const handleContinue = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleForm2Beneficiary");
  };

  return (
    <div className="font-extrabold">
      <button
        onClick={handleContinue}
        className="bg-[#FFF5D9] text-[13px] font-semibold p-2 w-full rounded-md border-2"
      >
        {" "}
        Continue
      </button>
    </div>
  );
};

export const Continue2 = () => {
  const navigate = useNavigate();

  const handleContinue = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigate("/nonSoleDocUpload");
  };

  return (
    <div className="font-extrabold">
      <button
        onClick={handleContinue}
        className="bg-[#FFBD59] text-[13px] font-semibold p-2 w-full rounded-lg"
      >
        {" "}
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
        {" "}
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
        {" "}
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
        {" "}
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
        {" "}
        Cancel
      </button>
    </div>
  );
};
export const Submit = () => {
  const navigate = useNavigate();

  const handleCancel = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  return (
    <div className="font-extrabold mt-1">
      <button
        onClick={handleCancel}
        className="border-2 text-[10px] font-bold p-2 w-full rounded-md mt-2 bg-[#FFF5D9]"
      >
        Submit
      </button>
    </div>
  );
};
export const NonSoleSubmit = () => {
  return (
    <div className="font-extrabold mt-1">
      <button
        // onClick={handleSubmit}
        className="bg-[#FFF5D9] mt-5 text-[13px] font-semibold p-2 w-full rounded-lg border-2 cursor-pointer"
      >
        Submit
      </button>
    </div>
  );
};
export const SaveAndContinue = () => {
  return (
    <div className="flex float-right">
      <button className="text-[10px] bg-[#FFF5D9] py-2 px-6 rounded-[10px] text-[#747A80] mt-2 mb-[100px]  font-medium border-2">
        Save and Continue
      </button>
      <img className="-ml-8 -mt-[93px] p-3" src={arrowRight} alt="" />
    </div>
  );
};
export const SaveAndContinue2 = () => {
  // const navigate = useNavigate();

  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   navigate("/");
  // };
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
  // const navigate = useNavigate();

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // navigate("/");
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        className="border-2 text-[13px] font-semibold p-2 md:w-[50%] sm:w-[90%] rounded-md mt-2 "
      >
        Save for later
      </button>
    </div>
  );
};
export const SaveForLaterLong = () => {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // navigate("/");
  };
  return (
    <div>
      <button
        onClick={handleSubmit}
        className="border-2 text-[10px] font-bold p-2 w-full rounded-md mt-2 "
      >
        Save for later
      </button>
    </div>
  );
};
export const Previous = () => {
  return (
    <div className="flex">
      <button className="text-[10px] border-2 py-2 px-6 rounded-[10px] text-[#747A80] mt-3 font-medium">
        Previous
      </button>
      <p className="-ml-[80%] w-[32px] mt-3 p-3 text-[#747A80] font-bold">
        <IoIosArrowBack />
      </p>
    </div>
  );
};
export const NonSoleSaveForLaterLong = () => {
  // const handleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   navigate("/");
  // };
  return (
    <div>
      <button
        // onClick={handleSubmit}
        className="border-2 text-[13px] font-bold p-2 w-full rounded-md mt-2 "
      >
        Save for later
      </button>
    </div>
  );
};
