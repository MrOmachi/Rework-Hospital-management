import React from 'react'

interface DetailProps {
  title: string;
  AccName: string;
  BankName: string;
  AcctNumber: number;
  routNum: number;
  accType: string;
  address: string;
}
const PaymentBreakdown: React.FC<DetailProps> = ({title,
  AccName,
  BankName,
  AcctNumber,
  routNum,
  accType,
  address,}) => {
  return (
    <div className='md:py-10 md:px-12 p-4'>
      <div className="text-center">
        <p className="text-base">Amount</p>
        <p className='text-3xl font-semibold'>$2,010.00</p>
        <p className="mt-6 mb-4 text-sm">Transfer the amount shown to the banking details below</p>
      </div>

      <div className="bg-[#FBFBFB] border border-[#F0F0F0] shadow-lg px-8 py-6 rounded-xl mb-3">
        <p className="font-medium text-[#4D4E4F] text-lg">{title}</p>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Account name</p>
          <p className="text-base font-medium">{AccName}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Bank name</p>
          <p className="text-base font-medium">{BankName}</p>
        </div>
        <div className="flex justify-between my-3">
          <p className="text-sm text-[#747A80]">Account number</p>
          <p className="text-base font-medium">{AcctNumber}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-sm text-[#747A80]">Routing number</p>
          <p className="text-base font-medium">{routNum}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-sm text-[#747A80]">Account Type</p>
          <p className="text-base font-medium">{accType}</p>
        </div>
        <div className="flex justify-between mt-3">
          <p className="text-sm text-[#747A80]">Address</p>
          <p className="text-base font-medium">{address}</p>
        </div>

      </div>
      <p className="text-[#E84343] text-sm mt-2">You must transfer the money from a bank account in your business name.</p>
      
    </div>
  )
}

export default PaymentBreakdown