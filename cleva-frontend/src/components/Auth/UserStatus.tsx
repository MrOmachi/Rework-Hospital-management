import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./AccountContext";

const UserStatus = () => {
  const [status, setStatus] = useState<boolean>(false);

  const currentUserContext = useContext(AuthContext);

  const handleGetSession = async () => {
    if (currentUserContext !== null && currentUserContext.getSession) {
      await currentUserContext.getSession();
    }
  };

  useEffect(() => {
    handleGetSession().then((session: any) => {
      console.log("Session: ", session);
      setStatus(true);
    });
  }, []);

  return <div>{status ? "You are logged in" : "Please Login"}</div>;
};

export default UserStatus;
