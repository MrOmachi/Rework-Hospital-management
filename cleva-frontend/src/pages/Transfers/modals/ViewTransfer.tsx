import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import DetailsCard from "../../../components/Layout/IndividualDetailsCard";
import RecipientCard from "../../../components/Layout/IndividualRecipientCard";
import TabButtons from "../../../components/Tabs/LineButton";
import TabContent from "../../../components/Tabs/TabContent";
import PaymentBreakdown from "../../../components/Layout/PaymentBreakdown";
import TransferFlag from "../../../components/TransferFlag";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../app/store";
import Timeline from "../../../components/Layout/extras/TimeLine";
import {
  cancelTransfer,
  updateTransaction,
} from "../../../features/Transanctions/transactionApi";
import {
  setLoading,
  updateTransactionStatus,
} from "../../../features/Transanctions/TransanctionSlice";
import { ToastContainer, toast } from "react-toastify";

const ViewTransfer = () => {
  const [activeTab, setActiveTab] = useState<string>("status");
  const [open, setOpen] = useState(true);
  const [isPartVisible, setIsPartVisible] = useState(true);

  const cancelButtonRef = useRef(null);
  const navigate = useNavigate();

  const { singleTransfer, loading, error } = useSelector(
    (state: RootState) => state.transaction
  );

  console.log(singleTransfer)
  const today = new Date().toLocaleString();
  // const todayDate = today.getDate() + "-" + today.getMonth() + " - " + today.getFullYear();

  const dispatch = useDispatch<AppDispatch>();
  const transactionID = singleTransfer
    ? (singleTransfer as any).TransactionIdentifier
    : " ";

  // const HandleUpdateTransaction = () => {
  //   setLoading(true);
  //   try {
  //     updateTransaction(transactionID, "CANCELLED");
  //     dispatch(
  //       updateTransactionStatus({
  //         transactionID,
  //         TransactionState: "CANCELLED",
  //       })
  //     );
  //     // toast.success("Transaction cancelled successfully!");
  //     setLoading(false);
  //     setOpen(false);
  //   } catch (error: any) {
  //     console.error(error);
  //     toast.error(error.message);
  //   }
  //   setTimeout(() => {
  //     window.location.reload();
  //   }, 1000);
  // };

  const HandleUpdateTransaction = () => {
    setLoading(true);
    try {
      Swal.fire({
        title: 'Confirmation',
        text: 'Are you sure you want to cancel?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          updateTransaction(transactionID, 'CANCELLED');
          dispatch(
            updateTransactionStatus({
              transactionID,
              TransactionState: 'CANCELLED',
            })
          );
          Swal.fire({
            title: 'Success',
            text: 'Transaction cancelled successfully!',
            icon: 'success',
          });
          setOpen(false);
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          setLoading(false);
        }
      });
    } catch (error:any) {
      console.error(error);
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
      });
      setLoading(false);
    }
  };

  const status = singleTransfer
    ? (singleTransfer as any).TransactionState
    : " ";

  const statusResult =
    status === "COMPLETED" ? (
      <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#DEF7EC] text-[#03543F] font-medium text-xs">
        {singleTransfer ? (singleTransfer as any).TransactionState : " "}
      </span>
    ) : status === "IN_TRANSIT" ? (
      <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#EBFBFE] text-[#1892D7] font-medium text-xs">
        {singleTransfer ? (singleTransfer as any).TransactionState : " "}
      </span>
    ) : status === "PENDING" ? (
      <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#DFDFDF] text-[#2C2C2C] font-medium text-xs">
        {singleTransfer ? (singleTransfer as any).TransactionState : " "}
      </span>
    ) : status === "CANCELLED" ? (
      <span className="px-3 py-1 my-2 rounded-full capitalize bg-[#FDF0E7] text-[#FF6600] font-medium text-xs">
        {singleTransfer ? (singleTransfer as any).TransactionState : " "}
      </span>
    ) : (
      <span className=" px-3 py-1 my-2 font-medium capitalize bg-[#FDE8E8] rounded-full text-[#9B1C1C] text-[10px]">
        {singleTransfer ? (singleTransfer as any).TransactionState : " "}
      </span>
    );

  const amount = singleTransfer
    ? (singleTransfer as any).TransactionDetail.FromAmount
    : " ";
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white pb-8 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[35rem] ">
                <header
                  className={`w-full bg-[#EFEFEF] py-4 px-8  flex justify-between`}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-base font-bold leading-6 text-gray-900"
                  >
                    Transaction Details
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md text-black hover:text-gray-500 focus:outline-none focus:ring-2 font-bold"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-4 w-4" aria-hidden="true" />
                  </button>
                </header>

                <div className="">
                  <div className="mt-3">
                    <div className="flex justify-between px-6 py-7 items-center">
                      <div>
                        <p className="text-sm font-bold">
                          International Transfer
                        </p>
                      </div>
                      <div>
                        <TransferFlag />
                      </div>
                      <div>
                        <p className="text-xs">{today}</p>
                      </div>
                    </div>

                    <div className="bg-[#F6F6F6]">
                      <div className="text-center py-6">
                        <p className="text-lg">
                          Transfer{" "}
                          <span className="font-bold text-xl">
                            $
                            {amount.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}{" "}
                          </span>{" "}
                          to{" "}
                          <span className="text-[#B16F0B]">
                            {singleTransfer
                              ? (singleTransfer as any).TransactionDetail
                                  .Recipient.FullName.FirstName +
                                " " +
                                (singleTransfer as any).TransactionDetail
                                  .Recipient.FullName.LastName
                              : " "}
                          </span>
                        </p>

                        <div className="mt-2">
                          {singleTransfer ? statusResult : ""}
                        </div>
                      </div>
                    </div>

                    <div className=" w-full mb-4 md:mb-0 mt-8">
                      {/* tab section  */}
                      <ul className="grid grid-cols-3 gap-4 border-b-2 border-[#C1C1C1]">
                        <TabButtons
                          name="Status"
                          id="status"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabButtons
                          name="Transfer Summary"
                          id="transfer"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                        <TabButtons
                          name="Account Details"
                          id="account"
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
                        />
                      </ul>
                    </div>

                    {/* tab content  */}
                    <div className="mt-4 px-6 md:px-8">
                      <TabContent id="status" activeTab={activeTab}>
                        <div className="container mt-8">
                          <div className="w-[20rem] mx-auto mt-8">
                            <Timeline />
                          </div>
                        </div>
                        <div className="mt-12 md:mt-24">
                          <div className="flex justify-between">
                            <p className="text-sm text-[#6F6F6F]">
                              Transaction ID
                            </p>
                            <p>{transactionID}</p>
                          </div>
                        </div>
                        <footer>
                          {status === "PENDING" ? (
                            <div className="pt-4">
                              <button
                                type="button"
                                className="text-sm 
                          py-3
                            rounded-md mt-4 
                            border border-[#DB4949] w-[100%] text-[#DB4949]"
                                onClick={HandleUpdateTransaction}
                              >
                                {loading ? "Loading ..." : "Cancel Transaction"}
                              </button>
                            </div>
                          ) : (
                            <div className="pt-4">
                              <button
                                type="button"
                                className="text-sm 
                          py-3
                            rounded-md mt-4 
                            border border-[#35803F] w-[100%] text-[#35803F]"
                                onClick={() => setOpen(false)}
                              >
                                Done
                              </button>
                            </div>
                          )}
                        </footer>
                      </TabContent>

                      <TabContent id="transfer" activeTab={activeTab}>
                        <div>
                          <RecipientCard title="Recipient Details" />
                          <div className="border-dashed border-t border-[#BDBDBD] my-3"></div>
                          <DetailsCard
                            title="Transaction Details"
                            pay="Bank Transfer"
                          />
                        </div>
                        <div className="mt-8 md:mt-16">
                          <div className="flex justify-between">
                            <p className="text-sm text-[#6F6F6F]">
                              Transaction ID
                            </p>
                            <p>{transactionID}</p>
                          </div>
                        </div>
                        <footer>
                          {status === "PENDING" ? (
                            <div className="pt-4">
                              <button
                                type="button"
                                className="text-sm 
                          py-3
                            rounded-md mt-4 
                            border border-[#DB4949] w-[100%] text-[#DB4949]"
                                onClick={HandleUpdateTransaction}
                              >
                                {loading ? "Loading ..." : "Cancel Transaction"}
                              </button>
                            </div>
                          ) : (
                            <div className="pt-4">
                              <button
                                type="button"
                                className="text-sm 
                          py-3
                            rounded-md mt-4 
                            border border-[#35803F] w-[100%] text-[#35803F]"
                                onClick={() => setOpen(false)}
                              >
                                Done
                              </button>
                            </div>
                          )}
                        </footer>
                      </TabContent>

                      <TabContent id="account" activeTab={activeTab}>
                        <div>
                          <PaymentBreakdown
                            title="Account Details"
                            BankName="Bank of America"
                            AccName="Cleva limited"
                            AcctNumber={132123221}
                            routNum={34322345}
                            accType="Business Checking"
                            address="illinous,USA"
                            transferNote={false}
                          />
                        </div>

                        <footer>
                          {status === "PENDING" ? (
                            <div className="pt-4">
                              <button
                                type="button"
                                className="text-sm 
                            font-bold py-3
                            rounded-md mt-4 
                            w-[100%]
                            bg-[#FFBD59]"
                                onClick={() => setOpen(false)}
                                ref={cancelButtonRef}
                              >
                                I’ve completed the Transfer
                              </button>

                              <button
                                type="button"
                                className="text-sm 
                          py-3
                            rounded-md mt-4 
                            border border-[#DB4949] w-[100%] text-[#DB4949]"
                                onClick={HandleUpdateTransaction}
                              >
                                {loading ? "Loading ..." : "Cancel Transaction"}
                              </button>
                            </div>
                          ) : (
                            <div className="pt-4">
                              <button
                                type="button"
                                className="text-sm 
                          py-3
                            rounded-md mt-4 
                            border border-[#35803F] w-[100%] text-[#35803F]"
                                onClick={() => setOpen(false)}
                              >
                                Done
                              </button>
                            </div>
                          )}
                        </footer>
                      </TabContent>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
          <ToastContainer />
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ViewTransfer;
