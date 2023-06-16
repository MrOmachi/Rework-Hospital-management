import axios from "axios";
import { InitiateAuthCommand, GetUserCommand } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClientID, cognitoClient, API_URL } from "./constants";
import { IUser } from "./types";

export const refreshAToken = async (refreshToken: string) => {
  const command = new InitiateAuthCommand({
    AuthFlow: "REFRESH_TOKEN_AUTH",
    ClientId: cognitoClientID,
    AuthParameters: {
      REFRESH_TOKEN: refreshToken,
    },
  });

  const response = await cognitoClient.send(command);

  return {
    accessToken: response.AuthenticationResult?.AccessToken,
    IdToken: response.AuthenticationResult?.IdToken,
    expiresIn: response.AuthenticationResult?.ExpiresIn,
  };
};

export const setupAxiosAuth = async () => {
  try {
    axios.interceptors.request.use(async (config) => {
      // const idTokenExpire = Number(localStorage.getItem("idTokenExpire"));
      // const refreshToken = localStorage.getItem("refreshToken");
      const currentTimeSeconds = new Date().getTime();
      let {idTokenExpire,refreshToken,accessToken,idToken} = getAuthTokens();
      // let IdToken = localStorage.getItem("idToken");
      // let accessToken = localStorage.getItem("accessToken");
      if (!refreshToken) {
        return config;
      } else if (Number(idTokenExpire) < currentTimeSeconds) {
        const { accessToken: newAccessToken, IdToken: newIdToken } =
          await refreshAToken(refreshToken!);
        if (!newIdToken || !newAccessToken) {
          throw new Error("No IdToken");
        }
        setAuthTokens({AccessToken:newAccessToken, IdToken:newIdToken})
        idToken = newIdToken;
        accessToken = newAccessToken;
      }
      config.headers.Authorization = accessToken;
      return config;
    });
  } catch (err) {
    console.log(err);
    removeAuthTokens();
    throw err;
  }
}

export const removeAuthTokens = () => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("idTokenExpire");
}

export const setAuthTokens = ({IdToken, RefreshToken, AccessToken, ExpiresIn}:{IdToken?:string, RefreshToken?:string, AccessToken?:string, ExpiresIn?:number}) => {
  IdToken && localStorage.setItem("idToken", IdToken);
  RefreshToken && localStorage.setItem("refreshToken", RefreshToken);
  AccessToken && localStorage.setItem("accessToken", AccessToken);
  ExpiresIn && localStorage.setItem("idTokenExpire", (new Date().getTime() + Number(ExpiresIn)*1000).toString());
}

export const getAuthTokens = () => {
  return {
    idToken:localStorage.getItem("idToken"), 
    refreshToken:localStorage.getItem("refreshToken"), 
    accessToken:localStorage.getItem("accessToken"),
    idTokenExpire: localStorage.getItem("idTokenExpire")
  }
}

export const getUser = async (userId:string):Promise<IUser> => {
  const result = await axios.get(`${API_URL}/users/${userId}`)
  return result.data;
}

export const getUserIdWithAccessToken = async (AccessToken:string) => {
  const {UserAttributes} = await cognitoClient.send(new GetUserCommand({AccessToken}));
  let userId = "";
  UserAttributes?.forEach((attr) => {
    if (attr.Name === "custom:id") {
      userId = attr.Value!;
    }
  })
  return userId;
}

export const hasTokenExpired = () =>{
  const {idTokenExpire} = getAuthTokens();
  const currentTimeSeconds = new Date().getTime();
  return Number(idTokenExpire) < currentTimeSeconds;
}