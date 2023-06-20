import React from 'react'

export default function KycFeatureCard({ title, body, text, icon }: any) {
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
