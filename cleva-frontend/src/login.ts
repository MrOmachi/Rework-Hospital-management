import axios from "axios";
import { CognitoJwtVerifier } from "aws-jwt-verify";
import { InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClientID, cognitoClient, userPoolID } from "./constants";


export const verifyJwt = async (idToken: string,) => {
  const verifier = CognitoJwtVerifier.create({
    userPoolId: userPoolID,
    tokenUse: "access",
    clientId: cognitoClientID,
  });

  const payload = await verifier.verify(idToken);
  if (payload.exp <= new Date().getTime()) {
    throw new Error("Expired token");
  }
  return payload;
};

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
  };
};

export const setupAxiosAuth = async () => {
  try {
    axios.interceptors.request.use(async (config) => {
      const idTokenExpire = Number(localStorage.getItem("idTokenExpire"));
      const refreshToken = localStorage.getItem("refreshToken");
      const currentTimeSeconds = new Date().getTime();
      let IdToken = localStorage.getItem("idToken");
      let accessToken = localStorage.getItem("accessToken");
      if (!refreshToken) {
        return config;
      } else if (idTokenExpire < currentTimeSeconds) {
        const { accessToken: newAccessToken, IdToken: newIdToken } =
          await refreshAToken(refreshToken!);
        if (!newIdToken || !newAccessToken) {
          throw new Error("No IdToken");
        }
        setAuthTokens({AccessToken:newAccessToken, IdToken:newIdToken})
        IdToken = newIdToken;
        accessToken = newAccessToken;
      }
      config.headers.Authorization = accessToken;
      return config;
    });
  } catch (err) {
    console.log(err);
    removeAuthTokens();
    //redirect to login screen
  }
}

export const removeAuthTokens = () => {
  localStorage.removeItem("idToken");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");
}

export const setAuthTokens = ({IdToken, RefreshToken, AccessToken}:{IdToken?:string, RefreshToken?:string, AccessToken?:string}) => {
  IdToken && localStorage.setItem("idToken", IdToken);
  RefreshToken && localStorage.setItem("refreshToken", RefreshToken);
  AccessToken && localStorage.setItem("accessToken", AccessToken);
}

export const getAuthTokens = () => {
  return {
    IdToken:localStorage.getItem("idToken"), 
    RefreshToken:localStorage.getItem("refreshToken"), 
    AccessToken:localStorage.getItem("accessToken")
  }
}