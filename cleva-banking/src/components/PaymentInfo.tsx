import React from 'react'
import showPay from "../assets/showPay.svg"

interface IPaymentInfo {}

const PaymentInfo = (props: IPaymentInfo) => {
  return (
    <div className='flex items-center mx-[82.2px]'>
     <div>
      <h1 className="text-[35.2289px] w-[641.95px] font-[600] leading-[43px]">Accept investments and payments in <span className='text-[#FF9E0B]'>USD</span> or <span className="text-[#026B00]">NGN</span></h1>
      <p className="w-[594.98px] leading-[24px]">Open a free USD and NGN bank account (yes, actual bank account not a domiciliary account) to accept payments from your customers and investors. Simply share your bank account details with your customers and investors, and receive payments for free</p>
     </div>

     <div>
      <img src={showPay} className='w-[533.33px] h-[588.13px]' />
     </div>
     
    </div>
  )
}

export default PaymentInfo