import React, { useState } from "react";
import { checkSymbol, downloadIcon } from "../../../Image";
import Submit from "../../buttons/Submit";
import SaveForLaterLong from "../../buttons/SaveForLaterLong";
import { useNavigate } from "react-router-dom";

function FormUpload() {
  const navigate = useNavigate()
  const submit = useState()
  const later = useState()

  const handleSubmit = () => {
    if(submit){
      navigate('/kycStatus')
    }else if (later) {
      navigate('/')
    };
  };
  // const [selectedFile, setSelectedFile] = useState(null)
  // const [uploadStatus, setUploadStatus] = useState('')

  // const handleFileUpload = (event: any) => {
  //   setSelectedFile(event.target.files[0])
  // }

  // const handleUpload = () => {
  //   setUploadStatus("file is uploaded successfully")
  // }



  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="md:w-[30%] h-[70vh]  md:px-6 sm:w-[40%] md:pb-[500px] bg-[#FFFBF1] rounded ">
        <b className="text-[13px]">Tips for uploading documents</b>
        <div className="flex md:pt-6">
          <div className="items-center">
            <div className="border-[#2f2e2e] border rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-2 font-roboto">
            All 4 Edges of the document should be visible
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className=" border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center border text-[7px] p-[3px] flex  ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-2 font-roboto">
            A dark/high contrast background should be used
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-2 font-roboto">
            At least 90% of the image should be the document
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-2 font-roboto">
            Should be at least 300dpi
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-2 font-roboto">
            Capture image from directly above the document
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-2 font-roboto">
            Make sure that the image is properly aligned, not rotated, tilted{" "}
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-2 font-roboto">
            No flash to reduce glare
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-2 font-roboto">
            No black and white documents
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border-[0.3px] border-[#111111] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
          </div>
          <p className="text-[12px] ml-2 font-roboto mb-9">No expired IDs</p>
        </div>
      </div>

      <div className="md:w-[70%] h-[120vh] sm:w-[60%] ml-10">
        <div className="w-[60%]">
          <h3 className="font-bold text-[15px] pb-5 ">
            Additional documents required
          </h3>
          <p className="text-[12px] text-[#747A80] mb-10 sm:mb-5 ">
            To complete your KYC verification, please submit a
            <br /> document for review.
          </p>

          <form className="mt-6 ">
            <h3 className="text-[12px] font-semibold">Owner Document</h3>
            <p className="text-[#A86601] py-3 text-[12px] font-semibold">
              John Doe
            </p>

            <div className="mb-8">
              <div>
                <label
                  htmlFor=""
                  className="text-[14px] text-[#333232] font-semibold"
                >
                  Means of Identification
                </label>
                <select
                  name=""
                  id=""
                  className="w-full text-[13px] rounded-lg outline-none "
                >
                  <option value="">Means of Identification</option>
                  <option value="">US-issued State ID</option>
                  <option value="">International Passport</option>
                </select>
              </div>

              <p className="mt-6 mb-1 text-[13px] font-medium ">
                Copy of John Doe’s US-issued Driver’s License
              </p>
              <div className="mt-3 items-center">
                <label
                  htmlFor="license"
                  className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] flex m-auto justify-center cursor-pointer"
                >
                  <div>
                    <img
                      className="w-[30px] md:mt-1 "
                      src={downloadIcon}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <input
                      type="file"
                      name=""
                      id="license"
                      // onChange={handleFileUpload}
                      hidden
                      placeholder=" types: JPEG, PNG, PDF. Max file size 2mb"
                    />
                    <div className="  text-[12px]">
                      <div className="flex -mt-2 mb-2">
                        <p className="font-semibold text-[10px]">
                          Drag and drop documents here or Browse
                        </p>
                        <span className="ml-2 text-[#FFBD59]">Browse</span>
                      </div>
                      <p className="text-[11px] text-[#747A80] font-medium">
                        Supported file types: JPEG, PNG, PDF. Max file size 2mb
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <div>
                <label className=" w-full text-[13px] rounded-lg outline-none  ">
                  <p className="mb-1">Business Document</p>
                </label>
                <select
                  name=""
                  id=""
                  className="w-full text-[13px] rounded-lg outline-none"
                >
                  <option value="">
                    IRS-issued EIN Confirmation Letter (Form CP 575)
                  </option>
                  <option value="">
                    Filed and Stamped Articles of Incorporation
                  </option>
                  <option value="">Certificate of Good Standing</option>
                </select>
              </div>

              <label
                htmlFor="license"
                className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] flex m-auto justify-center cursor-pointer mt-3"
              >
                <div>
                  <img
                    className="w-[30px] md:mt-1 "
                    src={downloadIcon}
                    alt=""
                  />
                </div>
                <div className="ml-3">
                  <input
                    type="file"
                    name=""
                    id="license"
                    hidden
                    accept="image/*"
                    placeholder=" types: JPEG, PNG, PDF. Max file size 2mb"
                  />
                  <div className="  text-[12px]">
                    <div className="flex -mt-2 mb-2">
                      <p className="font-semibold text-[10px]">
                        Drag and drop documents here or Browse
                      </p>
                      <span className="ml-2 text-[#FFBD59]">Browse</span>
                    </div>
                    <p className="text-[11px] text-[#747A80] font-medium">
                      Supported file types: JPEG, PNG, PDF. Max file size 2mb
                    </p>
                  </div>
                </div>
              </label>
              {/* <div>
                <label
                  htmlFor=""
                  className="mt-6 mb-1 text-[13px] font-medium "
                >
                  Copy of IRS-issued EIN Confirmation Letter (Form CP 575)
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  placeholder="Drag and drop documents here or Browse Supported file types: JPEG, PNG, PDF. Max file size 2mb"
                />
              </div> */}
            </div>
            {/* Buttons */}
            <div className="w-full">
              <div onClick={handleSubmit}>
                <Submit />
              </div>
              <div className=""  onClick={handleSubmit}>
                <SaveForLaterLong />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormUpload;
