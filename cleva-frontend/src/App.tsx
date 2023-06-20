import React, { useContext, useState, useEffect } from "react";
import "./App.css";
import { RouterProvider, useNavigate } from "react-router-dom";
import routes from "./routes";
import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./features/services/AmazonService";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getReturningUser, removeAuthTokens } from "./login";
import { toast } from "react-toastify";
import { setUser } from "./features/Accounts/AccountSlice";

function App() {
  const user = useAppSelector((state) => state.account.user);

  const storageUser = JSON.parse(localStorage.getItem("storageUser") as string);

  console.log("storageUser", storageUser);

  const AppDispatch = useAppDispatch();
  useEffect(() => {
    getReturningUser()
      .then((user) => {
        if (user) {
          AppDispatch(setUser(user));
        }
      })
      .catch((_) => {
        removeAuthTokens();
        toast.error("Session expired, please login again");
      });
  }, [AppDispatch]);

  return (
    <>
      <AccountContext>
        <RouterProvider router={routes(storageUser)} />
      </AccountContext>
    </>
  );
}

export default App;
