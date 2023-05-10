import React, { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { AccountContext } from "./components/Auth/AccountContext";

interface IUser {
  email: string;
  password: string;
}

function App() {
  const [user, setUser] = useState<IUser | null>({
    email: "user@email.com",
    password: "password",
  });

  return (
    <>
    <AccountContext>      
      <RouterProvider router={routes(user)} />
    </AccountContext>
    </>
  );
}

export default App;
