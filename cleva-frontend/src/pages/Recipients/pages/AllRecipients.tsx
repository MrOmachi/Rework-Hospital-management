import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BsPersonPlusFill } from 'react-icons/bs'
import { IoEllipsisHorizontal } from 'react-icons/io5'
import EventPop from '../modals/EventPop'

export default function AllRecipients() {
 const [modal, setModal] = useState(false)

 const t_details = [
  {
   id: 1,
   name: "Jason Obi",
   country: "NG",
   bank: "Wema Bank",
   account: 5636857973993
  },
  {
   id: 2,
   name: "Edison Furniture & Co.",
   country: "NG",
   bank: "Wema Bank",
   account: 5636857973993
  },
  {
   id: 3,
   name: "John Doe",
   country: "NG",
   bank: "Wema Bank",
   account: 5636857973993
  },
  {
   id: 4,
   name: "Jane Kim",
   country: "NG",
   bank: "Wema Bank",
   account: 5636857973993
  },
 ]
 const navigate = useNavigate()
 return (
  <div className='pr-4 py-10'>
   <header className='
    flex justify-between items-center 
    text-[12px] font-semibold
    '>
    <div>All recipients</div>
    <button
     onClick={() => navigate("")}
     className='flex items-center gap-1'>
     <span>
      <BsPersonPlusFill />
     </span>
     <span>Add new recipient</span>
    </button>
   </header>

   <table className='w-full mt-6'>
    <tr className='text-left text-[14px] bg-gray-100 mb-2'>
     <th className='py-3 pl-2'>Recipient</th>
     <th className='py-3 pl-4'> Country</th>
     <th className='py-3 pl-4'> Bank Name</th>
     <th className='py-3 pl-4'> Account</th>
     <th className='py-3'> </th>
    </tr>
    {
     t_details.map((info) => (
      <tr
       className='text-left 
      text-[13px] border
      odd:bg-gray-100'
       key={info.id}>
       <td className='py-3 pl-4 border-b'>{info.name}</td>
       <td className='py-3 pl-4 border-b'> {info.country}</td>
       <td className='py-3 pl-4 border-b'>{info.bank}</td>
       <td className='py-3 pl-4 border-b'> {info.account}</td>
       <td 
       onClick={() => setModal(true)}
       className='py-3 pl-4 border-b cursor-pointer'> <IoEllipsisHorizontal /></td>
      </tr>
     ))
    }

   </table>
   {
    modal && <EventPop />
   }
  </div>
 )
}
