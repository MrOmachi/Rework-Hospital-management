import React from 'react'
import showPay from "../assets/showPay.svg"

interface IPaymentInfo {}

const PaymentInfo = (props: IPaymentInfo) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-[115.47px] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem] pb-[2rem]'>

    <div>
      <h1 className="text-[35.2289px] font-[600] leading-[43px] pr-[70px]">
        Accept investments and payments in <span className='text-[#FF9E0B]'>USD</span> or <span className="text-[#026B00]">NGN</span>
      <br/></h1>
      <span><p className="text-base leading-6 mt-[24.58px]">Open a free USD and NGN bank account (yes, actual bank account not a domiciliary account) 
      to accept payments from your customers and investors. Simply share your 
      bank account details with your customers and investors, and receive payments for free</p></span>
     </div>


     {/* <div>
      <h1 className="text-[35.2289px] w-[641.95px] font-[600] leading-[43px]">Accept investments and payments in <span className='text-[#FF9E0B]'>USD</span> or <span className="text-[#026B00]">NGN</span></h1>
      <p className="w-[594.98px] leading-[24px]">Open a free USD and NGN bank account (yes, actual bank account not a domiciliary account) 
      to accept payments from your customers and investors. Simply share your 
      bank account details with your customers and investors, and receive payments for free</p>
     </div> */}

     <div>
      <img src={showPay} />
     </div>
     
    </div>

  )
}


{/* <div>
      <h1 className="text-[35.2289px] w-[641.95px] font-[600] leading-[43px]">Accept investments and payments in <span className='text-[#FF9E0B]'>USD</span> or <span className="text-[#026B00]">NGN</span></h1>
      <p className="w-[594.98px] leading-[24px]">Open a free USD and NGN bank account (yes, actual bank account not a domiciliary account) 
      to accept payments from your customers and investors. Simply share your 
      bank account details with your customers and investors, and receive payments for free</p>
     </div> */}


// flex items-center mx-[82.2px]

export default PaymentInfo