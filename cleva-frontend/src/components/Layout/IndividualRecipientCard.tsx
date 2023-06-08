import React from "react";
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";
import nairaIcon from "../../images/naira.svg"

interface DetailProps {
  title: string;
}
const RecipientCard: React.FC<DetailProps> = ({
  title,
  
}) => {
  
  const { singleTransfer, loading, error } = useSelector((state:RootState) => state.transaction);

  const convertedAmount = useSelector((state: RootState) => state.transaction.convertedAmount);
const AcctName = singleTransfer? (singleTransfer as any).TransactionDetail.Recipient.FullName.FirstName + " " + (singleTransfer as any).TransactionDetail.Recipient.FullName.LastName  : " "
const bankName = useSelector((state: RootState) => state.transaction.bankName);
const AcctNumber = singleTransfer? (singleTransfer as any).TransactionDetail.Recipient.AccountNumber : "";
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
          <div className="text-sm font-medium flex">
            <img src={nairaIcon} alt="" srcSet="" className="mr-[1px]" />
             {convertedAmount.toLocaleString()}.00</div>
        </div>
      </div>
    </>
  );
};

export default RecipientCard;
