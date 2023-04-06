import React, { useCallback, useState, useEffect, useRef } from "react";
import { usePlaidLink } from "react-plaid-link";
import {
  getPlaidLinkToken,
  exchangePublicToken,
  createFundingSource,
  getDemandAuth,
} from "../API";

const LinkUsAcct = () => {
  //TODO understand use of odaLink and checked
  const [odaLink, setOdaLink] = useState(null);
  const [checked, setChecked] = useState(false);
  const [linkToken, setLinkToken] = useState(null);

  const odaLinkRef = useRef(odaLink);

  const createLinkToken = useCallback(async () => {
    const { link_token } = await getPlaidLinkToken();
    setLinkToken(link_token);
  }, [setLinkToken]);

  
  useEffect(() => {
    if (createLinkToken && !linkToken) {
      createLinkToken().catch((err) => console.error(err));
    }
  }, [createLinkToken, linkToken]);

  useEffect(() => {
    const onDemandAuthRequest = async () => {
      const { body } = await getDemandAuth();
      // const data = await response.json();
      // setBodyText(data.body.bodyText);
      // setButtonText(data.body.buttonText);
      setOdaLink(body._links.self.href);
      odaLinkRef.current = body._links.self.href;
    };
    onDemandAuthRequest();
  }, []);

  //TODO
  const onExit = useCallback((error, metadata) => {
    // log and save error and metadata
    console.log("error = ", error);
    console.log("metadata = ", metadata);

    if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
      getPlaidLinkToken().then((result) => {
        setLinkToken(result.data.linkToken);
      });
    } else {
      console.log("error = ", error);
    }
  }, []);

  const config = {
    onSuccess: async (public_token, metadata) => {
      // console.log(public_token, metadata);
      const { processorToken } = await exchangePublicToken(
        public_token,
        metadata
      );
      if (processorToken) {
        console.log("processorToken", processorToken);
        const { location } = await createFundingSource(
          processorToken,
          odaLinkRef.current
        );
        if (location) {
          console.log(`Funding Source Created: ${location}`);
        } else {
          console.log(
            "An unexpected error occurred when creating the Dwolla funding source"
          );
        }
      }
    },
    onExit,
    //TODO
    onEvent: (eventName, metadata) => {},
    token: linkToken,
  };

  const { open: openPlaidLink, ready: isPlaidLinkReady } = usePlaidLink(config);

  const isReady = checked && odaLink && isPlaidLinkReady;

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
          openPlaidLink();
        }}>
        Link US account
      </button>
    </div>
  );
};

export default LinkUsAcct;
