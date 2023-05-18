import React, { useState } from 'react'
import { BsPersonPlusFill, BsPeople } from 'react-icons/bs'
import AddRecipient from './modals/AddRecipient'

export default function Recipients() {
  const [modal, setModal] = useState(false)

  function toggleModal() {
    modal == true ? setModal(false) : setModal(true)
  }
  return (
    <div className='flex flex-col justify-end items-center h-[40vh] text-center'>
      <section>
        <span className='text-[40px] justify-center items-center flex pb-4'>
          <span><BsPeople /></span>
        </span>
        <p>You currently have no recipients</p>
        <button
          onClick={() => toggleModal()}
          className='text-[10px] font-extrabold flex items-center gap-1 m-auto pt-5'>
          <span>
            <BsPersonPlusFill />
          </span>
          <span>Add new recipient</span>
        </button>
      </section>
      {
        modal && <AddRecipient />
      }
    </div>
  )
}
