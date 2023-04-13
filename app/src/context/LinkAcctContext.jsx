import React, { createContext, useState, useCallback, useEffect } from "react";
import {
  getPlaidLinkToken,
  exchangePublicToken,
  createFundingSource,
  getDemandAuth,
} from "../API";
import { usePlaidLink } from "react-plaid-link";

export const LinkAcctContext = createContext();

export const LinkAcctProvider = ({ children }) => {
  const [linkToken, setLinkToken] = useState(null);
  const [linkAcctErrorMsg, setLinkAcctErrorMsg] = useState(null);


  const createLinkToken = useCallback(async () => {
    const {
      data: { link_token },
    } = await getPlaidLinkToken();
    setLinkToken(link_token);
  }, [setLinkToken]);

  const onExit = useCallback((error, metadata) => {
    console.log("metadata = ", metadata);
    setLinkAcctErrorMsg("An error occured, please retry!")

    if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
      getPlaidLinkToken().then((result) => {
        setLinkToken(result.data.linkToken);
      });
    } else {
      console.log("error = ", error);
    }
  }, []);

  const onSuccess = async (public_token, metadata) => {
    const response = await exchangePublicToken(public_token, metadata);
    if (response.data.processorToken) {
      console.log("processorToken", response.data.processorToken);
      try {
        const fundingRes = await createFundingSource(
          response.data.processorToken
        );

        console.log(fundingRes);
        if (fundingRes.data.location) {
          console.log(`Funding Source Created: ${fundingRes.data.location}`);
        } else {
          setLinkAcctErrorMsg(fundingRes.data.Error.Message || "An error occured, please retry!")

          console.log(
            fundingRes.data.Error.message
          );
        }
      } catch (err) {
        console.log(err.Message.message);
          setLinkAcctErrorMsg(err.Message.message || "An error occured, please retry!")

      }
    }
  };

  const config = {
    onSuccess,
    onExit,
    //TODO
    onEvent: (eventName, metadata) => {},
    token: linkToken,
  };
  const { open: openPlaidLink, ready: isPlaidLinkReady } = usePlaidLink(config);

  return (
    <LinkAcctContext.Provider
      value={{ createLinkToken, linkToken, isPlaidLinkReady, openPlaidLink, linkAcctErrorMsg }}>
      {children}
    </LinkAcctContext.Provider>
  );
};
