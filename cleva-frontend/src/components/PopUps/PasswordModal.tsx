import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Modal from './Modal';
import PasswordInput from '../Layout/inputs/PasswordInput';
import Button from '../Layout/buttons/Button';
import { setModalSedtDelete, setModalState } from '../../features/KycSlice/kycSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function PasswordModal({ handleModal }: any) {
  const [values, setValues] = useState({ old_password: "", new_password: "", confirm_password: "" })
  const [validate, setValidate] = useState(false)
  const dispatch = useAppDispatch();
  const { modalSedtDelete } = useAppSelector((state) => state.kycInfo);


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
    toast.success(`Password reset successful!`);
    dispatch(setModalSedtDelete(!modalSedtDelete));
    dispatch(setModalState(false));

  }

  useEffect(() => {
    const isAnyValueEmpty = Object.values(values).some((value) => value === "");
    if (isAnyValueEmpty) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [values]);

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
              <PasswordInput
                key={info.id}
                text={info.value}
                title={info.title}
                fn={info.onchange}
                value={null}
              />
            )
          })
        }

        <Button
          text='Update Password'
          fn={() => handleSubmit()}
          status={validate ? false : true}
          styles={`
            text-[14px] 
            font-bold 
            ${validate ? "bg-[#FFBD59]"
              : "bg-[#FFF5D9]"
            } 
            py-3 px-5 
            float-right
            rounded-md mt-4`}
        />

        {/* <button
          onClick={() => handleSubmit()}
          type='button'
          className={`
            text-[14px] 
            font-bold 
            ${validate ? "bg-[#FFBD59]"
              : "bg-[#FFF5D9]"
            } 
            py-3 px-5 
            float-right
            rounded-md mt-4`}
        >
          Update Password
        </button> */}
        <ToastContainer />
      </form>
    </Modal>
  )
}
