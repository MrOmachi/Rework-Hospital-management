import React, { useState } from "react";

import Modal from "../../../components/PopUps/Modal2";
import DetailsCard from "../../../components/Layout/DetailsCard";
import { useNavigate } from "react-router-dom";
import MainRecipientCard from "../../../components/Layout/MainRecipientCard";
import TabButtons from "../../../components/Tabs/LineButton";
import TabContent from "../../../components/Tabs/TabContent";
import PaymentBreakdown from "../../../components/Layout/PaymentBreakdown";
import TransferFlag from "../../../components/TransferFlag";
import TimeLine from "../../../components/Layout/extras/TimeLine";

const ViewTransfer = () => {
  const [activeTab, setActiveTab] = useState<string>("status");
  const steps = [
    { time: 'Today at 10:45pm', label: 'You’ve sent your transfer' },
    { time: 'Today at 10:45pm', label: 'We’ve received your USD ' },
    { time: 'Today at 10:45pm', label: 'The NGN is on its way' },
  ];

  return (
    <Modal
      titlePosition="text-left"
      headerTitle="Transaction Details"
      btnText="Confirm Details"
      link="/transfers/confirm"
    >
      <div className="flex justify-between px-6 py-7 items-center">
        <div>
          <p className="text-sm font-bold">International Transfer</p>
        </div>
        <div>
          <TransferFlag />
        </div>
        <div>
          <p className="text-xs">May 01,2023 8PM</p>
        </div>
      </div>

      <div className="bg-[#F6F6F6]">
        <div className="text-center py-6">
          <p className="text-lg">
            Transfer <span className="font-bold text-xl">$2,010.00</span> to{" "}
            <span className="text-cleva-gold">Jason Obi</span>
          </p>

          <div className="mt-2">
          <span className="px-3 py-1 text-xs capitalize rounded-[6px] bg-[#DFDFDF] text-[#2C2C2C] font-medium">
            <span>Pending</span>
          </span>
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

        <div className="">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-4">
                <div className="text-sm mr-6 text-[#7D7D7D]">{step.time}</div>
              <div className="w-2 h-2 bg-[#35803F] rounded-full"></div>
              <div className="ml-4 text-base">
                <div>{step.label}</div>
              </div>
            </div>
          ))}

          {/* <div className="mt-5">
            <TimeLine/>
          </div> */}
        </div>
        

        </TabContent>

        <TabContent id="transfer" activeTab={activeTab}>
          <div>
            <DetailsCard
              title="Transaction Details"
              pay="Bank Transfer"
            />
            <div className="border-dashed border-t border-[#BDBDBD] my-3"></div>
            <MainRecipientCard recAmount={787} />
          </div>
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
        </TabContent>
      </div>
    </Modal>
  );
};

export default ViewTransfer;
