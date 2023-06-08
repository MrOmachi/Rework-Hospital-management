import React from "react";

interface IKycCard {
  title: string;
  body: string;
  text: string;
  icon?: String;
}

const Card = ({ title, body, text, icon }: IKycCard) => {
  return (
    <div className="w-[33%]">

      <div className={text === "Required" ? " bg-[#FFFCF2] border max-w-sm rounded-md overflow-hidden shadow-lg px-6 py-4 flex align items-start gap-2 " : " max-w-sm border rounded-md overflow-hidden shadow-lg px-6 py-4 flex align items-start gap-2 "}>
        <div className=" w-[100px] pt-[4px] left-[8px] ">
          <img className="w-full" src={icon as string} alt="logo" />  
        </div>
        <div className=" text-left ">
          <div className="">
            <div className="font-bold h-[21px] text-[14px] leading-5 mb-2">{title}</div>
            <p className="text-[#272727] h-[72px] text-[12px] font-Intel leading-5 ">{body}</p>
          </div>
          <div className="leading-4 pt-4">
            <span
              className={
                text === "Required"
                  ? " text-red-500 text-[13px] h-[18px] leading-4 "
                  : " rounded-[4px] h-[18px]  border border-[#A8ACAF]  text-[13px] leading-4 font-Intel py-1 px-2 cursor-pointer"
              }
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
