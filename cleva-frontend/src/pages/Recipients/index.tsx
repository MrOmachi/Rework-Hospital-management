import React, { useEffect, useState } from "react";
import { BsPersonPlusFill, BsPeople } from "react-icons/bs";
import AddRecipient from "./modals/AddRecipient";
import AllRecipients from "./pages/AllRecipients";
import NoRecipients from "./pages/NoRecipient";
import axios from "axios";

export default function Recipients() {
  const itemString = localStorage.getItem("newRecipients");
  const item = itemString !== null ? JSON.parse(itemString) : null;

  const [recipients, setRecipients] = useState<any>([]);

  const handleGetRecipients = () => {
    axios
      .get(
        "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/recipients"
      )
      .then((response) => {
        console.log("response.data", response.data);
        setRecipients(response.data);
      })
      .catch((error) => {
        setRecipients([]);
        console.log(error);
      });
  };

  useEffect(() => {
    handleGetRecipients();
  }, []);

  return <>{recipients.length !== 0 ? <AllRecipients /> : <NoRecipients />}</>;
}
