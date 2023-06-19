import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  setCloseEditModal,
  setModalState,
} from "../../features/Kyc/kycSlice";

export default function Modal({
  children,
  header,
  titlePosition,
  height,
  width,
  handleEditModal,
}: any) {
  const dispatch = useAppDispatch();

  return (
    <>
      {
        <div className="fixed inset-0 z-10 bg-[#000000cf] bg-opacity-90 overflow-y-auto h-full w-full">
          <div
            className={`fixed ${height} ${width}
        pb-10 top-[15%] border border-black
        shadow-lg rounded-xl overflow-hidden w-[40%]
        bg-white ms-[30%]`}
          >
            <header
              className={`w-full ${titlePosition} bg-[#EBF0F0] py-5 px-12`}
            >
              <b>{header}</b>
              <span
                onClick={() => {
                  dispatch(setModalState(false));
                  dispatch(setCloseEditModal(false));
                }}
                className="text-[25px] float-right cursor-pointer"
              >
                <IoCloseOutline />
              </span>
            </header>
            <body>{children}</body>
          </div>
        </div>
      }
    </>
  );
}
