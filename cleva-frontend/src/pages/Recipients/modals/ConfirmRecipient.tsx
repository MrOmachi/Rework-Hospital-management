import React from "react";
import Button from "../../../components/Layout/buttons/Button";
import Modal from "../../../components/PopUps/Modal";
import { useNavigate } from "react-router-dom";
import { setModalState } from "../../../features/KycSlice/kycSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import axios from "axios";

export default function ConfirmRecipient() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { modalState } = useAppSelector((state) => state.kycInfo);

  const itemString = localStorage.getItem("recipients");
  const item = itemString !== null ? JSON.parse(itemString) : null;

  const existingRecipient = localStorage.getItem("recipients");
  var parsedData = existingRecipient ? JSON.parse(existingRecipient) : [];

  console.log(parsedData);

  function saveRecipient() {
    axios
      .post(
        "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/recipients",
        parsedData
      )
      .then((response) => {
        localStorage.removeItem("recipients");
        navigate("/recipients");
        dispatch(setModalState(false));
      })
      .catch((error) => {
        console.error("Error sending data to Postman:", error);
        navigate("/recipients");
        dispatch(setModalState(false));
      });
  }

  const details = [
    {
      id: 1,
      key: "Bank name",
      value: item.BankName,
    },
    {
      id: 2,
      key: "Account Number",
      value: item.AccountNumber,
    },
    {
      id: 3,
      key: "Account name",
      value: "Mart Olumide",
    },
  ];

  return (
    <Modal titlePosition="text-center" header="Confirm Recipient">
      <div className="px-10 pt-8">
        <div
          className="flex 
     justify-between 
     text-[12px] 
     font-bold
     px-6"
        ></div>
        <div className=" pt-3 pb-3 px-6 rounded-xl mt-[1.5em]">
          {details.map((info, index) => (
            <div
              key={info.id}
              className="flex
         text-left
         items-center
         justify-between 
         border-b
         text-[12px]
          last:border-none
         py-3
        
         "
            >
              <span className=" text-slate-400 font-semibold">{info.key}</span>
              <span className="font-bold text-[14px]]">{info.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="px-10 flex justify-between pt-6">
        <Button
          fn={() => navigate("")}
          status={false}
          styles="text-[12px] 
          font-bold py-[10px] px-[6%] 
          ${btn_bg} 
          float-right 
          rounded-md mt-4 
          bg-[#FFF5D9]"
          text="Edit"
        />

        <Button
          fn={saveRecipient}
          status={false}
          styles="text-[12px] 
          font-bold py-[10px] px-[8%] 
          ${btn_bg} 
          float-right 
          rounded-md mt-4 
          bg-[#FFBD59]"
          text="Save Recipient"
        />
      </div>
    </Modal>
  );
}
