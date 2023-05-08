import { CognitoUserPool } from "amazon-cognito-identity-js";


interface ICognitoUserPoolData {
  UserPoolId : string;
  ClientId : string;
}
const poolData : ICognitoUserPoolData = {
  UserPoolId:  "eu-west-1_rAONYF08y",
  ClientId : "6k1fpv9726ufadjtoejpimce59"
}

export default new CognitoUserPool(poolData);