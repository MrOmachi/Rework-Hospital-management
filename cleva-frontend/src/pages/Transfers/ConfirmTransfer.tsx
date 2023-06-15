import React, { useState } from "react";
import BackButton from "../../components/Buttons/BackButton";
import TransferFlag from "../../components/TransferFlag";
import RecipientDetails from "../../components/Layout/RecipientDetails";
import TransferCard from "../../components/Layout/TransferCard";
import BankTransfer from "../../components/Layout/extras/BankTransfer";
import PaymentBreakdown from "../../components/Layout/PaymentBreakdown";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../app/store";
import { postTransaction } from "../../features/Transanctions/transactionApi";
import { setLoading } from "../../features/Transanctions/TransanctionSlice";
import { ToastContainer, toast } from "react-toastify";

const ConfirmTransfer = () => {
  const transactionData = useSelector((state: RootState) => state.transaction);
  const {  loading } = useSelector(
    (state: RootState) => state.transaction
  );

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const amount = transactionData.amount
  const fee =  transactionData.fee
  const totalAmount = amount + fee;
  

  const handleChange = () => {
    console.log();
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
console.log(transactionData)
console.log(totalAmount)
    const action = postTransaction(transactionData);
    dispatch(action)
      .unwrap()
      .then((response: any) => {
        if (response) {
          setLoading(false);
          toast.success("Transfer successful");
          // Clear the input fields after a successful call
         
          setTimeout(() => {
            navigate("/transfers/view");
          }, 5000);
        } else {
          setLoading(false);
          toast.error("API response is undefined");
          console.log("API response is undefined");
        }
      })
      .catch((error: any) => {
        setLoading(false);
        toast.error("Transfer failed");
        console.log(error);
        // Prevent navigation if the response returns undefined
        if (error === undefined) {
          return;
        }
        return Promise.reject(error);
      });
  
    console.log("click");
  };
  return (
    <>
      {/* <div className="bg-[#F8F8F8]"> */}
      <div className="flex items-center">
        <BackButton />
        <p className="text-lg font-bold ml-3">Make Transfer</p>
      </div>

      <div className="w-2/3 mx-auto mt-8 md:mb-20 mb-12 bg-[#F8F8F8] p-8">
        <div className="flex justify-between bg-white shadow-sm py-5 px-6 rounded-sm mb-3">
          <div>
            <p className="text-lg font-bold">International Transfer</p>
          </div>
          <div>
            <TransferFlag />
          </div>
        </div>

        <RecipientDetails />

        <div className="bg-white">
          <div className="bg-white shadow-sm py-5 px-6 rounded-sm mb-3">
            <p className="mb-3">We accept transfers from</p>
            <div className="grid md:grid-cols-3 gap-4">
              <TransferCard
                title="ACH"
                feeText="No bank fee"
                period="2-3 business days"
              />
              <TransferCard
                title="Wire"
                feeText="Bank fee applies"
                period="Within 24 hrs"
              />
            </div>
          </div>

          <BankTransfer />
          <div className="md:py-10 md:px-12 p-4">

            <div>
              <div className="text-center">
                <p className="text-base">Amount</p>
                <p className="text-3xl font-semibold">${totalAmount?.toLocaleString()}.00</p>
                <p className="mt-6 mb-4 text-sm">
                  Transfer the amount shown to the banking details below
                </p>
              </div>
            </div>
            <PaymentBreakdown
              title="Account Details"
              BankName="Bank of America"
              AccName="Cleva limited"
              AcctNumber={132123221}
              routNum={34322345}
              accType="Business Checking"
              address="illinous,USA"
              transferNote={true}
            />
          </div>
          <div className="flex justify-between gap-4 pb-12 px-12">
            <div>
              <button className="bg-cancel text-sm font-medium py-3 md:px-10 px-6 rounded-lg">
                I’ll pay later
              </button>
            </div>
            <div>
              <button onClick={handleSubmit} type="submit" disabled={loading}
                className="bg-cleva-gold text-sm font-bold py-3 md:px-10 px-6 rounded-lg"
              >
              {loading ? "Please wait ..." : "I’ve completed the Transfer"}

                
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ConfirmTransfer;
