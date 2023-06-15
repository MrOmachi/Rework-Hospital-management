import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  checkSymbol,
  downloadIcon,
  failedUpload,
  successFull,
} from "../../../../Image";
import {
  NonSoleSaveForLaterLong,
  NonSoleSubmit,
} from "../../../buttons/Buttons";
import { HiOutlineX } from "react-icons/hi";
import { ImFileText2 } from "react-icons/im";

interface docUploads {
  meansOfIdentity: string;
  biz_cert: string;
  identity_Doc: string;
  bizCert_docUpload: string;
}

function NonSoleDocUpload() {
  const [valid, setValid] = useState({});
  const [upload, setUpload] = useState(false);
  const [value, setValue] = useState("");

  const [upload2, setUpload2] = useState(false);
  const [value2, setValue2] = useState("");

  const [upload3, setUpload3] = useState(false);
  const [value3, setValue3] = useState("");
  // File size and name
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [fileSize2, setFileSize2] = useState("");
  const [fileName3, setFileName3] = useState("");
  const [fileSize3, setFileSize3] = useState("");

  const [base64Data, setBase64Data] = useState<string>("");
  const [base64Data2, setBase64Data2] = useState<string>("");
  // file size and name ends here

  // doc upload starts here
  const [docType1, setDocType1] = useState<any>();
  const [docType2, setDocType2] = useState<any>();
  // doc upload ends here
  const [upLoadedFile, setUploadedFile] = useState(null);
  const [kycStatus, setKycStatus] = useState("");
    const [kycStatusDoc2, setKycStatusDoc2] = useState("");
  const [btnCheck, setBtnCheck] = useState(false);
  const [docUpload, setDocUpload] = useState<docUploads>({
    meansOfIdentity: "",
    biz_cert: "",
    identity_Doc: "",
    bizCert_docUpload: "",
  });

  const navigate = useNavigate();
  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setDocType1(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setBase64Data(base64);
      };
      reader.readAsDataURL(file);
      setFileName(file.name);
      setFileSize((file.size / 1024).toFixed(2));
    }
  };

  

  const handleFileInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setDocType2(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setBase64Data2(base64);
      };
      reader.readAsDataURL(file);
      setFileName2(file.name);
      setFileSize2((file.size / 1024).toFixed(2));
    }
  };

  const handleFileUpload = (event: { target: { files: any[] } }) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };
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

  const handleDoc = (event: { target: { name: any; value: any } }) => {
    const name = event.target.name;
    const value = event.target.value;
    setDocUpload((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
    if (name === "value") {
      setValue(value);
    }

    console.log(value);
    setBtnCheck(value === "" ? true : false);
  };
  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="md:w-[30%] h-[80vh]  md:px-6 sm:w-[40%] bg-[#FFFBF1] rounded-[13px] ">
        <p className="text-[15px] pt-5 font-semibold">
          Tips for uploading documents
        </p>
        <div className="flex md:pt-6">
          <div className="items-center">
            <div className="border-[1px] border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-3  font-medium ">
            All 4 Edges of the document should be visible
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className=" border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center border text-[7px] justify-center flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px]  ml-3 font-medium ">
            A dark/high contrast background should be used
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-3 font-medium ">
            At least 90% of the image should be the document
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px]  ml-3 font-medium ">
            Should be at least 300dpi
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-3 font-medium  ">
            Capture image from directly above the document
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px]  m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-3 font-medium ">
            Make sure that the image is properly aligned, not rotated, tilted{" "}
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-3 font-medium ">
            No flash to reduce glare
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[30px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[12px] ml-3 font-medium ">
            No black and white documents
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border-[0.3px] border-[#111111] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
          </div>
          <p className="text-[12px] ml-3 font-medium  mb-9">No expired IDs</p>
        </div>
      </div>

      <div className="md:w-[70%] h-[120vh] sm:w-[60%] ml-16">
        <div className="w-[60%]">
          <h3 className="font-semibold  text-[18px] py-5 ">
            Additional documents required
          </h3>
          <p className="text-[14px] text-[#747A80] mb-10 sm:mb-5 ">
            To complete your KYC verification, please submit a document for
            review.
          </p>

          <form className="mt-6 ">
            <div>
              <div>
                <div>
                  <h3 className="text-[14px] font-medium">Beneficiary Owner</h3>
                  <p className="flex space-x-1 text-[#A86601] py-3 text-[14px] font-semibold">
                    Mary Jane
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
                        value={docUpload.meansOfIdentity}
                        onChange={handleDoc}
                        className="w-full text-[14px] rounded-lg outline-none "
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
                  </div>

                  <div>
                    <p className="mt-6  text-[15px] font-medium ">
                      Copy of John Doe’s US-issued Driver’s License
                    </p>
                    <div className="mt-1 items-center">
                      {!upload && kycStatus !== "FAILED" && (
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
                                handleFileInputChange(e as any);
                                setUpload(true);
                                setValue(e.target.value);
                                handleFileUpload(e as any);
                                if (
                                  e.target.files &&
                                  e.target.files.length > 0
                                ) {
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
                                Supported file types: JPEG, PNG, PDF. Max file
                                size 2mb
                              </p>
                            </div>
                          </div>
                        </label>
                      )}

                      {fileName && upload && kycStatus !== "FAILED" && (
                        <label className="text-sm  border-[2px] border-dotted  border-[#747A80] bg-[#E8F4FF] rounded-[13px] flex m-auto justify-between py-5">
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
                                  {/* <p className="text-[13px] font-bold ml-5 ">
                                {fileName}
                              </p>
                              */}
                                  <p className="text-[13px] text-[#747A80] font-semibold ml-5 pt-2">
                                    {fileSize} KB
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
                      )}
                      {/*   Error Handling */}
                      {fileName && kycStatus === "FAILED" && (
                        <div>
                          <label className="text-sm  border-[2px] border-dotted  border-red-600 rounded-[13px] flex m-auto justify-between py-4">
                            <div className=" w-[90%]">
                              <div className="flex w-[85%] m-auto">
                                <div className="w-[10%] ">
                                  <img
                                    className="text-[25px] "
                                    src={failedUpload}
                                    alt=""
                                  />
                                </div>
                                <div className=" w-[90%]">
                                  <p className="text-[12px] font-bold pb-1 ">
                                    Upload failed
                                  </p>
                                  <p className="font-medium text-[11px] text-[#747A80] ">
                                    {value}
                                  </p>
                                  <p className="text-[13px] text-[#747A80] font-semibold ml-5 pt-2">
                                    {fileSize} KB
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="w-[10%]  ml-11 cursor-pointer"
                              onClick={() => setKycStatus("")}
                            >
                              <p
                                className="text-[20px] text-[#747A80] 
                          -ml-5  "
                              >
                                <HiOutlineX />
                              </p>
                            </div>
                          </label>
                          <p className="text-[12px] font-medium text-red-700 pt-1">
                            Try Again
                          </p>
                        </div>
                      )}
                      {/* Error upload ends here */}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div>
                  <p className="flex space-x-1 mt-4 text-[#A86601] py-3 text-[14px] font-semibold">
                    John Doe
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
                        name=""
                        id=""
                        className="w-full text-[14px] rounded-lg outline-none "
                      >
                        <option value="">Means of Identification</option>
                        <option value="">US-issued State ID</option>
                        <option value="">International Passport</option>
                      </select>
                    </div>

                    <p className="mt-6  text-[15px] font-medium ">
                      Copy of John Doe’s US-issued Driver’s License
                    </p>
                    <div className="mt-1 items-center">
                      {!upload2 && kycStatus !== "FAILED" && (
                        <label
                          htmlFor="license2"
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
                              id="license2"
                              hidden
                              accept="image/x-png,image/jpeg,application/pdf"
                              onChange={(e) => {
                                handleFileInputChange2(e as any);
                                setUpload2(true);
                                setValue2(e.target.value);
                                handleDoc(e as any);
                                if (
                                  e.target.files &&
                                  e.target.files.length > 0
                                ) {
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
                                Supported file types: JPEG, PNG, PDF. Max file
                                size 2mb
                              </p>
                            </div>
                          </div>
                        </label>
                      )}

                      {fileName2 && upload2 && kycStatusDoc2 !== "FAILED" && (
                        <label className="text-sm  border-[2px] border-dotted  border-[#747A80] bg-[#E8F4FF] rounded-[13px] flex m-auto justify-between py-5">
                          <div className=" w-[90%]">
                            <div className="flex w-[85%] m-auto">
                              <p className="text-[25px] mt-1">
                                <ImFileText2 />
                              </p>
                              <div className="  text-[12px]">
                                <div>
                                  <p className="text-[13px] font-semibold ml-5 ">
                                    {value2}
                                  </p>
                                  {/* <p className="text-[13px] font-bold ml-5 ">
                                {fileName}
                              </p>
                              */}
                                  <p className="text-[13px] text-[#747A80] font-semibold ml-5 pt-2">
                                    {fileSize2} KB
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="w-[10%]  ml-11 cursor-pointer"
                            onClick={() => setUpload2(false)}
                          >
                            <p className="text-[22px] text-[#747A80]">
                              <HiOutlineX />
                            </p>
                          </div>
                        </label>
                      )}
                      {/*   Error Handling */}
                      {fileName2 && kycStatusDoc2 === "FAILED" && (
                        <div>
                          <label className="text-sm  border-[2px] border-dotted  border-red-600 rounded-[13px] flex m-auto justify-between py-4">
                            <div className=" w-[90%]">
                              <div className="flex w-[85%] m-auto">
                                <div className="w-[10%] ">
                                  <img
                                    className="text-[25px] "
                                    src={failedUpload}
                                    alt=""
                                  />
                                </div>
                                <div className=" w-[90%]">
                                  <p className="text-[12px] font-bold pb-1 ">
                                    Upload failed
                                  </p>
                                  <p className="font-medium text-[11px] text-[#747A80] ">
                                    {value2}
                                  </p>
                                  <p className="text-[13px] text-[#747A80] font-semibold ml-5 pt-2">
                                    {fileSize2} KB
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              className="w-[10%]  ml-11 cursor-pointer"
                              onClick={() => setKycStatusDoc2("")}
                            >
                              <p
                                className="text-[20px] text-[#747A80] 
                          -ml-5  "
                              >
                                <HiOutlineX />
                              </p>
                            </div>
                          </label>
                          <p className="text-[12px] font-medium text-red-700 pt-1">
                            Try Again
                          </p>
                        </div>
                      )}
                      {/* Error upload ends here */}
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
