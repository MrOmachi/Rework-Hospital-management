import React, { useState } from "react";
import { DiCssTricks } from "react-icons/di";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SaveAndContinue2 } from "../../../buttons/Buttons";

function NonSoleForm1() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  // const [valid, setValid] = useState("")
  const [phone_number, setPhoneValue] = useState<any>();
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
    Trusts: "",
  });

  const allDetails = {
    BusinessName: "hello3",
    BusinessRegistrationNumber: "hello3",
    ContactDetails: {
      Email: "hello3",
      PhoneNumber: "hello3",
    },
    CountryOfIncorporation: "hello3",
    DateOfIncorporation: "hello3",
    Industry: "hello3",
    NationalIdentifier: "hello3",
    RegisteredAddress: {
      StreetAddress: "hello3",
      SecondStreetAddress: "hello3",
      City: "hello3",
      Country: "hello3",
      StateOrTerritory: "hello3",
      Zipcode: "hello3",
      LGA: "hello3",
    },
    BeneficialOwners: [
      {
        Address: {
          StreetAddress: "hello3",
          SecondStreetAddress: "hello3",
          City: "hello3",
          Country: "hello3",
          StateOrTerritory: "hello3",
          Zipcode: "hello3",
          LGA: "hello3",
        },
        DateOfBirth: "hello3",
        FirstName: "hello3",
        IdentificationDocument: {
          DocumentNumber: "hello3",
          DocumentType: "hello3",
          IssuingCountry: "hello3",
          IssueDate: "hello3",
          ExpirationDate: "hello3",
        },
        LastName: "hello3",
        NationalIdentifier: "hello3",
        PercentageOwnership: "hello3",
      },
    ],
    AuthorizedSignatories: [
      {
        Address: {
          StreetAddress: "hello3",
          SecondStreetAddress: "hello3",
          City: "hello3",
          Country: "hello3",
          StateOrTerritory: "hello3",
          Zipcode: "hello3",
          LGA: "hello3",
        },
        FirstName: "hello3",
        IdentificationDocument: {
          DocumentNumber: "hello3",
          DocumentType: "hello3",
          IssuingCountry: "hello3",
          IssueDate: "hello3",
          ExpirationDate: "hello3",
        },
        LastName: "hello3",
        NationalIdentifier: "hello3",
        Role: "hello3",
      },
    ],
    ImageUploadInput: {
      data: "hello3",
      contentType: "hello3",
      filename: "hello3",
      size: 0,
    },
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value,
    });
  };
  const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    setCustomerData({
      ...customerData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log(allDetails);
    const dataArray = [customerData];
    axios
      .post(
        "https://cjmesvc3ag.execute-api.eu-west-1.amazonaws.com/qa/api/v1/kyc",
        allDetails
      )
      .then((response) => {
        console.log("Response from Postman:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data to Postman:", error);
      });

    navigate("/nonSoleForm2");

    localStorage.setItem("customerData", JSON.stringify(customerData));
    event.preventDefault();
    console.log(customerData);
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
          <div className="flex my-1 md:mt-2">
            <p className="text-[11px] md:text-[12px] text-black font-normal">
              Registered Business Name
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
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Tolus Enterprise"
          />
          {
            error && customerData.businessName ==="" && (<p>This field is required</p>)
          }

          {/* Field 2 */}
          <div className="flex mt-2 md:mt-5 mb-2">
            <p className="text-[11px] md:text-[12px] text-black font-normal ">
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
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] bg-white"
          >
            <option value="Sole Proprietorship" className="text-xs pb-2 ">
              Sole Proprietorship
            </option>
            <option value="C Corporation" className="text-xs pb-2 ">
              C Corporation
            </option>
            <option value="S Corporation" className="text-xs pb-2 ">
              S Corporation
            </option>
            <option value="Partnership" className="text-xs pb-2 ">
            Partnership
            </option>
            <option value="Non-profit" className="text-xs pb-2 ">
            Non-profit
            </option>
            <option value="Others" className="text-xs pb-2 ">
            Others
            </option>
          </select>
          {
            error && customerData.BusinessType ==="" && (<p>This field is required</p>)
          }

          {/* Field 3 */}
          <div className="flex mt-2 md:mt-5 mb-2">
            <p className="text-[11px] md:text-[12px] text-black font-normal ">
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
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] bg-white "
          >
            <option value="Select Classification" className="text-xs leading-3 ">
              Select Classification
            </option>
            <option value="Software" className="text-xs pb-2 ">
            Software
            </option>
            <option value="Fintech" className="text-xs pb-2 ">
            Fintech
            </option>
            <option value="Other" className="text-xs pb-2 ">
            Other
            </option>
          </select>
          {
            error && customerData.businessClassification ==="" && (<p>This field is required</p>)
          }

          {/* Field 4 */}
          <div className="flex mt-2 md:mt-5 mb-2">
            <p className="text-[11px] md:text-[12px] text-black font-normal ">
              Employer Identification Number (EIN)
            </p>
          </div>
          <input
            type="text"
            name="employerId"
            id=""
            value={customerData.employerID} 
            onChange={handleChange}
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Enter employer Id number"
          />
          {
            error && customerData.employerID ==="" && (<p>This field is required</p>)
          }

          {/* Field 5 */}
          <div className="flex mt-2 md:mt-5 mb-2">
            <p className="text-[11px] md:text-[12px] text-black font-normal ">
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
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] mb-2 bg-white"
          >
            <option value="Business Address" className="text-xs ">
              Business Address
            </option>
            <option value="United States" className="text-xs ">
              United States
            </option>
            <option value="Nigeria" className="text-xs ">
              Nigeria
            </option>
          </select>
          {
            error && customerData.businessAddress ==="" && (<p>This field is required</p>)
          }

          {/* Field 6 */}
          <input
            type="text"
            name="StreetAddress"
            id=""
            value={customerData.StreetAddress}
            onChange={handleChange}
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="5, fairtale"
          />

          {/* Field 7 */}
          <input
            type="text"
            name="SecondStreetAddress"
            id=""
            value={customerData.SecondStreetAddress}
            onChange={handleChange}
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px] my-2"
            placeholder="Address Line 2"
          />
          {/* Field 8 */}
          <input
            type="text"
            name="City"
            id=""
            value={customerData.City}
            onChange={handleChange}
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Porg"
          />

          {/* Field 9 */}
          <select
            name="StateOrTerritory"
            id=""
            value={customerData.StateOrTerritory}
            onChange={handleChange2}
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] my-2"
          >
            <option value="State" className="text-xs ">
              State
            </option>
            <option value="Lagos" className="text-xs ">
              Lagos
            </option>
            <option value="Abuja" className="text-xs ">
              Abuja
            </option>
            <option value="Enugu" className="text-xs ">
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
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="56733"
          />

          {/* Field 11 */}
          <div className="mt-5 mb-2">
            <div className=" ">
              <p className="text-[11px] md:text-[12px] text-black font-normal ">
                Phone Number
              </p>
            </div>
            {/* Phone code */}
            <div className="relative mt-2 rounded-md shadow-sm">
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                parsePhoneNumber={phone_number}
                placeholder="1 2 3 4 5 6 7 8 9"
                name="PhoneNumber"
                value={customerData.PhoneNumber}
                onChange={setPhoneValue}
                defaultCountry="US"
              />
            </div>
          </div>

          {/* Field 12 */}
          <div className="mt-5 mb-2">
            <p className="text-[11px] md:text-[12px] text-black font-normal ">
              Website
            </p>
          </div>
          <input
            type="text"
            name="website"
            id=""
            value={customerData.website}
            onChange={handleChange}
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="www.company.com"
          />
          <div>
            <SaveAndContinue2 />
          </div>
        </div>

        <div />
      </form>
      <div />
    </div>
  );
}
export default NonSoleForm1;
