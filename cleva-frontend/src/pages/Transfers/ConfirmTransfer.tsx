import React from "react";
import BackButton from "../../components/buttons/BackButton";
import TransferFlag from "../../components/TransferFlag";
import RecipientDetails from "../../components/Layout/RecipientDetails";
import TransferCard from "../../components/Layout/TransferCard";
import BankTransfer from "../../components/Layout/extras/BankTransfer";
import PaymentBreakdown from "../../components/Layout/PaymentBreakdown";
import { Link } from "react-router-dom";


const ConfirmTransfer = () => {

  const handleChange = () => {
    console.log();
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
              <Link
                to="/transfers/view"
                className="bg-cleva-gold text-sm font-bold py-3 md:px-10 px-6 rounded-lg"
              >
                I’ve completed the Transfer
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ConfirmTransfer;
