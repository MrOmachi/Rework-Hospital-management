import { DiCssTricks } from "react-icons/di";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {  setkycInfo } from "../../../redux/Kyc/kycSlice";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Previous } from "../../../components/buttons/Buttons";
import { useState } from "react";

interface ISteps{
  currentStep?: number;
  nextStep?: any;
}

function BeneficialOwners(props:ISteps) {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const [beneficiaryOwners, setBeneficiaryOwners] = useState(BusinessKyc.BeneficiaryOwners);
  const dispatch = useAppDispatch();

  const handlePrevious = (e:any) => {
    if(props.currentStep){
      props.nextStep(props?.currentStep - 1);
    }
  };

  const handleChange = (event:any) => {
   
  };


  const handleSubmit = () => {
    dispatch(
      setkycInfo({
        ...BusinessKyc,
        BeneficiaryOwners:beneficiaryOwners
      })
    );
    if(props.currentStep){
      props.nextStep(props?.currentStep +1);
    }
};

  return (
    <form
    onSubmit={handleSubmit}
    className="w-[75%] sm:w-[60%] md:w-[75%] h-[100vh]"
  >
    <div className="w-[52%] ml-6">
      <div>
        <h3 className="font-semibold text-[20px] pb-3 ">
          Tell us about the Owner
        </h3>
        <p className="text-[13px] mb-7 text-[#747A80]">
          Make sure you enter your information exactly as it appears on your
          government-issued ID.
        </p>
        <div>
          {/* Form 1 */}
          <div className="flex mt-1 md:mt-2">
            <p className="text-[13px] font-normal pb-1 ">Legal Name</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="text"
            name="firstName"
            id=""
            value={beneficiaryOwners[0].FirstName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.BeneficiaryOwners[0].FirstName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="First Name"
          />

          {/* Form 2 */}
          <input
            type="text"
            name="lastName"
            id=""
            value={beneficiaryOwners[0].LastName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.BeneficiaryOwners[0].LastName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Last Name"
          />

          {/* Form 3
          <div className="flex mt-6">
            <p className="text-[13px] font-normal pb-1 ">Email Address</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="email"
            name="email"
            id=""
            value={BusinessKyc.ContactDetails.Email}
            onChange={handleChange}
            className={`text-[13px] border mb-6 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.ContactDetails.Email === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Email Address"
          /> */}

          {/* Form 4 */}

          <div className="flex ">
            <p className="text-[13px] font-normal pb-1 ">Date of birth</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="date"
            name="DoB"
            id=""
            value={beneficiaryOwners[0].DateOfBirth}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.BeneficiaryOwners[0].DateOfBirth === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="MM-DD-YYYY"
          />
          {/* BUTTONS */}


          <div className="flex justify-between mt-2">
                <div className="font-extrabold">
                  <button
                    onClick={(e)=>{}}
                    className={`  w-full text-[15px] font-semibold p-3 rounded-lg mt-5 ${
                        BusinessKyc.BeneficiaryOwners[0].FirstName &&
                        BusinessKyc.BeneficiaryOwners[0].LastName &&
                        BusinessKyc.ContactDetails.Email &&
                        BusinessKyc.BeneficiaryOwners[0].DateOfBirth !== ""
                        ? "bg-[#FFBD59]"
                        : "bg-[#FFF5D9]"
                    }`}
                  >
                    Add Beneficial Owner
                  </button>
                </div>
            </div>

          <div className="flex justify-between mt-2">
            <div onClick={(e) => handlePrevious(e)}>
              <Previous />
            </div>
            <div className="flex float-right relative">
              <button
                className={` text-[13px] font-bold  px-6 rounded-lg  mt-2 ${
                 beneficiaryOwners[0].FirstName &&
                 beneficiaryOwners[0].LastName &&
                 beneficiaryOwners[0].DateOfBirth !== ""
                    ? "bg-[#FFBD59]"
                    : "bg-[#FFF5D9] text-[#5F5D5D]"
                }`}
              >
                Save and Continue
              </button>
              <p className="absolute text-[21px] font-extrabold  mt-[17px] ml-[144px] text-[#5F5D5D]">
                <MdKeyboardArrowRight />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}
export default BeneficialOwners;
