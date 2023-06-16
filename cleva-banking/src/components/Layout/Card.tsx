import React from "react";

type CardObj = {
  id: number;
  img: string;
  title: string;
  body: string;
  button: string;
};

interface CardProps {
  card: CardObj[];
}

function Card({ card }: CardProps) {
  return (
    <div className="flex flex-wrap mx-auto space-x-1">
      {card.map((dataCard) => {
        return (
          <div className=" max-w-xs flex-grow" key={dataCard.id}>
            <div className="border bg-white rounded-lg lg:rounded-[9px] p-4 leading-normal flex h-[170px] shadow-md w-[310px]">
              <div className="w-[10%] mr-[10px] mt-[4px]">
                <img src={dataCard.img} alt="" />
              </div>
              <div className="mb-3 w-[239px] h-[100px]">
                <div className="text-[#111111]-500 font-sm text-[12px] mb-2">
                  <b>{dataCard.title}</b>
                </div>
                <p className="text-[#3E3E3E]-400 text-[12px] h-50px ">
                  {dataCard.body}
                </p>
                <div className="mt-[10px] h-[10%]">
                  <p
                    className={`${
                      dataCard.button
                        ? "text-[12px] text-center w-[130px] h-[30px]top-4 left-10 border text-[#3E3E3E] p-2 rounded-2xl "
                        : null
                    }`}
                  >
                    {dataCard.button}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
