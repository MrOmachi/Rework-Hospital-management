// import { SaveAndContinue } from "../../../buttons/Buttons";
// import Inputs, { handleSubmit } from "./Inputs";

// function BusinessReg() {
//   const inputContents = [
//     {
//       id: 1,
//       selectInput: true,
//       title: "Business Type",
//       required: true,
//       option1: "Sole Proprietorship",
//       option2: "Partnership",
//       option3: "Limited Liability Company",
//       option4: "Corporate",
//     },
//     {
//       id: 2,
//       normalInput: true,
//       title: "Registered business name",
//       required: true,
//       inputPlaceholder: "Business name",
//     },
//     {
//       id: 3,
//       selectInput: true,
//       title: "Business Classification",
//       required: true,
//       option1: "Agriculture",
//       option2: "Aviation",
//       option3: "Health",
//       option4: "Trader",
//     },
//     {
//       id: 4,
//       selectInput: true,
//       title: "Employer Identification Number (EIN)",
//       required: true,
//       option1: "12-3456789",
//       option2: "12-9043094",
//       option3: "12-4043094",
//       option4: "12-7043094",
//     },
//     {
//       id: 5,
//       selectInput: true,
//       title: "Registered Business Address",
//       required: true,
//       option1: "America",
//       option2: "Nigeria",
//       option3: "Ghana",
//       option4: "Ethiopia",
//     },
//     {
//       id: 6,
//       normalInput: true,
//       title: false,
//       required: false,
//       inputPlaceholder: "Address Line 1",
//     },
//     {
//       id: 7,
//       normalInput: true,
//       title: false,
//       required: false,
//       inputPlaceholder: "Address Line 2",
//     },
//     {
//       id: 8,
//       normalInput: true,
//       title: false,
//       required: false,
//       inputPlaceholder: "City",
//     },
//     {
//       id: 9,
//       selectInput: true,
//       title: false,
//       required: false,
//       option1: "Abuja",
//       option2: "Lagos",
//       option3: "Port Harcourt",
//       option4: "Calabar",
//     },
//     {
//       id: 10,
//       normalInput: true,
//       title: false,
//       required: false,
//       inputPlaceholder: "Zip",
//     },
//     {
//       id: 11,
//       inputWithCountryCode: true,
//       title: "Phone Number",
//       option1: "Agriculture",
//       option2: "Aviation",
//       inputPlaceholder: "test",
//     },
//     {
//       id: 10,
//       normalInput: true,
//       title: "Website",
//       required: false,
//       inputPlaceholder: "www.company.com",
//     },
//   ];

//   return (
//     <>
//       <div className="flex justify-evenly w-full mt-14">
//         <div className="w-[25%] md:w-[25%] sm:w-[35%]">
//           <div className="flex ">
//             <div className="items-center">
//               <div className="">
//                 <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[7px] pt-[3px] ">
//                   1
//                 </p>
//               </div>
//               <div className="h-[10px] m-auto border w-[1px]"></div>
//             </div>
//             <b className="text-[10px] ml-2 font-roboto">Business Information</b>
//           </div>
//           <div className="flex">
//             <div>
//               <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px]">
//                 2
//               </p>
//               <div className="h-[10px] m-auto border w-[1px]"></div>
//             </div>
//             <div className="text-[10px] ml-2">Beneficiary Owners</div>
//           </div>

//           <div className="flex">
//             <div>
//               <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px]">
//                 3
//               </p>
//             </div>
//             <div className="text-[10px] ml-2">Review & Submit</div>
//           </div>
//         </div>

//         <form
//           onSubmit={handleSubmit}
//           className="w-[75%] md:w-[75%] sm:w-65% sm:ml-12 h-screen pb-[55em]"
//         >
//           <div className="w-[63%]">
//             <div>
//               <h3 className="font-semibold text-sm pb-1 ">
//                 Tell us about yourself
//               </h3>
//               {inputContents.map((inputContent) => (
//                 <Inputs
//                   // name="businessType"
//                   // value = {formData.businessType}
//                   // onChange ={handleChange}
//                   title={inputContent.title as string}
//                   required={inputContent.required as boolean}
//                   option1={inputContent.option1 as string}
//                   option2={inputContent.option2 as string}
//                   option3={inputContent.option3 as string}
//                   option4={inputContent.option4 as string}
//                   inputPlaceholder={inputContent.inputPlaceholder}
//                   normalInput={inputContent.normalInput}
//                   selectInput={inputContent.selectInput}
//                   inputWithCountryCode={inputContent.inputWithCountryCode}
//                 />
//               ))}
//             </div>

//             <div className="sm:float-right mb-[40rem]">
//               <SaveAndContinue />
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default BusinessReg;

import React from "react";

function BusinessReg() {
  const formInputs = [
    {
      id: 1,
      label: "Registered business Name",

      type: "text",
      name: "businessName",
      placeholder: "Business Name",
    },
    {
      id: 2,
      label: "Business type",
      name: "businessType",
      option: "Select business type",
      option1: "Sole Proprietorship ",
      option2: "C Corporation",
      option3: "S Corporation",
      option4: "Non-profit",
      option5: "Other",
    },
    {
      id: 3,
      label: "Business Classification",
      selectValue: "",
      selectValue1: "Software",
      selectValue2: "Fintech",
      selectValue3: "Other",
      option: "Select classification type",
      option1: "Software",
      option2: "Fintech",
      option3: "Non-profit",
      option4: "Other",
    },
    {
      id: 4,
      label: "Employer Identification Number (EIN)",

      type: "text",
      name: "employerID",
      placeholder: "Business Name",
    },
    {
      id: 5,
      label: "Registered Business Address",
      selectValue: "",
      selectValue1: "USA",
      selectValue2: "Nigeria",
      selectValue3: "UK",
      name: "businessAddress",
      option: "Select business address",
      option1: "United State ",
      option2: "Nigeria",
      option3: "UK",
    },
    {
      id: 6,
      label: "Registered business Name",

      type: "text",
      name: "StreetAddress",
      placeholder: "Address Line 1",
    },
    {
      id: 7,
      label: "Registered business Name",

      type: "text",
      name: "SecondStreetAddress",
      placeholder: "Address Line 2",
    },
  ];
  return <div>BusinessReg</div>;
}

export default BusinessReg;
