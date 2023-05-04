import React from "react";
import Card from "./KycCard";
import KycFeatureCard from "./KycFeatureCard";

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
      icon: "../../../asset/kyc/Lock_icon.svg",
    },
    {
      id: 2,
      title: "Setup Transaction PIN",
      text: "Skip for now",
      body: "Transaction PIN is a 4 digit PIN used to authorize any transfers you make on Cleva",
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

  const kycFeatureContent = [
    {
      id: 1,
      title: "Link your existing USD bank account and transfer to Nigeria ",
      icon: "../../../asset/kyc/Lock_icon.svg",
    },
    {
      id: 2,
      title: "Open a USD bank account",
      text: "Comming soon",
      body: "Also comes with a NGN bank account",
      icon: "../../../asset/kyc/Lock_icon.svg",
    },
    {
      id: 3,
      title: "Open a NGN bank account",
      text: "Comming soon",
      icon: "../../../asset/kyc/Lock_icon.svg",
    },
  ];

  return (
    <>
      <div>
        <header>
          <p>Your account needs to be verified. Verify your account now</p>

          <p>
            Welcome <b>Tolu</b>
          </p>

          <p>what would you like to do today?</p>
        </header>

        <section>
          <h1>To Do</h1>
          <div className="flex space-x-5 px-48 ">
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

        <section>
          <h1>Try out these features</h1>
          <div className="flex space-x-5 px-48 ">
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
