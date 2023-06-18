import React, { useContext, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./services/AmazonService";

interface IUser {
  email: string;
  password: string;
}

function App() {
  const currentUserContext = useContext(AuthContext);
  // if (currentUserContext !== null && currentUserContext.cu) {
  //   await currentUserContext.authenticate(email, password);
  // }


  localStorage.setItem("KycIdentifier","kyc-lizqlf41-2pqqtf");

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
      <AccountContext>
        <RouterProvider router={routes(user)} />
      </AccountContext>
    </>
  );
}

export default App;
