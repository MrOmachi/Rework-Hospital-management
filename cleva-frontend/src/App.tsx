import React, { useContext, useState,useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./features/services/AmazonService";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getAuthTokens, getUser, getUserIdWithAccessToken, hasTokenExpired, refreshAToken } from "./login";
import { setUser } from "./features/Accounts/AccountSlice";


function App() {
  const user = useAppSelector((state) => state.account.user);
  const AppDispatch = useAppDispatch();
  useEffect(() => {
    let { accessToken, refreshToken } = getAuthTokens();
    // get user with idToken on first load
    if(refreshToken && accessToken){
      if(hasTokenExpired()){
        refreshAToken(refreshToken)
        accessToken = getAuthTokens().accessToken
      }
      getUserIdWithAccessToken(accessToken!)
        .then((userId) => {
          getUser(userId)
            .then((user) => {
              AppDispatch(setUser(user));
            })
        })
    }
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
