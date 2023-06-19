/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { KycStatus } from "../Kyc/components/KycStatus";
import ProfileTabs from "./components/profileTab";
import Profile from "./pages/Profile";
import Business from "./pages/Business";
import Beneficiary from "./pages/BeneficialOwners";
import { useAppSelector } from "../../app/hooks";

export default function ProfilePage() {
  const [tab, setTab] = useState("profile");
  const { BusinessKyc  } = useAppSelector((state) => state.kycInfo);
  const user = useAppSelector((state) => state.account.user);

  const handleChangeTab = (tab:string)=>{
    setTab(tab);
  }

  return (
    <div className=" w-[88%] mb-20">
      <header>
        <br/>
        <KycStatus/>
        {/* {BusinessKyc.KycState === "VERIFIED" && <ProfileTabs active={tab} selectTab={handleChangeTab}/> }       */}
        <ProfileTabs active={tab} selectTab={handleChangeTab}/>   
      </header>
      {tab==="profile" && <Profile user={user}/>}
      {tab==="business" && <Business kyc={BusinessKyc}/>}
      {tab==="beneficiary" && <Beneficiary owners={BusinessKyc.BeneficiaryOwners}/>}

    </div>
  );
}
