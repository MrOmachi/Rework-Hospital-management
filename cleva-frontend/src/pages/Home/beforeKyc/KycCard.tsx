import React from "react";

interface IKycCard {
  title: string;
  body: string;
  text: string;
  icon?: String;
}

const Card = ({ title, body, text, icon }: IKycCard) => {
  return (
    <div>

      <div className={text === "Required" ? " bg-[#FFFCF2] max-w-sm rounded-md overflow-hidden shadow-lg px-6 py-4 flex align items-start gap-2 h-[170px] pb-12 " : " max-w-sm rounded-md overflow-hidden shadow-lg px-6 py-4 flex align items-start gap-2 h-[170px] pb-12 "}>
        <div className=" w-[30px] pt-[4px] left-[8px] ">
          <img src={icon as string} alt="logo" />  
        </div>
        <div className=" text-left w-[239px] ">
          <div className="">
            <div className="font-bold w-[149px] h-[21px] text-[14px] leading-5 mb-2">{title}</div>
            <p className="text-[#272727] h-[72px] text-[12px] font-Intel leading-5 ">{body}</p>
          </div>
          <div className="leading-4 pt-4">
            <span
              className={
                text === "Required"
                  ? " text-red-500 text-sm h-[18px] leading-4 "
                  : " rounded-sm h-[18px]  border  text-[12px] leading-4 font-Intel p-1"
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
