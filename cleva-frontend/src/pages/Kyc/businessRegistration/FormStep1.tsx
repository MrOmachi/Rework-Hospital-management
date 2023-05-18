import React, { useState } from "react";
import { DiCssTricks } from "react-icons/di";
import SaveAndContinue from "../../buttons/SaveAndContinue";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { CognitoUserAttribute } from "amazon-cognito-identity-js";

function Form() {
  const navigate = useNavigate();
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
  });

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
    const dataArray = [customerData];
    axios
      .post(
        "https://cjmesvc3ag.execute-api.eu-west-1.amazonaws.com/qa",
        dataArray
      )
      .then((response) => {
        console.log("Response from Postman:", response.data);
      })
      .catch((error) => {
        console.error("Error sending data to Postman:", error);
      });

    navigate("/startKyc2");

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
          <div className="flex mt-1 md:mt-2">
            <p className="text-[11px] md:text-[12px] text-black font-normal">
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
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Business name"
          />

          {/* Field 2 */}
          <div className="flex mt-2 md:mt-3">
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
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] "
          >
            <option value="Sole Proprietorship" className="text-xs ">
              Sole Proprietorship
            </option>
            <option value="Corporation" className="text-xs ">
              C Corporation
            </option>
            <option value="Corporation" className="text-xs ">
              S Corporation
            </option>
            <option value="Partnership" className="text-xs ">
              Partnership
            </option>

            <option value="Non profit" className="text-xs ">
              Non profit
            </option>
            <option value="Other" className="text-xs ">
              Other
            </option>
          </select>

          {/* Field 3 */}
          <div className="flex mt-2 md:mt-3">
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
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] "
          >
            <option value="" className="text-xs ">
              Software
            </option>
            <option value="Agriculture" className="text-xs ">
              Fintech
            </option>
            <option value="Health" className="text-xs ">
              Non-profit
            </option>
            <option value="Business" className="text-xs ">
              Other
            </option>
          </select>

          {/* Field 4 */}
          <div className="flex mt-2 md:mt-3">
            <p className="text-[11px] md:text-[12px] text-black font-normal ">
              Employer Identification Number (EIN)
            </p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <select
            name="employerID"
            id=""
            value={customerData.employerID}
            onChange={handleChange2}
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] "
          >
            <option value="12-238994328" className="text-xs ">
              12-238994328
            </option>
            <option value="12-0932094328" className="text-xs ">
              12-0932094328
            </option>
            <option value="12-223092328" className="text-xs ">
              12-223092328
            </option>
            <option value="12-10284309" className="text-xs ">
              12-10284309
            </option>
          </select>

          {/* Field 5 */}
          <div className="flex mt-2 md:mt-3">
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
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] mb-2 "
          >
            <option value="United State" className="text-xs ">
              United State
            </option>
            <option value="Lagos" className="text-xs ">
              Lagos
            </option>
            <option value="Kaduna" className="text-xs ">
              Kaduna
            </option>
            <option value="Port harcourt" className="text-xs ">
              Port harcourt
            </option>
          </select>

          {/* Field 6 */}
          <input
            type="text"
            name="StreetAddress"
            id=""
            value={customerData.StreetAddress}
            onChange={handleChange}
            className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
            placeholder="Address Line 1"
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
            placeholder="City"
          />

          {/* Field 9 */}
          <select
            name="StateOrTerritory"
            id=""
            value={customerData.StateOrTerritory}
            onChange={handleChange2}
            className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] my-2"
          >
            <option value="state" className="text-xs ">
              state
            </option>
            <option value="Lagos" className="text-xs ">
              Lagos
            </option>
            <option value="Kogi" className="text-xs ">
              Kogi
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
            placeholder="Zip"
          />

          {/* Field 11 */}
          <div className="my-4">
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
                placeholder="Enter phone number"
                name="PhoneNumber"
                value={customerData.PhoneNumber}
                onChange={setPhoneValue}
                defaultCountry="US"
              />
            </div>
          </div>

          {/* Field 12 */}
          <div className=" ">
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
