import React, { useEffect, useState } from "react";
import Modal from "../../../components/PopUps/Modal";
import Input from "../../../components/Layout/Input";
import Select from "../../../components/Layout/inputs/Select";
import Button from "../../../components/Layout/buttons/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setModalState } from "../../../features/KycSlice/kycSlice";
import { useAppDispatch } from "../../../app/hooks";

export default function AddRecipient() {
  const navigate = useNavigate();
  const [validate, setValidate] = useState(false);
  const [values, setValues] = useState({
    nickname: "Adaobi Samuel",
    country: "",
    bank: "",
    acc_no: "",
  });
  const dispatch = useAppDispatch();

  const country = [
    {
      id: 1,
      value: "Select Country",
      label: "Select Country",
    },
    {
      id: 2,
      value: "NG",
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
      value: "Zenith Bank",
      label: "Zenith Bank",
    },
    {
      id: 3,
      value: "First Bank",
      label: "First Bank",
    },
    {
      id: 4,
      value: "Access Bank",
      label: "Access Bank",
    },
    {
      id: 5,
      value: "UBA Bank",
      label: "UBA Bank",
    },
    {
      id: 6,
      value: "Guarantee Trust Bank",
      label: "GTB",
    },
  ];
  function handleSubmit() {
    axios
      .post(
        "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/recipients",
        JSON.stringify(values)
      )
      .then((resp) => {
        console.log(resp);
      });

    localStorage.setItem("recipients", JSON.stringify(values));
    navigate("/confirm_recipient");
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
    <div className="">
      <Modal titlePosition="text-center" header="Add new recipient">
        <div className="px-10">
          <div className=" grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <Select
                title="Country"
                fn={(e: any) =>
                  setValues({ ...values, country: e.target.value })
                }
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
            type="number"
            err=""
            value={values.acc_no}
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
            status={false}
            fn={() => navigate("")}
            styles="text-[12px] 
      font-bold py-[10px] px-[8%] 
      ${btn_bg} 
      float-right 
      rounded-md mt-4 
      bg-[#FFF5D9]"
            text="Cancel"
          />

          <Button
            status={validate ? false : true}
            fn={handleSubmit}
            styles={`text-[12px] 
      font-bold py-[10px] px-[8%] 
      float-right 
      rounded-md mt-4 
      ${validate ? "bg-[#FFBD59]" : "bg-[#FFF5D9]"}`}
            text="Save"
          />
        </div>
      </Modal>
    </div>
  );
}
