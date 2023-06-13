import React, { useMemo, useState } from "react";
import countryList from "react-select-country-list";
// import Select from "react-select";
import { BsCheck } from "react-icons/bs";
import { DiCssTricks } from "react-icons/di";
import { AddBeneficialOwner2, Cancel } from "../../../buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/24/solid";

interface NonSoleDetails {
  firstName: string;
  lastName: string;
  DoB: string;
  email: string;
  beneficialAddress: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zipCode: string;
}

function NonSoleForm2Beneficiary() {
  const navigate = useNavigate();
  // const [error, setError] = useState(false);
  // const [value, setValue] = useState<string | null>();
  const [details, setDetails] = useState<NonSoleDetails>({
    firstName: "",
    lastName: "",
    DoB: "",
    email: "",
    beneficialAddress: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });
  console.log(details);

  const handleCancel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/nonSoleForm2");
  };

  const options = useMemo(
    () =>
      countryList()
        .getData()
        .map((country) => ({
          label: country.label,
          value: country.value,
        })),
    []
  );

  const handleDetails = (e:any) => {
    setDetails(e.target.name)
  }

  const handleBeneficiaryOwner = () => {
  navigate("/nonSoleForm2Beneficiary");
  }


  const btnCheck =
    details.DoB === "" ||
    details.address1 === "" ||
    details.address2 === "" ||
    details.beneficialAddress === "" ||
    details.city === "" ||
    details.state === "" ||
    details.firstName === "" ||
    details.lastName === "" ||
    details.email === "";

  // function changeHandler(newValue: SingleValue<string>, actionMeta: ActionMeta<string>): void {
  //   throw new Error("Function not implemented.");
  // }

  // console.log(btnCheck);

  // const { kycInfo } = useAppSelector((state) => state.kycInfo);
  // const dispatch = useAppDispatch();

  // const createKYC = {
  //   BusinessKyc: {
  //     BusinessName: kycInfo.businessName,
  //     BusinessRegistrationNumber: kycInfo.employerID,
  //     Classification: kycInfo.businessClassification,
  //     ContactDetails: {
  //       PhoneNumber: kycInfo.PhoneNumber,
  //       Email: "",
  //     },
  //     CountryOfIncorporation: kycInfo.businessAddress,
  //     NationalIdentifier: "1234",
  //     RegisteredAddress: {
  //       StreetAddress: kycInfo.StreetAddress,
  //       SecondStreetAddress: kycInfo.SecondStreetAddress,
  //       City: kycInfo.City,
  //       Country: kycInfo.businessAddress,
  //       StateOrTerritory: kycInfo.StateOrTerritory,
  //       Zipcode: kycInfo.Zipcode,
  //       LGA: "Kosofe",
  //     },
  //     Type: "soleproprietorship",
  //     DateOfIncorporation: "5921-31-22",
  //     BeneficialOwners: [
  //       {
  //         DateOfBirth: kycInfo.DoB,
  //         FirstName: kycInfo.firstName,
  //         LastName: kycInfo.lastName,
  //         NationalIdentifier: "1111",
  //         IdentificationDocument: {
  //           DocumentNumber: "111",
  //           DocumentType: "DRIVERS_LICENSE",
  //           IssuingCountry: "Nigeria",
  //           IssueDate: "5477-55-60",
  //           ExpirationDate: "6686-34-25",
  //         },
  //         Address: {
  //           StreetAddress: "11 adesoye street",
  //           SecondStreetAddress: "22 olatunde sule",
  //           City: "Lagos",
  //           Country: "Nigeria",
  //           StateOrTerritory: "Lagos",
  //           Zipcode: "100211",
  //           LGA: "Kosofe",
  //         },
  //         PercentageOwnership: 20.0,
  //         Document: {
  //           DocumentType: "DRIVERS_LICENSE",
  //           data: "SGVsbG8sIFdvcmxkIQ==",
  //           contentType: "image/jpg",
  //           filename: "mclovin1.jpg",
  //           size: 20,
  //         },
  //       },
  //     ],
  //     BusinessDocuments: [
  //       {
  //         DocumentType: "DRIVERS_LICENSE",
  //         data: "SGVsbG8sIFdvcmxkIQ==",
  //         contentType: "image/jpg",
  //         filename: "mclovin3.jpg",
  //         size: 20,
  //       },
  //       {
  //         DocumentType: "DRIVERS_LICENSE",
  //         data: "SGVsbG8sIFdvcmxkIQ==",
  //         contentType: "image/jpg",
  //         filename: "mclovin4.jpg",
  //         size: 20,
  //       },
  //     ],
  //   },
  // };

  // const changeHandler = (
  //    selectedOption: { label: string; value: string } | null
  //  ) => {
  //    if (selectedOption) {
  //      setValue(selectedOption.value);
  //    } else {
  //      setValue(null);
  //    }
  //  };

  //  function changeHandler(newValue: SingleValue<string>, actionMeta: ActionMeta<string>): void {
  //    throw new Error("Function not implemented.");
  //  }

  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="w-[20%] sm:w-[40%]">
        <div className="flex ">
          <div className="items-center">
            <div className="">
              <p className="border-[1px] rounded-full w-[16px]  h-[16px] flex text-[#FFBD59] text-[11px] justify-center items-center">
                <BsCheck />
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

      <div className="w-[80%] h-[90vh] mb-[40%]">
        <div className="w-[55%] px-3 pb-2 ">
          <div>
            <h3 className="font-semibold text-sm pb-5 ">Beneficial Owners</h3>
            <p className="mb-6 text-[#747A80] text-[10px]">
              Make sure you enter the information exactly as it appears on the
              government-issued ID.
            </p>
            <p className="text-[11px] text-[#747A80] font-semibold">
              Please add any individual who owns 25% or more of Tolus <br />{" "}
              Enterprises
            </p>
          </div>

          <div>
            <form action="">
              <div>
                <div>
                  <div className="flex mt-2 md:mt-3 space-x-1">
                    <label
                      htmlFor=""
                      className="text-[11px] md:text-[12px] pb-1 text-black font-normal "
                    >
                      Legal Name
                    </label>
                    <p className="text-[6.5px] text-[#D31D1D]">
                      <DiCssTricks />
                    </p>
                  </div>
                  <div className="mt-1">
                    <input
                      className="w-full text-[13px] rounded-lg"
                      type="text"
                      name="firstName"
                      value={details.firstName}
                      onChange={handleDetails}
                      id=""
                      placeholder="John"
                    />
                    <input
                      className="w-full text-[13px] rounded-lg my-2"
                      type="text"
                      name="lastName"
                      value={details.lastName}
                      onChange={handleDetails}
                      id=""
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <div className="flex mt-2 md:mt-3 space-x-1">
                    <label
                      htmlFor=""
                      className="text-[11px] md:text-[12px] pb-1 text-black font-normal "
                    >
                      Date of birth
                    </label>
                    <p className="text-[6.5px] text-[#D31D1D]">
                      <DiCssTricks />
                    </p>
                  </div>
                  <input
                    type="text"
                    name="DoB"
                    value={details.DoB}
                    onChange={handleDetails}
                    className="w-full rounded-lg mt-2 text-[12px]"
                    placeholder="12-12-1994"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex mt-2 md:mt-3 space-x-1">
                    <label
                      htmlFor=""
                      className="text-[11px] md:text-[12px] pb-1 text-black font-normal "
                    >
                      Email address
                    </label>
                    <p className="text-[6.5px] text-[#D31D1D]">
                      <DiCssTricks />
                    </p>
                  </div>
                  <input
                    type="text"
                    name="email"
                    value={details.email}
                    onChange={handleDetails}
                    className="w-full rounded-lg mt-2 text-[12px]"
                    placeholder="Johndoe@gmail.com"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor=""
                    className="text-[11px] md:text-[12px] pb-1 text-black font-normal"
                  >
                    Beneficial Owner's Address
                  </label>
                  <div>
                    {/* <Select
                      // options={options}
                      name="beneficialAddress"
                      value={details.beneficialAddress}
                      // onChange={changeHandler}
                    /> */}
                  </div>
                </div>
                <input
                  type="text"
                  name="address1"
                  value={details.address1}
                  onChange={handleDetails}
                  id=""
                  placeholder="Awr 122"
                  className="my-2 w-full rounded-lg text-[12px]"
                />
                <input
                  type="text"
                  name="address2"
                  value={details.address2}
                  onChange={handleDetails}
                  id=""
                  placeholder="Address Line 2"
                  className="my-2 w-full rounded-lg text-[12px]"
                />
                <input
                  type="text"
                  name="city"
                  onChange={handleDetails}
                  id=""
                  placeholder="Porg"
                  className="my-2 w-full rounded-lg text-[12px]"
                />
                <div>
                  <select
                    name="state"
                    value={details.state}
                    onChange={handleDetails}
                    id=""
                    className="w-full rounded-lg text-[12px]"
                  >
                    <option value="Lagos">Lagos</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Port Harcort">Port Harcort</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Kano">Kano</option>
                  </select>
                </div>
                <input
                  type="text"
                  name="ZipCode"
                  onChange={handleDetails}
                  id=""
                  placeholder="25551"
                  className="my-2 w-full rounded-lg text-[12px]"
                />
              </div>

              <div>
                {/* <div>
                  <AddBeneficialOwner2 />
                </div> */}

                <div className=" relative font-extrabold">
                  <button
                    disabled={btnCheck}
                    onClick={handleBeneficiaryOwner}
                    className={`w-full text-[13px] font-semibold p-2 rounded-md mt-5 border-2  ${
                      details.DoB &&
                      details.address1 &&
                      details.address2 &&
                      details.beneficialAddress &&
                      details.city &&
                      details.state &&
                      details.firstName &&
                      details.lastName &&
                      details.email !== ""
                        ? "bg-[#FFBD59]"
                        : "bg-[#FFF5D9]"
                    }`}
                  >
                    Add beneficial owner
                  </button>
                  <p className="absolute w-[12px] - ml-[65px] -mt-[26px] font-extrabold">
                    <PlusIcon />{" "}
                  </p>
                </div>

                <div onClick={(e) => handleCancel(e)}>
                  <Cancel />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NonSoleForm2Beneficiary;
