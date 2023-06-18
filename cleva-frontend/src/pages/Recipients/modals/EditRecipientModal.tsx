import React, { useEffect, useState } from "react";
import Modal from "../../../components/PopUps/Modal";
import { type } from "os";
import Input from "../../../components/Layout/inputs/Input";
import Select from "../../../components/Layout/inputs/Select";
import Button from "../../../components/Layout/buttons/Button";
import { useNavigate } from "react-router-dom";
import {
  setCloseEditModal,
  setModalSedtDelete,
} from "../../../features/Kyc/kycSlice";
import { useAppDispatch } from "../../../app/hooks";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import Bank from "../../../components/Banks/Banks";

export default function EditModal({ RecipientIdentifier }: any) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [validate, setValidate] = useState(false);
  const [verifiedRcipient, setVerifiedRecipient] = useState("");
  const [values, setValues] = useState({
    Country: "",
    BankName: "",
    AccountNumber: "",
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

  const verify = {
    BankName: values.BankName,
    AccountNumber: values.AccountNumber,
  };

  const handleUpdate = () => {
    fetch(
      `https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/recipients/${RecipientIdentifier}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          AccountNumber: verify.AccountNumber,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  const handleSubmit = () => {
    handleUpdate();
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
    if (values.AccountNumber.length === 10) {
      verifyRecipient();
    }
  }, [values]);

  const verifyRecipient = () => {
    axios
      .post(
        "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/accountsverifications",
        verify
      )
      .then((response) => {
        setVerifiedRecipient(response.data.BankName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal titlePosition="text-center" header="Edit Recipient">
      <div className="px-10">
        <div className=" grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <Select
              title="Country"
              fn={(e: any) => setValues({ ...values, Country: e.target.value })}
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
              arr={Bank}
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
          type="text"
          err=""
          value={"" || null}
        />
        <span
          className={`
     flex justify-start text-sm pt-2
     ${values.AccountNumber.length >= 10 ? "block" : "hidden"}
     `}
        >
          {verifiedRcipient}
        </span>
      </div>
      <div className="px-10 flex justify-between pt-4">
        <Button
          fn={() => dispatch(setCloseEditModal(false))}
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
