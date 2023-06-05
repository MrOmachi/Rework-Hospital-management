import React, { createContext, useState, useCallback } from "react";
import {
  getPlaidLinkToken
} from "../API";

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

  

  return (
    <LinkAcctContext.Provider
      value={{ createLinkToken, linkToken, linkAcctErrorMsg, linkAcctSuccessMsg }}>
      {children}
    </LinkAcctContext.Provider>
  );
};
