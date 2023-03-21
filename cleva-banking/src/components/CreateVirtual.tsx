import React from 'react'
import mg21 from "../assets/mg21.svg"
import right from "../assets/right.svg"

interface ICreateVirtual { }

const CreateVirtual = (props: ICreateVirtual) => {
  return (
    <div className='bg-[#E1DDD7] grid grid-cols-1 sm:grid-cols-2 sm:gap-[152.66px] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem]'>
      <div className="mr-[152.66px]">
        <img src={mg21} />
      </div>
      <div>
        <h1 className="text-[35.2289px] leading-[43px] font-[600]">
          Create <span className='text-[#FF9E0B]'> virtual </span>
          and <span className='text-[#FF9E0B]'> physical </span> cards for your business
        </h1>
        <p className='text-[#000000] text-[19.5716px] leading-[24px] mt-[19.39px] pb-[2rem]'>
          Don’t mix business with personal spend. Create virtual and physical cards in USD or NGN, fund the card with the amount you want, assign the card to your employees, and track spend
        </p>
      </div>
    </div>
  )
}

export default CreateVirtual