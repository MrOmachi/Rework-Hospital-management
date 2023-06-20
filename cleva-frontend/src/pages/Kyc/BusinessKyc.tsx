/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { DocumentGuide, Timeline } from "./components/Features";
import BeneficialOwners from "./pages/beneficiaryOwners";
import KycDetails from "./pages/kycDetails";
import ReviewKyc from "./pages/reviewKyc";
import UploadDocuments from "./pages/uploadDocuments";
import CompletedKyc from "./pages/completedKyc";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setkycInfo } from "../../features/Kyc/kycSlice";
import { ToastContainer, toast } from "react-toastify";

function BusinessKYC() {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();
  const [index, setIndex] = useState(0);
  const [step, setStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([0]);
  const [opened, setOpenForm] = useState(false);

  const changeStep = (next: number) => {
    if (next > step) {
      setCompletedSteps([...completedSteps, step]);
      setStep(next);
    } else {
      setCompletedSteps(completedSteps.filter((completedStep) => completedStep !== step));
      setStep(next);
    }
    window.scrollTo(0, 0);
  };

  const saveForLater = () => {
    toast.success("saved successfully!");
    localStorage.setItem("BusinessKyc", JSON.stringify(BusinessKyc));
    dispatch(setkycInfo(BusinessKyc));
  };

  useEffect(() => {
    const item: any = localStorage.getItem("BusinessKyc");
    const businessKyc: any = JSON.parse(item);
    if (businessKyc) {
      dispatch(setkycInfo(businessKyc));
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex my-20">
      {step < 4 && <Timeline step={step} completed={completedSteps} />}
      {step === 4 && <DocumentGuide />}

      {step === 1 && <KycDetails currentStep={step} nextStep={changeStep} />}
      {step === 2 && (
        <BeneficialOwners
          opened={opened}
          openForm={setOpenForm}
          currentStep={step}
          nextStep={changeStep}
          index={index}
          setIndex={setIndex}
        />
      )}
      {step === 3 && (
        <ReviewKyc
          saveForLater={saveForLater}
          currentStep={step}
          openForm={setOpenForm}
          nextStep={changeStep}
          setIndex={setIndex}
        />
      )}
      {step === 4 && <UploadDocuments saveForLater={saveForLater} currentStep={step} nextStep={changeStep} />}
      {step === 5 && <CompletedKyc />}

      <ToastContainer />
    </div>
  );
}

export default BusinessKYC;
