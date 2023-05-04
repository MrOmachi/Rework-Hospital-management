import React from "react";
import Card from "./KycCard";
import KycFeatureCard from "./KycFeatureCard";

import Lock_icon from "../../../asset/kyc/Rectangle 3.svg"
import pin_icon from "../../../asset/kyc/verifiedUser[1].svg"
import auth_icon from "../../../asset/kyc/Authenticator[1].svg"

import Atm_icon from "../../../asset/kyc/atmCard.svg"
import Open_acc from "../../../asset/kyc/openAccount.svg"
import World_cur from "../../../asset/kyc/worldCurrency.svg"



export default function BeforeKyc() {
  interface IBeforeKyc {
    id: number;
    title: string;
    text: string;
    body: string;
    icon: string;
  }

  const beforeKycContent: IBeforeKyc[] = [
    {
      id: 1,
      title: "Complete KYC",
      text: "Required",
      body: "Completing KYC verification is a crucial step in securing your account and ensuring that you have access to all of the features available.",
      icon: Lock_icon,
    },
    {
      id: 2,
      title: "Setup Transaction PIN",
      text: "Skip for now",
      body: "Transactional PIN is a 4 digit PIN used to authorize any transfers you make on Cleva. Set it up now to ensure that all of your transactions are safe and secure.",
      icon: pin_icon,
    },
    {
      id: 3,
      title: "Setup Transaction PIN",
      text: "Skip for now",
      body: "By enabling two-factor authentication, you'll be able to keep your account safe and protect against unathorized access.",
      icon: auth_icon,
    },
  ];

  const kycFeatureContent = [
    {
      id: 1,
      title: "Link your existing USD bank account and transfer to Nigeria",
      icon: World_cur,
    },
    {
      id: 2,
      title: "Open a USD bank account",
      text: "Comming soon",
      body: "Also comes with a NGN bank account",
      icon: Atm_icon,
    },
    {
      id: 3,
      title: "Open a NGN bank account",
      text: "Comming soon",
      icon: Open_acc,
    },
  ]

  return (
    <>
      <div className="px-52 pt-10 ">
        <header>
          <p className=" bg-[#FFF5D9] p-3 text-[13px] text-[#111111] rounded-md w-[1010px] ">
            Your account needs to be verified. <span className="underline text-black font-semibold " >Verify your account now</span>
          </p>

          <section className="pt-10 ">
            <p>Welcome <b className="text-md">Tolu</b></p>

            <p className=" text-[12px] text-[#8E8E8E] pt-1 ">what would you like to do today?</p>
          </section>
        </header>

        <section className="pt-14" >
          <h1 className="font-semibold text-sm">To Do</h1>
          <div className="flex space-x-5 ">
            {beforeKycContent.map((bkyc) => (
              <Card
                title={bkyc.title}
                body={bkyc.body}
                text={bkyc.text}
                icon={bkyc.icon}
              />
            ))}
          </div>
        </section>

        <section className="pt-14">
          <h1 className="font-semibold text-sm">Try out these features</h1>
          <div className="flex space-x-5 ">

            {kycFeatureContent.map((bkyc) => (
              <KycFeatureCard
                title={bkyc.title}
                body={bkyc.body}
                text={bkyc.text}
                icon={bkyc.icon}
              />
            ))}
          </div>
        </section>
      </div>

    </>
  );
}
