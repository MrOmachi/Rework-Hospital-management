import { useState } from "react";
import { SaveForLaterLong, UploadDocument } from "../../../components/Buttons/Buttons";
import { useAppSelector } from "../../../app/hooks";
import { getKyc, updateKyc } from "../../../api";
import { BeneficiaryDocument } from "../components/BeneficiaryDocument";
import Loader from "../../../components/PopUps/Loader";
import { BusinessDocument } from "../components/BusinessDocuments";
import { useNavigate } from "react-router-dom";

interface ISteps{
  currentStep?: number;
  nextStep?: any;
  saveForLater?: any;
}

function UploadProgress(progress:any[]) {
  const IN_PROGRESS = progress.some((doc) => doc.status === "IN_PROGRESS");
  const FAILED = progress.some((doc) => doc.status === "FAILED");
  const CORRUPT = progress.some((doc) => doc.status === "CORRUPT");

  if (IN_PROGRESS) {
    return "IN_PROGRESS";
  } else if (FAILED || CORRUPT) {
    return "FAILED";
  } else {
    return "SUCCESSFUL";
  }
}

export function UploadDocuments(props:ISteps) {

  const { BusinessKyc, KycIdentifier } = useAppSelector((state) => state.kycInfo);
  const [loading, setLoader] = useState(false);
  const navigate = useNavigate();

  const isDisabled = 
  BusinessKyc?.BeneficialOwners?.every(owner => owner.Document?.data === null) ||
  BusinessKyc?.BusinessDocuments?.every(doc => doc?.data === null);

  const handleSave = ()=>{
    navigate("/");
    props?.saveForLater();
  }

  const handleSubmit = async (e: any) => {
    setLoader(true);
    console.log('Final data:', BusinessKyc);
    await updateKyc(KycIdentifier,{BusinessKyc:BusinessKyc}).then((response) => {
       checkProgress(KycIdentifier);
      })
      .catch((error) => {
        setLoader(false);
      });
  };

  function checkProgress(KycIdentifier:any) {
    // let intervalCount = 0;
    const interval = setInterval(() => {
     getKyc(KycIdentifier).then((response:any) => {
          if (response.data.AdditionalDetails.UploadProgress) {
            const status = UploadProgress(response.data.AdditionalDetails.UploadProgress);
            console.log('Progress', status);
            if (status === "SUCCESSFUL" || status === "FAILED") {
              setLoader(false);
              clearInterval(interval);
              if (props.currentStep) {
                props.nextStep(props.currentStep + 1);
              }
            }
          }
        })
        .catch((error:any) => {
          console.error('Error occurred during API call:', error);
        });
      // intervalCount++;
      // if (intervalCount >= 6) {  
      //   setLoader(false);
      //   clearInterval(interval);
      //   console.log('Interval ended after 30 seconds.');
      // }
    }, 5000);
  }

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
              { BusinessKyc?.BeneficialOwners?.map((owner,index)=>{
                return(
                  <BeneficiaryDocument key={index} index={index}/>
                  )})
              }

            <h3 className="text-[14px] font-medium">Business Document</h3>
              { BusinessKyc?.BusinessDocuments?.map((doc,index)=>{
                return(
                  <BusinessDocument key={index} index={index}/>   
                  )})
              }
                    
              <div className="w-full">
                <UploadDocument 
                  action={handleSubmit} 
                  isButtonDisabled={isDisabled} 
                  loading={loading}/>
                <SaveForLaterLong action={handleSave} />
              </div>


            </form>
          </div>
        </div>
      <br/>
      <br/>
      <br/>
      <br/>

        {loading && <Loader/>}
    </>
  );
}

export default UploadDocuments;
