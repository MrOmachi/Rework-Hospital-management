import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Input from '../Layout/Input';
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal';

export default function PasswordModal({ handleModal }: any) {
  const [values, setValues] = useState({ old_password: "", new_password: "", confirm_password: "" })
  const navigate = useNavigate()


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
    if (values.old_password === "" || values.new_password === "" || values.confirm_password === "") {
      console.log("")
    }
    else {
      console.log(values)
      toast.success(`Password reset successful!`);

      setTimeout(() => {
        navigate("/profile")
      }, 1000)
    }

  }

  return (
    <Modal
    titlePosition="text-left"
    header="Change Password"
    >
      <form
        className='px-12 py-10 leading-7'
        action="">
        {
          formData.map((info) => {
            return (
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
            ${
              values.old_password && 
              values.new_password && 
              values.confirm_password 
              !== "" ? "bg-[#FFBD59]" 
              : "bg-[#FFF5D9]"
            } 
            py-3 px-5 
            float-right
            rounded-md mt-4`}
        >
          Update Password
        </button>
        <ToastContainer />
      </form>
    </Modal>
  )
}
