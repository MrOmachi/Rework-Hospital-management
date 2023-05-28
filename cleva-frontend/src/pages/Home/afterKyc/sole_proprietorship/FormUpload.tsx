import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkSymbol, downloadIcon, successFull } from "../../../../Image";
import { SaveForLaterLong, Submit } from "../../../buttons/Buttons";
import axios from "axios";

function FormUpload() {
  const [upload, setUpload] = useState(false);
  const [value, setValue] = useState("");
  const [upload2, setUpload2] = useState(false);
  const [value2, setValue2] = useState("");

  const navigate = useNavigate();

  const [base64Data, setBase64Data] = useState<string>("");
  const [base64Data2, setBase64Data2] = useState<string>("");
  const KYCI = JSON.parse(localStorage.getItem("KYCI") as string);

  console.log(base64Data);

  const CustomerDetails = JSON.parse(
    localStorage.getItem("customerData") as string
  );

  const fetchData = () => {
    axios
      .get(
        `https://cjmesvc3ag.execute-api.eu-west-1.amazonaws.com/qa/api/v1/kyc/${KYCI}`
      )
      .then((response) => {
        // Handle the successful response
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      Type: "soleproprietorship",
      DateOfIncorporation: "5921-31-22",
      BeneficialOwners: [
        {
          DateOfBirth:
            CustomerDetails.BusinessKyc.BeneficialOwners[0].DateOfBirth,
          FirstName: CustomerDetails.BusinessKyc.BeneficialOwners[0].FirstName,
          LastName: CustomerDetails.BusinessKyc.BeneficialOwners[0].LastName,
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
            data: base64Data,
            contentType: "image/jpg",
            filename: "mclovin1.jpg",
            size: 20,
          },
        },
      ],
      BusinessDocuments: [
        {
          DocumentType: "DRIVERS_LICENSE",
          data: base64Data2,
          contentType: "image/jpg",
          filename: "DriverLiscense.jpeg",
          size: 20,
        },
      ],
    },
  };

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setBase64Data(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        setBase64Data2(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    console.log(createKYC);
    axios
      .put(
        `https://cjmesvc3ag.execute-api.eu-west-1.amazonaws.com/qa/api/v1/kyc/${KYCI}`,
        createKYC
      )
      .then((response) => {
        localStorage.setItem(
          "KYCI-STATUS",
          JSON.stringify(response.data.KycIdentifier)
        );
        navigate("/kycStatus");
      })
      .catch((error) => {
        console.error("Error sending data to Postman:", error);
        console.log(createKYC);
      });
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

  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="md:w-[30%] h-[50vh]  md:px-6 sm:w-[40%] md:pb-[400px] bg-[#FFFBF1] rounded ">
        <b className="text-[13px]">Tips for uploading documents</b>
        <div className="flex md:pt-6">
          <div className="items-center">
            <div className="border-[#2f2e2e] border rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[20px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">
            All 4 Edges of the document should be visible
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className=" border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center border text-[7px] p-[3px] flex  ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[20px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">
            A dark/high contrast background should be used
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[20px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">
            At least 90% of the image should be the document
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[20px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">
            Should be at least 300dpi
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[20px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">
            Capture image from directly above the document
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[20px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">
            Make sure that the image is properly aligned, not rotated, tilted{" "}
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[20px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">
            No flash to reduce glare
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border border-[#2f2e2e] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[8px]" src={checkSymbol} alt="" />
            </div>
            <div className="h-[20px] m-auto border w-[1px]"></div>
          </div>
          <p className="text-[10px] ml-2 font-roboto">
            No black and white documents
          </p>
        </div>

        <div className="flex">
          <div className="items-center">
            <div className="border-[0.3px] border-[#111111] rounded-full w-[16px]  h-[16px] items-center  text-[7px] p-[3px] flex  ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
          </div>
          <p className="text-[10px] ml-2 font-roboto mb-9">No expired IDs</p>
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
                  <option value="">US-issued Driver’s License</option>
                  <option value="">US-issued State ID</option>
                  <option value="">International Passport</option>
                </select>
              </div>

              <p className="mt-6 mb-1 text-[13px] font-medium ">
                Copy of John Doe’s US-issued Driver’s License
              </p>
              <div className="mt-3 items-center">
                {!upload && (
                  <label
                    htmlFor="license1"
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
                        id="license1"
                        hidden
                        accept="image/x-png,image/jpeg,application/pdf"
                        onChange={(e) => {
                          handleFileInputChange(e as any);
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
                          <span className="ml-2 text-[#FFBD59]">Browse</span>
                        </div>
                        <p className="text-[11px] text-[#747A80] font-medium">
                          Supported file types: JPEG, PNG, PDF. Max file size
                          2mb
                        </p>
                      </div>
                    </div>
                  </label>
                )}

                {upload && (
                  <label className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] flex m-auto justify-between ">
                    <div className=" w-[90%]">
                      <div className="w-[80%] m-auto">
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

              {!upload2 && (
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
                        handleFileInputChange2(e as any);
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
                        <span className="ml-2 text-[#FFBD59]">Browse</span>
                      </div>
                      <p className="text-[11px] text-[#747A80] font-medium">
                        Supported file types: JPEG, PNG, PDF. Max file size 2mb
                      </p>
                    </div>
                  </div>
                </label>
              )}

              {upload2 && (
                <label className="text-sm py-8 border-2 border-dotted bg-[#F9FAFA] rounded-[13px] mt-3 flex m-auto justify-between ">
                  <div className=" w-[90%]">
                    <div className="w-[80%] m-auto">
                      <img className="w-[20px] " src={successFull} alt="" />
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
            {/* Buttons */}
            <div className="w-full">
              <div onClick={handleSubmit}>
                <Submit />
              </div>
              <div className="" onClick={handleSubmit}>
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
