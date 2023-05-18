import { CognitoUserPool } from "amazon-cognito-identity-js";
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
  UserPoolId:  "eu-west-1_D6czbsFGh",
  ClientId : "35tomd2kr31tuha1snpqhveb24",
}

// console.log("business pool",  CACHED_BUSINESS_USER_POOL_ID,
//  "user pool", CACHED_USER_POOL_ID,


//  "cache pool_id",CACHED_BUSINESS_USER_POOL_CLIENT_ID ,
//  "cache client_id", CACHED_USER_POOL_CLIENT_ID,
//   )

export default new CognitoUserPool(poolData);