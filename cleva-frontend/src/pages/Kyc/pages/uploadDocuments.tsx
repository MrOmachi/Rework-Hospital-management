import { useEffect, useState } from "react";
import { SaveForLaterLong, Upload } from "../../../components/buttons/Buttons";
import { useAppSelector } from "../../../app/hooks";
import { updateKyc } from "../../../api";
import { BeneficiaryDocument } from "../components/BeneficiaryDocument";
import Loader from "../../../components/PopUps/Loader";
import { BusinessDocument } from "../components/BusinessDocuments";

interface ISteps{
  currentStep?: number;
  nextStep?: any;
}

export function UploadDocuments(props:ISteps) {

  const { BusinessKyc, KycIdentifier } = useAppSelector((state) => state.kycInfo);
    const [loading, setLoader] = useState(false);
  
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoader(true);
    updateKyc(KycIdentifier,BusinessKyc).then((response) => {
        setLoader(true);
        // handleInterval();
        if(props.currentStep){
          props.nextStep(props?.currentStep +1);
        }
      })
      .catch((error) => {
        setLoader(true);
      });
  };

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Optional: Adds smooth scrolling animation
    });
},[])

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
              

            <h3 className="text-[14px] font-medium">Owner Document</h3>
              { BusinessKyc.BeneficiaryOwners.map((owner,index)=>{
                return(
                  <BeneficiaryDocument index={index} loading={loading}/>
                  )})
              }

            <h3 className="text-[14px] font-medium">Business Document</h3>
              { BusinessKyc.BusinessDocuments.map((doc,index)=>{
                return(
                  <BusinessDocument index={index} loading={loading}/>   
                  )})
              }
                    
              <div className="w-full">
                <Upload action={handleSubmit} loading={loading}/>
                <SaveForLaterLong />
              </div>


            </form>
          </div>
        </div>
        {loading && <Loader/>}
    </>
  );
}

export default UploadDocuments;
