import {createLinkedAcct} from "../API";

export const createOnSuccess = (successDispatch, errorDispatch) => {
  return async (public_token, metadata) => {
    try {
      const response = await createLinkedAcct(public_token, metadata, "US");
      if (response.status === 200) {
        successDispatch();
      }
    } catch (err) {
      console.log(err.Message.message);
      errorDispatch(err);
    }
  };
};

export const createOnExit = (tokenDispatch,errorDispatch) => {
    return (error, metadata) => {
        console.log("metadata = ", metadata);
        errorDispatch("An error occured, please retry!");
    
        if (error != null && error.error_code === "INVALID_LINK_TOKEN") {
            tokenDispatch()
        } else {
        console.log("error = ", error);
        }
    };
}