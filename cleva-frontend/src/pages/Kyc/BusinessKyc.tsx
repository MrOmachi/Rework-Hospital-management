import { Timeline } from "./components/Features";
import KycDetails from "./pages/kycDetails";
import { useState } from "react";

function BusinessKYC() {
  const [step, setStep] = useState(1);

  return (
    <div className="flex my-20">
      
        <Timeline step={step} completed={[]}/>
        <KycDetails/>
      <div />
    </div>
  );
}
export default BusinessKYC;
