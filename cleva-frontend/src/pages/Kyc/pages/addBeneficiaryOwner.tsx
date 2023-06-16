import { Continue } from "../../../components/buttons/Buttons";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { DiCssTricks } from "react-icons/di";
import { setkycInfo } from "../../../redux/Kyc/kycSlice";
import { useState } from "react";

export function AddBeneficialOwner(props:any) {
    const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
    const [Owner, setOwner] = useState({});
    const dispatch = useAppDispatch();
    const isButtonDisabled = 
    BusinessKyc.Type === "" 
   || BusinessKyc.BusinessName === ""
   || BusinessKyc.BusinessRegistrationNumber === ""
   || BusinessKyc.Classification === ""
 
    const handleChange = (event:any) => {
       
        
      };
    
    const proceed = () => {
        let Owners = [...BusinessKyc.BeneficiaryOwners,Owner];
        // dispatch(
        //     setkycInfo({
        //         ...BusinessKyc,
        //         BeneficiaryOwners: Owners
        //     })
        //   );
        if(props.currentStep){
          props.nextStep(props?.currentStep +1);
        }
    };

    return (
        <form className="w-[75%] md:w-[75%] sm:w-65% sm:ml-12 h-screen pb-[55em]">
        {" "}
        <div className="w-[63%]">
          <h3 className="font-semibold text-[18px] -mt-1 ">
          Beneficial Owner
          </h3>
          <p className="text-[13px] mb-7 text-[#747A80]">
          Make sure you enter the information exactly as it appears on the government-issued ID.
        </p>
        <p className="text-[13px] mb-7 text-[#747A80]">
        Please add any individual who owns 25% or more of {BusinessKyc.BusinessName}
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
            name="FirstName"
            id=""
            value={BusinessKyc.BeneficiaryOwners[0].FirstName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.BeneficiaryOwners[0].FirstName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="First Name"
          />

          {/* Form 2 */}
          <input
            type="text"
            name="LastName"
            id=""
            value={BusinessKyc.BeneficiaryOwners[0].LastName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.BeneficiaryOwners[0].LastName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="Last Name"
          />

          <div className="flex ">
            <p className="text-[13px] font-normal pb-1 ">Date of birth</p>
            <p className="text-[6.5px] text-[#D31D1D]">
              <DiCssTricks />
            </p>
          </div>
          <input
            type="date"
            name="DateOfBirth"
            id=""
            value={BusinessKyc.BeneficiaryOwners[0].DateOfBirth}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
              BusinessKyc.BeneficiaryOwners[0].DateOfBirth === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="MM-DD-YYYY"
          />
        
        </div>


          <div className="relative flex float-right">
          <Continue onClick={proceed} isButtonDisabled={isButtonDisabled}/>
          </div>
        </div>
        <div />
      </form>
    )
}