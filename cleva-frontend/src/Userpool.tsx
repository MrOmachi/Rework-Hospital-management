import { CognitoUserPool } from "amazon-cognito-identity-js";
import {
  ChangePasswordCommand,
  CognitoIdentityProvider,
  ConfirmSignUpCommand
} from "@aws-sdk/client-cognito-identity-provider";
// import {
//   CACHED_BUSINESS_USER_POOL_ID,
//   CACHED_USER_POOL_ID,
//   CACHED_BUSINESS_USER_POOL_CLIENT_ID,
//   CACHED_USER_POOL_CLIENT_ID
// } from "./features/services/AmazonService";

interface ICognitoUserPoolData {
  UserPoolId : string;
  ClientId : string;
}
const poolData : ICognitoUserPoolData = {
  UserPoolId:  "eu-west-1_0sbArA7SF",
  ClientId : "53faoncdsg0bfv9b22fe2cjrg0",
}

//TODO: fetch cognito ids dynamically
export const cognitoClient = new CognitoIdentityProvider({ region: 'eu-west-1' });
export const ClientId = "53faoncdsg0bfv9b22fe2cjrg0";
export const UserPoolId = "eu-west-1_0sbArA7SF";
// console.log("business pool",  CACHED_BUSINESS_USER_POOL_ID,
//  "user pool", CACHED_USER_POOL_ID,


//  "cache pool_id",CACHED_BUSINESS_USER_POOL_CLIENT_ID ,
//  "cache client_id", CACHED_USER_POOL_CLIENT_ID,
//   )

export default new CognitoUserPool(poolData);
