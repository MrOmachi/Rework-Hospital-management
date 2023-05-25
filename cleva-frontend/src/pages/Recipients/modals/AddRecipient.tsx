import React, { useState } from 'react'
import Modal from '../../../components/PopUps/Modal'
import { type } from 'os'
import Input from '../../../components/Layout/Input'
import Select from '../../../components/Layout/inputs/Select'
import Button from '../../../components/Layout/buttons/Button'
import { useNavigate } from 'react-router-dom'
import e from 'express'

export default function AddRecipient() {
 const navigate = useNavigate()
 const [values, setValues] = useState({
  nickname: "",
  country: "",
  bank: "",
  acc_no: ""
 })


 const country = [
  {
   id: 1,
   value: "NG",
   label: "NG"
  },
  {
   id: 2,
   value: "USA",
   label: "USA"
  },
  {
   id: 3,
   value: "Ghana",
   label: "GH"
  },
  {
   id: 4,
   value: "UK",
   label: "UK"
  },
 ]

 const bank = [
  {
   id: 1,
   value: "",
   label: "Select Bank"
  },
  {
   id: 2,
   value: "zenith",
   label: "Zenith Bank"
  },
  {
   id: 3,
   value: "first",
   label: "First Bank"
  },
  {
   id: 4,
   value: "access",
   label: "Access Bank"
  },
 ]

 // const handleChange = (e: any) => {
 //  console.log(values)
 //  const updatedValue = e.target.value;
 //  setValues((prevValues) => ({
 //   ...prevValues,
 //   nickname: updatedValue,
 //   country: updatedValue,
 //   bank: updatedValue,
 //   acc_no: updatedValue
 //  }));
 // };




 function handleSubmit(){
  console.log(values)
  localStorage.setItem("recipients", JSON.stringify(values))
  navigate("/confirm_recipient")
  
 }


 return (
  <Modal
   titlePosition="text-center"
   header="Add new recipient"
  >
   <div className='px-10'>
    <Input
     title="Nickname"
     text="Enter nickname"
     fn={(e: any) => setValues({...values, nickname: e.target.value})}
     type="text"
     err=""
     value={values.nickname}

    />

    <div className=' grid grid-cols-2 gap-4'>
     <Select
      title='Country'
      fn={(e: any) => setValues({ ...values, country: e.target.value })}
      err=''
      arr={country}
      xtstyles=""
     />

     <Select
      title='Bank'
      fn={(e: any) => setValues({ ...values, bank: e.target.value })}
      err=''
      arr={bank}
      xtstyles=""
     />
    </div>

    <Input
     title="Account Number"
     text="Enter account number"
     fn={(e: any) => setValues({ ...values, acc_no: e.target.value })}
     type="text"
     err=""
     value={values.acc_no}
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
     fn={handleSubmit}
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
