import React from 'react'

export default function KycFeatureCard({ title, body, text, icon }: any) {
    return (
        <div>

            <div className=" w-[325px] flex bg-[#B8B8B8] rounded-xl h-[137px] items-center relative  ">

                <div className=" pl-8 p-4 ">
                    <div className="mb-0">
                        <button className={text ? "text-[10px] absolute top-2  leading-4 opacity-40  flex items-center rounded-full bg-slate-100 p-1 ": ""}>
                            {text}
                        </button>
                        <div className="text-[#EBF0F0] text-[14px] leading-5 W-[180px] left-[24px] pt-2 pb-1 ">{title}</div>
                        <p className="text-white text-[10px]">{body}</p>
                    </div>
                </div>

                <div className="w-[65%] opacity-40 ">
                    <img src={icon} alt="logo" />
                </div>

            </div>
        </div>
    )
}
