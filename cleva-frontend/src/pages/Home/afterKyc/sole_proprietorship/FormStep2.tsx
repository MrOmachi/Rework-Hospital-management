import React, { useState } from "react";
import { DiCssTricks } from "react-icons/di";
import { useNavigate } from "react-router-dom";
import { Previous, SaveAndContinue } from "../../../buttons/Buttons";
import axios from "axios";
import Business from "../../profile/Business";

function FormStep2() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const handlePrevious = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/startKyc");
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    DoB: "",
  });

  const items = JSON.parse(localStorage.getItem("customerData") as string);

  const createKYC = {
    BusinessKyc: {
      BusinessName: items.BusinessKyc.BusinessName,
      BusinessRegistrationNumber: items.BusinessKyc.BusinessRegistrationNumber,
      Classification: items.BusinessKyc.Classification,
      ContactDetails: {
        PhoneNumber: items.PhoneNumber,
        Email: formData.email,
      },
      CountryOfIncorporation: items.BusinessKyc.CountryOfIncorporation,
      NationalIdentifier: "1234",
      RegisteredAddress: {
        StreetAddress: items.BusinessKyc.RegisteredAddress.StreetAddress,
        SecondStreetAddress:
          items.BusinessKyc.RegisteredAddress.SecondStreetAddress,
        City: items.BusinessKyc.RegisteredAddress.City,
        Country: items.BusinessKyc.RegisteredAddress.businessAddress,
        StateOrTerritory: items.BusinessKyc.RegisteredAddress.StateOrTerritory,
        Zipcode: items.BusinessKyc.RegisteredAddress.Zipcode,
        LGA: "Kosofe",
      },
      Type: "soleproprietorship",
      DateOfIncorporation: "5921-31-22",
      BeneficialOwners: [
        {
          DateOfBirth: formData.DoB,
          FirstName: formData.firstName,
          LastName: formData.lastName,
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
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === "" ||
      formData.DoB === ""
    ) {
      setError(true);
      return "Field can not be empty.";
    } else {
      localStorage.setItem("customerData", JSON.stringify(createKYC));
      navigate("/startKyc3");
    }
  };

  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="w-[25%] sm:w-[40%]">
        <div className="flex ">
          <div className="items-center">
            <div className="">
              <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px] ">
                1
              </p>
            </div>
            <div className="h-[10px] m-auto border w-[1px]"></div>
          </div>
          <b className="text-[10px] ml-2 font-roboto">Business Information</b>
        </div>
        <div className="flex">
          <div>
            <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[7px] pt-[3px]">
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

      <form onSubmit={handleSubmit} className="w-[75%] sm:w-[60%] md:w-[75%] ">
        <div className="w-[63%]">
          <div>
            <h3 className="font-semibold text-sm pb-5 ">
              Tell us about the Owner
            </h3>
            <p className="text-[10px] mb-11 sm:mb-5 ">
              Make sure you enter your information exactly as it appears on your{" "}
              <br />
              government-issued ID.
            </p>
            <div>
              {/* Form 1 */}
              <div className="flex mt-1 md:mt-2">
                <p className="text-[11px] md:text-[12px] text-black font-normal">
                  Legal Name
                </p>
                <p className="text-[6.5px] text-[#D31D1D]">
                  <DiCssTricks />
                </p>
              </div>
              <input
                type="text"
                name="firstName"
                id=""
                value={formData.firstName}
                onChange={handleChange}
                className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
                placeholder="First Name"
              />
              {error && formData.firstName === "" && (
                <p className="text-[11px] text-[#D31D1D]">
                  This field is required.
                </p>
              )}

              {/* Form 2 */}
              <input
                type="text"
                name="lastName"
                id=""
                value={formData.lastName}
                onChange={handleChange}
                className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px] mt-2"
                placeholder="Last Name"
              />
              {error && formData.lastName === "" && (
                <p className="text-[11px] text-[#D31D1D]">
                  This field is required.
                </p>
              )}

              {/* Form 3 */}
              <div className="flex mt-3 md:mt-8">
                <p className="text-[11px] md:text-[12px] text-black font-normal">
                  Email Address
                </p>
                <p className="text-[6.5px] text-[#D31D1D]">
                  <DiCssTricks />
                </p>
              </div>
              <input
                type="email"
                name="email"
                id=""
                value={formData.email}
                onChange={handleChange}
                className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
                placeholder="Email Address"
              />
              {error && formData.email === "" && (
                <p className="text-[11px] text-[#D31D1D]">
                  This field is required.
                </p>
              )}

              {/* Form 4 */}

              <div className="flex mt-3 md:mt-8">
                <p className="text-[11px] md:text-[12px] text-black font-normal">
                  Date of birth
                </p>
                <p className="text-[6.5px] text-[#D31D1D]">
                  <DiCssTricks />
                </p>
              </div>
              <input
                type="date"
                name="DoB"
                id=""
                value={formData.DoB}
                onChange={handleChange}
                className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
                placeholder="MM-DD-YYYY"
              />
              {error && formData.DoB === "" && (
                <p className="text-[11px] text-[#D31D1D]">
                  This field is required.
                </p>
              )}
              {/* BUTTONS */}
              <div className="flex justify-between mt-3">
                <div onClick={(e) => handlePrevious(e)}>
                  <Previous />
                </div>
                <div>
                  <SaveAndContinue />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormStep2;
