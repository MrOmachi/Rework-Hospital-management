import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
export const cognitoClientID = "30g093ebqkt7jvp08lmdcdjd2";
export const region = "eu-west-1";
export const cognitoClient = new CognitoIdentityProviderClient({ region });
export const userPoolID = region + "_0sbArA7SF";
export const API_URL =
  "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1";
export const userId = "bu-livbydwl-s587ry";
