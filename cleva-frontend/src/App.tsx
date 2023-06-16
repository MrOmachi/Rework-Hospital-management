import React, { useContext, useState,useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./features/services/AmazonService";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getReturningUser, removeAuthTokens } from "./login";
import { setUser } from "./features/Accounts/AccountSlice";


function App() {
  const user = useAppSelector((state) => state.account.user);
  const AppDispatch = useAppDispatch();
  useEffect(() => {
    getReturningUser()
    .then((user) => {
      if(user){
        AppDispatch(setUser(user))
      }
    })
    .catch((error) => {
      removeAuthTokens()
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
