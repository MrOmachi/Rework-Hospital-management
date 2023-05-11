import { CognitoUserPool } from "amazon-cognito-identity-js";


interface ICognitoUserPoolData {
  UserPoolId : string;
  ClientId : string;
}
const poolData : ICognitoUserPoolData = {
  UserPoolId:  "eu-west-1_9gJapWfIg",
  ClientId : "4497s0kbvlisb881udlf8b7hsd"
}

export default new CognitoUserPool(poolData);