import React, { useEffect, useState } from "react";
import { DiCssTricks } from "react-icons/di";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SaveAndContinue } from "../../../buttons/Buttons";
import Business from "../../profile/Business";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setkycInfo } from "../../../../features/KycSlice/kycSlice";
import { arrowRight } from "../../../../Image";

function Form() {
  const navigate = useNavigate();
  const [phone_number, setPhoneValue] = useState<any>();
  const [error, setError] = useState(false);
  const [formComplete, setIsFormComplete] = useState(false);

  const { kycInfo } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log(Object.values(kycInfo).map((x) => x != ""));
  }, [kycInfo]);

  const createKYC = {
    BusinessKyc: {
      BusinessName: kycInfo.businessName,
      BusinessRegistrationNumber: kycInfo.employerID,
      Classification: kycInfo.businessClassification,
      ContactDetails: {
        PhoneNumber: kycInfo.PhoneNumber,
        Email: "",
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
        LGA: "Kosofe",
      },
      Type: "soleproprietorship",
      DateOfIncorporation: "5921-31-22",
      BeneficialOwners: [
        {
          DateOfBirth: "3890-47-98",
          FirstName: "Abraham",
          LastName: "Adetugboboh",
          NationalIdentifier: "1111",
          IdentificationDocument: {
            DocumentNumber: "111",
            DocumentType: "DRIVERS_LICENSE",
            IssuingCountry: "Nigeria",
            IssueDate: "5477-55-60",
            ExpirationDate: "6686-34-25",
          },
          Address: {
            StreetAddress: "11 adesoye street",
            SecondStreetAddress: "22 olatunde sule",
            City: "Lagos",
            Country: "Nigeria",
            StateOrTerritory: "Lagos",
            Zipcode: "100211",
            LGA: "Kosofe",
          },
          PercentageOwnership: 20.0,
          Document: {
            DocumentType: "DRIVERS_LICENSE",
            data: "SGVsbG8sIFdvcmxkIQ==",
            contentType: "image/jpg",
            filename: "mclovin1.jpg",
            size: 20,
          },
        },
      ],
      BusinessDocuments: [
        {
          DocumentType: "DRIVERS_LICENSE",
          data: "SGVsbG8sIFdvcmxkIQ==",
          contentType: "image/jpg",
          filename: "mclovin3.jpg",
          size: 20,
        },
        {
          DocumentType: "DRIVERS_LICENSE",
          data: "SGVsbG8sIFdvcmxkIQ==",
          contentType: "image/jpg",
          filename: "mclovin4.jpg",
          size: 20,
        },
      ],
    },
  };

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      kycInfo.BusinessType === "" ||
      kycInfo.businessName === "" ||
      kycInfo.businessClassification === "" ||
      kycInfo.employerID === "" ||
      kycInfo.businessAddress === "" ||
      kycInfo.StreetAddress === "" ||
      kycInfo.SecondStreetAddress === "" ||
      kycInfo.City === "" ||
      kycInfo.StateOrTerritory === "" ||
      kycInfo.Zipcode === "" ||
      // kycInfo.PhoneNumber === "" ||
      kycInfo.website === ""
    ) {
      setError(true);
      return "Field can not be empty.";
    }

    if (kycInfo.BusinessType === "Sole Proprietorship") {
      navigate("/startKyc2");
    } else {
      navigate("/nonSoleForm2");
    }
    // navigate("/startKyc2");

    localStorage.setItem("kycInfo", JSON.stringify(createKYC));
  };

  const clientInfo = localStorage.getItem("kycInfo, phone_number");
  if (clientInfo) {
    const kycInfo = JSON.parse(clientInfo);
    console.log(kycInfo);
  }

  return (
    <div className="flex my-20">
      <div className="w-[25%] md:w-[25%] sm:w-[35%]">
        <div className="flex ">
          <div className="items-center">
            <div className="">
              <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[7px] pt-[3px] ">
                1
              </p>
            </div>
            <div className="h-[10px] m-auto border w-[1px]"></div>
          </div>
          <b className="text-[10px] ml-2 font-roboto">Business Information</b>
        </div>
        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px]">
              2
            </p>
            <div className="h-[10px] m-auto border w-[1px]"></div>
          </div>
          <div className="text-[10px] ml-2">Beneficiary Owners</div>
        </div>

        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px]">
              3
            </p>
          </div>
          <div className="text-[10px] ml-2">Review & Submit</div>
        </div>
      </div>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-[75%] md:w-[75%] sm:w-65% sm:ml-12 h-screen pb-[55em]"
      >
        <div className="w-[63%]">
          <h3 className="font-semibold text-sm pb-1 ">
            Tell us about yourself
          </h3>

          {/* Field 1 */}
          <div className="flex mt-1 md:mt-2">
            <p className="text-[11px] md:text-[12px] pb-1 text-black font-normal">
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
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.businessName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Business name"
          />
          {error && kycInfo.businessName === "" && (
            <p className="text-[11px] text-[#D31D1D]">
              This field is required.
            </p>
          )}

          {/* Field 2 */}
          <div className="flex mt-2 md:mt-3">
            <p className="text-[11px] md:text-[12px] pb-1 text-black font-normal ">
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
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.BusinessType === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
          >
            <option
              value="Business type"
              className=" leading-3 text-slate-900 font-light hidden"
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
          {error && kycInfo.BusinessType === "" && (
            <p className="text-[11px] text-[#D31D1D]">
              This field is required.
            </p>
          )}

          {/* Field 3 */}
          <div className="flex mt-2 md:mt-3">
            <p className="text-[11px] md:text-[12px] pb-1 text-black font-normal ">
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
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.businessClassification === ""
                ? "bg-white"
                : "bg-[#FFF5D9]"
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
          {error && kycInfo.businessClassification === "" && (
            <p className="text-[11px] text-[#D31D1D]">
              This field is required.
            </p>
          )}

          {/* Field 4 */}
          <div className="flex mt-2 md:mt-3">
            <p className="text-[11px] md:text-[12px] pb-1 text-black font-normal ">
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
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.employerID === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Enter employer Id number"
          />
          {error && kycInfo.employerID === "" && (
            <p className="text-[11px] text-[#D31D1D] pb-1">
              field is required.
            </p>
          )}

          {/* Field 5 */}
          <div className="flex mt-2 md:mt-3">
            <p className="text-[11px] md:text-[12px] pb-1 text-black font-normal ">
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
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.businessAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
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
          {error && kycInfo.businessAddress === "" && (
            <p className="text-[11px] text-[#D31D1D] pb-4">
              This field is required.
            </p>
          )}

          {/* Field 6 */}
          <input
            type="text"
            name="StreetAddress"
            id=""
            value={kycInfo.StreetAddress}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.StreetAddress === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Address Line 1"
          />
          {error && kycInfo.StreetAddress === "" && (
            <p className="text-[11px] text-[#D31D1D] pb-2">
              This field is required.
            </p>
          )}

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
          {error && kycInfo.City === "" && (
            <p className="text-[11px] text-[#D31D1D]  pt-2"></p>
          )}
          <input
            type="text"
            name="City"
            id=""
            value={kycInfo.City}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.City === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="City"
          />
          {error && kycInfo.City === "" && (
            <p className="text-[11px] text-[#D31D1D]  pb-3">
              This field is required.
            </p>
          )}

          {/* Field 9 */}
          <select
            name="StateOrTerritory"
            id=""
            value={kycInfo.StateOrTerritory}
            onChange={handleChange2}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.StateOrTerritory === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
          >
            <option value="state" className=" ">
              Select state
            </option>
            <option value="Lagos" className=" ">
              Lagos
            </option>
            <option value="Kogi" className=" ">
              Kogi
            </option>
            <option value="Abuja" className=" ">
              Abuja
            </option>
            <option value="Enugu" className=" ">
              Enugu
            </option>
          </select>
          {error && kycInfo.StateOrTerritory === "" && (
            <p className="text-[11px] text-[#D31D1D] pb-2">
              This field is required.
            </p>
          )}

          {/* Field 10 */}
          <input
            type="text"
            name="Zipcode"
            id=""
            value={kycInfo.Zipcode}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.Zipcode === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Zip"
          />
          {error && kycInfo.Zipcode === "" && (
            <p className="text-[11px] text-[#D31D1D] pb-2">
              This field is required.
            </p>
          )}

          {/* Field 11 */}
          <div className="">
            <div className="mt-4 ">
              <p className="text-[11px] pb-1 md:text-[12px] text-black font-normal ">
                Phone Number
              </p>
            </div>
            {/* Phone code */}
            <div className="relative rounded-md shadow-sm">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                parsePhoneNumber={phone_number}
                placeholder="Enter phone number"
                name="PhoneNumber"
                value={kycInfo.PhoneNumber}
                onChange={setPhoneValue}
                defaultCountry="US"
                className={`text-[13px]  mb-2 w-full py-2 outline-none rounded-[10px] ${
                  kycInfo.PhoneNumber === "" ? "bg-white" : "bg-[#FFF5D9]"
                }`}
              />
            </div>
            {/* {error && kycInfo.PhoneNumber === "" && (
                <p className="text-[11px] text-[#D31D1D] py-2">
                  This field is required.
                </p>
              )} */}
          </div>

          {/* Field 12 */}
          <div className=" mt-3">
            <p className="text-[11px] pb-1 md:text-[12px] text-black font-normal ">
              Website
            </p>
          </div>
          <input
            type="text"
            name="website"
            id=""
            value={kycInfo.website}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              kycInfo.website === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="www.company.com"
          />
          {error && kycInfo.website === "" && (
            <p className="text-[11px] text-[#D31D1D]">
              This field is required.
            </p>
          )}
          <div className="flex float-right">
            <button
              // disabled={!isFormComplete}
              className={`text-[13px] bg-[#FFF5D9] py-3 px-6 rounded-lg text-[#747A80] mt-2 mb-[100px]  font-bold `}
            >
              Save and Continue
            </button>
            <img className="-ml-8 -mt-[93px] p-3" src={arrowRight} alt="" />
          </div>
        </div>

        <div />
      </form>
      <div />
    </div>
  );
}
export default Form;
