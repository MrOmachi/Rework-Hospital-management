import React, { createContext, useState, useCallback } from "react";
import {
  getPlaidLinkToken,
  createLinkedAcct
} from "../API";
import { usePlaidLink } from "react-plaid-link";

export const LinkAcctContext = createContext();

export const LinkAcctProvider = ({ children }) => {
  const [linkToken, setLinkToken] = useState(null);
  const [linkAcctErrorMsg, setLinkAcctErrorMsg] = useState(null);
  const [linkAcctSuccessMsg, setLinkAcctSuccessMsg] = useState(null);

  const createLinkToken = useCallback(async () => {
    const {
      data: { link_token },
    } = await getPlaidLinkToken();
    setLinkToken(link_token);
  }, [setLinkToken]);

  const showSuccess = (msg) => {
    setLinkAcctSuccessMsg(msg)
    setTimeout(() => {
      setLinkAcctSuccessMsg(null);
    }, 2000);
  }

  const showError = (msg) => {
    setLinkAcctErrorMsg(msg)
    setTimeout(() => {
      setLinkAcctErrorMsg(null);
    }, 2000);
  }

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
      try {
      const response = await createLinkedAcct(public_token, metadata, "US");
      if(response.status === 200) {
        showSuccess("Account linked successfully!")
      }
      } catch (err) {
        console.log(err.Message.message);
        showError(err.Error.Message || "An error occured, please retry!")
      }
    // }
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
      value={{ createLinkToken, linkToken, isPlaidLinkReady, openPlaidLink, linkAcctErrorMsg, linkAcctSuccessMsg }}>
      {children}
    </LinkAcctContext.Provider>
  );
};
