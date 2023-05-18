import React, { useState } from "react";
import SaveAndContinue from "../../buttons/SaveAndContinue";
import Previous from "../../buttons/Previous";
import { DiCssTricks } from "react-icons/di";
import { useNavigate } from "react-router-dom";

function FormStep2() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    DoB: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    localStorage.setItem("form2Data", JSON.stringify(formData));
    event.preventDefault();
    navigate('/startKyc3')
  };

  const storedFormData = localStorage.getItem("formData");
  if (storedFormData) {
    const formData = JSON.parse(storedFormData);
    console.log(formData.value);

  }

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
                type="number"
                name="DoB"
                id=""
                value={formData.DoB}
                onChange={handleChange}
                className="text-[11px] border w-full py-2 pl-2 outline-none rounded-[10px]"
                placeholder="MM-DD-YYYY"
              />

              {/* <div className="mt-4 ">
                <input
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-[40%] text-[12px] py-2 
                px-2 rounded-md pl-3  font-[800] outline-none border"
                  placeholder=". . . . . . 1234"
                />
              </div> */}

              {/* BUTTONS */}
              <div className="flex justify-between mt-3">
                <div>
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
