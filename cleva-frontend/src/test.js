// import { cognitoClientID, userPoolID } from "./constants";
const { CognitoJwtVerifier } = require("aws-jwt-verify");
 const cognitoClientID = "6b3k1jctakq1a0vd320ad1vutf";
 const region = "eu-west-1"
 const userPoolID = region+"_0sbArA7SF"
 const API_URL = "https://19ko4ew25i.execute-api.eu-west-1.amazonaws.com/qa/api/v1"
 const userId = "bu-livbydwl-s587ry";

const verifier = CognitoJwtVerifier.create({
  userPoolId: userPoolID,
  tokenUse: "access",
  clientId: cognitoClientID,
});
 const testing = async () => {
  try {
    const payload = await verifier.verify(
      "eyJraWQiOiJkeGdIMXRCRys0YWpnM0xLZjMrXC9TSmVhc2hBaVl2UDRtRkxsSE1yaDFKcz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyMjFiYmE5YS0xMjkxLTQ2YTEtOWViNy1jNDdiNDFlNDU3ZjEiLCJkZXZpY2Vfa2V5IjoiZXUtd2VzdC0xXzY1NTBjMjc0LWIyNDctNDgzMi1hYzY4LWJjMTcwZGExNTFlNCIsImNvZ25pdG86Z3JvdXBzIjpbIkJ1c2luZXNzQWRtaW4iXSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTFfSjREVWtEZFFqIiwiY2xpZW50X2lkIjoiNmIzazFqY3Rha3ExYTB2ZDMyMGFkMXZ1dGYiLCJvcmlnaW5fanRpIjoiYTVkNWNiY2MtYzVkNC00NDg2LWEyZTgtODA1ZDdhYjFjMTM3IiwiZXZlbnRfaWQiOiJjNjE3ZTE4YS0xYWY4LTQyN2MtYmVmYi00NmQ5ZjdkYWI4NDUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIiwiYXV0aF90aW1lIjoxNjg2OTM3MDQ4LCJleHAiOjE2ODY5NDA2NDgsImlhdCI6MTY4NjkzNzA0OCwianRpIjoiY2EwZDU5M2ItMjFkMi00ZDA4LWE2MTEtMjI4Y2U1ODE3MDRjIiwidXNlcm5hbWUiOiIyMjFiYmE5YS0xMjkxLTQ2YTEtOWViNy1jNDdiNDFlNDU3ZjEifQ.Shdp4OqTvNjGcZzMVFqDDzpbo1Cc7g1KzJic6X3Z4qBOTiqiJ9B5Z8inhuirJSeTmsrmxk_wTG_GWtowO0I5Hay6uB0plv_PfKrkR6VAK649Y_7NC_BPhLlzahYyy5o8K2Lm5QChgyK_f_TBwcl3wUUJ1fnJJUUD653-eLvF8hUYsDyH78-C1LriZNtGt6jsVey-VUs1x5vxwvMigJ_gUBPQ4jCUqTMfr9Q1ilFFUp1BvUsvkP1E0tOfQKqMtsvd0RgKckYjvkkW4sT_4RhZVgY3q4SwxQMDdR_hmEJs8_QD6n40wRAF8-7FdS6MBuy9a1v7vQ7SyOQPEctRDhUYeQ"
    );
    console.log("Token is valid. Payload:", payload);
  } catch {
    console.log("Token not valid!");
  }
}

testing().then(() => console.log("done"))