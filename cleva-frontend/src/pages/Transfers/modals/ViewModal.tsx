import React, { useState } from "react";
import Modal from "../../../components/PopUps/Modal2";
import DetailsCard from "../../../components/Layout/DetailsCard";
import { useNavigate } from "react-router-dom";
import MainRecipientCard from "../../../components/Layout/MainRecipientCard";

const ViewModal = () => {
  const navigate = useNavigate();

  return (
    <Modal titlePosition="text-left" headerTitle="Review Transfer" btnText="Confirm Details" link="/transfers/confirm">
      <div className="px-4">
        <div className="text-center pt-8 pb-10">
          <p className="text-lg">
            Transfer <span className="font-bold text-xl">$2,010.00</span> to{" "}
            <span className="text-cleva-gold">Jason Obi</span>
          </p>

          <p className="text-xs italic mt-3">for Family upkeep</p>
        </div>

        <DetailsCard
          title="Transaction Details"
          pay="Bank Transfer"
          send="$200"
          fee="$10"
          amount="$2010.00"
        />
        <div className="border-dashed border-t border-[#BDBDBD] my-3"></div>
        <MainRecipientCard/>
      </div>
      
    </Modal>
  );
};

export default ViewModal;
