import React from "react";
import BackButton from "../../components/Buttons/BackButton";
import TransferFlag from "../../components/TransferFlag";
const createTransfer = () => {
  return (
    <>
      <div className="flex items-center">
        <BackButton />
        <p className="text-lg font-bold ml-3">Make Transfer</p>
      </div>

      <div className="w-1/2 mx-auto my-8">
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold">International Transfer</p>
          </div>
          <div>
            <TransferFlag />
          </div>
        </div>
      </div>
    </>
  );
};

export default createTransfer;
