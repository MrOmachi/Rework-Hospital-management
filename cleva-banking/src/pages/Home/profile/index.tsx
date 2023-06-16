import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import ProfileBeforeEdit from "./ProfileBeforeEdit";
import { useAppSelector } from "../../../app/hooks";
import Spinner from "../../../components/PopUps/Spinner";

const ProfilePage = () => {
  const { kycStatus } = useAppSelector((state) => state.kycInfo);
  console.log(kycStatus);

  return (
    <div className="flex">
      {
        kycStatus === "PENDING" ? <ProfileBeforeEdit /> : kycStatus === "SUCCESSFUL" ? <Profile /> : <Spinner />
      }
    </div>
  );
};

export default ProfilePage;
