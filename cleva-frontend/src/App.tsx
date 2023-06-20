import { useEffect, useState } from "react";
import "./App.css";
import { RouterProvider, useNavigate } from "react-router-dom";
import routes from "./routes";
import { AccountContext} from "./components/Auth/AccountContext";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { getReturningUser, removeAuthTokens } from "./login";
import {toast} from "react-toastify"
import { setUser } from "./features/Accounts/AccountSlice";
import Spinner from "./components/PopUps/Spinner";

function App() {
  const user = useAppSelector((state) => state.account.user);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const dispatch = useAppDispatch();

  // localStorage.setItem("KycIdentifier","kyc-lizqlf41-2pqqtf");
  // const user:IUser = {
  //   BusinessIdentifier: "",
  //   BusinessName: "",
  //   UserState: "",
  //   FullName: { 
  //     FirstName:"Philip",
  //     LastName:"Abel",
  //     MiddleName: "",
  //   },
  //   StandardAttributes: {
  //     Birthdate: "",
  //     PhoneNumber:"+234787823909",
  //     Address: {
  //       StreetAddress: "",
  //       SecondStreetAddress: "",
  //       City: "",
  //       Country:"United States",
  //       StateOrTerritory: "",
  //       Zipcode: "",
  //       LGA: ""
  //     },
  //     Email:"tolu@gmail.com",
  //     Website:""
  //   },
  //   UserToBusinnessMappingList:[], 
  //   password:""
  // }
  // dispatch(setUser(user));
  
    useEffect(() => {
      getReturningUser()
        .then((user: any) => {
          if (user) {
            dispatch(setUser(user));
          }
        })
        .catch((e: any) => {
          removeAuthTokens();
          toast.error("Session expired, please login again");
        })
        .finally(() => {
          setIsLoading(false); 
        });
    }, [dispatch]);
  
    useEffect(() => {
      const authToken = localStorage.getItem('accessToken');
      // console.log(authToken)
      if (authToken) {
        // Set the user as authenticated
        setIsAuthenticated(true);
      }
    }, []);
  
    // if (isLoading) {
    //   return <Spinner/>
    // }
  
    return (
      <>
          <RouterProvider router={routes(user)} />

        {/* {isAuthenticated ? (
          <RouterProvider router={routes(user)} />
        ) 
        
        : (
          <p>Please login to access the app.</p>
        )} */}
      </>
    );
  }
  
  export default App;
  
