import React, { useState } from 'react'
import { IoCloseOutline } from "react-icons/io5"

export default function Modal({ children, header, titlePosition, height, width }: any) {

  const [modal, setModal] = useState(false)

  function toggleModal() {
    modal == true ? setModal(false) : setModal(true)
  }

  return (
    <>
      {
        !modal &&
        <div className="fixed inset-0 z-10 bg-gray-400 bg-opacity-90 overflow-y-auto h-full w-full">
            <div className={`fixed ${height} ${width}
        pb-24 top-[15%] border border-black
        shadow-lg rounded-xl overflow-hidden w-[40%]
        bg-white ms-[30%]`}>
            <header className={`w-full ${titlePosition} bg-[#d0cfcf] py-5 px-12`}>
              <b>{header}</b>
              <span
                onClick={() => toggleModal()}
                className='text-[25px] float-right cursor-pointer'>
                <IoCloseOutline />
              </span>
            </header>
            <body>
              {children}
            </body>
          </div>
        </div>
      }
    </>
  )
}
