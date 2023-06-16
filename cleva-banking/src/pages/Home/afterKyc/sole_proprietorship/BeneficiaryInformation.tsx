// import React from "react";
// import Inputs from "./Inputs";
// import { Previous, SaveAndContinue } from "../../../buttons/Buttons";

// function BeneficiaryInformation() {
//   const aboutOwner = [
//     {
//       id: 1,
//       normalInput: true,
//       required: true,
//       title: "Legal Name",
//       inputPlaceholder: "First Name",
//     },
//     {
//       id: 2,
//       normalInput2: true,
//       inputPlaceholder2: "Last Name",
//     },
//     {
//       id: 3,
//       normalInput: true,
//       required: true,
//       title: "Email Address",
//       inputPlaceholder: "Email Address",
//     },
//     {
//       id: 4,
//       normalInput: true,
//       required: true,
//       title: "Date of birth",
//       inputPlaceholder: "MM-DD-YYYY",
//     },
//     {
//       id: 5,
//       shortInput: true,
//       required: true,
//       title: "Last 4 digits of Social Security number",
//       inputPlaceholder: ". . . . . .     1234",
//     },
//   ];

//   return (
//     <div className="flex justify-evenly w-full mt-14">
//       <div className="w-[25%] sm:w-[40%]">
//         <div className="flex ">
//           <div className="items-center">
//             <div className="">
//               <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px] ">
//                 1
//               </p>
//             </div>
//             <div className="h-[10px] m-auto border w-[1px]"></div>
//           </div>
//           <b className="text-[10px] ml-2 font-roboto">Business Information</b>
//         </div>
//         <div className="flex">
//           <div>
//             <p className="bg-[#FFBD59] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[7px] pt-[3px]">
//               2
//             </p>
//             <div className="h-[10px] m-auto border w-[1px]"></div>
//           </div>
//           <div className="text-[10px] ml-2">Beneficiary Owners</div>
//         </div>

//         <div className="flex">
//           <div>
//             <p className="border-[1px] rounded-full w-[16px]  h-[16px] items-center  text-[7px] pl-[5px] pt-[3px]">
//               3
//             </p>
//           </div>
//           <div className="text-[10px] ml-2">Review & Submit</div>
//         </div>
//       </div>

//       <form className="w-[75%] sm:w-[60%] md:w-[75%] ">
//         <div className="w-[63%]">
//           <div>
//             <h3 className="font-semibold text-sm pb-5 ">
//               Tell us about the Owner
//             </h3>
//             <p className="text-[10px] mb-11 sm:mb-5 ">
//               Make sure you enter your information exactly as it appears on your{" "}
//               <br />
//               government-issued ID.
//             </p>
//             {aboutOwner.map((beneficiaryForm) => (
//               <Inputs
//                 title={beneficiaryForm.title as string}
//                 required={beneficiaryForm.required as boolean}
//                 inputPlaceholder={beneficiaryForm.inputPlaceholder as string}
//                 shortInput={beneficiaryForm.shortInput as boolean}
//                 normalInput={beneficiaryForm.normalInput}
//                 option1={""}
//                 option2={""}
//               />
//             ))}
//           </div>
//           <div className="flex justify-between">
//             <div>
//               <Previous />
//             </div>
//             <div>
//               <SaveAndContinue />
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default BeneficiaryInformation;

import React from 'react'

function BeneficiaryInformation() {
  return (
    <div>BeneficiaryInformation</div>
  )
}

export default BeneficiaryInformation