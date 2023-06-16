import { useState } from "react";
import { SaveForLaterLong } from "../../../components/buttons/Buttons";
import axios from "axios";
import BeneficiaryUpload from "../components/uploadBeneficiaryDocument";
import { useAppSelector } from "../../../app/hooks";

interface ISteps{
  currentStep?: number;
  nextStep?: any;
}

export function UploadDocuments(props:ISteps) {

  const { BusinessKyc, KycIdentifier } = useAppSelector((state) => state.kycInfo);
    const [loading, setLoader] = useState(false);
  

  const handleSubmit = (e: any) => {
    e.preventDefault();

    axios
      .put(
        `https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/kyc/${KycIdentifier}`,
        BusinessKyc
      )
      .then((response) => {
        // handleInterval();
        if(props.currentStep){
          props.nextStep(props?.currentStep +1);
        }
      })
      .catch((error) => {
      });
  };

 
  return (
    <>

        <div className="md:w-[70%] h-[120vh] sm:w-[60%] ml-16">
          <div className="w-[60%]">
            <h3 className="font-semibold  text-[18px] py-5 ">
              Additional documents required
            </h3>
            <p className="text-[14px] text-[#747A80] mb-10 sm:mb-5 ">
              To complete your KYC verification, please submit a
              document for review.
            </p>

            <form className="mt-6 ">
              

              { BusinessKyc.BeneficiaryOwners.map(()=>{
              return(
                  <BeneficiaryUpload/>
                  )})
              }
                    
              <div className="w-full">
                <div className="font-extrabold mt-1">
                    <button disabled={loading}
                      onClick={(e) => {
                          handleSubmit(e);
                      }}
                      className={(loading ? `bg-[#FFF5D9] `:null) +` text-[15px] font-bold p-3 w-full rounded-lg mt-8 `}
                    >
                      {loading ? "Uploading...":"Upload documents"}
                    </button>
                </div>
                <div className="">
                  <SaveForLaterLong />
                </div>
              </div>


            </form>
          </div>
        </div>
    </>
  );
}

export default UploadDocuments;
