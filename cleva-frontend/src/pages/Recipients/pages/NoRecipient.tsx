import React from "react";
import { BsPersonPlusFill, BsPeople } from "react-icons/bs";
import AddRecipient from "../modals/AddRecipient";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setModalState } from "../../../redux/Kyc/kycSlice";

export default function NoRecipients() {
  const { modalState } = useAppSelector((state) => state.kycInfo);
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-end items-center h-[40vh] text-center">
      <section>
        <span className="text-[40px] justify-center items-center flex pb-4">
          <span>
            <BsPeople />
          </span>
        </span>
        <p>You currently have no recipients</p>
        <button className="text-[10px] font-extrabold flex items-center gap-1 m-auto pt-5">
          <span>
            <BsPersonPlusFill />
          </span>
          <span onClick={() => dispatch(setModalState(!modalState))}>
            Add new recipient
          </span>
        </button>
      </section>
      {modalState && <AddRecipient />}
    </div>
  );
}
