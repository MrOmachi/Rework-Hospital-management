import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./Profile";
import ProfileBeforeEdit from "./ProfileBeforeEdit";
import { useAppSelector } from "../../app/hooks";
import Spinner from "../../components/PopUps/Spinner";

const ProfilePage = () => {
  const { BusinessKyc } = useAppSelector((state) => state.kycInfo);
  
  return (
    <div className="flex">
      {
        BusinessKyc?.KycState === "PENDING" ? <ProfileBeforeEdit /> : BusinessKyc?.KycState === "SUCCESSFUL" ? <Profile /> : <Spinner />
      }
    </div>
  );
};

export default ProfilePage;
