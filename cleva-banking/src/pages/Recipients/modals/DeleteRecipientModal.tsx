import React from "react";
import Modal from "../../../components/PopUps/Modal";
import Button from "../../../components/Layout/buttons/Button";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  setModalSedtDelete,
  setModalState,
} from "../../../features/KycSlice/kycSlice";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function DeleteRecipientModal({ RecipientIdentifier }: any) {
  const dispatch = useAppDispatch();
  const { modalSedtDelete } = useAppSelector((state) => state.kycInfo);

  const handleGetRecipients = () => {
    axios
      .delete(
        `https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/recipients/${RecipientIdentifier}`
      )
      .then((response) => {
        console.log(response)
        toast.success(`Recipient successfully removed!`);
      })
      .catch((error) => {
        console.log(error);
        toast.error(`Operation failed!`);
      });
  };

  function deteleRecipient() {
    handleGetRecipients();
    setTimeout(() => {
      dispatch(setModalSedtDelete(!modalSedtDelete));
      dispatch(setModalState(false));
    }, 2000);
  }

  return (
    <Modal height="h-64" width="w-[35%]" header="Remove Recipient">
      <div className="text-sm pt-10 ps-10 w-[67%]">
        Are you sure you want to remove Jason Obi as a recipient?
      </div>

      <div className="px-10 flex justify-end gap-3">
        <Button
          fn={() => {
            dispatch(setModalSedtDelete(!modalSedtDelete));
            dispatch(setModalState(false));
          }}
          status={false}
          styles="text-[12px] 
          font-bold py-[10px] px-[8%] 
          ${btn_bg} 
          float-right 
          rounded-md mt-4 
          bg-[#FFF5D9]"
          text="Cancel"
        />

        <Button
          fn={deteleRecipient}
          status={false}
          styles="text-[12px] 
          font-bold py-[10px] px-[8%] 
          ${btn_bg} 
          float-right 
          rounded-md mt-4 
          bg-[#FFBD59]"
          text="Delete"
        />
      </div>
      <ToastContainer />
    </Modal>
  );
}
