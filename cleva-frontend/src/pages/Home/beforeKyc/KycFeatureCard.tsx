import React from 'react'

export default function KycFeatureCard({ title, body, text, icon }: any) {
    return (
        <div className='w-[31%]'>

            <div className="flex bg-[#11111165] rounded-xl h-[137px] items-center relative justify-between ">

                <div className=" pl-8 w-[50%] ">
                    <div className="mb-0">
                        <button className={text ? "text-[10px] absolute top-2  leading-4 opacity-60  flex items-center rounded-full bg-slate-100 p-1 ": ""}>
                            {text}
                        </button>
                        <div className="text-[#EBF0F0] text-[14px] leading-5  left-[24px] pt-2 pb-1 ">{title}</div>
                        <p className="text-white text-[10px]">{body}</p>
                    </div>
                </div>

                <div className="w-[40%] opacity-60 absolute right-0 ">
                    <img src={icon} alt="logo" />
                </div>

            </div>
        </div>
    )
}
