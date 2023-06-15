import React, { useState } from "react";
import { DiCssTricks } from "react-icons/di";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {  setkycInfo } from "../../../redux/Kyc/kycSlice";
import { MdKeyboardArrowRight } from "react-icons/md";

function KycDetails() {
  const navigate = useNavigate();
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const [businessKyc, setBusinessKyc] = useState(BusinessKyc);
  const dispatch = useAppDispatch();
  const isButtonDisabled =
    BusinessKyc.Type === "" ||
    BusinessKyc.BusinessName === "" ||
    BusinessKyc.Classification === "" ||
    BusinessKyc.BusinessRegistrationNumber === "" ||
    BusinessKyc.RegisteredAddress?.StreetAddress === "" ||
    BusinessKyc.ContactDetails.Email === ""

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setkycInfo({
        ...BusinessKyc,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setkycInfo({
        ...BusinessKyc,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = () => {
    if (BusinessKyc.Type === "Sole Proprietorship") {
      navigate("/startKyc2");
    } else {
      navigate("/nonSoleForm2");
    }
    localStorage.setItem("BusinessKyc", JSON.stringify(businessKyc));
  };

  const proceed = () => {
    handleSubmit();
  };

  const clientInfo = localStorage.getItem("BusinessKyc");
  if (clientInfo) {
    setBusinessKyc(JSON.parse(clientInfo));
  }

  return (
      <form className="w-[75%] md:w-[75%] sm:w-65% sm:ml-12 h-screen pb-[55em]">
        {" "}
        <div className="w-[63%]">
          <h3 className="font-semibold text-[18px] -mt-1 ">
            Tell us about yourself
          </h3>

          {/* Field 1 */}
          <div className="flex mt-5">
            <p className="text-[13px] pb-1 text-black font-normal">
              Registered business Name
            </p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="text"
            name="businessName"
            id=""
            value={businessKyc.BusinessName}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.BusinessName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Business name"
          />

          {/* Field 2 */}
          <div className="flex mt-2 md:mt-3">
            <p className="text-[13px] pb-1 text-black font-normal">
              Business type
            </p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <select
            name="BusinessType"
            id="BusinessType"
            value={businessKyc.Type}
            onChange={handleChange2}
            className={`text-[#747A80] text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.Type === ""
                ? "bg-white"
                : "bg-[#FFF5D9] text-black"
            }`}
          >
            <option
              value="Business type"
              className=" leading-3 font-light hidden"
            >
              Select business type
            </option>
            <option value="Sole Proprietorship" className=" leading-3">
              Sole Proprietorship
            </option>
            <option value="C Corporation" className=" leading-3">
              C Corporation
            </option>
            <option value="S Corporation" className=" leading-3">
              S Corporation
            </option>
            <option value="Partnership" className="leading-3 ">
              Partnership
            </option>

            <option value="Non profit" className="leading-3 ">
              Non-profit
            </option>
            <option value="Other" className="leading-3 ">
              Other
            </option>
          </select>

          {/* Field 3 */}
          <div className="flex mt-1 md:mt-3">
            <p className="text-[13px] md:text-[12px] pb-1 text-black font-normal ">
              Business Classification
            </p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <select
            name="businessClassification"
            id=""
            value={businessKyc.Classification}
            onChange={handleChange2}
            className={`text-[13px] text-[#747A80] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.Classification === ""
                ? "bg-white"
                : "bg-[#FFF5D9] text-black"
            }`}
          >
            <option value="leading-3 text-slate-900 font-light hidden ">
              Select classification type
            </option>
            <option value="Software" className=" leading-3 ">
              Software
            </option>
            <option value="Fintech" className=" leading-3 ">
              Fintech
            </option>
            <option value="Non-profit" className=" leading-3 ">
              Non-profit
            </option>
            <option value="Other" className=" leading-3 ">
              Other
            </option>
          </select>

          {/* Field 4 */}
          <div className="flex mt-1 md:mt-3">
            <p className="text-[13px] md:text-[12px] pb-1 text-black font-normal ">
              Employer Identification Number (EIN)
            </p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="text"
            name="employerID"
            id=""
            value={businessKyc.BusinessRegistrationNumber}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.BusinessRegistrationNumber === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Enter employer Id number"
          />

          {/* Field 5 */}
          <div className="flex mt-2">
            <p className="text-[13px] md:text-[12px] pb-1 text-black font-normal ">
              Registered Business Address
            </p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <select
            name="RegisteredAddress"
            id=""
            value={businessKyc.RegisteredAddress?.Country}
            onChange={handleChange2}
            className={`text-[13px] text-[#747A80] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc.RegisteredAddress?.Country ===""
                ? "bg-white"
                : "bg-[#FFF5D9] text-black"
            }`}
          >
            <option value="Business Address" className=" ">
              Select country
            </option>
            <option value="USA" className=" ">
              United State
            </option>
            <option value="Nigeria" className=" ">
              Nigeria
            </option>
            <option value="UK" className=" ">
              UK
            </option>
          </select>

          {/* Field 6 */}
          <input
            type="text"
            name="StreetAddress"
            id=""
            value={businessKyc?.RegisteredAddress?.StreetAddress}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc?.RegisteredAddress?.StreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 1"
          />
          {/* Field 7 */}
          <input
            type="text"
            name="SecondStreetAddress"
            id=""
            value={businessKyc?.RegisteredAddress?.SecondStreetAddress}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc?.RegisteredAddress?.SecondStreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 2"
          />
          {/* Field 8 */}
          <input
            type="text"
            name="City"
            id=""
            value={businessKyc?.RegisteredAddress?.City}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc?.RegisteredAddress?.City === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="City"
          />
          {/* Field 9 */}
          <input
            type="text"
            name="StateOrTerritory"
            id=""
            value={BusinessKyc?.RegisteredAddress?.StateOrTerritory}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc?.RegisteredAddress?.StateOrTerritory === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="State"
          />
          {/* Field 10 */}
          <input
            type="text"
            name="Zipcode"
            id=""
            value={businessKyc?.RegisteredAddress?.Zipcode}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              businessKyc?.RegisteredAddress?.Zipcode === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Zip"
          />

          {/* Field 11 */}
          <div className="">
            <div className="mt-3 ">
              <p className="text-[13px] md:text-[12px] text-black font-normal ">
                Phone Number
              </p>
            </div>
            {/* Phone code */}
            <div className="relative">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                placeholder="Enter phone number"
                name="PhoneNumber"
                value={BusinessKyc.ContactDetails.PhoneNumber}
                onChange={()=> handleChange}
                defaultCountry="US"
                className={`text-[13px] mb-1 w-full py-2 outline-none rounded-[10px] ${
                  BusinessKyc.ContactDetails.PhoneNumber?.trim() === ""
                    ? "bg-white"
                    : "bg-[#FFF5D9]"
                }`}
              />
            </div>
          </div>

          {/* Field 12 */}
          <div className=" mt-3">
            <p className="text-[13px] pb-1 md:text-[12px] text-black font-normal ">
              Website
            </p>
          </div>
          <input
            type="url"
            name="website"
            id=""
            value={BusinessKyc.Website}
            onChange={handleChange}
            className={`text-[13px] border w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.Website === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="www.company.com"
          />

          <div className="relative flex float-right">
            <button
              disabled={isButtonDisabled}
              onClick={() => proceed()}
              className={`text-[14px]  py-2 px-6  rounded-lg mt-7 mb-[100px]  font-bold ${
                businessKyc.Type &&
                businessKyc.BusinessName &&
                businessKyc.Classification &&
                businessKyc.BusinessRegistrationNumber &&
                businessKyc?.RegisteredAddress?.StreetAddress &&
                businessKyc?.RegisteredAddress?.City &&
                businessKyc?.RegisteredAddress?.StateOrTerritory &&
                businessKyc.ContactDetails.PhoneNumber &&
                businessKyc.Website !== ""
                  ? "bg-[#FFBD59]"
                  : "bg-[#FFF5D9] text-[#5F5D5D]"
              }`}
            >
              Save and Continue
            </button>
            <p className="absolute text-[20px] font-extrabold mt-[38px] ml-[152px] text-[#5F5D5D]">
              <MdKeyboardArrowRight />
            </p>
          </div>
        </div>
        <div />
      </form>
  );
}
export default KycDetails;
