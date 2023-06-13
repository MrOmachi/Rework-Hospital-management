import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SaveForLaterLong } from "../../../buttons/Buttons";
import axios from "axios";
import { checkSymbol, downloadIcon, failedUpload } from "../../../../Image";
import { ImFileText2 } from "react-icons/im";
import Loader from "../../../../components/PopUps/Loader";
import { HiOutlineX } from "react-icons/hi";


interface docUploads {
  meansOfIdentity: string;
  biz_cert: string;
  identity_Doc: string;
  bizCert_docUpload: string;
}

function FormUpload() {
  const [upload, setUpload] = useState(false);
  const [value, setValue] = useState("");
  const [upload2, setUpload2] = useState(false);
  const [value2, setValue2] = useState("");
  const [loading, setLoading] = useState(false);
  const [btnCheck, setBtnCheck] = useState(false);
  const [upLoadedFile, setUploadedFile] = useState(null);
  const [btnOnLoad, setBtnOnLoad] = useState(false);
  const [docUpload, setDocUpload] = useState<docUploads>({
    meansOfIdentity: "",
    biz_cert: "",
    identity_Doc: "",
    bizCert_docUpload: "",
  });
  const navigate = useNavigate();

  const [base64Data, setBase64Data] = useState<string>("");
  const [base64Data2, setBase64Data2] = useState<string>("");
  const [docType1, setDocType1] = useState<any>();
  const [docType2, setDocType2] = useState<any>();
  const KYCI = JSON.parse(localStorage.getItem("KYCI") as string);
  const [kycStatus, setKycStatus] = useState("");
  const [kycStatusDoc2, setKycStatusDoc2] = useState("");
  const [period, setPeriod] = useState<any>(null);

  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [fileSize2, setFileSize2] = useState("");

  const CustomerDetails = JSON.parse(
    localStorage.getItem("customerData") as string
  );

  const fetchData = () => {
    axios
      .get(
        `https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/kyc/${KYCI}`
      )
      .then((response) => {
        setKycStatus(response.data.BusinessKyc.BusinessDocuments[0].status);
        setKycStatusDoc2(
          response.data.BusinessKyc.BeneficialOwners[0].Document.status
        );
      })
      .catch((error) => {
        return error;
      });
  };

  // fetch data after five seconds to check kyc status
  const handleInterval = () => {
    setPeriod(
      setInterval(() => {
        fetchData();
      }, 5000)
    );
  };

  // Redirect on status change
  useEffect(() => {
    if (kycStatus === "SUCCESSFUL" && kycStatusDoc2 === "SUCCESSFUL") {
      setLoading(false);
      navigate("/kycStatus", {
        state: period,
      });
    } else if (kycStatus === "FAILED" && kycStatusDoc2 === "FAILED") {
      setLoading(false);
    }
  }, [kycStatus, kycStatusDoc2]);

  const isBtnActive =
    docUpload.meansOfIdentity === "" ||
    docUpload.identity_Doc === "" ||
    docUpload.biz_cert === "" ||
    docUpload.bizCert_docUpload === "";

  const createKYC = {
    BusinessKyc: {
      BusinessName: CustomerDetails.BusinessKyc.BusinessName,
      BusinessRegistrationNumber:
        CustomerDetails.BusinessKyc.BusinessRegistrationNumber,
      Classification: CustomerDetails.BusinessKyc.Classification,
      ContactDetails: {
        PhoneNumber: CustomerDetails.PhoneNumber,
        Email: CustomerDetails.email,
      },
      CountryOfIncorporation:
        CustomerDetails.BusinessKyc.CountryOfIncorporation,
      NationalIdentifier: "1234",
      RegisteredAddress: {
        StreetAddress:
          CustomerDetails.BusinessKyc.RegisteredAddress.StreetAddress,
        SecondStreetAddress:
          CustomerDetails.BusinessKyc.RegisteredAddress.SecondStreetAddress,
        City: CustomerDetails.BusinessKyc.RegisteredAddress.City,
        Country: CustomerDetails.BusinessKyc.RegisteredAddress.businessAddress,
        StateOrTerritory:
          CustomerDetails.BusinessKyc.RegisteredAddress.StateOrTerritory,
        Zipcode: CustomerDetails.BusinessKyc.RegisteredAddress.Zipcode,
      },
      Type: CustomerDetails.BusinessKyc.Type,
      BeneficialOwners: [
        {
          DateOfBirth:
            CustomerDetails.BusinessKyc.BeneficialOwners[0].DateOfBirth,
          FirstName: CustomerDetails.BusinessKyc.BeneficialOwners[0].FirstName,
          LastName: CustomerDetails.BusinessKyc.BeneficialOwners[0].LastName,
          NationalIdentifier: "1111",
          Document: {
            DocumentType: docUpload.meansOfIdentity,
            data: base64Data,
            contentType: docType1?.type,
            filename: "doc.jpg",
            size: 2,
          },
        },
      ],
      BusinessDocuments: [
        {
          DocumentType: docUpload.biz_cert,
          data: base64Data2,
          contentType: docType2?.type,
          filename: "doc.jpg",
          size: 2,
        },
      ],
    },
  };

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
    const file = e.target.files?.[0];

    // if (!file) return;
    // const { size, type } = file;
    // const maxSize = 2 * 1024 * 1024;
    // if (size > maxSize) {
    //   setErrorUpload(true);
    //   setUpload(false);
    //   setErrorMessage(`File size exceeds 2MB limit.`);
    // } else if (
    //   type !== "application/pdf" &&
    //   type !== "application/wps-office.pdf" &&
    //   type !== "image/jpg" &&
    //   type !== "image/jpeg" &&
    //   type !== "image/png"
    // ) {
    //   setErrorUpload(true);
    //   setUpload(false);
    //   setErrorMessage("Invalid file type.");
    // } else {
    //   setUpload(true);
    //   setErrorUpload(false);
    //   setErrorMessage("");
    // }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setBtnOnLoad(true);

    axios
      .put(
        `https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/kyc/${KYCI}`,
        createKYC
      )
      .then((response) => {
        handleInterval();
      })
      .catch((error) => {
        setLoading(false);
      });
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
    <>
      <div className="flex justify-evenly w-full mt-14 pb-10">
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
              To complete your KYC verification, please submit a
              <br /> document for review.
            </p>

            <form className="mt-6 ">
              <h3 className="text-[14px] font-medium">Owner Document</h3>
              <p className="flex space-x-1 text-[#A86601] py-3 text-[14px] font-semibold">
                <span>
                  {CustomerDetails.BusinessKyc.BeneficialOwners[0].FirstName}
                </span>
                <span>
                  {CustomerDetails.BusinessKyc.BeneficialOwners[0].LastName}
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
                    value={docUpload.meansOfIdentity}
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
                  Copy of John Doe’s US-issued Driver’s License
                </p>
                <div className="mt-1 items-center">
                  {!upload && kycStatus !== "FAILED" && (
                    <label
                      htmlFor="license1"
                      className="text-sm py-8 border-[2px] border-dotted  border-[#747A80] bg-[#F9FAFA] rounded-[13px] flex pl-5 cursor-pointer"
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

              <div>
                <div>
                  <label className=" w-full text-[13px] rounded-lg outline-none  ">
                    <p className="mb-1 text-[15px] font-medium">
                      Business Document
                    </p>
                  </label>
                  <select
                    name="biz_cert"
                    onChange={handleDoc}
                    id=""
                    value={docUpload.biz_cert}
                    className="w-full text-[13px] rounded-lg outline-none"
                  >
                    <option value="" className="hidden">
                      IRS-issued EIN Confirmation Letter (Form CP 575)
                    </option>
                    <option value="IRS-issued EIN Confirmation Letter (Form CP 575)">
                      IRS-issued EIN Confirmation Letter (Form CP 575)
                    </option>
                    <option value="Filed and Stamped Articles of Incorporation">
                      Filed and Stamped Articles of Incorporation
                    </option>
                    <option value="Certificate of Good Standing">
                      Certificate of Good Standing
                    </option>
                  </select>
                </div>

                {!upload2 && kycStatusDoc2 !== "FAILED" && (
                  <label
                    htmlFor="EIN_confirmation"
                    className="text-sm py-8 border-[2px] border-dotted  border-[#747A80] bg-[#F9FAFA] rounded-[13px] flex pl-5 cursor-pointer mt-3"
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
                        name="bizCert_docUpload"
                        id="EIN_confirmation"
                        hidden
                        accept="image/x-png,image/jpeg,application/pdf"
                        onChange={(e) => {
                          handleFileInputChange2(e as any);
                          setUpload2(true);
                          setValue2(e.target.value);
                          if (e.target.files && e.target.files.length > 0) {
                            handleDoc({
                              target: {
                                name: "bizCert_docUpload",
                                value: e.target.files[0],
                              },
                            });
                          }
                        }}
                        placeholder=" types: JPEG, PNG, PDF. Max file size 2mb"
                      />
                      <div className="  text-[12px]">
                        <div className="flex -mt-2 mb-2">
                          <p className="font-bold text-[11px]">
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

                {fileName2 && upload2 && kycStatusDoc2 !== "FAILED" && (
                  <label className="text-sm  border-[2px] mt-2 border-dotted  border-[#747A80] bg-[#E8F4FF] rounded-[13px] flex m-auto justify-between py-5">
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
                              {fileName2}
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
                      <p className="text-[22px] text-[#747A80] -ml-3">
                        <HiOutlineX />
                      </p>
                    </div>
                  </label>
                )}

                {/* 2nd error handling starts here */}

                {fileName2 && kycStatusDoc2 === "FAILED" && (
                  <div>
                    <label className="text-sm  border-[2px] border-dotted  border-red-600 rounded-[13px] mt-2 flex m-auto justify-between py-4">
                      <div className=" w-[90%]">
                        <div className="flex w-[85%] m-auto">
                          <div className="w-[10%] ">
                            <img
                              className="text-[25px] "
                              src={failedUpload}
                              alt=""
                            />
                          </div>
                          <div className="  text-[12px] ml-2">
                            <div>
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
                      </div>
                      <div
                        className="w-[10%]  ml-11 cursor-pointer"
                        onClick={() => setKycStatusDoc2("")}
                      >
                        <p className="text-[20px] text-[#747A80] -ml-5">
                          <HiOutlineX />
                        </p>
                      </div>
                    </label>
                    <p className="text-[12px] font-medium text-red-700 pt-1">
                      Try Again
                    </p>
                  </div>
                )}
                {/* error handling ends here */}
              </div>

              {/* Buttons */}
              <div className="w-full">
                <div className="font-extrabold mt-1">
                  {/* hidden button start */}
                  {loading ? (
                    <button
                      disabled
                      className="bg-[#FFF5D9] text-[15px] font-bold p-3 w-full rounded-lg mt-8  "
                    >
                      Uploading...
                    </button>
                  ) : (
                    <button
                      disabled={isBtnActive}
                      onClick={(e) => {
                        handleSubmit(e);
                        setBtnOnLoad(true);
                      }}
                      className={`text-[15px] font-bold p-3 w-full rounded-lg mt-8  ${
                        docUpload.meansOfIdentity &&
                        docUpload.identity_Doc &&
                        docUpload.biz_cert &&
                        docUpload.bizCert_docUpload !== ""
                          ? "bg-[#FFBD59]"
                          : "bg-[#FFF5D9]"
                      }`}
                    >
                      Upload documents
                    </button>
                  )}
                  {/* hidden button end  */}
                </div>
                <div className="">
                  <SaveForLaterLong />
                </div>
              </div>
            </form>
          </div>
        </div>
        {loading && <Loader />}
      </div>
      {/* )} */}
    </>
  );
}

export default FormUpload;
