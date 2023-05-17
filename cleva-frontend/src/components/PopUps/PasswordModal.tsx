import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5"
import Input from '../Layout/Input';
import { ToastContainer, toast } from 'react-toastify';

export default function PasswordModal({handleModal}: any) {
 const [values, setValues] = useState({old_password: "", new_password: "", confirm_password: ""})
 const navigate = useNavigate()

 // function handleChange(e){
 //  setValues({...values})
 // }

 
 const formData = [
  {
   id: 1,
   title: "Old Password",
   type: "password",
   onchange: (e: any) => setValues({ ...values, old_password: e.target.value }),
   value: "",
   err: ""
  },
  {
   id: 2,
   title: "New Password",
   type: "password",
   onchange: (e: any) => setValues({ ...values, new_password: e.target.value }),
   value: "",
   err: ""
  },
  {
   id: 3,
   title: "Confirm Password",
   type: "password",
   onchange: (e: any) => setValues({ ...values, confirm_password: e.target.value }),
   value: "",
   err: ""
  },
 ]


 const handleSubmit = () => {
  if (values.old_password === "" || values.new_password === "" || values.confirm_password === ""){
   console.log("")
  }
  else{
   console.log(values)
   toast.success(`Password reset successful!`);

   setTimeout(() => {
    navigate("/profile")
   }, 1000)
  }
  
 }

  return (
   <div className="fixed inset-0 z-10 bg-gray-400 bg-opacity-90 overflow-y-auto h-full w-full">
    <div className="fixed 
    mt-[1%]
    pb-24
    top-[15%] border border-black
    w-[42%] shadow-lg rounded-xl overflow-hidden
    bg-white ms-[37%]">
     <header className='flex w-full  items-center justify-between bg-[#d0cfcf] py-5 px-12'>
      <b>Change Password</b>
      <span 
       onClick={handleModal}
      className='text-[25px] cursor-pointer'><IoCloseOutline /></span>
     </header>
     <form 
     className='px-12 py-10 leading-7'
     action="">
      {
       formData.map((info) => {
        return(
         <Input
         key={info.id}
         value={info.value}
         title={info.title}
         type={info.type}
         fn={info.onchange}
         err={info.err}
         />
        )
       })
      }

      <button
       onClick={() => handleSubmit()}
       type='button'
       className={`
      text-[14px] 
      font-bold 
      ${values.old_password && values.new_password && values.confirm_password !== "" ? "bg-[#FFBD59]" : "bg-[#FFF5D9]"} 
      py-3 px-5 
      float-right
      rounded-md mt-4`}
      >
       Update Password
      </button>
     </form>
    </div>
    <ToastContainer />
   </div>
  )
}
