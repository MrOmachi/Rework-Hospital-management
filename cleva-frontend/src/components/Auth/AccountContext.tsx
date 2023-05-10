import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Userpool from "../../Userpool";
import { ToastContainer, toast } from "react-toastify";


interface CurrentUserContextType {
  authenticate: (email: string, password: string) => Promise<unknown>;
} 

const AuthContext = createContext<CurrentUserContextType | null>(null);

const AccountContext = (props: any) => {
  const authenticate = async (email: string, password: string) => {
    return await new Promise((resolve, reject) => {
      const user = new CognitoUser({
        Username: email,
        Pool: Userpool,
      });

      const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password,
      });

      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("onSuccess ", data);
          resolve(data);
          // toast.success("onSuccess ", data);
        },

        onFailure: (err) => {
          console.error("onFailure: ", err);
          reject(err);
          toast.error("onFailure: ", err.message);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data);
          // toast.error("onFailure: ", err)
        },
      });
    });
  };
  return (
    <AuthContext.Provider value={{ authenticate }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export  {AccountContext, AuthContext};
