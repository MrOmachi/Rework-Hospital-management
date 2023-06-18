/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { KycStatus } from "../Kyc/components/KycStatus";
import ProfileTabs from "./components/profileTab";
import Profile from "./pages/Profile";
import Business from "./pages/Business";
import Beneficiary from "./pages/BeneficialOwners";

export default function ProfilePage() {
  const [tab, setTab] = useState("profile");
    const [user, setUser] = useState({
      FirstName:"Tolu",
      LastName:"Alabi",
      Email:"tolu@gmail.com",
      PhoneNumber:"+234787823909",
      Country:"United States",
    });

    const handleChangeTab = (tab:string)=>{
      setTab(tab);
    }

  return (
    <div className=" w-[88%]">
      <header>
        
        <KycStatus/>

        <ProfileTabs active={tab} selectTab={handleChangeTab}/>

        <section>
          <div className="pt-[1em] flex items-center gap-6">
            <span className=" rounded-full h-[100px] bg-[#F2F2F2] text-[40px] border-[3px] border-[#cccccc] w-[100px] text-center pt-4">
              <b>
                TA
              </b>
            </span>
          </div>
        </section>
        
      </header>
      
      {tab==="profile" && <Profile user={user}/>}
      {tab==="business" && <Business/>}
      {tab==="beneficiary" && <Beneficiary/>}

    </div>
  );
}
