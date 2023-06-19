import { useState } from "react";
import { DiCssTricks } from "react-icons/di";
import { Continue, Previous } from "../../../components/Buttons/Buttons";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { setkycInfo } from "../../../features/Kyc/kycSlice";
interface IOwner{
  proceed: any;
  currentStep?: number;
  nextStep?: any;
  index: any;
}

function SoleOwner(props:IOwner) {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();
  const [owner , setOwner] = useState(BusinessKyc.BeneficiaryOwners[props.index] || {
      FirstName:"",
      LastName:"",
      DateOfBirth:""
  });

  const handlePrevious = () => {
    if(props.currentStep){
      props.nextStep(props?.currentStep - 1);
    }
  };

  const isButtonDisabled = 
  owner?.FirstName === ""
  || owner?.LastName  === ""
  || !owner?.DateOfBirth;

  const handleChange = (event:any) => {
    setOwner({
        ...owner,
       [event.target.name]: event.target.value
    })
  };

  const handleSubmit = () => {
    const BeneficiaryOwners:any = [owner];
        dispatch(
          setkycInfo({
            ...BusinessKyc,
            BeneficiaryOwners,
          })
        );
        props.proceed();
      };

return (
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
            value={owner.FirstName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                owner.FirstName === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="First Name"
          />

          {/* Form 2 */}
          <input
            type="text"
            name="LastName"
            id=""
            value={owner.LastName}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                owner.LastName === "" ? "bg-white" : "bg-[#FFF5D9]"
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
            value={owner.DateOfBirth}
            onChange={handleChange}
            className={`text-[13px] border mb-2 w-full py-2 pl-2 outline-none rounded-[10px] ${
                owner.DateOfBirth === "" ? "bg-white" : "bg-[#FFF5D9]"
            }`}
            placeholder="MM-DD-YYYY"
          />
          <br/>

          <div className="flex justify-between mt-2">
                    <div>
                      <Previous action={handlePrevious}/>
                    </div>
                    <div className="flex float-right relative">
                        <Continue action={handleSubmit} isButtonDisabled={isButtonDisabled}/>
                    </div>
          </div>
        </div>
  );
}
export default SoleOwner;
