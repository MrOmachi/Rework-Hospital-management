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

      <div className=" max-w-sm rounded overflow-hidden shadow-lg px-6 py-4 flex align items-start gap-2 ">
        <div className=" w-12 pt-1 bg-gray-200 ">
          <img src={icon as string} alt="logo" />
        </div>
        <div className=" text-left ">
          <div className="">
            <div className="font-bold text-sm mb-2">{title}</div>
            <p className="text-gray-700 text-[13px] ">{body}</p>
          </div>
          <div className="pt-4 pb-2">
            <span
              className={
                text === "Required"
                  ? " text-red-500 text-sm "
                  : "inline-block rounded-sm  border px-3 py-1 text-sm  mr-2 mb-2"
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
