import { DiCssTricks } from "react-icons/di";
import PhoneInput from "react-phone-number-input";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {  setkycInfo } from "../../../features/Kyc/kycSlice";
import { SaveAndContinue } from "../../../components/Buttons/Buttons";
import { useEffect } from "react";

interface ISteps{
  currentStep?: number | 0;
  nextStep?: any;
}

function KycDetails(props:ISteps) {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();
  const isButtonDisabled = 
   BusinessKyc.Type === "" 
  || BusinessKyc.BusinessName === ""
  || BusinessKyc.BusinessRegistrationNumber === ""
  || BusinessKyc.Classification === "";

  const handleChange = (event:any) => {
    dispatch(
      setkycInfo({
          ...BusinessKyc,
          [event.target.name]: event.target.value
      })
    );
  };

  const handleContactDetailsChange = (event:any) => {
    const ContactDetails:any = {
      ...BusinessKyc?.ContactDetails,
      [event.target.name]: event.target.value,
    };
  
    dispatch(
      setkycInfo({
        ...BusinessKyc,
        ContactDetails
      })
    );
  };

  const handleAddressChange = (event:any) => {
    const RegisteredAddress:any = {
      ...BusinessKyc?.RegisteredAddress,
      [event.target.name]: event.target.value,
    };
  
    dispatch(
      setkycInfo({
        ...BusinessKyc,
        RegisteredAddress,
      })
    );
  };

  const proceed = () => {
   if(props.currentStep){
      props.nextStep(props?.currentStep +1);
    }
  };

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
            name="BusinessName"
            id=""
            value={BusinessKyc.BusinessName}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.BusinessName === "" ? "bg-white" : "bg-[#FFF5D9]"
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
            name="Type"
            id=""
            value={BusinessKyc.Type}
            onChange={handleChange}
            className={`text-[#747A80] text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.Type === ""
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
            name="Classification"
            id=""
            value={BusinessKyc.Classification}
            onChange={handleChange}
            className={`text-[13px] text-[#747A80] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.Classification === ""
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
            name="BusinessRegistrationNumber"
            id=""
            value={BusinessKyc.BusinessRegistrationNumber}
            onChange={handleChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.BusinessRegistrationNumber === "" ? "bg-white" : "bg-[#FFF5D9]"
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
            name="Country"
            id=""
            value={BusinessKyc.RegisteredAddress?.Country}
            onChange={handleAddressChange}
            className={`text-[13px] text-[#747A80] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.RegisteredAddress?.Country ===""
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
            value={BusinessKyc?.RegisteredAddress?.StreetAddress}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc?.RegisteredAddress?.StreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 1"
          />
          {/* Field 7 */}
          <input
            type="text"
            name="SecondStreetAddress"
            id=""
            value={BusinessKyc?.RegisteredAddress?.SecondStreetAddress}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc?.RegisteredAddress?.SecondStreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 2"
          />
          {/* Field 8 */}
          <input
            type="text"
            name="City"
            id=""
            value={BusinessKyc?.RegisteredAddress?.City}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc?.RegisteredAddress?.City === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="City"
          />
          {/* Field 9 */}
          <input
            type="text"
            name="StateOrTerritory"
            id=""
            value={BusinessKyc?.RegisteredAddress?.StateOrTerritory}
            onChange={handleAddressChange}
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
            value={BusinessKyc?.RegisteredAddress?.Zipcode}
            onChange={handleAddressChange}
            className={`text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc?.RegisteredAddress?.Zipcode === "" ? "bg-white" : "bg-[#FFF5D9]"
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
                type="tel"
                international
                countryCallingCodeEditable={false}
                placeholder="Enter phone number"
                name="PhoneNumber"
                value={BusinessKyc?.ContactDetails?.PhoneNumber}
                onChange={()=> handleContactDetailsChange}
                defaultCountry="US"
                className={`text-[13px] mb-1 w-full py-2 outline-none rounded-[10px] ${
                  BusinessKyc?.ContactDetails?.PhoneNumber.trim() === ""
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
            name="Website"
            id=""
            value={BusinessKyc.Website}
            onChange={handleChange}
            className={`text-[13px] border w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.Website === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="www.company.com"
          />

          <div className="relative flex float-right">
          <SaveAndContinue action={proceed} isButtonDisabled={isButtonDisabled}/>
          </div>
        </div>
        <div />
      </form>
  );
}
export default KycDetails;
