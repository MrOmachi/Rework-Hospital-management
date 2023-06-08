import React from 'react'
import PayIcon from "../../../images/pay.svg"
const BankTransfer = () => {
  return (
    <div className='bg-[#F1F1F1] p-5 text-center'>
      <div className="flex items-center justify-center">
        <img src={PayIcon} alt="" srcSet="" />
        <p className='text-base font-semibold text-[#0B0B0B] ml-2'>Pay with bank transfer</p>
      </div>
    </div>
  )
}

export default BankTransfer