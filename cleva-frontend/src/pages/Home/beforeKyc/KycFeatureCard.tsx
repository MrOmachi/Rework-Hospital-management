import React from 'react'

export default function KycFeatureCard({ title, body, text, icon }: any) {
    return (
        <div>

            <div className=" max-w-sm w-full lg:max-w-full flex bg-[#111111] rounded-xl ">

                <div className="  p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-0">
                        <button className="text-[10px]  flex items-center rounded-full bg-slate-100 p-2 ">
                            {text}
                        </button>
                        <div className="text-white text-[18px] mb-2 pt-2">{title}</div>
                        <p className="text-white text-[11px]">{body}</p>
                    </div>
                </div>

                <div className="w-2/3 pt-5">
                    <img src={icon} alt="logo" />
                </div>

            </div>
        </div>
    )
}
