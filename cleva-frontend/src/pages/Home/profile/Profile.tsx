import React from 'react'
import { MdWavingHand } from "react-icons/md";

interface Pdetails {
 id: number;
 key: string;
 value: string
}

export default function Profile() {

 const personDetails: Pdetails[] = [
  {
   id: 1,
   key: "First Name",
   value: "Tolu"
  },
  {
   id: 2,
   key: "Last Name",
   value: "Alabi"
  },
  {
   id: 1,
   key: "Email Address",
   value: "tolu@gmail.com"
  },
  {
   id: 1,
   key: "Phone Number",
   value: "+234787823909"
  },
  {
   id: 1,
   key: "Country of Residence",
   value: "United States"
  },
 ]

 return (
  <div className=" pt-5 w-[88%] ">
   <header>
    <p className=" bg-[#FFF5D9] px-3 py-3 text-[13px] text-[#111111] rounded-md ">
     Your account needs to be verified.
     <span className="underline text-black font-semibold ">
      Verify your account now
     </span>
    </p>

    <section className="pt-6 ">
     <p className="text-[#787979] text-[14px]">
      Dislay Picture
     </p>
     <div className='pt-[1em] flex items-start gap-6'>
      <span className=" rounded-full bg-[#F2F2F2] text-[40px] border-[3px] border-[#cccccc] py-3 px-5">
       <b>TA</b>
      </span>

      <button className="border-2 border-[#9a9a9a] py-2 px-6 text-[#787979]  rounded-xl ">
       change
      </button>

     </div>
    </section>

   </header>

   <section className='border border-[#aaa9a9] mt-3 px-12 py-6 text-[14px] rounded-md '>

    <div>
     <header className="text-[#787979]">Personal Information</header>
     <div className='flex items-start justify-between'>
      <div className=' grid grid-cols-2 w-[70%] '>
       <div className='pt-4'>
        <p>First Name</p>
        <b>Tolu</b>
       </div>
       <div className='pt-4 text-[14px]'>
        <p>Last Name</p>
        <b>Alabi</b>
       </div>
       <div className='pt-4 text-[14px]'>
        <p>Email Address</p>
        <b>tolu@gmail.com</b>
       </div>
       <div className='pt-4 text-[14px]'>
        <p>Phone Number</p>
        <b>+234787823909</b>
       </div>
       <div className='pt-4 text-[14px]'>
        <p>Country of Residence</p>
        <b>United States</b>
       </div>
      </div>

      <button className="border-2 border-[#9a9a9a] py-2 px-8 text-[#787979]  rounded-xl ">
       Edit
      </button>

     </div>
    </div>

    <header className="text-[#787979] pt-6">Business Information</header>
    <div className='flex items-start justify-between'>
     <div className=' grid grid-cols-2 w-[70%] '>
      <div className='pt-4'>
       <p>Business Name</p>
       <b>Tolu Enterprises</b>
      </div>
     </div>

    </div>
   
   </section>

  </div>
 )
}
