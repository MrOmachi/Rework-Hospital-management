import React, { useState } from "react";
import { DiCssTricks } from "react-icons/di";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SaveAndContinue } from "../../../buttons/Buttons";

function Form() {
  const navigate = useNavigate();
  const [phone_number, setPhoneValue] = useState<any>();
  const [error, setError] = useState(false);

  const [customerData, setCustomerData] = useState({
    BusinessType: "",
    businessName: "",
    businessClassification: "",
    employerID: "",
    businessAddress: "",
    StreetAddress: "",
    SecondStreetAddress: "",
    City: "",
    StateOrTerritory: "",
    Zipcode: "",
    PhoneNumber: "",
    website: "",
  });

  const createKYC = {
    BusinessKyc: {
      BusinessName: customerData.businessName,
      BusinessRegistrationNumber: customerData.employerID,
      Classification: customerData.businessClassification,
      ContactDetails: {
        PhoneNumber: customerData.PhoneNumber,
        Email: "",
      },
      CountryOfIncorporation: customerData.businessAddress,
      NationalIdentifier: "1234",
      RegisteredAddress: {
        StreetAddress: customerData.StreetAddress,
        SecondStreetAddress: customerData.SecondStreetAddress,
        City: customerData.City,
        Country: customerData.businessAddress,
        StateOrTerritory: customerData.StateOrTerritory,
        Zipcode: customerData.Zipcode,
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
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      customerData.BusinessType === "" ||
      customerData.businessName === "" ||
      customerData.businessClassification === "" ||
      customerData.employerID === "" ||
      customerData.businessAddress === ""
    ) {
      setError(true);
      return "Field can not be empty.";
    }

    if (customerData.BusinessType === "Sole Proprietorship") {
      navigate("/startKyc2");
    } else {
      navigate("/nonSoleForm2");
    }
    // navigate("/startKyc2");

    localStorage.setItem("customerData", JSON.stringify(createKYC));
  };

  const clientInfo = localStorage.getItem("customerData, phone_number");
  if (clientInfo) {
    const customerData = JSON.parse(clientInfo);
    console.log(customerData);
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
            value={customerData.businessName}
            onChange={handleChange}
            className="text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Business name"
          />
          {error && customerData.businessName === "" && (
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
            value={customerData.BusinessType}
            onChange={handleChange2}
            className="text-[12px]  mb-1 border w-full py-2 pl-2 outline-none rounded-[10px] font-medium bg-white "
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
          {error && customerData.BusinessType === "" && (
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
            value={customerData.businessClassification}
            onChange={handleChange2}
            className="text-[12px]  mb-1 border w-full py-2 pl-2 outline-none rounded-[10px] font-medium bg-white "
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
          {error && customerData.businessClassification === "" && (
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
            value={customerData.employerID}
            onChange={handleChange}
            className="text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Enter employer Id number"
          />
          {error && customerData.employerID === "" && (
            <p className="text-[11px] text-[#D31D1D] pb-1">
              {" "}
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
            value={customerData.businessAddress}
            onChange={handleChange2}
            className="text-[12px]  mb-1 border w-full py-2 pl-2 outline-none rounded-[10px] font-medium bg-white"
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
          {error && customerData.businessAddress === "" && (
            <p className="text-[11px] text-[#D31D1D] pb-4">
              This field is required.
            </p>
          )}

          {/* Field 6 */}
          <input
            type="text"
            name="StreetAddress"
            id=""
            value={customerData.StreetAddress}
            onChange={handleChange}
            className="text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Address Line 1"
          />

          {/* Field 7 */}
          <input
            type="text"
            name="SecondStreetAddress"
            id=""
            value={customerData.SecondStreetAddress}
            onChange={handleChange}
            className="text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Address Line 2"
          />
          {/* Field 8 */}
          <input
            type="text"
            name="City"
            id=""
            value={customerData.City}
            onChange={handleChange}
            className="text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="City"
          />

          {/* Field 9 */}
          <select
            name="StateOrTerritory"
            id=""
            value={customerData.StateOrTerritory}
            onChange={handleChange2}
            className="text-[12px]  mb-1 border w-full py-2 pl-2 outline-none rounded-[10px] font-medium bg-white "
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

          {/* Field 10 */}
          <input
            type="text"
            name="Zipcode"
            id=""
            value={customerData.Zipcode}
            onChange={handleChange}
            className="text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Zip"
          />

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
                value={customerData.PhoneNumber}
                onChange={setPhoneValue}
                defaultCountry="US"
              />
            </div>
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
            value={customerData.website}
            onChange={handleChange}
            className="text-[13px] border mb-1 w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="www.company.com"
          />
          <div>
            <SaveAndContinue />
          </div>
        </div>

        <div />
      </form>
      <div />
    </div>
  );
}
export default Form;
