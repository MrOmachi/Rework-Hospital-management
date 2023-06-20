import { CognitoIdentityProvider } from "@aws-sdk/client-cognito-identity-provider";
import { CognitoUserPool } from "amazon-cognito-identity-js";
import {
  InitiateAuthCommand,
  GetUserCommand,
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
  UserPoolId:  "eu-west-1_J4DUkDdQj",
  ClientId : "6b3k1jctakq1a0vd320ad1vutf",
}

//TODO: fetch cognito ids dynamically
export const cognitoClient = new CognitoIdentityProvider({ region: 'eu-west-1' });
export const ClientId = "6b3k1jctakq1a0vd320ad1vutf";
export const UserPoolId = "eu-west-1_J4DUkDdQj";
// console.log("business pool",  CACHED_BUSINESS_USER_POOL_ID,
//  "user pool", CACHED_USER_POOL_ID,


//  "cache pool_id",CACHED_BUSINESS_USER_POOL_CLIENT_ID ,
//  "cache client_id", CACHED_USER_POOL_CLIENT_ID,
//   )
export const region = "eu-west-1"
export const cognitoClientID = "6b3k1jctakq1a0vd320ad1vutf";
export const userPoolID = region+"_0sbArA7SF"
export const API_URL = "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1/"
export const userId = "bu-livbydwl-s587ry";

export default new CognitoUserPool(poolData);
