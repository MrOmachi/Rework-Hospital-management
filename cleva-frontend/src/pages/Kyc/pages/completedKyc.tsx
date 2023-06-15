import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { pendingIcon } from "../../../Image";

function CompletedKyc() {
  const navigate = useNavigate();
  const location = useLocation();
  const period = location.state;

  console.log(period);

  useEffect(() => {
    clearInterval(period);
  }, []);

  const handleDashboard = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center  w-full h-[80vh] items-center ">
    <div className="sm:w-[80%] md:w-[50%] border p-7 pb-14 sm:pb-8 rounded-lg ">
    <center className="">
        <img className="sm:w-[40px] md:w-[60px] " src={pendingIcon} alt="" />
        <h2 className="text-[#087D18] font-semibold pt-4 md:text-[17px]">
        KYC Verification Pending!
        </h2>
        <p className="py-5 text-[11px] md:text-[13px] text-[#747A80] font-medium">
        Thank you for submitting your business information.
        </p>
        <p className="text-[11px] md:text-[13px] text-[#747A80] font-medium">
        We'll send you a notification with the status of your
        </p>
        <p className="text-[11px] text-[#747A80] md:text-[13px] font-medium">
        verification.
        </p>
        <button
        onClick={handleDashboard}
        className="p-2  text-[11px]  font-bold my-6 bg-[#FFBD59] w-[150px] rounded-lg"
        >
        Visit Dashboard
        </button>
    </center>
    </div>
    </div>
  );
}

export default CompletedKyc;
