import React, { useState } from "react";
import BackButton from "../../components/Buttons/BackButton";
import Select from "../../components/Layout/inputs/Select";
import Input from "../../components/Layout/Input";
import TransferFlag from "../../components/TransferFlag";
import ViewModal from "./modals/ViewModal";


const CreateTransfer = () => {
  const [modal, setModal] = useState(false)

  function toggleModal() {
    modal == true ? setModal(false) : setModal(true)
  }
  const recipient = [
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

  const bank = [
    {
      value: "Select Bank",
      label: "Select Bank",
    },
  ];
  const handleChange = () => {
    console.log();
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
            fn={handleChange}
            placeholder="Select recipient"
            err=""
            arr={recipient}
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

          <Input
            title="You will send"
            value="0.00"
            fn={handleChange}
            type="text"
            err=""
          />

          <Input
            title="Recipient will get"
            value="0.00"
            fn={handleChange}
            type="text"
            err=""
          />

          <Input
            title="Description"
            value="Enter description of payment"
            fn={handleChange}
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
              <button onClick={() => toggleModal()} className="bg-cleva-gold text-sm font-bold py-3 md:px-10 px-6 rounded-lg">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
      {modal && <ViewModal />}
    </>
  );
};

export default CreateTransfer;
