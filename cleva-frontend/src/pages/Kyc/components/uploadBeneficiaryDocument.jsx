import React, { useState } from "react";
import { downloadIcon } from "../../../Image";
import { ImFileText2 } from "react-icons/im";
import { HiOutlineX } from "react-icons/hi";


export default function BeneficiaryUpload(props){

  const [upload, setUpload] = useState(false);
  const [value, setValue] = useState("");

  const handleFileInputChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
  };
  

  const handleDoc = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "value") {
      setValue(value);
    }
  };
  

    return(
        <>
        <h3 className="text-[14px] font-medium">Owner Document</h3>
      <p className="flex space-x-1 text-[#A86601] py-3 text-[14px] font-semibold">
        <span>
          {props.owner.FirstName}
        </span>
        <span>
          {props.owner.LastName}
        </span>
      </p>
        <div className="mb-8">
        <div>
          <label
            htmlFor=""
            className="text-[15px] text-[#333232] font-medium"
          >
            Means of Identification
          </label>
          <select
            name="meansOfIdentity"
            id=""
            value={props.owner?.IdentificationDocument?.DocumentType}
            onChange={handleDoc}
            className="w-full text-[13px] rounded-lg outline-none "
          >
            <option value="" className="hidden">
              Means of Identification
            </option>
            <option value="US-issued Driver’s License">
              US-issued Driver’s License
            </option>
            <option value="US-issued State ID">
              US-issued State ID
            </option>
            <option value="International Passport">
              International Passport
            </option>
          </select>
        </div>

        <p className="mt-6  text-[15px] font-medium ">
          Copy of {props.owner?.FirstName}’s {props.owner?.IdentificationDocument?.DocumentType}
        </p>
        <div className="mt-1 items-center">
          {!upload && props.status !== "FAILED" && (
            <label
              htmlFor="license1"
              className="text-sm py-8 border-[2.5px] border-dotted  border-[#747A80] bg-[#F9FAFA] rounded-[13px] flex pl-5 cursor-pointer"
            >
              <div>
                <img
                  className="w-[30px] md:mt-1 "
                  src={downloadIcon}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <input
                  type="file"
                  name="identity_Doc"
                  id="license1"
                  hidden
                  accept="image/x-png,image/jpeg,application/pdf"
                  onChange={(e) => {
                    handleFileInputChange(e);
                    setUpload(true);
                    setValue(e.target.value);
                    handleFileUpload(e);
                    if (e.target.files && e.target.files.length > 0) {
                      handleDoc({
                        target: {
                          name: "identity_Doc",
                          value: e.target.files[0],
                        },
                      });
                    }
                  }}
                  placeholder=" types: JPEG, PNG, PDF. Max file size 2mb"
                />
                <div className="  text-[12px]">
                  <div className="flex -mt-2 mb-2">
                    <p className="text-[11px] font-bold">
                      Drag and drop documents here or
                    </p>
                    <span className="ml-2 text-[#FFBD59] text-[11px] font-bold">
                      Browse
                    </span>
                  </div>
                  <p className="text-[11px] text-[#747A80] font-medium">
                    Supported file types: JPEG, PNG, PDF. Max file size
                    2mb
                  </p>
                </div>
              </div>
            </label>
          )}
{/* 
          {fileName && upload && kycStatus !== "FAILED" && (
            <label className="text-sm  border-[2.5px] border-dotted  border-[#747A80] bg-[#E8F4FF] rounded-[13px] flex m-auto justify-between py-5">
              <div className=" w-[90%]">
                <div className="flex w-[85%] m-auto">
                  <p className="text-[25px] mt-1">
                    <ImFileText2 />
                  </p>
                  <div className="  text-[12px]">
                    <div>
                      <p className="text-[13px] font-semibold ml-5 ">
                        {value}
                      </p>
                      <p className={`text-[13px] text-[#747A80] font-semibold ml-5 pt-2`}>
                        {fileSize }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-[10%]  ml-11 cursor-pointer"
                onClick={() => setUpload(false)}
              >
                <p className="text-[22px] text-[#747A80]">
                  <HiOutlineX />
                </p>
              </div>
            </label>
          )} */}
        </div>
      </div>
      </>
        )
}