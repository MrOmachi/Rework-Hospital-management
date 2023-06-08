import React from "react";
import user_img from "../../../asset/kyc/user.jpg";
import { useNavigate } from "react-router-dom";

interface Pdetails {
  id: number;
  key: string;
  value: string;
}

export default function Profile() {
  const navigate = useNavigate();

  const personDetails: Pdetails[] = [
    {
      id: 1,
      key: "First Name",
      value: "Tolu",
    },
    {
      id: 2,
      key: "Last Name",
      value: "Alabi",
    },
    {
      id: 3,
      key: "Email Address",
      value: "tolu@gmail.com",
    },
    {
      id: 4,
      key: "Phone Number",
      value: "+234787823909",
    },
    {
      id: 5,
      key: "Country of Residence",
      value: "United States",
    },
  ];

  return (
    <div className=" w-[88%] ">
      <header>
        {/* <p className=" bg-[#FFF5D9] px-3  mt-10 py-3 text-[13px] text-[#111111] rounded-md ">
     Your account needs to be verified.
     <span className="underline text-black font-semibold ">
      Verify your account now
     </span>
    </p> */}
        <ul className="flex mt-10 mb-8 text-sm space-x-5 border-b w-[35%]   ">
          <li
            onClick={() => navigate("/profile")}
            className=" cursor-pointer active:border-b-2 border-black pb-3 
      hover:border-b-2"
          >
            Profile
          </li>
          <li
            onClick={() => navigate("/business")}
            className=" cursor-pointer active:border-b-2 border-black pb-3 hover:border-b-2"
          >
            Business
          </li>
          <li
            onClick={() => navigate("/controller")}
            className=" cursor-pointer active:border-b-2 border-black pb-3 hover:border-b-2"
          >
            Beneficial Owners
          </li>
        </ul>

        <section>
          {/* <p className="text-[#787979] text-[14px]">Display Picture</p> */}
          <div className="pt-[1em] flex items-center gap-6">
            <span className=" rounded-full h-[100px] bg-[#F2F2F2] text-[40px] border-[3px] border-[#cccccc] w-[100px] text-center pt-4">
              <b>TA</b>
            </span>
          </div>
        </section>
      </header>

      <section className="border border-[#aaa9a9] mt-5 px-12 py-8 text-[14px] rounded-xl ">
        <div>
          <header className="text-[#787979]">Personal Information</header>
          <div className="flex items-start justify-between">
            <div className=" grid grid-cols-2 w-[70%] ">
              {personDetails.map((info) => {
                return (
                  <div className="pt-6" key={info.id}>
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

        {/* <header className="text-[#787979] pt-6">Business Information</header>
    <div className='flex items-start justify-between'>
     <div className=' grid grid-cols-2 w-[70%] '>
      <div className='pt-4'>
       <p>Business Name</p>
       <b>Tolu Enterprises</b>
      </div>
     </div>

    </div> */}
      </section>
    </div>
  );
}
