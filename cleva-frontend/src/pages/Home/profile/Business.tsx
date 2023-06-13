import React from "react";
import { useNavigate } from "react-router-dom";

interface IKyc {
  id: number;
  key: string;
  value: string;
}

export default function Business() {
  const navigate = useNavigate();

  const data: IKyc[] = [
    {
      id: 1,
      key: "Business Name",
      value: "Tolus Enterprises",
    },
    {
      id: 2,
      key: "Business Type",
      value: "Tolus Enterprises",
    },
    {
      id: 3,
      key: "EIN",
      value: "(-------)",
    },
    {
      id: 4,
      key: "Business Address",
      value: "Fairytale Street, UL, US 7225",
    },
    {
      id: 5,
      key: "Website",
      value: "www.website.com",
    },
    {
      id: 6,
      key: "Classification",
      value: "Agriculture",
    },
  ];

  return (
    <div className="w-[88%]">
      <ul className="flex mt-10 mb-8 text-sm space-x-5 border-b w-[35%]">
        <li
          onClick={() => navigate("/profile")}
          className=" cursor-pointer active:border-b-2 border-black pb-3 hover:border-b-2"
        >
          Profile
        </li>
        <li
          onClick={() => navigate("/business")}
          className=" cursor-pointer border-b-2 border-black pb-3 hover:border-b-2"
        >
          Business
        </li>
        <li
          onClick={() => navigate("/controller")}
          className=" cursor-pointer active:border-b-2 border-black pb-3 hover:border-b-2"
        >
          Beneficial Owners
        </li>
      </ul>

      <section className="border border-[#aaa9a9] mt-3 px-12 py-6 text-[14px] rounded-xl">
        <header className="text-[#787979]">Business Information</header>
        <div className="flex items-start justify-between">
          <div className=" grid grid-cols-2 w-[70%] ">
            {data.map((info) => {
              return (
                <div className="pt-4 leading-[2em]" key={info.id}>
                  <p>{info.key}</p>
                  <b>{info.value}</b>
                </div>
              );
            })}
          </div>
          <button className="border-2 border-[#9a9a9a] py-3 px-8 text-[#787979]  rounded-[8px] ">
            Edit
          </button>
        </div>
      </section>
    </div>
  );
}
