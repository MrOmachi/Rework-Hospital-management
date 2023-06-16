import React from "react";

type DarkCard = {
  id: number;
  title: string;
  img: string;
  button: String;
};

interface DarkCardProps {
  drkCard: DarkCard[];
}

function BlackCard({ drkCard }: DarkCardProps) {
  return (
    <>
      <div className="mt-6">
        <b>Try out these features</b>
        <div className="flex justify-evenly flex-wrap mx-auto space-x-3 ">
          {drkCard.map((fetchCard) => {
            return (
              <div className=" max-w-xs" key={fetchCard.id}>
                <div className="border-r border-b border-l border-t border-gray-400 lg:border-l lg:border-t lg:border-gray-400 h-[110px] bg-[#111111] text-white rounded-lg lg:rounded-[9px] p-4 leading-normal flex w-[310px] ">
                  <div className="text-gray-900 font-sm text-[15px] mb-2 w-[326px] h-[60px]">
                    <div className="mb-3">
                      <b
                        className={`${
                          fetchCard.button
                            ? "text-[7.67px] bg-[#FFFFFF] font-inter  text-center text-black w-[69.27px] rounded-[75.9px] p-2"
                            : null
                        }`}
                      >
                        {fetchCard.button}
                      </b>
                    </div>
                    <div className="">
                      <b className=" text-[#EBF0F0] font-medium text-[16px] leading-[24px]">
                        {fetchCard.title}
                      </b>
                    </div>
                  </div>
                  <div className="mb-3 w-[50%]">
                    <div className="">
                      <img className="float-right" src={fetchCard.img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BlackCard;
