import React, { useCallback } from "react";
import { usePlaidLink, PlaidLinkOnSuccess } from "react-plaid-link";

const LinkUsAcct = () => {
  const onExit = useCallback((error, metadata) => {
    // log and save error and metadata
    // handle invalid link token
    if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
      // generate new link token
    }
    // to handle other error codes, see https://plaid.com/docs/errors/
  }, []);
  const config = {
    onSuccess: (public_token, metadata) => {},
    onExit: (err, metadata) => {},
    onEvent: (eventName, metadata) => {},
    token: "GENERATED_LINK_TOKEN",
  };
  const { open, ready, error } = usePlaidLink(config);

  return (
    <div>
      <button disabled={!ready} onClick={() => open()} >
        Link US account
      </button>
    </div>
  );
};

export default LinkUsAcct;
