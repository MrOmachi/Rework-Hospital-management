import React, { useEffect, useState } from 'react'
import { BsPersonPlusFill, BsPeople } from 'react-icons/bs'
import AddRecipient from './modals/AddRecipient'
import AllRecipients from './pages/AllRecipients';
import NoRecipients from './pages/NoRecipient';

export default function Recipients() {
  const itemString = localStorage.getItem("newRecipients");
  const item = itemString !== null ? JSON.parse(itemString) : null;

  return (
    <>
    {
      item ? <AllRecipients />: <NoRecipients />
    }
    </>
  )
}
