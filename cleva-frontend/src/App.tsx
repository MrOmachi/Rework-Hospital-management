import React, { useContext, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { setUser } from "./features/User/UserSlice";
import { fetchUser } from "./features/User/userApi";
// import { AccountContext, AuthContext } from "./components/Auth/AccountContext";
import { init } from "./features/services/AmazonService";

interface IUser {
  email: string;
  password: string;
}

function App() {
  // const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user);

  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const userData = await fetchUser(); // Update the type of userData
  //       console.log(userData);
  //       if (userData) {
  //         const { name, email } = userData;
  //         const formattedUserData = { name, email };
  //         dispatch(setUser(userData));
  //         console.log("seen")
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };
  
  //   fetchUserData();
  // }, [dispatch]);
   
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
      <RouterProvider router={routes(user)} />
    </>
  );
}

export default App;


