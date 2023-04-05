import React, { useCallback, useState } from "react";
import { usePlaidLink, PlaidLinkOnSuccess } from "react-plaid-link";
import axios from "axios";

const LinkUsAcct = () => {
    const [linkToken, setLinkToken] = useState(null);

  const onExit = useCallback((error, metadata) => {
    // log and save error and metadata
    // handle invalid link token
    if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
      // generate new link token
    }
    // to handle other error codes, see https://plaid.com/docs/errors/
  }, []);
  const config = {
    onSuccess: (public_token, metadata) => {
        console.log(public_token, metadata);
    },
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    token: linkToken,
  };
  const { open: openPlaidLink, ready: isPlaidLinkReady } = usePlaidLink(config);

  return (
    <div>
      <button
        style={{
          border: "none",
          borderRadius: "8px",
          backgroundColor: "brown",
          color: "white",
          padding: "8px 16px",
          margin: "38px",
          cursor: "pointer",
          hover: "opacity: 0.8"
          
        }}
        onClick={() => {
          //TODO: fetch link token from backend
          axios.get("MyAPIEndpoint/GENERATED_LINK_TOKEN").then((response) => {
            response.json();
            setLinkToken(response.data.link_token);
          });
        }}
      >
        Link US account
      </button>
    </div>
  );
};

export default LinkUsAcct;
