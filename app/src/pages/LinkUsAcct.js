import React, { useCallback, useState, useEffect, useRef } from "react";
import { usePlaidLink } from "react-plaid-link";
import {
  getPlaidLinkToken,
  exchangePublicToken,
  createFundingSource,
  getDemandAuth,
} from "../API";

const LinkUsAcct = () => {
  const [linkToken, setLinkToken] = useState(null);

  const createLinkToken = useCallback(async () => {
    const {data:{link_token}} = await getPlaidLinkToken();
    setLinkToken(link_token);
  }, [setLinkToken]);

  useEffect(() => {
    if (createLinkToken && !linkToken) {
      createLinkToken().catch((err) => console.error(err));
    }
  }, [createLinkToken, linkToken]);

  const onExit = useCallback((error, metadata) => {
    console.log("metadata = ", metadata);

    if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
      getPlaidLinkToken().then((result) => {
        setLinkToken(result.data.linkToken);
      });
    } else {
      console.log("error = ", error);
    }
  }, []);


  // const { open: openPlaidLink, ready: isPlaidLinkReady } = usePlaidLink(config);

  const isReady = useRef(false);

  return (
    <div>
      <button
        disabled={!isReady}
        style={{
          border: "none",
          borderRadius: "8px",
          backgroundColor: "brown",
          color: "white",
          padding: "8px 16px",
          margin: "38px",
          cursor: "pointer",
          hover: "opacity: 0.8",
        }}
        onClick={() => {
        }}>
        Link US account
      </button>
    </div>
  );
};

export default LinkUsAcct;
