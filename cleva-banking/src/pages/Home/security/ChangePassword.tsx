import React, { useState } from 'react'
import { HiArrowSmRight } from 'react-icons/hi'
import PasswordModal from '../../../components/PopUps/PasswordModal'

export default function ChangePassword() {
 const [modal, setModal] = useState(false)

 function toggleModal(){
  modal == true? setModal(false): setModal(true)
 }
  return (
    <div className='pt-12'>
    <div className='flex items-center gap-8 bg-[#FBFBFB] py-3 px-8 rounded-md w-[50%]'>
     <b 
      onClick={toggleModal}
     className='cursor-pointer hover:me-6 duration-150'>change Password</b>
     <span className='text-[grey] text-[25px]'><HiArrowSmRight /></span>
     </div>
     {
     modal && <PasswordModal handleModal={toggleModal} />
     }
    </div>
  )
}
