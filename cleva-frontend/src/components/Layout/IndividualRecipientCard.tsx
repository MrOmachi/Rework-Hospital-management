import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import nairaIcon from "../../images/naira.svg";
import {
  fetchRecipients,
  fetchRates,
} from "../../features/Transanctions/transactionApi";
import { RootState, AppDispatch } from "../../app/store";
import { setExchangeRate } from "../../features/Transanctions/TransanctionSlice";

interface DetailProps {
  title: string;
}
const RecipientCard: React.FC<DetailProps> = ({ title }) => {
  const dispatch = useDispatch<AppDispatch>();

  const { singleTransfer, rates, loading, error } = useSelector(
    (state: RootState) => state.transaction
  );
  const amount = singleTransfer
    ? (singleTransfer as any).TransactionDetail.Amount
    : " ";
  const exchangeRate = useSelector(
    (state: RootState) => state.transaction?.exchangeRate
  );
  dispatch(setExchangeRate((rates as any).ToCurrencyRate));


  const parseNumber = (value: string): number => {
    const stringValue = String(value);
    const parsedValue = parseFloat(stringValue.replace(/[^0-9.-]+/g, ""));
    return isNaN(parsedValue) ? 0 : parsedValue;
  };

  const parsedAmount = parseNumber(amount);
  // const parsedRate = parseNumber(exchangeRate);

  const convertedAmount = parsedAmount * exchangeRate;

  const AcctName = singleTransfer
    ? (singleTransfer as any).TransactionDetail.Recipient.FullName.FirstName +
      " " +
      (singleTransfer as any).TransactionDetail.Recipient.FullName.LastName
    : " ";
  const bankName = singleTransfer
    ? (singleTransfer as any).TransactionDetail.Recipient.BankName
    : "";
  const AcctNumber = singleTransfer
    ? (singleTransfer as any).TransactionDetail.Recipient.AccountNumber
    : "";

  useEffect(() => {
    dispatch(fetchRecipients());
    dispatch(fetchRates());
  }, [dispatch]);

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
            {convertedAmount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipientCard;
