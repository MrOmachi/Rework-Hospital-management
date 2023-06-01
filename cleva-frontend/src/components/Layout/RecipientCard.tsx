import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";

interface DetailProps {
  title: string;
}
const RecipientCard: React.FC<DetailProps> = ({
  title,
  
}) => {
  const convertedAmount = useSelector((state: RootState) => state.transaction.convertedAmount);
const AcctName = "Jason Obi"
const bankName =" Access Bank"
const AcctNumber = 1234556777
  return (
    <>
      <div className="bg-[#FCFCFC] border border-[#F1F1F1] px-4 py-3 rounded-xl mb-3">
        <p className="font-medium">{title}</p>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Account name</p>
          <p className="text-sm font-medium">{AcctName}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Bank name</p>
          <p className="text-sm font-medium">{bankName}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Account number</p>
          <p className="text-sm font-medium">{AcctNumber}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-sm text-[#747A80]">Recipient receives</p>
          <p className="text-sm font-medium">N {convertedAmount.toLocaleString()}.00</p>
        </div>
      </div>
    </>
  );
};

export default RecipientCard;
