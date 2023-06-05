import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonPlusFill } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  MdOutlineModeEditOutline,
  MdSubdirectoryArrowRight,
} from "react-icons/md";
import arrow from "../../../images/right-arrow.png";
import IconButton from "../../../components/Layout/buttons/IconButton";
import axios from "axios";

export default function RecipientHistory() {
  const [dur, setDur] = useState(1);
  const [recipients, setRecipients] = useState<any>();

  const [activeId, setActiveId] = useState("");

  const handleGetRecipients = () => {
    axios
      .get(
        "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/recipients"
      )
      .then((response) => {
        setRecipients(response.data);
        setActiveId(response.data?.RecipientSummaryList[0].RecipientIdentifier);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetRecipients();
  }, []);

  const handleSubmit = () => {
    console.log(activeId);
  };

  console.log(recipients?.RecipientSummaryList);

  useEffect(() => {
    setActiveId(recipients?.RecipientSummaryList[0].RecipientIdentifier);
  }, []);

  const duration = [
    {
      id: 1,
      value: "1W",
    },
    {
      id: 2,
      value: "1M",
    },
    {
      id: 3,
      value: "3M",
    },
    {
      id: 4,
      value: "6M",
    },
    {
      id: 5,
      value: "1Y",
    },
    {
      id: 6,
      value: "2Y",
    },
  ];

  const details = [
    {
      id: 1,
      key: "Bank name",
      value: "GTBank",
    },
    {
      id: 2,
      key: "Account number",
      value: 111111143552,
    },
    {
      id: 3,
      key: "Account name",
      value: "Jason Oni",
    },
  ];

  return (
    <div className="py-5">
      <header
        className="
        flex justify-between items-center 
        text-[12px] font-semibold
        "
      >
        <div>All recipients</div>
        <button onClick={handleSubmit} className="flex items-center gap-1">
          <span>
            <BsPersonPlusFill />
          </span>
          <span>Add new recipient</span>
        </button>
      </header>

      <div className="flex justify-between pt-5">
        <div className="w-[49%] text-[13px] font-semibold">
          {recipients?.RecipientSummaryList.map((info: any) => (
            <div
              key={info.id}
              className="flex items-center justify-between mb-2"
            >
              <div
                className={`${
                  activeId === info.RecipientIdentifier
                    ? "border rounded-md py-4 ps-5 w-[70%] bg-lime-50"
                    : "border rounded-md py-4 ps-5 w-[70%] "
                }`}
                onClick={() => setActiveId(info.RecipientIdentifier)}
              >
                <p className="flex space-x-1">
                  <span>{info.FullName.FirstName}</span>
                  <span>{info.FullName.LastName}</span>
                </p>
              </div>
              <span
                className={`${
                  activeId === info.RecipientIdentifier
                    ? "w-[30%] text-[70px] text-sm opacity-100"
                    : "w-[30%] text-[70px] text-sm opacity-0 "
                }`}
              >
                <img className="h-10 w-[100%]" src={arrow} alt="" />
              </span>
            </div>
          ))}
        </div>
        <div className="border rounded-md w-[50%]">
          <span
            onClick={handleSubmit}
            className="text-[20px] float-right cursor-pointer mt-5 mr-5"
          >
            <IoCloseOutline />
          </span>
          <ul
            className="
            flex justify-between items-center py-1 px-2 rounded-md
            mt-16 mb-6 bg-gray-100 text-[10px] font-bold w-[70%] m-auto
            "
          >
            {duration.map((info) => (
              <li
                key={info.id}
                className={`${
                  dur === info.id
                    ? "bg-black py-3 px-5 text-white rounded-md"
                    : "hover:bg-slate-500 py-3 px-5  hover:text-white rounded-md"
                }`}
                onClick={() => setDur(info.id)}
              >
                {info.value}
              </li>
            ))}
          </ul>
          <div className="text-center">
            <h2 className="text-[34px] font-extrabold">N20,000.00</h2>
            <div className="text-[12px] text-gray-500">
              Transferred in the last 1 week
            </div>
            <div className="text-[12px] font-semibold text-cyan-500">
              View Transfers
            </div>
          </div>
          <div
            className="w-[70%] 
              m-auto bg-gray-50 
              rounded-xl px-6 py-3 mt-6"
          >
            {details.map((info) => (
              <div key={info.id} className="border-b py-3 last:border-none">
                <span className="text-[10px] text-gray-500">{info.key}</span>
                <span className="text-[12px] ml-8 font-bold">{info.value}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center w-70% justify-between w-[70%] m-auto pt-6 pb-12 text-[13px] font-semibold">
            <div className="flex items-center gap-2">
              <IconButton
                styles="text-black flex items-center px-[12px] rounded-md bg-fuchsia-100 py-2"
                text="Delete"
                icon={<RiDeleteBin6Line />}
                fn={handleSubmit}
              />
              <IconButton
                styles="text-black flex items-center py-2 px-[15px] rounded-md bg-[#FFF5D9]"
                text="Edit"
                icon={<MdOutlineModeEditOutline />}
                fn={handleSubmit}
              />
            </div>

            <div>
              <IconButton
                styles="text-black flex items-center px-[25px] rounded-md py-2 bg-[#FFBD59]"
                text="Transfer"
                icon={<MdSubdirectoryArrowRight />}
                fn={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
