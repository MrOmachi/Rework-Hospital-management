import { useEffect } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { AccountContext} from "./components/Auth/AccountContext";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getReturningUser, removeAuthTokens } from "./login";
import {toast} from "react-toastify"
import { setUser } from "./features/Accounts/AccountSlice";


function App() {

  // localStorage.setItem("KycIdentifier","kyc-lizqlf41-2pqqtf");

  const user = useAppSelector((state) => state.account.user);
  const AppDispatch = useAppDispatch();
  
  useEffect(() => {
    getReturningUser()
    .then((user:any) => {
      if(user){
        AppDispatch(setUser(user))
      }
    })
    .catch((e:any) => {
      removeAuthTokens()
      toast.error("Session expired, please login again")
    })
  }, [AppDispatch])

  return (
    <>
      <AccountContext>
        <RouterProvider router={routes({id:"123"})} />
      </AccountContext>
    </>
  );
}

export default App;
