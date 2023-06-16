import axios from "axios";
import { CognitoJwtVerifier } from "aws-jwt-verify";
import { InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";

const cognitoClient = new CognitoIdentityProviderClient({ region: 'eu-west-1' });

export const verifyJwt = async (jwt: string,userPoolID: string,cognitoClientID: string) => {
  const verifier = CognitoJwtVerifier.create({
    userPoolId: userPoolID,
    tokenUse: "access",
    clientId: cognitoClientID,
  });

    const payload = await verifier.verify(jwt);
    if (payload.exp <= new Date().getTime()) {
        throw new Error("Expired token")
    }
    return payload;
};

export const refreshAToken = async (refreshToken: string,cognitoClientID: string) => {
    const command = new InitiateAuthCommand({
      AuthFlow: "REFRESH_TOKEN_AUTH",
      ClientId: cognitoClientID,
      AuthParameters: {
        REFRESH_TOKEN: refreshToken,
      },
    });

    const response = await cognitoClient.send(command);

    return {
      AccessToken: response.AuthenticationResult?.AccessToken,
      IdToken: response.AuthenticationResult?.IdToken,
    };
};

export async function setupAxiosAuth(cognitoClientID: string) {
    try{
        axios.interceptors.request.use(async(config) => {
            const idTokenExpire = Number(localStorage.getItem("idTokenExpire"));
            const refreshToken = localStorage.getItem("refreshToken");
            const currentTimeSeconds = new Date().getTime();
            let jwToken = localStorage.getItem("idToken");
            if(!jwToken){
                return config;
            }
            if (idTokenExpire < currentTimeSeconds) {
                const {AccessToken, IdToken} = await refreshAToken(refreshToken!, cognitoClientID)
                if(!IdToken){
                    throw new Error("No IdToken");
                }
                localStorage.setItem("idToken", IdToken);
                jwToken = IdToken;
            } 
            config.headers.Authorization = jwToken;
            return config
        });
    }
    catch(err){
        console.log(err);
        //redirect to login screen
    }
}
