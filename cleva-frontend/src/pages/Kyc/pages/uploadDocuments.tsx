import { useEffect, useState } from "react";
import { SaveForLaterLong, UploadDocument } from "../../../components/buttons/Buttons";
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

export function UploadDocuments(props:ISteps) {

  const { BusinessKyc, KycIdentifier } = useAppSelector((state) => state.kycInfo);
  const [loading, setLoader] = useState(false);
  const navigate = useNavigate();

  const isDisabled = 
  BusinessKyc?.BeneficiaryOwners.every(owner => owner.Document?.data === null) ||
  BusinessKyc?.BusinessDocuments.every(doc => doc?.data !== null);

  const handleSave = ()=>{
    navigate("/");
    props?.saveForLater();
  }

  const handleSubmit = (e: any) => {
    // setLoader(true);
    console.log("so far so good:",BusinessKyc);
    props?.saveForLater();
    // updateKyc(KycIdentifier,{BusinessKyc:BusinessKyc}).then((response) => {
    //     setLoader(false);
    //     checkStatus(KycIdentifier);
    //   })
    //   .catch((error) => {
    //     setLoader(false);
    //   });
  };

  function checkStatus(KycIdentifier:any) {
    let intervalCount = 0;
    const interval = setInterval(() => {
     getKyc(KycIdentifier).then((response:any) => response.json())
        .then((response:any) => {
          if (response.data.AdditionalDetails.UploadProgress) {

            clearInterval(interval);
            if(props.currentStep){
                props.nextStep(props?.currentStep +1);
              }
          }
        })
        .catch((error:any) => {
          console.error('Error occurred during API call:', error);
        });
  
      intervalCount++;
      if (intervalCount >= 4) {
        clearInterval(interval);
        console.log('Interval ended after 20 seconds.');
      }
    }, 5000);
  }
  

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
                  <BeneficiaryDocument key={index} index={index}/>
                  )})
              }

            <h3 className="text-[14px] font-medium">Business Document</h3>
              { BusinessKyc.BusinessDocuments.map((doc,index)=>{
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

        {/* {loading && <Loader/>} */}
    </>
  );
}

export default UploadDocuments;
