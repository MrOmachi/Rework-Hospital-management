import m71 from "../assets/m71.svg"

interface ISendMoney {}

const SendMoney = (props: ISendMoney) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-[238.77px] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem]'>
     <div>
      <h1 className="text-[35.2289px] font-[600] leading-[43px]
      break-normal md:break-all">Send money <span className='text-[#FF9E0B]'>locally</span> and <span className="text-[#FF9E0B]">across borders</span></h1>
      <p className="leading-[24px]">Transfer money from your Cleva account to any bank account in Nigeria or in the US. Pay your vendors and suppliers with ease no matter where they’re located</p>
     </div>

     <div>
      <img src={m71} />
     </div>
     
    </div>
  )
}

export default SendMoney