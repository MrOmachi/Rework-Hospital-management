import React, { useState, useRef, useEffect } from "react";
import TabButtons from "../../components/Tabs/TabButton";
import TabContent from "../../components/Tabs/TabContent";
import Table from "../../components/Table/Index";
import  {TransferColumn}  from "../../components/Table/TransferColumn";
import TransferIcon from "../../images/make-transfer.svg"
import { Link } from "react-router-dom";
import ViewTransfer from "./modals/ViewTransfer";
import { useSelector, useDispatch } from "react-redux";
import { fetchTransactions, fetchTransactionById } from "../../features/Transanctions/transactionApi";
import { RootState, AppDispatch } from "../../app/store";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../../components/PopUps/Spinner";


export default function Transfers() {
  const { allTransfer, loading, error } = useSelector((state:RootState) => state.transaction);
  const [activeTab, setActiveTab] = useState<string>("all");
  const [myTableColumns, setMyTableColumns] = useState(TransferColumn);
  const [openColumn, setOpenColumn] = useState<boolean>(false);
  const [modal, setModal] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  // const showColumnModal = () => {
  //   setOpenColumn(true);
  // };

  function toggleModal(row:any) {
    dispatch(fetchTransactionById(row?.TransactionIdentifier));
    modal == true ? setModal(false) : setModal(true)
  }
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    if (buttonClicked) {
      window.location.reload(); // Reload the page
    } else {
      setButtonClicked(true);
    }
  };
  const successTrans = allTransfer.filter((transfer:any) => {
    return transfer.TransactionState === "COMPLETED";
  });

  return (
    <>
    
    <>
    {allTransfer?.length ? 
    (
      <div>
        <div className="mt-4">
          <h1 className="font-bold text-lg">Transfers</h1>
      </div>

      <div className="mt-5 mb-10 Tables">
      <div className="flex items-center justify-between xs:flex-wrap md:flex-nowrap">

        <div className=" w-full mb-4 md:mb-0 md:w-2/3 ">
          {/* tab section  */}
          <ul className="grid grid-cols-2 gap-4 bg-[#EBF0F0] rounded-[10px] px-2 py-1.5">
            <TabButtons
              name="Outgoing"
              id="all"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <TabButtons
              name="Incoming "
              id="successfulTab"
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
           
          </ul>
        </div>
        <div className="w-[70%]">
          <div className="flex justify-end">
            <Link to="/transfers/create" className="btn flex items-center" onClick={handleClick}>
            <img src={TransferIcon} alt="" srcSet="" className="mr-1"  />
              Make transfer
              </Link>
          </div>
        </div>
        </div>

        {/* tab content  */}
        <div className="mt-4">
          <TabContent id="all" activeTab={activeTab}>
            <Table
              data={allTransfer}
              TableColumns={TransferColumn}
              title={`Recent outgoing transfers`}
              searchPlaceholder="Search transfers"
              onClickTable={(row:any) => toggleModal(row)}
            />
          </TabContent>
          <TabContent id="successfulTab" activeTab={activeTab}>
            <Table
              data={successTrans}
              TableColumns={TransferColumn}
              title="Recent Incoming transfers"
              searchPlaceholder="Search transfers"
              onClickTable={(row:any) => toggleModal(row)}
            />
          </TabContent>
          
        </div>
      </div>
      <ToastContainer />

      {modal && <ViewTransfer />}
      </div>
    ) : <Spinner/>
     }
    </>
    </>
  );
}
