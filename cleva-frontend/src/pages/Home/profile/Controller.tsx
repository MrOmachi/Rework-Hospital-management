import React from 'react'
import { useNavigate } from 'react-router-dom';

interface IKyc {
 id: number;
 key: string;
 value: string;
}

// interface AddBeneficials {
//  id: number;
//  key: string;
//  value: string;
// }

export default function Controller() {
 const navigate = useNavigate()


 const data: IKyc[] = [
  {
   id: 1,
   key: "Legal First Name",
   value: "Tolu"
  },
  {
   id: 2,
   key: "Legal Last Name",
   value: "Alabi"
  },
  {
   id: 3,
   key: "Email Address",
   value: "tolu@getcleva.com"
  },
  {
   id: 4,
   key: "DOB",
   value: "12-12-1990"
  },
  {
   id: 5,
   key: "Address",
   value: "Fairytale Street, UL, US 7225"
  },
  {
   id: 6,
   key: "Classification",
   value: "Agriculture"
  },
 ]

 // const otherBeneficials: AddBeneficials[] = [
 //  {
 //   id: 1,
 //   key: "Legal First Name",
 //   value: "Mary"
 //  },
 //  {
 //   id: 2,
 //   key: "Legal Last Name",
 //   value: "Jane"
 //  },
 //  {
 //   id: 3,
 //   key: "DOB",
 //   value: "12-12-1990"
 //  },
 //  {
 //   id: 4,
 //   key: "Address",
 //   value: "Fairytale Street, UL, US 7225"
 //  },
 // ]


 return (
  <div className='w-[88%] pb-24'>
   <ul className="flex mt-10 text-sm justify-between border-b w-[30%] pr-7 ">
    <li onClick={() => navigate("/profile")} className=" cursor-pointer active:border-b-2 border-black pb-3 ">Profile</li>
    <li onClick={() => navigate("/business")} className=" cursor-pointer active:border-b-2 border-black pb-3 ">Business</li>
    <li onClick={() => navigate("/controller")} className=" cursor-pointer active:border-b-2 border-black pb-3 ">Controller & Owners</li>
   </ul>

   <section className=' mt-3 py-6 text-[14px]'>
    <div>
     <header className="text-[#787979]">Controller Information</header>
     <div className='flex items-start justify-between'>
      <div className=' grid grid-cols-2 w-[70%] '>
       {
        data.map((info) => {
         return (
          <div className='pt-4 leading-[2em]' key={info.id}>
           <p>{info.key}</p>
           <b>{info.value}</b>
          </div>
         )
        })
       }
      </div>
      <div className='flex gap-3 pt-5'>
       <button className="border-2 border-[#9a9a9a] py-3 px-8 text-[#787979]  rounded-[8px] ">
        Edit
       </button>
       <button className=" bg-[#FFBD59] py-3 font-bold px-4 text-black  rounded-[8px] ">
        Replace Controller
       </button>
      </div>
     </div>
    </div>
   </section>
   <section className='pt-12'>
    <header className='flex justify-between items-center'>
     <div className="text-[#787979]">Additional Beneficial owners</div>
     <button className=" bg-[#FFBD59] py-3 font-bold px-2 text-black text-[14px] rounded-[8px] ">
      Add new beneficial owner
     </button>
    </header>

    <div className=' bg-[#F6F6F6] px-3 rounded-xl pb-2 flex text-[13px] mt-6 items-start justify-between'>
     <div className=' grid grid-cols-2 w-[70%] '>
      <div className='pt-4 leading-[2em]'>
       <p>Legal First Name</p>
       <b>Mary</b>
      </div>
      <div className='pt-4 leading-[2em]'>
       <p>Legal Last Name</p>
       <b>Jane</b>
      </div>
      <div className='pt-4 leading-[2em]'>
       <p>DOB</p>
       <b>12-12-1990</b>
      </div>
      <div className='pt-4 leading-[2em]'>
       <p>Address</p>
       <b>Fairytale Street, UL, US 7225</b>
      </div>
     </div>
     <button className="border-2 border-[#9a9a9a] py-3 mt-5 px-8 text-[#787979]  rounded-[8px] ">
      Remove
     </button>
    </div>

    <div className=' bg-[#F6F6F6] px-3 rounded-xl pb-2 flex text-[13px] mt-6 items-start justify-between'>
     <div className=' grid grid-cols-2 w-[70%] '>
      <div className='pt-4 leading-[2em]'>
       <p>Legal First Name</p>
       <b>John</b>
      </div>
      <div className='pt-4 leading-[2em]'>
       <p>Legal Last Name</p>
       <b>Doe</b>
      </div>
      <div className='pt-4 leading-[2em]'>
       <p>DOB</p>
       <b>12-12-1990</b>
      </div>
      <div className='pt-4 leading-[2em]'>
       <p>Address</p>
       <b>Fairytale Street, UL, US 7225</b>
      </div>
     </div>
     <button className="border-2 border-[#9a9a9a] py-3 mt-5 px-8 text-[#787979]  rounded-[8px] ">
      Remove
     </button>
    </div>

   </section>
  </div>
 )
}
