import React from 'react'
import showPay from "../assets/showPay.svg"

interface IPaymentInfo {}

const PaymentInfo = (props: IPaymentInfo) => {
  return (
    <div className='flex items-center'>
     <div>
      <h1>Accept investments and payments in USD or NGN</h1>
      <p>Open a free USD and NGN bank account (yes, actual bank account not a domiciliary account) to accept payments from your customers and investors. Simply share your bank account details with your customers and investors, and receive payments for free</p>
     </div>

     <div>
      <img src={showPay} className='w-[533.33px] h-[588.13px]' />
     </div>
     
    </div>
  )
}

export default PaymentInfo