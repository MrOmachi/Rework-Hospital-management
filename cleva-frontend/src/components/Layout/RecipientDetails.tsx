import React from 'react'
import ArrowIcon from "../../images/arrow-down.svg"

const RecipientDetails = () => {
  return (
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

  )
}

export default RecipientDetails