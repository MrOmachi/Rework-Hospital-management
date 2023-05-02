import {
    ChangePasswordCommand,
    CognitoIdentityServiceProvider,
    ConfirmSignUpCommand
} from "@aws-sdk/client-cognito-identity-provider";
import { InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import { GlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider";

// Define the Cognito user pool ID and client ID
const userPoolId = "YOUR_USER_POOL_ID";
const clientId = "YOUR_CLIENT_ID";
const AUTH_FLOW = "USER_PASSWORD_AUTH"

// Create an instance of the CognitoIdentityServiceProvider client
const cognitoClient = new CognitoIdentityServiceProvider({ region: 'eu-west-2' });

// Define a function to sign in the user
const signInUser = async (username: string, password: string) => {
    try {
        const params = {
            AuthFlow: AUTH_FLOW,
            ClientId: clientId,
            AuthParameters: {
                USERNAME: username, // The username of the user you want to sign in
                PASSWORD: password, // The password of the user you want to sign in
            },
        };

        const response = await cognitoClient.send(new InitiateAuthCommand(params));
        console.log("User signed in successfully");
        return response.AuthenticationResult?.AccessToken; // Return the access token
    } catch (error) {
        console.error("Error signing in user:", error);
        return null;
    }
};


// Define a function to change the user's password
const changeUserPassword = async (accessToken: string, oldPassword: string, newPassword: string) => {
    try {
        const params = {
            AccessToken: accessToken, // The access token for the user whose password you want to change
            PreviousPassword: oldPassword, // The user's current password
            ProposedPassword: newPassword, // The new password to set for the user
        };

        await cognitoClient.send(new ChangePasswordCommand(params));
        console.log("Password changed successfully");
    } catch (error) {
        console.error("Error changing password:", error);
    }
};


// Define a function to confirm the user's registration
const confirmUserRegistration = async (username: string, confirmationCode: string) => {
    try {
        const params = {
            UserPoolId: userPoolId,
            ClientId: clientId,
            Username: username, // The username of the user whose registration you want to confirm
            ConfirmationCode: confirmationCode, // The confirmation code sent to the user's email
        };

        await cognitoClient.send(new ConfirmSignUpCommand(params));
        console.log("User registration confirmed successfully");
    } catch (error) {
        console.error("Error confirming user registration:", error);
    }
};



// Define a function to sign out the user
const signOutUser = async (accessToken: string) => {
    try {
        const params = {
            AccessToken: accessToken, // The access token for the user you want to sign out
        };

        await cognitoClient.send(new GlobalSignOutCommand(params));
        console.log("User signed out successfully");
    } catch (error) {
        console.error("Error signing out user:", error);
    }
};

// token refresh
// Define a function to refresh the tokens
const refreshTokens = async (refreshToken: string) => {
    try {
        const params = {
            AuthFlow: "REFRESH_TOKEN_AUTH",
            ClientId: clientId,
            AuthParameters: {
                REFRESH_TOKEN: refreshToken, // The refresh token used to refresh the tokens
            },
        };

        const response = await cognitoClient.send(new InitiateAuthCommand(params));
        console.log("Tokens refreshed successfully");
        return response.AuthenticationResult; // Return the new tokens
    } catch (error) {
        console.error("Error refreshing tokens:", error);
        return null;
    }
};

// Define a function to check token expiry and refresh if needed
const checkAndRefreshTokens = async (accessToken: string, refreshToken: string, expiresIn: number) => {
    // Calculate the remaining time until token expiry
    const remainingTime = expiresIn - Math.floor(Date.now() / 1000);

    // If there are 30 seconds or less remaining until token expiry, refresh the tokens
    if (remainingTime <= 30) {
        return await refreshTokens(refreshToken);
    }

    // If the token is not close to expiry, return null
    return null;
};


// // configure axios to perform this check
// (async () => {
//     const accessToken = "USER_ACCESS_TOKEN"; // The current access token
//     const refreshToken = "USER_REFRESH_TOKEN"; // The refresh token used to refresh the tokens
//     const expiresIn = 1234567890; // The expiration time of the access token (in seconds since the Unix epoch)
//
//     const newTokens = await checkAndRefreshTokens(accessToken, refreshToken, expiresIn);
//     if (newTokens) {
//         console.log("New access token:", newTokens.AccessToken);
//         console.log("New refresh token:", newTokens.RefreshToken);
//         console.log("New ID token:", newTokens.IdToken);
//     } else {
//         console.log("Tokens are still valid and do not need to be refreshed");
//     }
// })();
