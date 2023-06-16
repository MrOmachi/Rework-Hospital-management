import { useState } from "react";
import { DocumentGuide, Timeline } from "./components/Features";
import BeneficialOwners from "./pages/beneficiaryOwners";
import KycDetails from "./pages/kycDetails";
import ReviewKyc from "./pages/reviewKyc";
import UploadDocuments from "./pages/uploadDocuments";
import CompletedKyc from "./pages/completedKyc";
import { useAppSelector } from "../../app/hooks";
import SoleOwner from "./pages/soleOwner";

function BusinessKYC() {
    const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([0]);

  const changeStep = (next: number) => {
    if(next > step){
        setCompletedSteps([...completedSteps, step]);
        setStep(next);
    }else{
        setCompletedSteps(completedSteps.filter((completedStep) => completedStep !== step));
        setStep(next);
    }
  };

  return (
    <div className="flex my-20">
      {step < 4 && <Timeline step={step} completed={completedSteps} />}
      {step === 4 && <DocumentGuide />}

      {step === 1 && <KycDetails currentStep={step} nextStep={changeStep} />}
      {step === 2 && (
        BusinessKyc.Type!=='Sole Proprietorship' ? 
      <BeneficialOwners currentStep={step} nextStep={changeStep} />:
      <SoleOwner currentStep={step} nextStep={changeStep}/>
    )}
      {step === 3 && <ReviewKyc currentStep={step} nextStep={changeStep} />}
      {step === 4 && <UploadDocuments currentStep={step} nextStep={changeStep} />}
      {step === 5 && <CompletedKyc/>}
    </div>
  );
}

export default BusinessKYC;