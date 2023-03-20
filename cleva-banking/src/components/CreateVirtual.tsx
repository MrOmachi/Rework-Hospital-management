import React from 'react'
import mg21 from "../assets/mg21.svg"
import right from "../assets/right.svg"

interface ICreateVirtual {}

const CreateVirtual = (props: ICreateVirtual) => {
  return (
    <div className='flex bg-[#E1DDD7] justify-between items-center'>
     <div>
       <img src={mg21} />
     </div>
     <div>
      <h1 className="flex items-center text-[35.2289px] leading-[43px] font-[600]">Create <span className='text-[#FF9E0B]'>Virtual</span>
      and <span className='text-[#FF9E0B]'>pysical</span>card for your business</h1>
      <p className='text-[#000000] font-[500] text-[19.5716px] leading-[24px] w-[421.77px]'>
      Don’t mix business with personal spend. Create virtual and physical cards in USD or NGN, fund the card with the amount you want, assign the card to your employees, and track spend
      </p>
     </div>
    </div>
  )
}

export default CreateVirtual