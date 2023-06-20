import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import Input from "../Layout/inputs/Input";
import { ToastContainer, toast } from "react-toastify";

export default function NewRecipientModal({ handleModal }: any) {
  const [values, setValues] = useState({
    nickname: "",
    country: "",
    confirm_password: "",
  });
  const navigate = useNavigate();

  // function handleChange(e){
  //  setValues({...values})
  // }

  // const formData = [
  //   {
  //     id: 1,
  //     title: "Nickname",
  //     type: "text",
  //     onchange: (e: any) => setValues({ ...values, nickname: e.target.value }),
  //     value: "Enter nickname",
  //     err: "",
  //   },
  //   {
  //     id: 2,
  //     title: "Country",
  //     type: "password",
  //     onchange: (e: any) =>
  //       setValues({ ...values, country: e.target.value }),
  //     value: "",
  //     err: "",
  //   },
  //   {
  //     id: 3,
  //     title: "Confirm Password",
  //     type: "password",
  //     onchange: (e: any) =>
  //       setValues({ ...values, confirm_password: e.target.value }),
  //     value: "jhiguygv",
  //     err: "",
  //   },
  // ];

  const handleSubmit = () => {
    if (
      values.nickname === "" ||
      values.country === "" ||
      values.confirm_password === ""
    ) {
      console.log("");
    } else {
      console.log(values);
      toast.success(`Password reset successful!`);

      setTimeout(() => {
        navigate("/profile");
      }, 1000);
    }
  };

  return (
    <div className="fixed inset-0 z-10 bg-gray-400 bg-opacity-90 overflow-y-auto h-full w-full">
      <div
        className="fixed 
    mt-[1%]
    pb-24
    top-[8%]
    w-[42%] shadow-lg rounded-xl overflow-hidden
    bg-white ms-[37%]"
      >
        <header className="flex w-full  items-center justify-between bg-[#d0cfcf] py-5 px-12">
          <b className="ml-[30%]">Add new recipient</b>
          <span onClick={handleModal} className="text-[25px] cursor-pointer">
            <IoCloseOutline />
          </span>
        </header>
        <form className="px-12 pt-3 w-[90%] m-auto" action="">
          <div>
            <label htmlFor="Nickname">Nickname</label>
            <div>
              <input
                className="w-full rounded-lg outline-none border-[1px]"
                type="text"
                name=""
                id="Nickname"
                placeholder="Enter nickname"
              />
            </div>
          </div>

          <div className="flex justify-between my-5 space-x-3 text-sm">
            <div className="w-[30%] ">
              <p>Country</p>
              <select className="w-full rounded-lg">
                <option value="">Ng</option>
                <option value="">Gh</option>
                <option value="">US</option>
                <option value="">UK</option>
                <option value="">It</option>
              </select>
            </div>
            <div className="w-[70%]">
              <p>Bank</p>
              <select className="w-full rounded-lg">
                <option value="">Select Bank</option>
                <option value="">Access Bank</option>
                <option value="">Union Bank</option>
                <option value="">GtBank </option>
                <option value="">Eco Bank</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="Nickname">Account number</label>
            <div>
              <input
                className="w-full rounded-lg outline-none border-[1px]"
                type="text"
                name=""
                id="Nickname"
                placeholder="Enter nickname"
              />
            </div>
          </div>

          <button
            onClick={() => handleSubmit()}
            type="button"
            className={`
      text-[14px] 
      font-bold 
      ${values.nickname && values.country && values.confirm_password !== ""
                ? "bg-[#FFBD59]"
                : "bg-[#FFF5D9]"
              } 
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
  );
}
