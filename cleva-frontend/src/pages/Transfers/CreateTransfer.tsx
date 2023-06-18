import React, { useEffect, useState } from "react";
import BackButton from "../../components/buttons/BackButton";
import Select from "../../components/Layout/inputs/Select";
import CurrencyInput from "../../components/Layout/CurrencyInput";
import Input from "../../components/Layout/inputs/Input";
import TransferFlag from "../../components/TransferFlag";
import ViewModal from "./modals/ViewModall";
import USIcon from "../../images/USD.svg";
import NGIcon from "../../images/ngn.svg";

import { useSelector, useDispatch } from "react-redux";
import { ITransaction } from "../../components/model";
import { postTransaction } from "../../features/Transanctions/transactionApi";
import { ToastContainer, toast } from "react-toastify";

import {
  setRecipientName,
  setTransactionDetails,
  setAmount,
  setFee,
  setTotalAmount,
  setConvertedAmount,
  setDescription,
  setLoading,
} from "../../features/Transanctions/TransanctionSlice";
import { RootState, AppDispatch } from "../../app/store";
import { Navigate, useNavigate } from "react-router-dom";

const CreateTransfer = () => {
  const [modal, setModal] = useState(false);
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
  const RecipientFirstName = useSelector(
    (state: RootState) => state.transaction.RecipientFirstName
  );
  const RecipientLastName = useSelector(
    (state: RootState) => state.transaction.RecipientLastName
  );

  const [recipientName, setRecipientName] = useState(
    `${RecipientFirstName} ${RecipientLastName}`
  );

  const accountNumber = useSelector(
    (state: RootState) => state.transaction.accountNumber
  );

  const bankName = useSelector(
    (state: RootState) => state.transaction.bankName
  );

  const loading = useSelector((state: RootState) => state.transaction.loading);
  const rate: number = 740;

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log(value);
    setRecipientName(value);
  };

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

  const transactionData = {
    amount,
    RecipientFirstName: "Jason",
    RecipientLastName: "obi",
    convertedAmount,
    fee: 10,
    totalAmount,
    description,
    accountNumber,
    bankName,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Dispatch the post transaction action
    setLoading(true);

    const action = postTransaction(transactionData);
    dispatch(action)
      .unwrap()
      .then((response: any) => {
        console.log(response);
        setLoading(false);
        toast.success("Transfer successful");
        navigate("/transfers/confirm");
        setModal(false);
        // Clear the input fields after a successful call
        // dispatch(setAmount(0));
        // dispatch(setDescription(''));
        // ... clear other input fields
      })
      .catch((error: any) => {
        console.log(error);
        toast.error(error);
      });
    console.log("click");
    // Close the modal
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

  // const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const value = e.target.value;
  //   console.log(value);
  //   setRecipientName(value);
  // };

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
            value={recipientName}
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

      {modal && <ViewModal onSubmit={handleSubmit} loading={loading} />}
      <ToastContainer />
    </>
  );
};

export default CreateTransfer;
