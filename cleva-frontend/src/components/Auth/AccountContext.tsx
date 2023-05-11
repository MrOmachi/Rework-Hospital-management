import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Userpool from "../../Userpool";
import { ToastContainer, toast } from "react-toastify";
// import { resolve } from "path";


interface CurrentUserContextType {
  authenticate: (email: string, password: string) => Promise<unknown>;
  getSession : () => Promise<unknown>;
  logout : () => void;

} 

const AuthContext = createContext<CurrentUserContextType | null>(null);

const AccountContext = (props: any ) => {
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Userpool.getCurrentUser(); 
      if(user) {
        user.getSession(async (err : Error, session: any) => {
          if(err) {
            reject()
          }else {
            const attributes: { [Name: string]: string } | undefined = await new Promise((resolve, reject) => {
              if (attributes !== undefined) {
                user.getUserAttributes((err, fetchedAttributes) => {
                  if (err) {
                    reject(err);
                  } else {
                    const results: { [Name: string]: string } = {};
            
                    if (fetchedAttributes) {
                    for (let attribute of fetchedAttributes) {
                      const { Name, Value } = attribute;
                      results[Name] = Value;
                    }
                  }
                    resolve(results);
                  }
                });
              } else {
                resolve(undefined); // Resolve with undefined if attributes is undefined
              }
            });
            
            resolve({ user, ...session, ...attributes });
          } 
        });
      } else {
        reject();
      }
    })
  };


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

  const logout = () => {
    const user = Userpool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  }

  return (
    <AuthContext.Provider value={{ authenticate , getSession , logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export  {AccountContext, AuthContext};
