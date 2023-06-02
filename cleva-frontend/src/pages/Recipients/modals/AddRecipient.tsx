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
    Country: "",
    BankName: "",
    AccountNumber: "",
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
      value: "Nigeria",
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
      value: "ZENITH BANK PLC",
      label: "Zenith Bank PLC",
    },
    {
      id: 3,
      value: "FIRST BANK OF NIGERIA PLC",
      label: "First Bank",
    },
    {
      id: 4,
      value: "ACCESS BANK PLC",
      label: "Access Bank",
    },
    {
      id: 5,
      value: "UNITED BANK FOR AFRICA PLC",
      label: "UBA Bank",
    },
    {
      id: 6,
      value: "GTB",
      label: "Guaranty Trust Bank",
    },
  ];
  function handleSubmit() {
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
                  setValues({ ...values, Country: e.target.value })
                }
                err=""
                arr={country}
                xtstyles=""
              />
            </div>

            <div className="col-span-2">
              <Select
                title="Bank"
                fn={(e: any) =>
                  setValues({ ...values, BankName: e.target.value })
                }
                err=""
                arr={bank}
                xtstyles=""
              />
            </div>
          </div>

          <Input
            title="Account Number"
            text="Enter account number"
            fn={(e: any) =>
              setValues({ ...values, AccountNumber: e.target.value })
            }
            type="number"
            err=""
            value={values.AccountNumber}
          />
          <span
            className={`
     flex justify-start text-sm pt-2
     ${values.AccountNumber.length >= 10 ? "block" : "hidden"}
     `}
          >
            Mart Olumide
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
