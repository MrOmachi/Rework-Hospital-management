import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Userpool from "../../Userpool";
import {
  ChangePasswordCommand,
  CognitoIdentityProvider,
  ConfirmSignUpCommand
} from "@aws-sdk/client-cognito-identity-provider";
import { InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { GlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUser, setAuthTokens } from "../../login";
import { userId } from "../../constants";
import { setUser } from "../../features/Accounts/AccountSlice";
import { useAppDispatch } from "../../app/hooks";

interface CurrentUserContextType {
  authenticate: (email: string, password: string) => Promise<unknown>;
  signInUser: (email: string, password: string) => Promise<string | null | undefined>
  getSession : () => Promise<unknown>;
  logout : () => void;
  verifyUser: (email:string, otp: string) => Promise<unknown>

} 

// Create an instance of the CognitoIdentityServiceProvider client
const cognitoClient = new CognitoIdentityProvider({ region: 'eu-west-1' });
const AuthContext = createContext<CurrentUserContextType | null>(null);

const AccountContext = (props: any ) => {
  const AppDispatch = useAppDispatch();

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

const verifyUser = async (email: string , otp:string) => {
  const userData = {
    Username:email ,
    Pool: Userpool,
  };
  
  const cognitoUser = new CognitoUser(userData);
  cognitoUser.confirmRegistration(otp , true, function(err, result) {
    if (err) {
      toast.error(err.message || JSON.stringify(err));
      console.log(err)
      return;
    }
    console.log('call result: ' + result);
    toast.success("User created successfully!");
  });
}

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
          toast.error(err.message);
          reject(err);
        },
        newPasswordRequired: (data) => {
          console.log("newPasswordRequired: ", data);
          resolve(data);
          // toast.error("onFailure: ", err)
        },
      });
    });
  };

  const ClientId = "35tomd2kr31tuha1snpqhveb24";

  const signInUser = async (email: string, password: string) => {
    try {
        const params = {
            AuthFlow: "USER_PASSWORD_AUTH",
            ClientId: ClientId,
            AuthParameters: {
                USERNAME: email, 
                PASSWORD: password, 
            },
        };

        const response = await cognitoClient.send(new InitiateAuthCommand(params));
        console.log("User signed in successfully");
        const {AccessToken, IdToken, RefreshToken } = response.AuthenticationResult!;
        setAuthTokens({IdToken, AccessToken, RefreshToken})
        //TODO change to dynamic user id 
        const user = await getUser(userId);
        AppDispatch(setUser(user));
        
          // toast.success("onSuccess ", data);
        return response.AuthenticationResult?.AccessToken; // Return the access token
    } catch (error:any) {
        console.error("Error signing in user:", error);
        toast.error(error.message);
        return null;
    }
};

  const logout = () => {
    const user = Userpool.getCurrentUser();
    if (user) {
      user.signOut();
    }
  }

  // const currentUser = () => {
  //   const user = Userpool.getCurrentUser();
  //   console.log(user)
  //   return user;
  // }

  return (
    <AuthContext.Provider value={{ authenticate , getSession , logout , verifyUser, signInUser}}>
      {props.children}
    </AuthContext.Provider>
  );
};

export  {AccountContext, AuthContext};
