import React from 'react'

interface  CardProps{
  title : string;
  feeText : string;
  period: string;
}
const TransferCard: React.FC<CardProps> = ({title, feeText, period}) => {
  return (
    <div className='border rounded-lg border-[#E7E7E7] p-5'>
      <h3 className='text-[#3E3232] text-lg font-medium mb-7'>{title}</h3>
      <p className='text-[#2F2626]'>{feeText}</p>
      <p className='text-[#4F4F4F]'>{period}</p>
    </div>
  )
}

export default TransferCard