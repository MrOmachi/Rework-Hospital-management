import React, { useState } from "react";
import user_img from "../../../asset/kyc/user.jpg";
import { useNavigate } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useAppSelector } from "../../../app/hooks";

interface Pdetails {
  id: number;
  key: string;
  value: string;
}

export default function ProfileBeforeEdit() {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);
  const { kycStatus } = useAppSelector((state) => state.kycInfo)
  console.log(kycStatus);



  const personDetails: Pdetails[] = [
    {
      id: 1,
      key: "First Name",
      value: "Tolu",
    },
    {
      id: 2,
      key: "Last Name",
      value: "Obi",
    },
    {
      id: 3,
      key: "Email Address",
      value: "tolu@gmail.com",
    },
    {
      id: 4,
      key: "Phone Number",
      value: "24224234242",
    },
    {
      id: 5,
      key: "Country of Residence",
      value: "United States",
    },
  ];



  return (
    <div className=" w-[98%] pt-4 pb-[2em] ">
      <header>
        <div 
        className={` ${kycStatus === "PENDING" ? "font-semibold": null} bg-[#F2F2F2] px-3 flex items-center mb-4 py-3 text-[13px] text-[#111111] rounded-md`}>
          <span className="me-3 text-[20px]">
            <MdOutlineErrorOutline />
          </span>

          {kycStatus === "PENDING" ? (
            <p>
              KYC Verification pending, please check back soon
            </p>
          ) : (
            <p>
              Your account needs to be verified.
              <span
                onClick={() => navigate("/startKyc")}
                className="underline cursor-pointer ps-3 text-[#A06202] font-semibold ">
                Verify your account now
              </span>
            </p>
          )}
        </div>

        <section>
          {/* <p className="text-[#787979] text-[14px]">
      Dislay Picture
     </p> */}
          <div className="pt-[1em] flex items-start gap-6">
            {!image && (
              <span className=" rounded-full h-[100px] bg-[#F2F2F2] text-[40px] border-[3px] border-[#cccccc] text-center pt-4 w-[100px]">
                <b>
                  TA
                </b>
              </span>
            )}
          </div>
        </section>
      </header>

      <section className=" border max-h-[48vh] border-[#aaa9a9] mt-10 px-12 py-4 text-[14px] w-[88%] rounded-xl ">
        <div>
          <header className="text-[#787979] pb-6">Personal Information</header>
          <div className="flex items-start justify-between">
            <div className=" grid grid-cols-2 w-[70%] ">
              {personDetails.map((info) => {
                return (
                  <div className="pb-4" 
                  key={info.id}>
                    <p>{info.key}</p>
                    <b>{info.value}</b>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => navigate("/profile/edit")}
              className="border-2 border-[#9a9a9a] py-3 px-8 text-[#787979]  rounded-[8px] "
            >
              Edit
            </button>
          </div>
        </div>

        <header className="text-[#787979] pt-6">Business Information</header>
        <div className="flex items-start justify-between">
          <div className=" grid grid-cols-2 w-[70%] ">
            <div className="pt-6">
              <p>Business Name</p>
              <b>Tolu's Enterprise</b>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
