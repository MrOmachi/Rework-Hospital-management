import React, { useState } from "react";
import BackButton from "../../components/Buttons/BackButton";
import Select from "../../components/Layout/inputs/Select";
import Input from "../../components/Layout/Input";
import TransferFlag from "../../components/TransferFlag";
import progressIcon from "../../images/progress.svg";
import { Link } from "react-router-dom";

const ViewTransfer = () => {
  return (
    <>
      <div className="flex items-center">
        <BackButton />
        <p className="text-lg font-bold ml-3">Make Transfer</p>
      </div>

      <div className="flex justify-ccenter items-center h-[75vh]">
        <div className="w-1/2 mx-auto mt-16 md:mb-20 mb-12 text-center p-4">
          <div className="flex justify-center">
            <img src={progressIcon} alt="progress" className="w-16 h-16" />
          </div>
          <div>
            <p className="text-lg font-medium mt-10">Transfer Pendng!</p>
            <p className="text-[#535353] mb-8">
              Once Cleva receives your fund, we’ll send{" "}
              <span className="text-[#242424] font-medium">#740,000.00 </span>to
              Jason Obi within 1 business day.
            </p>

            <div className="mt-12">
              <Link
                to="/transfers"
                className="bg-cleva-gold py-4 px-12 rounded-lg font-medium"
              >
                View Transfers
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewTransfer;
