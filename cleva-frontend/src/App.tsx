import React, { useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

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
      <RouterProvider router={routes(user)} />
    </>
  );
}

export default App;
