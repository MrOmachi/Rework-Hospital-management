import React, { useState } from "react";
import Modal from "../../../components/PopUps/TransactionModal";
import DetailsCard from "../../../components/Layout/DetailsCard";
import { useNavigate } from "react-router-dom";
import RecipientCard from "../../../components/Layout/RecipientCard";



import { useSelector, useDispatch } from "react-redux";
// import {
//   setRecipient,
//   setTransactionDetails,
//   setAmount,
//   setFee,
//   setTotalAmount,
//   setConvertedAmount,
//   setDescription
// } from "../../../features/Transanctions/TransanctionSlice";
import { RootState } from "../../../app/store";
interface ModalProps {
  // amount: any;
  recAmount: number;
  onConfirm: (e: any) => void;

}

const ViewModal:React.FC<ModalProps> = ({recAmount, onConfirm}) => {
  const amount = useSelector((state: RootState) => state.transaction.amount);
  const totalAmount = useSelector((state: RootState) => state.transaction.totalAmount);
  const description = useSelector((state: RootState) => state.transaction.description);
  const fee = useSelector((state: RootState) => state.transaction.fee);



  const navigate = useNavigate();

  return (
    <Modal titlePosition="text-left" headerTitle="Review Transfer" btnText="Confirm Details" link="/transfers/confirm">
      <div className="px-4">
        <div className="text-center pt-8 pb-10">
          <p className="text-lg">
            Transfer <span className="font-bold text-xl">${totalAmount.toLocaleString()}.00</span> to{" "}
            <span className="text-cleva-gold">Jason Obi</span>
          </p>

          <p className="text-xs italic mt-3">{description}</p>
        </div>

       
        <RecipientCard title="Recipient Details"/>
        <div className="border-dashed border-t border-[#BDBDBD] my-3"></div>
        <DetailsCard
          title="Transaction Details"
          pay="Bank Transfer"
        />
      </div>
      
    </Modal>
  );
};

export default ViewModal;
