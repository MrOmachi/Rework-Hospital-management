import React, { useEffect, useState } from "react";
import { BsPersonPlusFill, BsPeople } from "react-icons/bs";
import AddRecipient from "./modals/AddRecipient";
import AllRecipients from "./pages/AllRecipients";
import NoRecipients from "./pages/NoRecipient";
import axios from "axios";
import Spinner from "../../components/PopUps/Spinner";
import { TbRuler3 } from "react-icons/tb";

export default function Recipients() {
  const [recipients, setRecipients] = useState<any>([]);
  const [checkRecipient, setCheckRecipient] = useState(true)
  const handleGetRecipients = () => {
    axios
      .get(
        "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/recipients"
      )
      .then((response) => {
        setRecipients(response.data.RecipientSummaryList);
        setCheckRecipient(false)
      })
      .catch((error) => {
        setRecipients([]);
        console.log(error);
        // setCheckRecipient(false)
      });
  };

  useEffect(() => {
    handleGetRecipients();
  }, []);

  return (
    <>
    {
        checkRecipient && <Spinner />
    }
      {
        !checkRecipient && recipients?.length ?
          <AllRecipients /> : <NoRecipients />
    }
    </>
  )
}
