import React, { useState } from "react";
import Card from "./KycCard";
import KycFeatureCard from "./KycFeatureCard";
import { MdWavingHand } from "react-icons/md";

import Lock_icon from "../../../asset/kyc/Rectangle 3.svg";
import pin_icon from "../../../asset/kyc/verifiedUser[1].svg";
import auth_icon from "../../../asset/kyc/Authenticator[1].svg";

import Atm_icon from "../../../asset/kyc/atmCard.svg";
import Open_acc from "../../../asset/kyc/openAccount.svg";
import World_cur from "../../../asset/kyc/worldCurrency.svg";
import { useNavigate } from "react-router-dom";

interface IKyc {
  id: number;
  title: string;
  text?: string;
  body?: string;
  icon: string;
}

export default function BeforeKyc() {
  const navigate = useNavigate();

  const beforeKycContent: IKyc[] = [
    {
      id: 1,
      title: "Complete KYC",
      text: "Required",
      body: "Completing KYC verification is a crucial step in securing your account and ensuring that you have access to all of the features available.",
      icon: Lock_icon,
    },
  ];

  const kycFeatureContent: IKyc[] = [
    {
      id: 1,
      title: "Transfer from your existing USD bank to Nigeria",
      icon: World_cur,
    },
    {
      id: 2,
      title: "Open a USD bank account",
      text: "COMING SOON",
      body: "Also comes with a NGN bank account",
      icon: Atm_icon,
    },
    {
      id: 3,
      title: "Open a NGN bank account",
      text: "COMING SOON",
      icon: Open_acc,
    },
  ];

  return (
    <>
      <div className=" pt-5 w-full m-auto ">
        <header>
          <p className=" bg-[#F8F8F8] px-3 py-3 text-[13px] text-[#111111] rounded-md ">
            Your account needs to be verified.
            <span
              className="underline text-black font-semibold"
              onClick={() => navigate("/startKyc")}
            >
              Verify your account now
            </span>
          </p>

          <section className="pt-6 ">
            <p className="flex">
              Welcome,
              <b className="text-md gap-3 flex items-center ">
                Tolu
                <span className="text-[20px] opacity-50 -rotate-90">
                  <MdWavingHand />
                </span>
              </b>
            </p>

            <p className=" text-[12px] text-[#8E8E8E] pt-1 ">
              what would you like to do today?
            </p>
          </section>
        </header>

        <section className="pt-8">
          <h1 className="font-semibold text-sm pb-1">To Do</h1>
          <div className="flex justify-between space-x-7 ">
            {beforeKycContent.map((bkyc) => (
              <Card
                key={bkyc.id}
                title={bkyc.title}
                body={bkyc.body as string}
                text={bkyc.text as string}
                icon={bkyc.icon}
              />
            ))}
          </div>
        </section>

        <section className="pt-6">
          <h1 className="font-semibold text-sm pb-1">Try out these features</h1>
          <div className="flex justify-evenly space-x-7">
            {kycFeatureContent.map((bkyc) => (
              <KycFeatureCard
                key={bkyc.id}
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
