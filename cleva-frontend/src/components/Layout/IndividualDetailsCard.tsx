import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";

interface DetailProps {
  title: string;
  pay?: string;
  send?: string;

}


const DetailsCard: React.FC<DetailProps> = ({title,pay}) => {
  const { singleTransfer, loading, error } = useSelector((state:RootState) => state.transaction);
  const amount = singleTransfer? (singleTransfer as any).TransactionDetail.Amount : " " ;
  const fee =  singleTransfer? (singleTransfer as any).TransactionDetail.Fee : " ";
  const totalAmount = amount + fee;




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
          <p className="text-sm font-medium">${amount.toLocaleString()}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Transfer fee</p>
          <p className="text-sm font-medium">${fee.toLocaleString()}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-sm text-[#747A80]">Total amount</p>
          <p className="text-lg font-semibold">${totalAmount.toLocaleString()}.00</p>
        </div>
      </div>
    </>
  );
};

export default DetailsCard;
