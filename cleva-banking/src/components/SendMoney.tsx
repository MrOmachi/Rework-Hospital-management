import m71 from "../assets/m71.svg"

interface ISendMoney {}

const SendMoney = (props: ISendMoney) => {
  return (
    <div className='flex items-center justify-between mx-[82.2px]'>
     <div>
      <h1 className="text-[35.2289px] w-[641.95px] font-[600] leading-[43px]
      break-normal md:break-all">Send money <span className='text-[#FF9E0B]'>locally</span> and <span className="text-[#FF9E0B]">across borders</span></h1>
      <p className="w-[594.98px] leading-[24px]">Transfer money from your Cleva account to any bank account in Nigeria or in the US. Pay your vendors and suppliers with ease no matter where they’re located</p>
     </div>

     <div>
      <img src={m71} className='w-[533.33px] h-[588.13px]' />
     </div>
     
    </div>
  )
}

export default SendMoney