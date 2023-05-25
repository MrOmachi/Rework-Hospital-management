import React from 'react'
import BackButton from "../../components/Buttons/BackButton";
import TransferFlag from "../../components/TransferFlag";
import Input from "../../components/Layout/Input";
import ArrowIcon from "../../images/arrow-down.svg"

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

        <div className="bg-white shadow-sm py-5 px-6 rounded-sm mb-3">
          <div className="flex items-center mb-4">
            <label htmlFor="recipient" className='text-[#505050] text-sm'>Recipient</label>
            <p className='text-base ml-5'>Jason Obi</p>
            <button className='px-4 py-2'>
              <img src={ArrowIcon} alt="" srcSet="" />
            </button>
          </div>
          <span className="text-sm text-[#505050] leading-[0.1rem]">
          After we receive your USD, we will the transfer Naira to your recipient within 1 business day.
            </span>
        </div>

        <div className="bg-white shadow-sm py-5 px-6 rounded-sm mb-3">
          <div className="flex items-center mb-4">
            <label htmlFor="recipient" className='text-[#505050] text-sm'>Recipient</label>
            <p className='text-base ml-5'>Jason Obi</p>
            <button className='px-4 py-2'>
              <img src={ArrowIcon} alt="" srcSet="" />
            </button>
          </div>
          <span className="text-sm text-[#505050] leading-[0.1rem]">
          After we receive your USD, we will the transfer Naira to your recipient within 1 business day.
            </span>
        </div>
        <div className=''>
         

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
              <button  className="bg-cleva-gold text-sm font-bold py-3 md:px-10 px-6 rounded-lg">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    </>
  )
}

export default ConfirmTransfer