import React from "react";

interface DetailProps {
  title: string;
  AccName: string;
  BankName: string;
  AcctNumber: number;
  recAmount: string;
}
const RecipientCard: React.FC<DetailProps> = ({
  title,
  AccName,
  BankName,
  AcctNumber,
  recAmount,
}) => {
  return (
    <>
      <div className="bg-[#FCFCFC] border border-[#F1F1F1] px-4 py-3 rounded-xl mb-3">
        <p className="font-medium">{title}</p>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Account name</p>
          <p className="text-sm font-medium">{AccName}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Bank name</p>
          <p className="text-sm font-medium">{BankName}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Account number</p>
          <p className="text-sm font-medium">{AcctNumber}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-sm text-[#747A80]">Recipient receives</p>
          <p className="text-sm font-medium">{recAmount}</p>
        </div>
      </div>
    </>
  );
};

export default RecipientCard;
