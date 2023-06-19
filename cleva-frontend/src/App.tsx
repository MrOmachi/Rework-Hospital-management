import React, { useContext, useState,useEffect } from "react";
import "./App.css";
import { RouterProvider, useNavigate } from "react-router-dom";
import routes from "./routes";
import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./features/services/AmazonService";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getReturningUser, removeAuthTokens, setupAxiosAuth } from "./login";
import {toast} from "react-toastify"
import { setUser } from "./features/Accounts/AccountSlice";

function App() {
  const navigate = useNavigate();
  try{
    // this function only sets up axios auth if user has tokens in localStorage i.e user is logged in
    setupAxiosAuth();
  } catch(_){
    // if token is invalid or expired or not present redirect to login page
    navigate("/auth/login")
  }
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
