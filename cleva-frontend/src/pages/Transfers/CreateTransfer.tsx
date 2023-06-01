import React, { useEffect, useState } from "react";
import BackButton from "../../components/Buttons/BackButton";
import Select from "../../components/Layout/inputs/Select";
import CurrencyInput from "../../components/Layout/CurrencyInput";
import Input from "../../components/Layout/Input";
import TransferFlag from "../../components/TransferFlag";
import ViewModal from "./modals/ViewModal";
import USIcon from "../../images/USD.svg";
import NGIcon from "../../images/ngn.svg";

import { useSelector, useDispatch } from "react-redux";

import {
  setRecipient,
  setTransactionDetails,
  setAmount,
  setFee,
  setTotalAmount,
  setConvertedAmount,
  setDescription,
  postTransaction,
} from "../../features/Transanctions/TransanctionSlice";
import { RootState } from "../../app/store";

const CreateTransfer = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const rate: number = 740;
  // const { amount, description, recipientName, accountNumber } = useSelector(
  //   (state: RootState) => state.transactions
  // );
  const amount = useSelector((state: RootState) => state.transaction.amount);
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
  const recipient = useSelector(
    (state: RootState) => state.transaction.recipient
  );

  // const dispatch = useDispatch();

  // const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(setRecipient(e.target.value));
  // };

  // const handleTransactionDetailsChange = (
  //   e: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   dispatch(setTransactionDetails(e.target.value));
  // };

  // const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(setAmount(Number(e.target.value)));
  // };

  // const handleChargesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   dispatch(setCharges(Number(e.target.value)));
  // };

  // Calculate total amount including charges
  // const totalAmount = amount + charges;

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(event.target.value);
    const newValue = isNaN(value) ? 0 : value;
    dispatch(setAmount(newValue));
    dispatch(setTotalAmount());
    const convertedValue = isNaN(value) ? 0 : value * rate;
    dispatch(setConvertedAmount(convertedValue));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setDescription(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const accountNumber = "2345768893";
    const bankName = "Access Bank";

    // Prepare the transaction data
    const transactionData = {
      recipient,
      amount,
      fee,
      description,
      accountNumber,
      bankName,
      totalAmount,
      convertedAmount
    };

    // Dispatch the post transaction action
    dispatch(postTransaction(transactionData))
  .unwrap() // Unwrap the result
  .then((data:any) => {
    // Handle successful response data
    console.log('Transaction successful', data);
  })
  .catch((error:any) => {
    // Handle error
    console.error('Transaction failed', error);
  });

    // Close the modal
    setModal(false);
  };

  // const TotalAmount = amount + fee;

  function toggleModal() {
    modal == true ? setModal(false) : setModal(true);
  }
  const recipientArr = [
    {
      value: "1",
      label: "Jason Obi",
    },
    {
      value: "2",
      label: "John Doe",
    },
    {
      value: "3",
      label: "Tolu Alabi",
    },
    {
      value: "4",
      label: "Philip Abel",
    },
    {
      value: "5",
      label: "Sifon Isaac ",
    },
  ];

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log(value);
    setRecipient(value);
  };

  const bank = [
    {
      value: "Select Bank",
      label: "Select Bank",
    },
  ];
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
        <div className="flex justify-between">
          <div>
            <p className="text-lg font-bold">International Transfer</p>
          </div>
          <div>
            <TransferFlag />
          </div>
        </div>

        <div>
          <Select
            title="Recipient"
            fn={handleSelectChange}
            placeholder="Select recipient"
            err=""
            value={recipient}
            arr={recipientArr}
            xtstyles=""
          />

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
            type="text"
            err=""
            placeholder="0.00"
            code="USD"
            flag={USIcon}
          />
          <p className="font-bold text-base mb-1">1 USD = {rate} NGN</p>
          <CurrencyInput
            title="Recipient will get"
            value={convertedAmount.toLocaleString()}
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
      </div>
      {modal && (
        <ViewModal onConfirm={handleSubmit} recAmount={convertedAmount} />
      )}
    </>
  );
};

export default CreateTransfer;
