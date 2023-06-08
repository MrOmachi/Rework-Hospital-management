import React, { useState } from "react";
import ArrowDown from "../../images/arrow-down.svg";
import ArrowUp from "../../images/arrow-up.svg";
import RecipientCard from "./RecipientCard";

const RecipientDetails = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="bg-white shadow-sm py-5 px-6 rounded-sm mb-3">
      <div className="flex items-center mb-4">
        <label htmlFor="recipient" className="text-[#505050] text-sm">
          Recipient
        </label>
        <p className="text-base ml-5">Jason Obi</p>
        <button className="px-4 py-2" onClick={handleClick}>
        {!isHidden ?  
          <img src={ArrowDown} alt="" srcSet="" />
        : 
        <img src={ArrowUp} alt="" srcSet="" />
         } 
        </button>
      </div>
      {isHidden && (
        <div className="w-3/4">
          <RecipientCard title="Recipient"/>
        </div>
      )}
      <span className="text-sm text-[#505050] leading-[0.1rem]">
        After we receive your USD, we will the transfer Naira to your recipient
        within 1 business day.
      </span>
    </div>
  );
};

export default RecipientDetails;
