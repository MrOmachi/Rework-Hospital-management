import { checkSymbol } from "../../../Image";

interface IKycCard {
  title: string;
  body: string;
  text: string;
  icon?: String;
}

export function Timeline(props:any) {
    return (
    <>
    <div className="w-[25%] md:w-[25%] sm:w-[35%]">
<div className="flex">
  <div className="items-center">
      <p className={(props.step === 1 ? `bg-[#FFBD59] text-[#747A80]`:'') + ` rounded-full w-[16px]  h-[16px] flex items-center  text-[8px] justify-center`}>
        {props.completed.includes(1) ?  <img className="w-[7px]" src={checkSymbol} alt="" />:`1`}
      </p>
    <div className="h-[25px] m-auto border w-[1px]"></div>
  </div>
  <p className={(props.step === 1 ? `font-medium font-roboto`:'text-[#747A80]') + ` text-[11px] ml-3 `}>
    Business Information
  </p>
</div>

<div className="flex">
  <div className="items-center">
  <p className={(props.step === 2 ? `bg-[#FFBD59] text-[#747A80]`:'') + ` rounded-full w-[16px]  h-[16px] flex items-center  text-[8px] justify-center`}>
  {props.completed.includes(2) ?  <img className="w-[7px]" src={checkSymbol} alt="" />:`2`}
   </p>
    <div className="h-[25px] m-auto border w-[1px]"></div>
  </div>
  <div className={(props.step === 2 ? `font-medium font-roboto`:'text-[#747A80]') + ` text-[11px] ml-3 `}>
     Beneficiary Owners
  </div>
</div>

<div className="flex">
  <div className="items-center">
  <p className={(props.step === 3 ? `bg-[#FFBD59] text-[#747A80]`:'') + ` rounded-full w-[16px]  h-[16px] flex items-center  text-[8px] justify-center`}>
  {props.completed.includes(3) ?  <img className="w-[7px]" src={checkSymbol} alt="" />:`3`}
    </p>
  </div>
  <div className="text-[#747A80] text-[11px] ml-3">Review & Submit</div>
</div>
</div>
</>
)
}


export function DocumentGuide(){
  return (
    <div className="md:w-[30%] h-[80vh]  md:px-6 sm:w-[40%] bg-[#FFFBF1] rounded-[13px] ">
    <p className="text-[15px] pt-5 font-semibold">
      Tips for uploading documents
    </p>
    <div className="flex md:pt-6">
      <div className="items-center">
        <div className="border-[1px] border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
        <div className="h-[30px] m-auto border w-[1px]"></div>
      </div>
      <p className="text-[12px] ml-3  font-medium ">
        All 4 Edges of the document should be visible
      </p>
    </div>

    <div className="flex">
      <div className="items-center">
        <div className=" border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center border text-[7px] justify-center flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
        <div className="h-[30px] m-auto border w-[1px]"></div>
      </div>
      <p className="text-[12px]  ml-3 font-medium ">
        A dark/high contrast background should be used
      </p>
    </div>

    <div className="flex">
      <div className="items-center">
        <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
        <div className="h-[30px] m-auto border w-[1px]"></div>
      </div>
      <p className="text-[12px] ml-3 font-medium ">
        At least 90% of the image should be the document
      </p>
    </div>

    <div className="flex">
      <div className="items-center">
        <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] p-[3px] flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
        <div className="h-[30px] m-auto border w-[1px]"></div>
      </div>
      <p className="text-[12px]  ml-3 font-medium ">
        Should be at least 300dpi
      </p>
    </div>

    <div className="flex">
      <div className="items-center">
        <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] p-[3px] flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
        <div className="h-[30px] m-auto border w-[1px]"></div>
      </div>
      <p className="text-[12px] ml-3 font-medium  ">
        Capture image from directly above the document
      </p>
    </div>

    <div className="flex">
      <div className="items-center">
        <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
        <div className="h-[30px]  m-auto border w-[1px]"></div>
      </div>
      <p className="text-[12px] ml-3 font-medium ">
        Make sure that the image is properly aligned, not rotated, tilted{" "}
      </p>
    </div>

    <div className="flex">
      <div className="items-center">
        <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
        <div className="h-[30px] m-auto border w-[1px]"></div>
      </div>
      <p className="text-[12px] ml-3 font-medium ">
        No flash to reduce glare
      </p>
    </div>

    <div className="flex">
      <div className="items-center">
        <div className="border border-[#2f2e2e] rounded-full w-[17px]  h-[17px] items-center  text-[7px] p-[3px] flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
        <div className="h-[30px] m-auto border w-[1px]"></div>
      </div>
      <p className="text-[12px] ml-3 font-medium ">
        No black and white documents
      </p>
    </div>

    <div className="flex">
      <div className="items-center">
        <div className="border-[0.3px] border-[#111111] rounded-full w-[17px]  h-[17px] items-center  text-[7px] justify-center flex  ">
          <img className="w-[8px]" src={checkSymbol} alt="" />
        </div>
      </div>
      <p className="text-[12px] ml-3 font-medium  mb-9">No expired IDs</p>
    </div>
  </div>
  )
}

export const Card = ({ title, body, text, icon }: IKycCard) => {
  return (
    <div className="w-[33%]">

      <div className={text === "Required" ? " bg-[#FFFCF2] border max-w-sm rounded-md overflow-hidden shadow-lg px-6 py-4 flex align items-start gap-2 " : " max-w-sm border rounded-md overflow-hidden shadow-lg px-6 py-4 flex align items-start gap-2 "}>
        <div className=" w-[100px] pt-[4px] left-[8px] ">
          <img className="w-full" src={icon as string} alt="logo" />  
        </div>
        <div className=" text-left ">
          <div className="">
            <div className="font-bold h-[21px] text-[14px] leading-5 mb-2">{title}</div>
            <p className="text-[#272727] h-[72px] text-[12px] font-Intel leading-5 ">{body}</p>
          </div>
          <div className="leading-4 pt-4">
            <span
              className={
                text === "Required"
                  ? " text-red-500 text-[13px] h-[18px] leading-4 "
                  : " rounded-[4px] h-[18px]  border border-[#A8ACAF]  text-[13px] leading-4 font-Intel py-1 px-2 cursor-pointer"
              }
            >
              {text}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};


export function KycFeatureCard({ title, body, text, icon }: any) {
  return (
      <div
          className='w-[31%]'>

          <div
              className="flex bg-[#000000cd] rounded-xl h-[137px] items-center relative justify-between ">

              <div className=" pl-8 w-[52%] pt-3 ">
                  <div
                      className="mb-0">
                      <button
                          className={text ? "text-[8px] mt-3 absolute top-2  leading-4 opacity-60 text-white  flex items-center rounded-full bg-zinc-600 px-2 py-1 " : "hidden"}>
                          {text}
                      </button>
                      <div
                          className="text-[#c3c3c3] text-[17px] leading-5  left-[24px] pt-2 pb-1 ">
                          {title}
                      </div>
                  </div>
              </div>

              <div
                  className="w-[40%] opacity-60 absolute right-0 ">
                  <img src={icon} alt="logo" />
              </div>

          </div>
      </div>
  )
}

