import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router";
import SmallModal from "../../../components/PopUps/SmallModal";
import EditModal from "./EditRecipientModal";
import DeleteRecipientModal from "./DeleteRecipientModal";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setCloseEditModal } from "../../../features/Kyc/kycSlice";
import axios from "axios";

export default function EventPop({ RecipientIdentifier }: any) {
  const [modal, setModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const { closeEditModal } = useAppSelector((state) => state.kycInfo);

  const dispatch = useAppDispatch();
  return (
    <SmallModal>
      <ul className="leading-[3em]">
        {/* <li
          onClick={() => dispatch(setCloseEditModal(true))}
          className=" cursor-pointer hover:bg-slate-100 flex items-center gap-3 px-4"
        >
          <span className="text-[14px]">
            <MdOutlineModeEditOutline />
          </span>
          Edit
        </li> */}
        <li
          onClick={() => {
            setDelModal(!delModal);
            // dispatch(setModalSedtDelete(!modalSedtDelete));
          }}
          className=" cursor-pointer hover:bg-slate-100 flex items-center gap-3 px-4"
        >
          <span className="text-[14px]">
            <RiDeleteBin6Line />
          </span>
          Delete
        </li>
      </ul>
      {closeEditModal && (
        <EditModal RecipientIdentifier={RecipientIdentifier} />
      )}
      {delModal && (
        <DeleteRecipientModal RecipientIdentifier={RecipientIdentifier} />
      )}
    </SmallModal>
  );
}
