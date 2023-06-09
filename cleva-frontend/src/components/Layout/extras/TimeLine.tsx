import { time } from "console";
import React from "react";
// import TimelineStep from "./TimelineStep";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../app/store";

const Timeline: React.FC = () => {
  const { singleTransfer, loading, error } = useSelector(
    (state: RootState) => state.transaction
  );

  console.log(singleTransfer)
  const timeline =  singleTransfer ? (singleTransfer as any)?.AdditionalDetails.TransactionStatus  : " ";
console.log(timeline)


  
  


let pendingTime = singleTransfer ? (singleTransfer as any).CreatedAt : "";
let transitTime = timeline && timeline.In_Transit && timeline.In_Transit.DateTime;

let  transitDescription = "The NGN is on its way"; 
 
let pretransitDescription = "We’ve received your USD "

let completeTime =timeline &&  timeline.Completed && timeline.Completed.DateTime;
let completeDescription = "Jason Obi has received your NGN"

const convertTime = (myDate:any) => {
let datestring = myDate.getDate()  + "/" + (myDate.getMonth()+1) + "/" + myDate.getFullYear() + " at " + myDate.getHours() + ":" + myDate.getMinutes();
return datestring
}

const myTransitTime = convertTime(new Date(transitTime))
const myPendingTime = convertTime(new Date(pendingTime))
const myCompleteTime = convertTime(new Date(completeTime))


  return (
  
<>
<ol className="relative text-gray-500 border-l-[3px] border-[#CACACA] ml-24">                  
    
    <li className="mb-6 ml-6 flex items-center">    
    <p className="leading-tight -left-48 flex absolute text-sm"> {myPendingTime}</p>
        <span className="absolute flex items-center justify-center w-3 h-3 bg-[#35803F] rounded-full -left-[7.5px] mt-0.5">
        </span>
        <p className="text-sm text-[#35803F]">You’ve created your transfer</p>

    </li>
    {transitTime ? 
    <li className="mb-6 ml-6 flex items-center">
    <p className="leading-tight -left-48 flex absolute text-sm"> { myTransitTime}</p>
        
    <span className="absolute flex items-center justify-center w-3 h-3 bg-[#35803F] rounded-full -left-[7.5px] mt-0.5">
    </span>
        <p className="text-sm text-[#35803F]">{pretransitDescription}</p>
    </li>
    :  <li className="mb-6 ml-6 flex items-center">
    <p className="leading-tight -left-48 flex absolute text-sm"> </p>
        
    <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-200 rounded-full -left-[7.5px] mt-0.5">
    </span>
        <p className="text-sm">{pretransitDescription}</p>
    </li>
  }
    {transitTime ? 
    <li className="mb-6 ml-6 flex items-center">
    <p className="leading-tight -left-48 flex absolute text-sm"> {myTransitTime}</p>
        
    <span className="absolute flex items-center justify-center w-3 h-3 bg-[#35803F] rounded-full -left-[7.5px] mt-0.5">
    </span>
        <p className="text-sm text-[#35803F]">{transitDescription}</p>
    </li>
    :  <li className="mb-6 ml-6 flex items-center">
    <p className="leading-tight -left-48 flex absolute text-sm"> </p>
        
    <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-200 rounded-full -left-[7.5px] mt-0.5">
    </span>
        <p className="text-sm">{transitDescription}</p>
    </li>
  }

    {completeTime ? 
    <li className="mb-6 ml-6 flex items-center">
    <p className="leading-tight -left-48 flex absolute text-sm"> {myCompleteTime}</p>
        
    <span className="absolute flex items-center justify-center w-3 h-3 bg-[#35803F] rounded-full -left-[7.5px] mt-0.5">
    </span>
        <p className="text-sm text-[#35803F]">{completeDescription}</p>
    </li>
    :  <li className="mb-6 ml-6 flex items-center">
    <p className="leading-tight -left-48 flex absolute text-sm"> </p>
        
    <span className="absolute flex items-center justify-center w-3 h-3 bg-gray-200 rounded-full -left-[7.5px] mt-0.5">
    </span>
        <p className="text-sm">{completeDescription}</p>
    </li>
  }
</ol>

</>

  );
};

export default Timeline;
