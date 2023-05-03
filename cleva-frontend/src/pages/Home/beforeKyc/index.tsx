import React from "react";
import Card from "./KycCard";

export default function BeforeKyc() {
  interface IBeforeKyc {
    id: number;
    title: string;
    text: string;
    body: string;
    icon: string;
  }

  const beforeKyc: IBeforeKyc[] = [
    {
      id: 1,
      title: "Complete KYC",
      text: "Required",
      body: "Completing KYC verification is a crucial step in securing your account and ensuring that you have access to all of the features available.",
      icon: "../../../asset/kyc/Lock_icon.svg",
    },
    {
      id: 2,
      title: "Setup Transaction PIN",
      text: "Skip for now",
      body: "Completing KYC verification is a crucial step in securing your account and ensuring that you have access to all of the features available",
      icon: "../../../asset/kyc/Lock_icon.svg",
    },
    {
      id: 3,
      title: "Setup Transaction PIN",
      text: "Setup two-factor authentication",
      body: "Completing KYC verification is a crucial step in securing your account and ensuring that you have access to all of the features available",
      icon: "../../../asset/kyc/Lock_icon.svg",
    },
  ];

  return (
    <>
      <div className="flex space-x-5 p-48 ">
        {beforeKyc.map((bkyc) => (
          <Card
            title={bkyc.title}
            body={bkyc.body}
            text={bkyc.text}
            icon={bkyc.icon}
          />
        ))}
      </div>
    </>
  );
}
