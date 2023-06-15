import React, { useState } from "react";
import { DiCssTricks } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {  setkycInfo } from "../../../redux/Kyc/kycSlice";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Previous } from "../../../components/buttons/Buttons";


function BeneficialOwners() {
  const navigate = useNavigate();
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const [businessKyc, setBusinessKyc] = useState(BusinessKyc);
  const dispatch = useAppDispatch();
  const isButtonDisabled =
    businessKyc.Type === "" ||
    businessKyc.BusinessName === "" ||
    businessKyc.Classification === "" ||
    businessKyc.BusinessRegistrationNumber === "" ||
    businessKyc.RegisteredAddress?.StreetAddress === "" ||
    businessKyc.ContactDetails.Email === ""

    const btnCheck =
    BusinessKyc.Type === "" ||
    BusinessKyc.BusinessName === "" ||
    BusinessKyc.Classification === "" ||
    BusinessKyc.BusinessRegistrationNumber === "" ||
    BusinessKyc.RegisteredAddress?.StreetAddress === "" ||
    BusinessKyc.ContactDetails.Email === ""


  const handlePrevious = (e:any) => {
    e.preventDefault();
    navigate("/kyc/business/step1");
  };

  const handleChange = (event:any) => {
    dispatch(
      setkycInfo({
        ...BusinessKyc,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleBeneficiaryOwner2 = (e: any) => {
    e.preventDefault();

    const kycInfoNonSole = JSON.parse(
      localStorage.getItem("kycInfoNonSole") as string
    );

    localStorage.setItem(
      "kycInfoNonSole",
      JSON.stringify([...[kycInfoNonSole]])
    );
    
    navigate("/verifyBeneficiary");
  };

  const handleSubmit = () => {
   
};

  return (
    <form
    onSubmit={handleSubmit}
    className="w-[75%] sm:w-[60%] md:w-[75%] h-[100vh]"
  >
    <div className="w-[52%] ml-6">
      <div>
        <h3 className="font-semibold text-[20px] pb-3 ">
          Tell us about the Owner
        </h3>
        <p className="text-[13px] mb-7 text-[#747A80]">
          Make sure you enter your information exactly as it appears on your
          government-issued ID.
        </p>
        <div>
          {/* Form 1 */}
          <div className="flex mt-1 md:mt-2">
            <p className="text-[13px] font-normal pb-1 ">Legal Name</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="text"
            name="firstName"
            id=""
            value={businessKyc.BeneficiaryOwners[0].FirstName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.BeneficiaryOwners[0].FirstName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="First Name"
          />

          {/* Form 2 */}
          <input
            type="text"
            name="lastName"
            id=""
            value={businessKyc.BeneficiaryOwners[0].LastName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.BeneficiaryOwners[0].LastName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Last Name"
          />

          {/* Form 3 */}
          <div className="flex mt-6">
            <p className="text-[13px] font-normal pb-1 ">Email Address</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="email"
            name="email"
            id=""
            value={businessKyc.ContactDetails.Email}
            onChange={handleChange}
            className={`text-[13px] border mb-6 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.ContactDetails.Email === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Email Address"
          />

          {/* Form 4 */}

          <div className="flex ">
            <p className="text-[13px] font-normal pb-1 ">Date of birth</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="date"
            name="DoB"
            id=""
            value={businessKyc.BeneficiaryOwners[0].DateOfBirth}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.BeneficiaryOwners[0].DateOfBirth === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="MM-DD-YYYY"
          />
          {/* BUTTONS */}


          <div className="flex justify-between mt-2">
                <div className="font-extrabold">
                  <button
                    disabled={btnCheck}
                    onClick={handleBeneficiaryOwner2}
                    className={`  w-full text-[15px] font-semibold p-3 rounded-lg mt-5 ${
                        businessKyc.BeneficiaryOwners[0].FirstName &&
                        businessKyc.BeneficiaryOwners[0].LastName &&
                        businessKyc.ContactDetails.Email &&
                        businessKyc.BeneficiaryOwners[0].DateOfBirth !== ""
                        ? "bg-[#FFBD59]"
                        : "bg-[#FFF5D9]"
                    }`}
                  >
                    Add Beneficial Owner
                  </button>
                </div>
            </div>

          <div className="flex justify-between mt-2">
            <div onClick={(e) => handlePrevious(e)}>
              <Previous />
            </div>
            <div className="flex float-right relative">
              <button
                disabled={isButtonDisabled}
                className={` text-[13px] font-bold  px-6 rounded-lg  mt-2 ${
                  businessKyc.BeneficiaryOwners[0].FirstName &&
                  businessKyc.BeneficiaryOwners[0].LastName &&
                  businessKyc.ContactDetails.Email &&
                  businessKyc.BeneficiaryOwners[0].DateOfBirth !== ""
                    ? "bg-[#FFBD59]"
                    : "bg-[#FFF5D9] text-[#5F5D5D]"
                }`}
              >
                Save and Continue
              </button>
              <p className="absolute text-[21px] font-extrabold  mt-[17px] ml-[144px] text-[#5F5D5D]">
                <MdKeyboardArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}
export default BeneficialOwners;
