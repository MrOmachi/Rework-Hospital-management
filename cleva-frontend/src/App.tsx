import { useEffect } from "react";
import "./App.css";
import { RouterProvider, useNavigate } from "react-router-dom";
import routes from "./routes";
import { AccountContext} from "./components/Auth/AccountContext";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getReturningUser, removeAuthTokens } from "./login";
import {toast} from "react-toastify"
import { setUser } from "./features/Accounts/AccountSlice";

function App() {
  const user = useAppSelector((state) => state.account.user);
  const dispatch = useAppDispatch();
  useEffect(() => {
    getReturningUser()
    .then((user:any) => {
      if(user){
        dispatch(setUser(user));
      }
    })
    .catch((e:any) => {
      removeAuthTokens()
      toast.error("Session expired, please login again")
    })
  }, [dispatch])

  return (
    <>
      <AccountContext>
        <RouterProvider router={routes(user)} />
      </AccountContext>
    </>
  );
}

export default App;
