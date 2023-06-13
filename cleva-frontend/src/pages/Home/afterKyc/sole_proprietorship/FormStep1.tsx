import React, { useEffect, useState } from "react";
import { DiCssTricks } from "react-icons/di";
import PhoneInput from "react-phone-number-input";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { kycInfo, setkycInfo } from "../../../../features/KycSlice/kycSlice";
import { arr_Right } from "../../../../Image";
import { MdKeyboardArrowRight } from "react-icons/md";

function Form() {
  const navigate = useNavigate();
  // const [error, setError] = useState({
  //   BusinessType: "",
  //   businessName: "",
  //   businessClassification: "",
  //   employerID: "",
  //   businessAddress: "",
  //   StreetAddress: "",
  //   SecondStreetAddress: "",
  //   City: "",
  //   StateOrTerritory: "",
  //   Zipcode: "",
  //   PhoneNumber: "",
  //   website: "",
  // });
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
    },
  };
  const isButtonDisabled =
    kycInfo.BusinessType === "" ||
    kycInfo.businessName === "" ||
    kycInfo.businessClassification === "" ||
    kycInfo.employerID === "" ||
    kycInfo.businessAddress === "" ||
    kycInfo.StreetAddress === "" ||
    kycInfo.City === "" ||
    kycInfo.StateOrTerritory === "" ||
    kycInfo.Zipcode === "" ||
    kycInfo.PhoneNumber === "" ||
    kycInfo.website === "";

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setkycInfo({
        ...kycInfo,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setkycInfo({
        ...kycInfo,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handlePhoneChange = (e: string) => {
    dispatch(setkycInfo({ ...kycInfo, PhoneNumber: e }));
  };

  const handleSubmit = () => {
    if (kycInfo.BusinessType === "Sole Proprietorship") {
      navigate("/startKyc2");
    } else {
      navigate("/nonSoleForm2");
    }
    localStorage.setItem("kycInfo", JSON.stringify(createKYC));
  };

  const proceed = () => {
    handleSubmit();
  };

  const clientInfo = localStorage.getItem("kycInfo, phone_number");
  if (clientInfo) {
    const kycInfo = JSON.parse(clientInfo);
    console.log(kycInfo);
  }

  return (
    <div className="flex my-20">
      <div className="w-[25%] md:w-[25%] sm:w-[35%]">
        <div className="flex">
          <div className="items-center">
            <div className="">
              <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] flex items-center  text-[8px] justify-center ">
                1
              </p>
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] font-medium ml-3 font-roboto">
            Business Information
          </p>
        </div>

        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center text-[#747A80] text-[8px] justify-center flex">
              2
            </p>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <div className="text-[11px] text-[#747A80] font-normal ml-3">
            Beneficiary Owners
          </div>
        </div>

        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center justify-center text-[#747A80] flex text-[8px]">
              3
            </p>
          </div>
          <div className="text-[#747A80] text-[11px] ml-3">Review & Submit</div>
        </div>
      </div>

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
            value={kycInfo.businessName}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.businessName === "" ? "bg-white" : "bg-[#FFF5D9]"
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
            value={kycInfo.BusinessType}
            onChange={handleChange2}
            className={`text-[#747A80] text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.BusinessType === ""
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
            value={kycInfo.businessClassification}
            onChange={handleChange2}
            className={`text-[13px] text-[#747A80] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.businessClassification === ""
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
            value={kycInfo.employerID}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.employerID === "" ? "bg-white" : "bg-[#FFF5D9]"
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
            name="businessAddress"
            id=""
            value={kycInfo.businessAddress}
            onChange={handleChange2}
            className={`text-[13px] text-[#747A80] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.businessAddress === ""
                ? "bg-white"
                : "bg-[#FFF5D9] text-black"
            }`}
          >
            <option value="Business Address" className=" ">
              Select business address
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
            value={kycInfo.StreetAddress}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.StreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 1"
          />
          {/* Field 7 */}
          <input
            type="text"
            name="SecondStreetAddress"
            id=""
            value={kycInfo.SecondStreetAddress}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.SecondStreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 2"
          />
          {/* Field 8 */}
          <input
            type="text"
            name="City"
            id=""
            value={kycInfo.City}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.City === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="City"
          />
          {/* Field 9 */}
          <input
            type="text"
            name="StateOrTerritory"
            id=""
            value={kycInfo.StateOrTerritory}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.StateOrTerritory === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="State"
          />
          {/* Field 10 */}
          <input
            type="text"
            name="Zipcode"
            id=""
            value={kycInfo.Zipcode}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.Zipcode === "" ? "bg-white" : "bg-[#FFF5D9]"
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
                // parsePhoneNumber={phone_number}
                placeholder="Enter phone number"
                name="PhoneNumber"
                value={kycInfo.PhoneNumber}
                onChange={(e) => handlePhoneChange(e as string)}
                defaultCountry="US"
                className={`text-[13px] mb-1 w-full py-2 outline-none rounded-[10px] ${
                  kycInfo.PhoneNumber?.trim() === ""
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
            value={kycInfo.website}
            onChange={handleChange}
            className={`text-[13px] border w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.website === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="www.company.com"
          />

          <div className="relative flex float-right">
            <button
              disabled={isButtonDisabled}
              onClick={() => proceed()}
              className={`text-[14px]  py-2 px-6  rounded-lg mt-7 mb-[100px]  font-bold ${
                kycInfo.BusinessType &&
                kycInfo.businessName &&
                kycInfo.businessClassification &&
                kycInfo.employerID &&
                kycInfo.businessAddress &&
                kycInfo.StreetAddress &&
                kycInfo.City &&
                kycInfo.StateOrTerritory &&
                kycInfo.Zipcode &&
                kycInfo.PhoneNumber &&
                kycInfo.website !== ""
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
      <div />
    </div>
  );
}
export default Form;
