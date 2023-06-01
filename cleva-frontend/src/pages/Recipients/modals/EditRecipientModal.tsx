import React, { useEffect, useState } from "react";
import Modal from "../../../components/PopUps/Modal";
import { type } from "os";
import Input from "../../../components/Layout/Input";
import Select from "../../../components/Layout/inputs/Select";
import Button from "../../../components/Layout/buttons/Button";
import { useNavigate } from "react-router-dom";
import { setModalSedtDelete } from "../../../features/KycSlice/kycSlice";
import { useAppDispatch } from "../../../app/hooks";
import { ToastContainer, toast } from "react-toastify";

export default function EditModal() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [validate, setValidate] = useState(false);
  const [values, setValues] = useState({
    nickname: "John Doe",
    country: "",
    bank: "",
    acc_no: "",
  });

  // const itemString = localStorage.getItem('recipients');
  // const item = itemString !== null ? JSON.parse(itemString) : null;

  const country = [
    {
      id: 1,
      value: "",
      label: "Select Country",
    },
    {
      id: 2,
      value: "nigeria",
      label: "NG",
    },
  ];

  const bank = [
    {
      id: 1,
      value: "",
      label: "Select Bank",
    },
    {
      id: 2,
      value: "wema",
      label: "Wema Bank",
    },
    {
      id: 3,
      value: "zenith",
      label: "Zenith Bank",
    },
    {
      id: 4,
      value: "access",
      label: "Access Bank",
    },
    {
      id: 5,
      value: "uba",
      label: "UBA Bank",
    },
  ];
  const handleSubmit = () => {
    console.log();
    dispatch(setModalSedtDelete(false));
    toast.success("recipient edited successfully");
  };

  useEffect(() => {
    const isAnyValueEmpty = Object.values(values).some((value) => value === "");

    if (isAnyValueEmpty) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }, [values]);

  return (
    <Modal titlePosition="text-center" header="Edit Recipient">
      <div className="px-10">
        <div className=" grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Select
              title="Country"
              fn={(e: any) => setValues({ ...values, country: e.target.value })}
              err=""
              arr={country}
              xtstyles=""
            />
          </div>

          <div className="col-span-2">
            <Select
              title="Bank"
              fn={(e: any) => setValues({ ...values, bank: e.target.value })}
              err=""
              arr={bank}
              xtstyles=""
            />
          </div>
        </div>
        <Input
          title="Account Number"
          text="Enter account number"
          fn={(e: any) => setValues({ ...values, acc_no: e.target.value })}
          type="text"
          err=""
          value={null}
        />
        <span
          className={`
     flex justify-start text-sm pt-2
     ${values.acc_no.length >= 10 ? "block" : "hidden"}
     `}
        >
          {values.nickname}
        </span>
      </div>
      <div className="px-10 flex justify-between pt-4">
        <Button
          fn={() => navigate("")}
          status={false}
          styles="text-[12px] 
    font-bold py-[10px] px-[8%] 
    ${btn_bg} 
    float-right 
    rounded-md mt-4 
    bg-[#FFF5D9]"
          text="Cancel"
        />

        <Button
          fn={() => handleSubmit()}
          status={validate ? false : true}
          styles={`text-[12px] 
      font-bold py-[10px] px-[8%] 
      float-right 
      rounded-md mt-4 
      ${validate ? "bg-[#FFBD59]" : "bg-[#FFF5D9]"}`}
          text="Save"
        />
      </div>
      <ToastContainer />
    </Modal>
  );
}
