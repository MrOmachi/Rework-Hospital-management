import { E164Number } from "libphonenumber-js/types";
import React, { useMemo, useState } from "react";
import countryList from "react-select-country-list"
import Select from "react-select";
import { BsCheck } from "react-icons/bs";
import { DiCssTricks } from "react-icons/di";
import { AddBeneficialOwner2, Cancel } from "../../../buttons/Buttons";
import { useNavigate } from "react-router-dom";
// import countryList from "react-select-country-list";

function NonSoleForm2Beneficiary() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [value, setValue] = useState<string | null>();

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

  const changeHandler = (
    selectedOption: { label: string; value: string } | null
  ) => {
    if (selectedOption) {
      setValue(selectedOption.value);
    } else {
      setValue(null);
    }
  };

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
                      id=""
                      placeholder="John"
                    />
                    <input
                      className="w-full text-[13px] rounded-lg my-2"
                      type="text"
                      name="lastName"
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
                    <Select
                      options={options}
                      name="beneficialAddress"
                      value={options.find((option: any) => option.value === value)}
                      onChange={changeHandler}
                    />
                  </div>
                </div>
                <input
                  type="text"
                  name="address1"
                  id=""
                  placeholder="Awr 122"
                  className="my-2 w-full rounded-lg text-[12px]"
                />
                <input
                  type="text"
                  name="address2"
                  id=""
                  placeholder="Address Line 2"
                  className="my-2 w-full rounded-lg text-[12px]"
                />
                <input
                  type="text"
                  name="city"
                  id=""
                  placeholder="Porg"
                  className="my-2 w-full rounded-lg text-[12px]"
                />
                <div>
                  <select
                    name="state"
                    id=""
                    className="w-full rounded-lg text-[12px]"
                  >
                    <option value="">Alabama</option>
                    <option value="">Alabama</option>
                    <option value="">Alabama</option>
                    <option value="">Alabama</option>
                    <option value="">Alabama</option>
                  </select>
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="25551"
                  className="my-2 w-full rounded-lg text-[12px]"
                />
              </div>

              <div>
                <div>
                  <AddBeneficialOwner2 />
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
