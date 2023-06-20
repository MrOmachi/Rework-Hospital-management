import React, { useEffect, useState } from "react";
import { DiCssTricks } from "react-icons/di";
import { Cancel } from "../../../buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { checkSymbol, line } from "../../../../Image";
import ReactFlagsSelect from "react-flags-select";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { setkycInfoNonSole } from "../../../../features/KycSlice/kycSlice";

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
  // const [country, setCountry] = useState<string>("");
  const navigate = useNavigate();
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

  const { kycInfoNonSole } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();

  const handleCancel = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    navigate("/nonSoleForm2");
  };

  const handleDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      setkycInfoNonSole({ ...kycInfoNonSole, [e.target.name]: e.target.value })
    );
  };
  const handleDetails2 = (value: string) => {
    dispatch(
      setkycInfoNonSole({ ...kycInfoNonSole, beneficialAddress: value })
    );
  };

  const onSelectChange = (value: string) => {
    handleDetails2(value);
  };
  const handleBeneficiaryOwner2 = (e: any) => {
    e.preventDefault();

    const kycInfoNonSole = JSON.parse(
      localStorage.getItem("kycInfoNonSole") as string
    );

    localStorage.setItem(
      "kycInfoNonSole",
      JSON.stringify([...[kycInfoNonSole]])
    );
    
    navigate("/verifyBeneficiary");
  };

  const handleBeneficiaryOwner = () => {
    navigate("/");
  };

  useEffect(() => {
    localStorage.setItem("details", JSON.stringify(details));
  }, [details]);

  // useEffect(() => {
  //   const storedDetails = localStorage.getItem("details");
  //   if (storedDetails) {
  //     setDetails(JSON.parse(storedDetails));
  //   }
  // }, []);

  const btnCheck =
    kycInfoNonSole.firstName === "" ||
    kycInfoNonSole.lastName === "" ||
    kycInfoNonSole.DoB === "" ||
    kycInfoNonSole.email === "" ||
    kycInfoNonSole.beneficialAddress === "" ||
    kycInfoNonSole.address1 === "" ||
    kycInfoNonSole.city === "" ||
    kycInfoNonSole.state === "";

  return (
    <div className="flex justify-evenly w-full mt-14">
      <div className="w-[25%] md:w-[25%] sm:w-[35%]">
        <div className="flex">
          <div className="items-center">
            <div className="border border-[#FFBD59]  rounded-full w-[16px]  h-[16px] flex items-center  text-[8px] justify-center ">
              <img className="w-[7px]" src={checkSymbol} alt="" />
            </div>
            <img className="h-[25px] m-auto" src={line} alt="" />
          </div>
          <p className="text-[11px]  ml-2 font-medium">Business Information</p>
        </div>

        <div className="flex">
          <div>
            <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center text-[#747A80] text-[8px] justify-center flex">
              2
            </p>
            <div className="h-[25px] m-auto border w-[1px]"></div>
          </div>
          <div className="flex text-[11px] font-medium   ml-2">
            Beneficiary Owners
          </div>
        </div>

        <div className="flex">
          <div>
            <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center justify-center text-[#747A80] flex text-[8px]">
              3
            </p>
          </div>
          <div className="text-[#747A80] text-[11px]  ml-2">
            Review & Submit
          </div>
        </div>
      </div>

      <div className="w-[75%] md:w-[75%] sm:w-65% sm:ml-12 pb-[4em]">
        <div className="w-[63%] px-3 pb-2 ">
          <div>
            <h3 className="font-semibold text-[18px] pb-3  ">
              Beneficial Owners
            </h3>
            <p className=" text-[#747A80] text-[13px]">
              Make sure you enter the information exactly as it appears on the
              government-issued ID.
            </p>
            <p className="text-[13px] text-[#747A80] font-semibold py-6">
              Please add any individual who owns 25% or more of Tolus
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
                      className="text-[13px]  pb-1 text-[#747A80] font-medium "
                    >
                      Legal Name
                    </label>
                    <p className="text-[6.5px] text-[#D31D1D]">
                      <DiCssTricks />
                    </p>
                  </div>
                  <div className="mt-1">
                    <input
                      className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                        kycInfoNonSole.firstName === ""
                          ? "bg-white"
                          : "bg-[#FFF5D9]"
                      }`}
                      type="text"
                      name="firstName"
                      value={kycInfoNonSole.firstName}
                      onChange={handleDetails}
                      id=""
                      placeholder="John"
                    />
                    <input
                      className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                        kycInfoNonSole.lastName === ""
                          ? "bg-white"
                          : "bg-[#FFF5D9]"
                      }`}
                      type="text"
                      name="lastName"
                      value={kycInfoNonSole.lastName}
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
                      className="text-[13px]  pb-1 text-[#747A80] font-medium "
                    >
                      Date of birth
                    </label>
                    <p className="text-[6.5px] text-[#D31D1D]">
                      <DiCssTricks />
                    </p>
                  </div>
                  <input
                    type="date"
                    name="DoB"
                    value={kycInfoNonSole.DoB}
                    onChange={handleDetails}
                    className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                      kycInfoNonSole.DoB === "" ? "bg-white" : "bg-[#FFF5D9]"
                    }`}
                    placeholder="12-12-1994"
                  />
                </div>

                <div className="mt-5">
                  <div className="flex mt-2 md:mt-3 space-x-1">
                    <label
                      htmlFor=""
                      className="text-[13px]  pb-1 text-[#747A80] font-medium "
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
                    value={kycInfoNonSole.email}
                    onChange={handleDetails}
                    className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                      kycInfoNonSole.email === "" ? "bg-white" : "bg-[#FFF5D9]"
                    }`}
                    placeholder="Johndoe@gmail.com"
                  />
                </div>

                <div className="mt-7">
                  <label
                    htmlFor=""
                    className="text-[15px] md] pb-1 text[#747A80]k font-semibold"
                  >
                    Beneficial Owner's Address
                  </label>
                  <div>
                    {/* <div className="mt-2"> */}
                    <div className="mt-2">
                      <ReactFlagsSelect
                        className={`text-[10px] mb-2 w-full rounded-lg ${
                          kycInfoNonSole.beneficialAddress === ""
                            ? "bg-white"
                            : "bg-[#FFF5D9]"
                        }`}
                        selected={kycInfoNonSole.beneficialAddress}
                        countries={["US", "GB", "NG"]}
                        onSelect={onSelectChange}
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="text"
                  name="address1"
                  value={kycInfoNonSole.address1}
                  onChange={handleDetails}
                  id=""
                  placeholder="Address line 1"
                  className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                    kycInfoNonSole.address1 === "" ? "bg-white" : "bg-[#FFF5D9]"
                  }`}
                />
                <input
                  type="text"
                  name="address2"
                  value={kycInfoNonSole.address2}
                  onChange={handleDetails}
                  id=""
                  placeholder="Address Line 2"
                  className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                    kycInfoNonSole.address2 === "" ? "bg-white" : "bg-[#FFF5D9]"
                  }`}
                />
                <input
                  type="text"
                  name="city"
                  value={kycInfoNonSole.city}
                  onChange={handleDetails}
                  id=""
                  placeholder="City"
                  className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                    kycInfoNonSole.city === "" ? "bg-white" : "bg-[#FFF5D9]"
                  }`}
                />
                <input
                  type="text"
                  name="state"
                  value={kycInfoNonSole.state}
                  onChange={handleDetails}
                  id=""
                  placeholder="State"
                  className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                    kycInfoNonSole.state === "" ? "bg-white" : "bg-[#FFF5D9]"
                  }`}
                />
                <input
                  type="text"
                  name="zipCode"
                  value={kycInfoNonSole.zipCode}
                  onChange={handleDetails}
                  id=""
                  placeholder="zipCode"
                  className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                    kycInfoNonSole.zipCode === "" ? "bg-white" : "bg-[#FFF5D9]"
                  }`}
                />
              </div>

              <div>
                <div className="font-extrabold">
                  <button
                    disabled={btnCheck}
                    onClick={handleBeneficiaryOwner2}
                    className={`  w-full text-[15px] font-semibold p-3 rounded-lg mt-5 ${
                      kycInfoNonSole.firstName &&
                      kycInfoNonSole.lastName &&
                      kycInfoNonSole.DoB &&
                      kycInfoNonSole.email &&
                      kycInfoNonSole.beneficialAddress &&
                      kycInfoNonSole.address1 &&
                      kycInfoNonSole.city &&
                      kycInfoNonSole.state !== ""
                        ? "bg-[#FFBD59]"
                        : "bg-[#FFF5D9]"
                    }`}
                  >
                    Add Beneficial Owner
                  </button>
                </div>

                <div className=" font-extrabold">
                  <button
                    onClick={handleBeneficiaryOwner}
                    className="w-full text-[15px] font-semibold p-3 rounded-lg mt-2 border-[#747A80] border bg-[#FAFAFA]"
                  >
                    Cancel
                  </button>
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
