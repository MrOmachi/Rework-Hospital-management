import { DiCssTricks } from "react-icons/di";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {  setkycInfo } from "../../../redux/Kyc/kycSlice";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Previous,Continue } from "../../../components/buttons/Buttons";

interface ISteps{
  currentStep?: number;
  nextStep?: any;
}

function SoleOwner(props:ISteps) {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();

  const isButtonDisabled = BusinessKyc.BeneficiaryOwners[0].FirstName &&
  BusinessKyc.BeneficiaryOwners[0].LastName &&
  BusinessKyc.BeneficiaryOwners[0].DateOfBirth !== "";

  const handlePrevious = () => {
    if(props.currentStep){
      props.nextStep(props?.currentStep - 1);
    }
  };

  const handleChange = (event:any) => {
    dispatch(
        setkycInfo({
            ...BusinessKyc,
            BeneficiaryOwners:[
                {
                    ...BusinessKyc.BeneficiaryOwners[0],
                    [event.target.name]: event.target.value
                }
            ]
        })
      );
  };

  const proceed = () => {
    if(props.currentStep){
      props.nextStep(props?.currentStep +1);
    }
};

return (
    <form
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
        
          <div className="flex justify-between mt-2">
            <div onClick={(e) => handlePrevious()}>
               <Previous />
            </div>
            <div className="flex float-right relative">
                <Continue onClick={proceed} isButtonDisabled={isButtonDisabled}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  );
}
export default SoleOwner;
