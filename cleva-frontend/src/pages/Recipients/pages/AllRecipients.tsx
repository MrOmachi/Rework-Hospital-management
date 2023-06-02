import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonPlusFill } from "react-icons/bs";
import { IoEllipsisHorizontal } from "react-icons/io5";
import EventPop from "../modals/EventPop";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setModalSedtDelete,
  setModalState,
} from "../../../features/KycSlice/kycSlice";
import AddRecipient from "../modals/AddRecipient";
import axios from "axios";

export default function AllRecipients() {
  const { modalSedtDelete } = useAppSelector((state) => state.kycInfo);
  const { modalState } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();

  const itemString = localStorage.getItem("newRecipients");
  const item = itemString !== null ? JSON.parse(itemString) : null;
  const navigate = useNavigate();

  const [recipients, setRecipients] = useState<any>();

  const handleGetRecipients = () => {
    axios
      .get(
        "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/recipients"
      )
      .then((response) => {
        setRecipients(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetRecipients();
  }, []);

  console.log(recipients?.RecipientSummaryList);

  return (
    <div className="pr-4 py-10">
      <header
        className="
    flex justify-between items-center 
    text-[12px] font-semibold
    "
      >
        <div>All recipients</div>
        <button
          onClick={() => dispatch(setModalState(!modalState))}
          className="flex items-center gap-1"
        >
          <span>
            <BsPersonPlusFill />
          </span>
          <span>Add new recipient</span>
        </button>
      </header>

      <table className="w-full mt-6">
        <tr className="text-left text-[14px] bg-gray-100 mb-2">
          <th className="py-3 pl-2">Recipient</th>
          <th className="py-3 pl-4"> Country</th>
          <th className="py-3 pl-4"> Bank Name</th>
          <th className="py-3 pl-4"> Account</th>
          <th className="py-3"> </th>
        </tr>
        {recipients?.RecipientSummaryList.map((info: any) => (
          <tr
            className="text-left 
      text-[13px] border
      odd:bg-gray-100"
            key={info.length + 1}
          >
            <td
              onClick={() => navigate("/recipient_details")}
              className="py-3 pl-4 border-b cursor-pointer"
            >
              <p className="flex space-x-1">
                <span>{info.FullName.FirstName}</span>
                <span>{info.FullName.LastName}</span>
              </p>
            </td>
            <td className="py-3 pl-4 border-b"> {info.Country}</td>
            <td className="py-3 pl-4 border-b">{info.bank}</td>
            <td className="py-3 pl-4 border-b">**** {info.LastFourDigits}</td>
            <td
              onClick={() => dispatch(setModalSedtDelete(true))}
              className="py-3 pl-4 border-b cursor-pointer"
            >
              <IoEllipsisHorizontal />
            </td>
          </tr>
        ))}
      </table>
      {modalSedtDelete && <EventPop />}
      {modalState && <AddRecipient />}
    </div>
  );
}
