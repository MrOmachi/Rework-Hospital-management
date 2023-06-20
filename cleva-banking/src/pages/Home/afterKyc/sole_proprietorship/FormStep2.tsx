import React, { useState } from "react";
import { DiCssTricks } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { Previous } from "../../../buttons/Buttons";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setkycInfo } from "../../../../features/KycSlice/kycSlice";
import { arrowRight, checkSymbol, line, success } from "../../../../Image";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineMinus } from "react-icons/ai";

function FormStep2() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handlePrevious = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/startKyc");
  };

  const { kycInfo } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();

  const createKYC = {
    BusinessKyc: {
      BusinessName: kycInfo.businessName,
      BusinessRegistrationNumber: kycInfo.employerID,
      Classification: kycInfo.businessClassification,
      ContactDetails: {
        PhoneNumber: kycInfo.PhoneNumber,
      },
      CountryOfIncorporation: kycInfo.businessAddress,
      NationalIdentifier: "1234",
      RegisteredAddress: {
        StreetAddress: kycInfo.StreetAddress,
        SecondStreetAddress: kycInfo.SecondStreetAddress,
        City: kycInfo.City,
        Country: kycInfo.businessAddress,
        StateOrTerritory: kycInfo.StateOrTerritory,
        Zipcode: kycInfo.Zipcode,
      },
      Type: kycInfo.BusinessType,
      BeneficialOwners: [
        {
          DateOfBirth: kycInfo.DoB,
          FirstName: kycInfo.firstName,
          LastName: kycInfo.lastName,
        },
      ],
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setkycInfo({ ...kycInfo, [event.target.name]: event.target.value })
    );
  };

  const isButtonDisabled =
    kycInfo.firstName === "" ||
    kycInfo.lastName === "" ||
    kycInfo.email === "" ||
    kycInfo.DoB === "";

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      kycInfo.firstName &&
      kycInfo.lastName &&
      kycInfo.email &&
      kycInfo.DoB === ""
    ) {
      setError(true);
      return "Field can not be empty.";
    } else {
      localStorage.setItem("customerData", JSON.stringify(createKYC));
      navigate("/startKyc3");
    }
  };

  return (
    <div className="flex justify-evenly w-full mt-11">
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
          <div className="flex text-[11px] font-medium   ml-4">
            Beneficiary Owners
            <hr className="ml-2 text-[#F0F0F0] w-[95px] mt-[10px] border-t " />
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
                value={kycInfo.firstName}
                onChange={handleChange}
                className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                  kycInfo.firstName === "" ? "bg-white" : "bg-[#FFF5D9]"
                }`}
                placeholder="First Name"
              />

              {/* Form 2 */}
              <input
                type="text"
                name="lastName"
                id=""
                value={kycInfo.lastName}
                onChange={handleChange}
                className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                  kycInfo.lastName === "" ? "bg-white" : "bg-[#FFF5D9]"
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
                value={kycInfo.email}
                onChange={handleChange}
                className={`text-[13px] border mb-6 w-full py-2 pl-2 outline-none rounded-[10px] ${
                  kycInfo.email === "" ? "bg-white" : "bg-[#FFF5D9]"
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
                value={kycInfo.DoB}
                onChange={handleChange}
                className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                  kycInfo.DoB === "" ? "bg-white" : "bg-[#FFF5D9]"
                }`}
                placeholder="MM-DD-YYYY"
              />
              {/* BUTTONS */}
              <div className="flex justify-between mt-2">
                <div onClick={(e) => handlePrevious(e)}>
                  <Previous />
                </div>
                <div className="flex float-right relative">
                  <button
                    disabled={isButtonDisabled}
                    className={` text-[13px] font-bold  px-6 rounded-lg  mt-2 ${
                      kycInfo.firstName &&
                      kycInfo.lastName &&
                      kycInfo.email &&
                      kycInfo.DoB !== ""
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
    </div>
  );
}

export default FormStep2;
