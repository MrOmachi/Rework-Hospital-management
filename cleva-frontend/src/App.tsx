import React, { useContext, useState,useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./features/services/AmazonService";
import { useAppSelector } from "./app/hooks";
import { getAuthTokens } from "./login";


function App() {
  const user = useAppSelector((state) => state.account.user);
  useEffect(() => {
    const { accessToken } = getAuthTokens();
    // get user with idToken on first load
    // AppDispatch(setUser(user))
  }, [user])

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
