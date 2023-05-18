import React, { useState } from 'react'
import Modal from '../../../components/PopUps/Modal'
import { type } from 'os'
import Input from '../../../components/Layout/Input'
import Select from '../../../components/Layout/inputs/Select'
import Button from '../../../components/Layout/buttons/Button'
import { useNavigate } from 'react-router-dom'

export default function EditModal() {
 const navigate = useNavigate()
 const [values, setValues] = useState({
  nickname: "",
  country: "",
  bank: "",
  acc_no: ""
 })


 const country = [
  {
   value: "NG",
   label: "NG"
  },
 ]

 const bank = [
  {
   value: "Select Bank",
   label: "Select Bank"
  },
 ]
 const handleChange = () => {
  console.log()
 }

 return (
  <Modal
   titlePosition="text-center"
   header="Edit Recipient"
  >
   <div className='px-10'>
    <Input
     title="Nickname"
     value="Enter nickname"
     fn={handleChange}
     type="text"
     err=""
    />

    <div className=' grid grid-cols-2 gap-4'>
     <Select
      title='Country'
      fn={handleChange}
      err=''
      arr={country}
      xtstyles="w-50%]"
     />

     <Select
      title='Bank'
      fn={handleChange}
      err=''
      arr={bank}
      xtstyles=""
     />
    </div>
    <Input
     title="Account Number"
     value="Enter account number"
     fn={handleChange}
     type="text"
     err=""
    />
   </div>
   <div className='px-10 flex justify-between pt-4'>
    <Button
     fn={() => navigate("")}
     styles='text-[12px] 
    font-bold py-[10px] px-[8%] 
    ${btn_bg} 
    float-right 
    rounded-md mt-4 
    bg-[#FFF5D9]'
     text="cancel"
    />

    <Button
     fn={() => navigate("/all_recipients")}
     styles='text-[12px] 
    font-bold py-[10px] px-[8%] 
    ${btn_bg} 
    float-right 
    rounded-md mt-4 
    bg-[#FFBD59]'
     text="save"
    />
   </div>
  </Modal>

 )
}
