import React, { useEffect, useState } from "react";
import BackButton from "../../components/Buttons/BackButton";
import Select from "../../components/Layout/inputs/Select";
import CurrencyInput from "../../components/Layout/CurrencyInput";
import Input from "../../components/Layout/Input";
import TransferFlag from "../../components/TransferFlag";
import ViewModal from "./modals/ViewModall";
import USIcon from "../../images/USD.svg";
import NGIcon from "../../images/ngn.svg";

import { useSelector, useDispatch } from "react-redux";
import { ITransaction } from "../../components/model";
import { submitTransaction } from "../../features/services/DashboardServices";
import { ToastContainer, toast } from "react-toastify";
import { fetchRecipients , fetchRates} from "../../features/Transanctions/transactionApi";

import {
  setRecipientFirstName,
  setRecipientLastName,
  setTransactionDetails,
  setAmount,
  setFee,
  setTotalAmount,
  setConvertedAmount,
  setDescription,
  setLoading,
  setBankName,
  setRecipientIdentifier,
  setExchangeRate,
  setAccountNumber
} from "../../features/Transanctions/TransanctionSlice";
import { RootState, AppDispatch } from "../../app/store";
import { useNavigate } from "react-router-dom";

const CreateTransfer = () => {
  const [modal, setModal] = useState(false);
  const [amount, setAmountInput] = useState("");
  const { allRecipients, rates } = useSelector((state:RootState) => state.transaction);

  const convertedAmount = useSelector(
    (state: RootState) => state.transaction.convertedAmount
  );
  const fee = useSelector((state: RootState) => state.transaction.fee);
  const totalAmount = useSelector(
    (state: RootState) => state.transaction.totalAmount
  );
  const description = useSelector(
    (state: RootState) => state.transaction.description
  );
  const RecipientFirstName = useSelector(
    (state: RootState) => state.transaction.RecipientFirstName
  );
  const RecipientLastName = useSelector(
    (state: RootState) => state.transaction.RecipientLastName
  );
  const RecipientIdentifier = useSelector(
    (state: RootState) => state.transaction.RecipientIdentifier
  );
  const [recipientName, setRecipientName] = useState(
    `${RecipientFirstName} ${RecipientLastName}`
  );

  const AccountNumber = useSelector(
    (state: RootState) => state.transaction.AccountNumber
  );

  const bankName = useSelector(
    (state: RootState) => state.transaction.bankName
  );

  const exchangeRate = useSelector(
    (state: RootState) => state.transaction.exchangeRate
  );

  const loading = useSelector((state: RootState) => state.transaction.loading);
  // const [selectedOption, setSelectedOption] = useState<>({
  //   bankName ,
  //   RecipientFirstName

  // })
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const priceString = (rates as any)?.Fee;
if (priceString){
const price = parseInt(priceString.slice(1));
  dispatch(setFee(price))
  dispatch(setExchangeRate((rates as any).ToCurrencyRate))
}
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectValue:string = e.target.value;
    setRecipientName(selectValue);
  
    const selectedRecipient = allRecipients.find((recipient:any) => recipient.FullName.FirstName + " " + recipient.FullName.LastName === selectValue)

    if (selectedRecipient) {
      dispatch(setBankName((selectedRecipient as any) .BankName));
      dispatch(setRecipientIdentifier((selectedRecipient as any) .RecipientIdentifier));
      dispatch(setAccountNumber((selectedRecipient as any) .AccountNumber))

    } 
    
    const [selectedFirstName, selectedLastName] = selectValue.split(' ');
    dispatch(setRecipientFirstName(selectedFirstName));
    dispatch(setRecipientLastName(selectedLastName));    
  };

  // const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //  const value = e.target.value
  //   setAmountInput(e.target.value)
  //  dispatch(setTotalAmount());
  //  const convertedValue = isNaN(value) ? 0 : value * exchangeRate;
  //  dispatch(setConvertedAmount(convertedValue));
  // };

  // const handleBlur  = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const value = parseFloat(e.target.value);
  //   const newValue = isNaN(value) ? 0 : value;
  //   dispatch(setAmount(newValue));

  // }


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(/,/g, ''); // Remove existing commas
  setAmountInput(value);

  const parsedValue = parseFloat(value);
  const convertedValue = isNaN(parsedValue) ? 0 : parsedValue * exchangeRate;

  dispatch(setTotalAmount());
  dispatch(setConvertedAmount(convertedValue));
};

const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value.replace(/,/g, '');
  const parsedValue = parseFloat(value);
  const newValue = isNaN(parsedValue) ? 0 : parsedValue;

  dispatch(setAmount(newValue));
};

  
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
  };

  useEffect(() => {
    dispatch(fetchRecipients());
    dispatch(fetchRates());
  }, [dispatch]);

  const transactionData = {
    amount,
    RecipientFirstName,
    RecipientLastName,
    convertedAmount,
    fee: 10,
    totalAmount,
    description,
    AccountNumber,
    bankName,
    RecipientIdentifier,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

const action = submitTransaction(transactionData);
dispatch(action)
navigate("/transfers/confirm");
  
   
    console.log("click");
  };
  // const TotalAmount = amount + fee;

  function toggleModal() {
    modal == true ? setModal(false) : setModal(true);
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    console.log(value);
  };
  return (
    <>
      <div className="flex items-center">
        <BackButton />
        <p className="text-lg font-bold ml-3">Make Transfer</p>
      </div>

      <div className="w-1/2 mx-auto mt-8 md:mb-20 mb-12">
        <div className="flex justify-between mb-6">
          <div>
            <p className="text-lg font-bold">International Transfer</p>
          </div>
          <div>
            <TransferFlag />
          </div>
        </div>
        
        <div>

        <select
    onChange={handleSelectChange}
    className={`bg-[#F9F9F9] w-full
     rounded-md  text-[14px] border-1
     h-12 outline-none border text-[#424242] focus:outline-none focus:ring-cleva-gold focus:border-cleva-gold`}
    name=""
    id=""
    value={recipientName}
   >
    <option value="" >
        Select Recipient
      </option>
      {
     allRecipients.map((recipient: any) => (
      <option key={recipient.RecipientIdentifier} value={recipient.value}>
       {recipient.FullName.FirstName + " " + recipient.FullName.LastName }
      </option>

      
     ))
    } 
   </select>
  
         
          <div className="mt-4">
            <label className="text-sm pb-1 text-left">Pay with</label>
            <div className="bg-[#F3F3F3] p-4 rounded-md">
              <p className="font-medium text-sm">Bank Transfer</p>
            </div>
            <span className="text-xs text-[#505050] leading-3">
              You send Cleva a transfer from your bank app and after Cleva
              receives the funds, Cleva sends Naira to your recipient. On the
              next page, you will see the account details for you to transfer to
            </span>
          </div>

          <CurrencyInput
            title="You will send"
            value={amount.toLocaleString()}
            fn={handleAmountChange}
            onBlur={handleBlur}
            type="text"
            err=""
            placeholder="0.00"
            code="USD"
            flag={USIcon}
          />
          <p className="font-bold text-base mb-1">1 USD = {exchangeRate} NGN</p>
          <CurrencyInput
            title="Recipient will get"
            value={convertedAmount.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            })}
            fn={handleChange}
            type="text"
            err=""
            readOnly={true}
            code="NGN"
            flag={NGIcon}
          />
          <div></div>
          <div className="flex items-center my-1">
            <p className="text-xs font-medium text-[#747A80] mr-4">
              Transfer fee
            </p>
            <p className="text-xs font-bold">{fee} USD </p>
          </div>
          <Input
            title="Description"
            value={description}
            fn={handleDescriptionChange}
            type="text"
            err=""
          />

          <div className="flex justify-between gap-4 my-6">
            <div>
              <button className="bg-cancel text-sm font-bold py-3 md:px-10 px-6 rounded-lg">
                Cancel
              </button>
            </div>
            <div>
              <button
                onClick={() => toggleModal()}
                className="bg-cleva-gold text-sm font-bold py-3 md:px-10 px-6 rounded-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      <ToastContainer />

      </div>

      {modal && <ViewModal onSubmit={handleSubmit} loading={loading} />}

    </>
  );
};

export default CreateTransfer;
