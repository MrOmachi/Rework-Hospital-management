import React from "react";
import { useNavigate } from "react-router-dom";
import { pendingIcon } from "../../../../Image";

function PendingStatus() {
  const navigate = useNavigate()
  // const home = useState()

  const handleDashboard = () =>{
    navigate('/')
  }
  return (
    <div className="flex justify-center  w-full sm:mt-[20%] md:mt-[5%] ">
      <div className="sm:w-[80%] md:w-[50%] border p-7 pb-14 sm:pb-8 rounded-md ">
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
          <button onClick={handleDashboard} className="p-2 text-sm text-[#747A80] sm:text-[10px] font-medium my-6 border rounded-md">
            Visit Dashboard
          </button>
        </center>
      </div>
    </div>
  );
}

export default PendingStatus;
