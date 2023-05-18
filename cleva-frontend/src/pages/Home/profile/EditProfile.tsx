import React, { useState } from "react";
import Input from "../../../components/Layout/Input";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const [edit, setEdit] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    businessName: "",
  });

  //  const handleChange = (e: any) => {
  //   setEdit({ ...edit, email: e.target.value})
  //  }

  const formValue1 = [
    {
      id: 1,
      title: "First Name",
      value: edit.firstName,
      type: "text",
      onchange: (e: any) => setEdit({ ...edit, firstName: e.target.value }),
      error: edit.firstName === "" ? "first name is required" : " ",
    },
    {
      id: 2,
      title: "Last Name",
      value: edit.lastName,
      type: "text",
      onchange: (e: any) => setEdit({ ...edit, lastName: e.target.value }),
      error: edit.lastName === "" ? "last name is required" : " ",
    },
  ];

  const fomeValue = [
    {
      id: 3,
      title: "Email Address",
      value: edit.email,
      type: "text",
      onchange: (e: any) => setEdit({ ...edit, email: e.target.value }),
      error: edit.email === "" ? "email is required." : " ",
    },
    {
      id: 4,
      title: "Business Name",
      value: edit.businessName,
      type: "text",
      onchange: (e: any) => setEdit({ ...edit, businessName: e.target.value }),
      error: edit.businessName === "" ? "business name is required" : " ",
    },
    {
      id: 6,
      title: "Phone Number",
      value: edit.phoneNumber,
      type: "number",
      onchange: (e: any) => setEdit({ ...edit, phoneNumber: e.target.value }),
      error: edit.phoneNumber === "" ? "phone number is required" : " ",
    },
  ];

  const handleSubmit = () => {
    navigate("/profile");
    console.log(edit);
  };

  return (
    <div className="w-[50%]">
      <header className="text-[12px] pt-6 pb-4">
        Edit Personal Information
      </header>
      <form>
        <div className=" grid grid-cols-2 gap-4">
          {formValue1.map((info, i) => {
            return (
              <Input
                key={i}
                title={info.title}
                value={info.value}
                type={info.type}
                fn={info.onchange}
                err={`${info.error}`}
              />
            );
          })}
        </div>
        {fomeValue.map((info, i) => {
          return (
            <Input
              key={i}
              title={info.title}
              value={info.value}
              type={info.type}
              fn={info.onchange}
              err={`${info.error}`}
            />
          );
        })}
        <button
          onClick={() => handleSubmit()}
          type="button"
          className="
      text-[11px] 
      font-bold 
      bg-[#FFBD59] 
      w-28 p-3 
      float-right
      rounded-md mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
}
