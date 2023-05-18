import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router"
import SmallModal from '../../../components/PopUps/SmallModal'
import EditModal from './EditRecipientModal';
import DeleteRecipientModal from './DeleteRecipientModal';

export default function EventPop() {
 const [modal, setModal] = useState(false)
 const [delModal, setDelModal] = useState(false)
 const navigate = useNavigate()
 return (
  <SmallModal>
   <ul className="leading-[3em]">
    <li
     onClick={() => setModal(true)}
     className=" cursor-pointer hover:bg-slate-100 flex items-center gap-3 px-4"
    >
     {" "}
     <span className="text-[14px]">
      <MdOutlineModeEditOutline />
     </span>{" "}
     Edit
    </li>
    <li
     onClick={() => setDelModal(true)}
     className=" cursor-pointer hover:bg-slate-100 flex items-center gap-3 px-4"
    >
     {" "}
     <span className="text-[14px]">
      <RiDeleteBin6Line />
     </span>{" "}
     Delete
    </li>
   </ul>
   {
    modal && <EditModal />
   }
   {
    delModal && <DeleteRecipientModal />
   }
  </SmallModal>
 )
}
