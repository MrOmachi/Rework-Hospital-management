import { MdOutlineErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getKyc } from "../../../api";
import { useAppSelector } from "../../../app/hooks";

export const KycStatus = () => {
const { BusinessKyc , KycIdentifier } = useAppSelector((state) => state.kycInfo);

    if (KycIdentifier){
        getKyc(KycIdentifier).catch(()=>{
            
        });
    }

 switch (BusinessKyc.KycState) {
   case "VERIFIED":
     return <></>;
   case "PENDING":
     return <PendingKyc />;
   case "DENIED":
     return <DeniedKyc />;
   case "FAILED":
     return <FailedKyc />;
   case "RETRY":
     return <RetryKyc />;
   case "DOCUMENT":
    return <NoDocumentKyc />;
   default:
     return <UndoneKyc />;
 }
};

function UndoneKyc(){
    const navigate = useNavigate();
    return (
    <>
    <div className={`bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
    <span className="me-3 text-[20px]">
    <MdOutlineErrorOutline />
    </span>
        <p>
        Your account needs to be verified.
        <span 
            className="underline text-[#A06202] font-semibold cursor-pointer pl-2"
            onClick={() => navigate("/kyc")}>
            Verify your account now
        </span>
        </p>
    </div>
    </>
    )
}

function NoDocumentKyc(){
    const navigate = useNavigate();
    return (
    <>
    <div className={`bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
    <span className="me-3 text-[20px]">
    <MdOutlineErrorOutline />
    </span>
        <p>
        Your are yet to complete your document upload.
        <span 
            className="underline text-[#A06202] font-semibold cursor-pointer pl-2"
            onClick={() => navigate("/kyc")}>
            Verify your account now
        </span>
        </p>
    </div>
    </>
    )
}

function PendingKyc(){
    return (
    <>
    <div className={`font-semibold bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
    <span className="me-3 text-[20px]">
    <MdOutlineErrorOutline />
    </span>
            <p>
              KYC Verification pending, please check back soon
            </p>
    </div>
    </>
    )
}


function DeniedKyc(){
    return (
    <>
    <div className={`font-semibold bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
    <span className="me-3 text-[20px]">
    <MdOutlineErrorOutline />
    </span>
        <p>
        KYC verification failed and your account has been suspended due to incorrect information.
         <b>Please email contact@getcleva.com</b>
          if you believe this verification result is inaccurate.
        </p>
    </div>
    </>
    )
}

function FailedKyc(){
    const navigate = useNavigate();
    return (
    <>
    <div className={`font-semibold bg-[#FFE6E6] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
    <span className="me-3 text-[20px]">
    <MdOutlineErrorOutline />
    </span>
        <p>
        KYC verification failed.  
        <span 
            className="underline text-[#A06202] font-semibold cursor-pointer pl-2"
            onClick={() => navigate("/kyc")}>
            Click here to review and update your information
        </span>
        </p>
    </div>
    </>
    )
}

function RetryKyc(){
    const navigate = useNavigate();
    return (
    <>
    <div className={`font-semibold bg-[#FFE6E6] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
    <span className="me-3 text-[20px]">
    <MdOutlineErrorOutline />
    </span>
    <p>
        KYC verification failed please retry by  
        <span 
            className="underline text-[#A06202] font-semibold cursor-pointer pl-2"
            onClick={() => navigate("/kyc")}>
            clicking here to review and update your information for re-verification
        </span>
        </p>
    </div>
    </>
    )
}