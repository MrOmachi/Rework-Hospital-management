import { CognitoIdentityProviderClient } from "@aws-sdk/client-cognito-identity-provider";
export const cognitoClientID = "6b3k1jctakq1a0vd320ad1vutf";
export const region = "eu-west-1"
export const cognitoClient = new CognitoIdentityProviderClient({region});
export const userPoolID = "eu-west-1_0sbArA7SF"