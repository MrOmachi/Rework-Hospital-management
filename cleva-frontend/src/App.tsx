import React, { useContext, useState,useEffect } from "react";
import "./App.css";
import { RouterProvider, useNavigate } from "react-router-dom";
import routes from "./routes";
import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./features/services/AmazonService";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getReturningUser, removeAuthTokens } from "./login";
import {toast} from "react-toastify"
import { setUser } from "./features/Accounts/AccountSlice";


function App() {

  localStorage.setItem("KycIdentifier","kyc-lizqlf41-2pqqtf");

  const user = useAppSelector((state) => state.account.user);
  const AppDispatch = useAppDispatch();
  useEffect(() => {
    getReturningUser()
    .then((user) => {
      if(user){
        AppDispatch(setUser(user))
      }
    })
    .catch((_) => {
      removeAuthTokens()
      toast.error("Session expired, please login again")
    })
  }, [AppDispatch])

  // init for fetching amazon details
  // init().catch((error) => {
  //   console.error("App initialization error:", error);
  // });

  return (
    <>
      <AccountContext>
        <RouterProvider router={routes(user)} />
      </AccountContext>
    </>
  );
}

export default App;
