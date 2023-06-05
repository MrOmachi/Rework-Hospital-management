import React, { useContext, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./features/services/AmazonService";

interface IUser {
  email: string;
  password: string;
}

function App() {
  
  const [user, setUser] = useState<IUser | null>({
    email: "user@email.com",
    password: "password",
  });

  // init for fetching amazon details 
  // init().catch((error) => {
  //   console.error("App initialization error:", error);
  // });

  

  return (
    <>
    <AccountContext >      
      <RouterProvider router={routes(user)} />
    </AccountContext>
    </>
  );
}

export default App;


