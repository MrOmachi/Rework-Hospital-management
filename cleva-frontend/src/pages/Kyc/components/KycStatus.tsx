import { MdOutlineErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export function UndoneKyc(){
    const navigate = useNavigate();
    return (
    <>
    <div className={`font-semibold bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
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


export function PendingKyc(){
    const navigate = useNavigate();
    return (
    <>
    <div className={`font-semibold bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
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


export function DeniedKyc(){
    return (
    <>
    <div className={`font-semibold bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
    <span className="me-3 text-[20px]">
    <MdOutlineErrorOutline />
    </span>
        <p>
        Your account needs to be verified
        </p>
    </div>
    </>
    )
}

export function FailedKyc(){
    const navigate = useNavigate();
    return (
    <>
    <div className={`font-semibold bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
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

export function RetryKyc(){
    const navigate = useNavigate();
    return (
    <>
    <div className={`font-semibold bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
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