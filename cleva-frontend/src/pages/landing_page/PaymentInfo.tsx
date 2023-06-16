import showPay from "../../asset/landing_photos/showPay.svg"

interface IPaymentInfo {}

const PaymentInfo = (props: IPaymentInfo) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 sm:gap-[115.47px] md:gap-[55px] justify-between items-center sm:px-[82.2px] px-[2rem] mt-[2rem]'>

    <div>
      <h1 className="sm:text-[35.2289px] text-[25px] font-[600] leading-[43px] sm:pr-[70px] text-center sm:text-left">
        Accept investments and payments in <span className='text-[#FF9E0B]'>USD</span> or <span className="text-[#026B00]">NGN</span>
      <br/></h1>
      <span><p className="text-base leading-6 mt-[18.41px]">Open a free USD and NGN bank account (yes, actual bank account not a domiciliary account). Simply share your Cleva bank account details with your customers and investors, and receive payments for free</p></span>
     </div>
     <div>
      <img src={showPay} alt="" />
     </div>
     
    </div>

  )
}

export default PaymentInfo