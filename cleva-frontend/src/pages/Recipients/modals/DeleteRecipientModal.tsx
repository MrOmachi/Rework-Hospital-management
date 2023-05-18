import React from "react";
import Modal from "../../../components/PopUps/Modal";
import Button from "../../../components/Layout/buttons/Button";
import { useNavigate } from "react-router-dom";

export default function DeleteRecipientModal() {
  const navigate = useNavigate();
  return (
    <Modal height="h-64" width="w-[35%]" header="Remove Recipient">
      <div className="text-sm pt-10 ps-10 w-[67%]">
        Are you sure you want to remove Jason Obi as a recipient?
      </div>

      <div className="px-10 flex justify-end gap-3">
        <Button
          fn={() => navigate("")}
          styles="text-[12px] 
    font-bold py-[10px] px-[8%] 
    ${btn_bg} 
    float-right 
    rounded-md mt-4 
    bg-[#FFF5D9]"
          text="Cancel"
        />

        <Button
          fn={() => navigate("/confirm_recipient")}
          styles="text-[12px] 
    font-bold py-[10px] px-[8%] 
    ${btn_bg} 
    float-right 
    rounded-md mt-4 
    bg-[#FFBD59]"
          text="Delete"
        />
      </div>
    </Modal>
  );
}
