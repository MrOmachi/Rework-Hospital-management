import React, { useEffect, useState } from 'react'
import Input from '../../../components/Layout/inputs/Input'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Layout/buttons/Button'

export default function EditProfile() {
  const navigate = useNavigate()

  const user = localStorage.getItem("user")
  const getUser = user? JSON.parse(user): null

  const [validate, setValidate] = useState(false)
  const [edit, setEdit] = useState({
    email: "tolu@gmail.com",
    firstName: "Tolu",
    lastName: "Obi",
    phoneNumber: 5343546456,
    businessName: "Tolu's Enterprise"
  })



  const formValue1 = [
    {
      id: 1,
      title: "First Name",
      value: edit.firstName,
      type: "text",
      onchange: (e: any) => setEdit({ ...edit, firstName: e.target.value }),
      error: " "
    },
    {
      id: 2,
      title: "Last Name",
      value: edit.lastName,
      type: "text",
      onchange: (e: any) => setEdit({ ...edit, lastName: e.target.value }),
      error: " "
    },
  ]

  const fomeValue = [

    {
      id: 3,
      title: "Email Address",
      value: edit.email,
      type: "text",
      onchange: (e: any) => setEdit({ ...edit, email: e.target.value }),
      error: ""
    },
    {
      id: 4,
      title: "Business Name",
      value: edit.businessName,
      type: "text",
      onchange: (e: any) => setEdit({ ...edit, businessName: e.target.value }),
      error: ""
    },
    {
      id: 6,
      title: "Phone Number",
      value: edit.phoneNumber,
      type: "number",
      onchange: (e: any) => setEdit({ ...edit, phoneNumber: e.target.value }),
      error: ""
    },
  ]

  const handleSubmit = () => {
    navigate("/profile")
    console.log(edit)
    localStorage.setItem("newUser", JSON.stringify(edit))
  }

  useEffect(() => {
    const isAnyValueEmpty = Object.values(edit).some((value) => value === "");

    if (isAnyValueEmpty) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [edit]);

  return (
    <div className='w-[50%]'>
      <header className='text-[16px] pt-6 pb-4'>
        Edit Personal Information
      </header>
      <form>
        <div className=' grid grid-cols-2 gap-4'>
          {
            formValue1.map((info, i) => {
              return (
                <Input
                  key={i}
                  title={info.title}
                  text={''}
                  type={info.type}
                  fn={info.onchange}
                  err={`${info.error}`}
                  value={info.value}
                />
              )
            })
          }
        </div>
        {
          fomeValue.map((info, i) => {
            return (
              <Input
                key={i}
                title={info.title}
                text={''}
                type={info.type}
                fn={info.onchange}
                err={`${info.error}`}
                value={info.value}
              />
            )
          })
        }
        <Button
          status={!validate ? true : false}
          fn={handleSubmit}
          text='Save'
          styles={`
          text-[11px]
          font-bold
          ${!validate ? "bg-[#FFF5D9]" : "bg-[#FFBD59]"}
          w-28 p-3
          float-right
          rounded-md mt-4
        `} />
      </form>
    </div>
  )
}
