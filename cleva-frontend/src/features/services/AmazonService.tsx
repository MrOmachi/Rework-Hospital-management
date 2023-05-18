import { SSMClient, GetParameterCommand} from "@aws-sdk/client-ssm";
import * as AWS from "aws-sdk";
import {CognitoIdentityProvider} from "@aws-sdk/client-cognito-identity-provider";
// import { IndividualUsersRepository, BusinessUsersRepository, getClient } from "cleva-repository";
const ssm = new SSMClient({ region: "eu-west-1" }); 

// export const REGION= "eu-west-1"

// export let cognitoClient = new CognitoIdentityProvider({ region: process.env.REGION });
export let cognitoClient = new CognitoIdentityProvider({ region: "eu-west-1" });

const myConfig = new AWS.Config();
myConfig.update({region: 'eu-west-1'});


console.log(AWS.config.credentials);

// AWS.config.update({accesKeyId, secretAccesKey, region});
// AWS.config.update({process.AWS_ACCESS_KEY_ID, process.AWS_SECRET_ACCESS_KEY, process.env.REGION});

async function getSettings(name: string) : Promise<string> {
    const command = new GetParameterCommand({
        "Name": name,
    });
    try {
        let data = await ssm.send(command);
        // @ts-ignore
        return data.Parameter.Value
    } catch(error) {
        console.log("An error occurred when fetching cofigs", error)
    }
    throw new Error("Failed to get the settings")
}

export let CACHED_BUSINESS_USER_POOL_ID: any;
export let CACHED_BUSINESS_USER_POOL_CLIENT_ID: any;
export let CACHED_USER_POOL_ID: any;
export let CACHED_USER_POOL_CLIENT_ID: any;

let client: any;
let initialized: boolean;


export const init =  async()  => {
    // if (!client) {
    //     client =  await getClient()
    // }

    if (!initialized) {
        try {
            [
                CACHED_BUSINESS_USER_POOL_ID,
                CACHED_USER_POOL_ID,
                CACHED_USER_POOL_CLIENT_ID,
                CACHED_BUSINESS_USER_POOL_CLIENT_ID
            ] = await Promise.all([
                getSettings(`ClevaBusinessCognitoPoolId-${process.env.STAGE}`),
                getSettings(`IndividualCognitoPoolId-${process.env.STAGE}`),
                getSettings(`IndividualPoolClientId-${process.env.STAGE}`),
                getSettings(`ClevaBusinessCognitoPoolClientId-${process.env.STAGE}`)
            ]);

            // Handle the results here
        } catch (error) {
            console.log("An error occurred when fetching ")
            // Handle any errors from the promises
            throw error
        }
        initialized = true
    }
};


