import { GetUserCommand, AttributeType } from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from "../../Userpool";

const client = cognitoClient;
const accessToken = localStorage.getItem('token');
console.log(accessToken)
export const fetchUser = async () => {
  try {
    if (accessToken) {
      return accessToken
      // const command = new GetUserCommand({ AccessToken: accessToken });
      // const response = await client.send(command);
      // console.log(response)
      // const UserAttributes = response.UserAttributes as AttributeType[]; // Type assertion
      // const user = UserAttributes.reduce((acc: Record<string, string>, attr) => {
      //   if (attr?.Name && attr?.Value) {
      //     acc[attr.Name] = attr.Value;
      //   }
      //   return acc;
      // }, {});
      // return user;
    } else {
      console.error("Access token not available");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
