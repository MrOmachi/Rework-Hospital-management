import { useAppSelector } from "../../../app/hooks";
import {  pencil } from "../../../Image";

interface ISteps{
  currentStep?: number;
  nextStep?: any;
}

function BeneficialOwners(props:ISteps) {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);

  const EditOwner = (index:any) =>{

    
  }

  const proceed = () => {
    if(props.currentStep){
      props.nextStep(props?.currentStep +1);
  }
  
};

  return (
    <form
    className="w-[75%] sm:w-[60%] md:w-[75%] h-[100vh]">
    <div className="w-[52%] ml-6">
      <div>
        <h3 className="font-semibold text-[20px] pb-3 ">
        Beneficial Owners
        </h3>

        <p className="text-[13px] mb-7 text-[#747A80]">
        Due to regulatory guidelines, we’re required to collect information on anyone who has significant ownership of your business
        </p>


        <p className="text-[13px] mb-7 text-[#747A80]">
        Please add any individual who owns 25% or more of {BusinessKyc.BusinessName}
         </p>
        
        <div className=" mt-5 ">
          <b className="lg:text-[15px] sm:text-[13px] pb-1 font-medium">
            Management & Ownership
          </b>
          {BusinessKyc?.BeneficiaryOwners.map((Owner,key)=>{
            return (
            <div key={key} className="relative flex justify-between rounded-[13px] border p-3 lg:text-[15px] sm:text-[13px] text-[#747A80] bg-[#FFFCF1]">
            <div>
            <p className="mb-2">
                {
                  <p className="space-x-2">
                    <span>
                      {Owner.FirstName}
                    </span>
                    <span>
                      {Owner.LastName}
                    </span>
                  </p>
                }
              </p>
            </div>
            <img
              className="xl:w-[15px] lg:w-[15px] md:w-[15px] sm:w-[12px] xs:w-[10px] absolute  xl:ml-[340px] lg:ml-[260px] md:ml-[270px] xs:ml-[110px]
              sm:ml-52  cursor-pointer"
              src={pencil}
              onClick={()=>EditOwner(key)}
              alt=""
            />
          </div>
            );
          })
        }
        </div>

          <div className="">
          <div className="mb-1">
            {/* add beneficarary */}
          </div>
          <div>
          <button type="button"
                onClick={(e) => proceed()}
                className={` text-[13px] font-bold  px-6 rounded-lg  mt-2 ${
                 BusinessKyc.BeneficiaryOwners[0].FirstName &&
                 BusinessKyc.BeneficiaryOwners[0].LastName &&
                 BusinessKyc.BeneficiaryOwners[0].DateOfBirth !== ""
                    ? "bg-[#FFBD59]"
                    : "bg-[#FFF5D9] text-[#5F5D5D]"
                }`}
              >
                Continue
              </button>
          </div>
        </div>

          
      </div>
    </div>
  </form>
  );
}
export default BeneficialOwners;
