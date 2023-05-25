import React from "react";

interface DetailProps {
  title: string;
  pay?: string;
  send?: string;
  fee?: string;
  amount?: string;
  // AccName?: string;
  // BankName?: string;
  // AcctNumber?: number;
  // recAmount?: number;
}
const DetailsCard: React.FC<DetailProps> = ({
  title,
  pay,
  send,
  fee,
  amount,
}) => {
  return (
    <>
      <div className="bg-[#FCFCFC] border border-[#F1F1F1] px-4 py-3 rounded-xl mb-3">
        <p className="font-medium">{title}</p>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Pay with</p>
          <p className="text-sm font-medium">{pay}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">You’re sending</p>
          <p className="text-sm font-medium">{send}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Transfer fee</p>
          <p className="text-sm font-medium">{fee}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-sm text-[#747A80]">Total amount</p>
          <p className="text-lg font-semibold">{amount}</p>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
