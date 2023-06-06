import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkSymbol, downloadIcon, successFull } from "../../../../Image";
import { NonSoleSaveForLaterLong, NonSoleSubmit } from "../../../buttons/Buttons";

function NonSoleDocUpload() {
  const [valid, setValid] = useState({})
  const [upload, setUpload] = useState(false);
  const [value, setValue] = useState("");

  const [upload2, setUpload2] = useState(false);
  const [value2, setValue2] = useState("");
  
  const [upload3, setUpload3] = useState(false);
  const [value3, setValue3] = useState("");

  const navigate = useNavigate();
  const submit = useState();

  function handleFileInput(e: { target: { files: [any] } }) {
    const [file] = e.target.files;

    if (!file) return;

    const { size, type } = file;

    if (size > 2097152) {
      throw "too big";
    } else if (
      type !== "application/pdf" &&
      type !== "application/wps-office.pdf" &&
      type !== "image/jpg" &&
      type !== "image/jpeg" &&
      type !== "image/png"
    ) {
      throw "not the right type";
    } else {
      console.log("file valid");
    }
  }

  const handleSubmit = () => {
    // if (submit) {
    // navigate("/kycStatus");
    // }
  };

  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="md:w-[30%] h-[50vh]  md:px-6 sm:w-[40%] md:pb-[450px] bg-[#FFFBF1] rounded ">
        <b className="text-[13px]">Tips for uploading documents</b>
        <div className="flex md:pt-6">
          <div className="items-center">
            <div className="border-[#2f2e2e] border rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] ml-2 font-roboto">
            All 4 Edges of the document should be visible
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className=" border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center border text-[7px] p-[3px] flex  ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] ml-2 font-roboto">
            A dark/high contrast background should be used
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] ml-2 font-roboto">
            At least 90% of the image should be the document
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] ml-2 font-roboto">
            Should be at least 300dpi
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] ml-2 font-roboto">
            Capture image from directly above the document
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] ml-2 font-roboto">
            Make sure that the image is properly aligned, not rotated, tilted{" "}
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] ml-2 font-roboto">
            No flash to reduce glare
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[11px] ml-2 font-roboto">
            No black and white documents
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border-[0.3px] border-[#111111] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
          </div>
          <p className="text-[11px] ml-2 font-roboto mb-9">No expired IDs</p>
        </div>
      </div>

      <div className="md:w-[70%] h-[150vh] mb-[15%] sm:w-[60%] ml-10">
        <div className="w-[60%]">
          <h3 className="font-bold text-[15px] pb-5 ">
            Additional documents required
          </h3>
          <p className="text-[12px] text-[#747A80] mb-10 sm:mb-5 ">
            To complete your KYC verification, please submit a
            <br /> document for review.
          </p>

          <form className="mt-6 ">
            <div>
              <div>
                <div>
                  <h3 className="text-[12px] font-semibold">
                    Beneficiary Owner
                  </h3>
                  <p className="text-[#A86601] py-3 text-[12px] font-semibold">
                    Mary Jane
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
                        className="w-full text-[13px] rounded-lg outline-none mt-2 "
                      >
                        <option value="">
                          Driver Licence (US state-issued licence)
                        </option>
                        <option value="">US-issued State ID</option>
                        <option value="">International Passport</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <p className="text-[13px] mt-6">
                      Copy of Mary Jane’s Driver Licence (US state-issued
                      licence)
                    </p>
                    {!upload && (
                      <label
                        htmlFor="EIN_confirmation"
                        className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] flex m-auto justify-center cursor-pointer mt-3"
                      >
                        <div>
                          <img
                            className="w-[20px] md:mt-1 "
                            src={downloadIcon}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                        <input
                      type="file"
                      name=""
                      id="EIN_confirmation"
                      hidden
                      accept="image/x-png,image/jpeg,application/pdf"
                      onChange={(e) => {
                        handleFileInput(e as any);
                        setUpload(true);
                        setValue(e.target.value);
                      }}
                      placeholder=" types: JPEG, PNG, PDF. Max file size 2mb"
                    />
                          <div className="  text-[12px]">
                            <div className="flex -mt-2 mb-2">
                              <p className="font-semibold text-[10px]">
                                Drag and drop documents here or Browse
                              </p>
                              <span className="ml-2 text-[#FFBD59]">
                                Browse
                              </span>
                            </div>
                            <p className="text-[11px] text-[#747A80] font-medium">
                              Supported file types: JPEG, PNG, PDF. Max file
                              size 2mb
                            </p>
                          </div>
                        </div>
                      </label>
                    )}
                  </div>

                  <div>
                    {upload && (
                      <label className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] mt-3 flex m-auto justify-between ">
                        <div className="ml-3 w-[90%]">
                          <img className="w-[20px] " src={successFull} alt="" />
                          <div className="  text-[12px]">
                            <div className="flex -mt-6 mb-2">
                              <div>
                                <p className="font-semibold text-[13px] ml-7">
                                  Upload successfully
                                </p>
                                <p className="font-medium text-[10px] ml-7">
                                  {value}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="w-[10%] -mt-3 ml-11 cursor-pointer"
                          onClick={() => setUpload(false)}
                        >
                          <p>X</p>
                        </div>
                      </label>
                    )}
                  </div>
                </div>
              </div>






              <div>
                <div>
                  <p className="text-[#A86601] py-3 text-[12px] font-semibold mt-6 ">
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
                      {!upload2 && (
                        <label
                          htmlFor="license"
                          className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] flex m-auto justify-center cursor-pointer"
                        >
                          <div>
                            <img
                              className="w-[20px] md:mt-1 "
                              src={downloadIcon}
                              alt=""
                            />
                          </div>
                          <div className="ml-3">
                          <input
                      type="file"
                      name=""
                      id="EIN_confirmation"
                      hidden
                      accept="image/x-png,image/jpeg,application/pdf"
                      onChange={(e) => {
                        handleFileInput(e as any);
                        setUpload2(true);
                        setValue2(e.target.value);
                      }}
                      placeholder=" types: JPEG, PNG, PDF. Max file size 2mb"
                    />
                            <div className="  text-[12px]">
                              <div className="flex -mt-2 mb-2">
                                <p className="font-semibold text-[10px]">
                                  Drag and drop documents here or Browse
                                </p>
                                <span className="ml-2 text-[#FFBD59]">
                                  Browse
                                </span>
                              </div>
                              <p className="text-[11px] text-[#747A80] font-medium">
                                Supported file types: JPEG, PNG, PDF. Max file
                                size 2mb
                              </p>
                            </div>
                          </div>
                        </label>
                      )}

                      {upload2 && (
                        <label className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] flex m-auto justify-between ">
                          <div className="ml-3 w-[90%]">
                            <img
                              className="w-[20px] "
                              src={successFull}
                              alt=""
                            />
                            <div className="  text-[12px]">
                              <div className="flex -mt-6 mb-2">
                                <div>
                                  <p className="font-semibold text-[13px] ml-7">
                                    Upload successfully
                                  </p>
                                  <p className="font-medium text-[10px] ml-7">
                                    {value2}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="w-[10%] -mt-3 ml-11 cursor-pointer"
                            onClick={() => setUpload2(false)}
                          >
                            <p>X</p>
                          </div>
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    <label className=" w-full text-[13px] rounded-lg outline-none  ">
                      <p className="mb-1 font-semibold text-[13px]">
                        Business Document
                      </p>
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

                  <div>
                    <p className="text-[13px] mt-6">
                      Copy of IRS-issued EIN Confirmation Letter (Form CP 575)
                    </p>
                    {!upload3 && (
                      <label
                        htmlFor="EIN_confirmation"
                        className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] flex m-auto justify-center cursor-pointer mt-3"
                      >
                        <div>
                          <img
                            className="w-[20px] md:mt-1 "
                            src={downloadIcon}
                            alt=""
                          />
                        </div>
                        <div className="ml-3">
                        <input
                      type="file"
                      name=""
                      id="EIN_confirmation"
                      hidden
                      accept="image/x-png,image/jpeg,application/pdf"
                      onChange={(e) => {
                        handleFileInput(e as any);
                        setUpload3(true);
                        setValue3(e.target.value);
                      }}
                      placeholder=" types: JPEG, PNG, PDF. Max file size 2mb"
                    />
                          <div className="  text-[12px]">
                            <div className="flex -mt-2 mb-2">
                              <p className="font-semibold text-[10px]">
                                Drag and drop documents here or Browse
                              </p>
                              <span className="ml-2 text-[#FFBD59]">
                                Browse
                              </span>
                            </div>
                            <p className="text-[11px] text-[#747A80] font-medium">
                              Supported file types: JPEG, PNG, PDF. Max file
                              size 2mb
                            </p>
                          </div>
                        </div>
                      </label>
                    )}
                  </div>

                  {upload3 && (
                    <label className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] mt-3 flex m-auto justify-between ">
                      <div className="ml-3 w-[90%]">
                        <img className="w-[20px] " src={successFull} alt="" />
                        <div className="  text-[12px]">
                          <div className="flex -mt-6 mb-2">
                            <div>
                              <p className="font-semibold text-[13px] ml-7">
                                Upload successfully
                              </p>
                              <p className="font-medium text-[10px] ml-7">
                                {value3}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="w-[10%] -mt-3 ml-11 cursor-pointer"
                        onClick={() => setUpload3(false)}
                      >
                        <p>X</p>
                      </div>
                    </label>
                  )}
                </div>
              </div>
              {/* Buttons */}
              <div className="w-full ">
                <div>
                  <NonSoleSubmit />
                </div>
                <div className="">
                  <NonSoleSaveForLaterLong />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NonSoleDocUpload;
