import React, { useState } from "react";
import { DiCssTricks } from "react-icons/di";

interface IInput {
  selectInput?: boolean;
  normalInput?: boolean;
  inputWithCountryCode?: boolean;
  shortInput?: boolean;
  title: string;
  required: boolean;
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
  inputPlaceholder?: string;
}
export const handleSubmit = (e: any) => {
  e.preventDefault();
  console.log(FormData);
};

function Inputs({
  selectInput,
  normalInput,
  inputWithCountryCode,
  shortInput,
  title,
  required,
  option1,
  option2,
  option3,
  option4,
  inputPlaceholder,
}: IInput) {
  // Data collection for form
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    EmployerId: "",
    phoneNumber: "",
    city: "",
    state: "",
    zip: "",
    businessName: "",
    businessType: "",
    businessClassification: "",
    businessAddress1: "",
    businessAddress2: "",
    dateOfBirth: "",
    website: "",
  });

  const handleChange = (e: any) => {
    const { businessClassification, businessType, firstName, lastName, value } =
      e.target;
    setFormData((prevState) => ({
      ...prevState,
      [firstName]: value,
      [lastName]: value,
      [businessType]: value,
      [businessClassification]: value,
      // [EmployerId]: value,
      // [businessType]: value,
    }));
  };

  return (
    <>
      <div>
        <div>
          {selectInput && (
            <div>
              <div className="flex mt-2 md:mt-3">
                <p className="text-[11px] md:text-[12px] text-black font-normal ">
                  {title}
                </p>
                {required && (
                  <p className="text-[6.5px] text-[#D31D1D]">
                    <DiCssTricks />
                  </p>
                )}
              </div>
              <select
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                id="BusinessType"
                className="text-[12px] text-[#747A80] border w-full py-2 pl-2 outline-none rounded-[10px] "
              >
                <option value="" className="text-xs ">
                  {option1}
                </option>
                <option value="" className="text-xs ">
                  {option2}
                </option>
                <option value="" className="text-xs ">
                  {option3}
                </option>
                <option value="" className="text-xs ">
                  {option4}
                </option>
              </select>
            </div>
          )}

          {normalInput && (
            <>
              {" "}
              <div className="flex mt-1 md:mt-2">
                <p className="text-[11px] md:text-[12px] text-black font-normal">
                  {title}
                </p>
                {required && (
                  <p className="text-[6.5px] text-[#D31D1D]">
                    <DiCssTricks />
                  </p>
                )}
              </div>
              <input
                type="text"
                name=""
                id=""
                className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
                placeholder={inputPlaceholder}
              />
            </>
          )}

          {inputWithCountryCode && (
            <div className="my-4">
              <div className=" ">
                <p className="text-[11px] md:text-[12px] text-black font-normal ">
                  {title}
                </p>
              </div>
              <div className="flex border-2 w-[45%] rounded-[10px] text-[13px]">
                <div className=" ">
                  <select
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    id=""
                    className="w-16 border-none rounded-lg pl-2 outline-none text-[#747A80] font-semibold"
                  >
                    <option value="">+1</option>
                    <option value="">+2</option>
                    <option value="">+3</option>
                    <option value="">+4</option>
                    <option value="">+5</option>
                    <option value="">+6</option>
                  </select>

                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="pl-2 outline-none border-none w-[60%]"
                    placeholder="23456789"
                  />
                </div>
              </div>
            </div>
          )}
          {shortInput && (
            <div className="mt-4 ">
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                className="w-[25%] text-[12px] py-2 
                px-2 rounded-md pl-3  font-[800] outline-none border"
                placeholder={inputPlaceholder}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Inputs;
