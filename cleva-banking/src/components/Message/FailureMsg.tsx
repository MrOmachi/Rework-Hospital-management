import React from "react";
import { clevaLogo } from "../../Image";
import { MessageStatus } from "../Message";

export const FailureMsg = () => {
  const success = [
    {
      id: 1,
      img: clevaLogo,
      name: "steve",
      commentStatus:
        "We regret to inform you that your account has been suspended due to unsuccessful KYC verification. We noticed that you uploaded invalid information during the verification process, which is against our policies and procedures.",
        retryText: "",
      link: "",
      proceed:
        "We take verification seriously as it is an essential part of our platform's security and reliability. unfortunately, your account did not meet our kyc verification standards, and we had to suspend it.",
      voteOfThanks:
        "We apologies for any inconvenience caused. If you believe that there has been a mistake, please contact our support team at contact@getcleva.com, and we will be happy to assist you. ",
      lastly: "We appreciate your  understanding and cooperation.",
      moreQuestion: "",
      regards: "Best regards,",
      team: "The Cleva Team",
    },
  ];
  return (
    <>
      {success.map((failureMail) => {
        return (
          <MessageStatus
            key={failureMail.id}
            img={failureMail.img}
            name={failureMail.name}
            commentStatus={failureMail.commentStatus}
            retryText={failureMail.retryText}
            link={failureMail.link}
            proceed={failureMail.proceed}
            voteOfThanks={failureMail.voteOfThanks}
            lastly={failureMail.lastly}
            moreQuestion={failureMail.moreQuestion}
            regards={failureMail.regards}
            team={failureMail.team}
          />
        );
      })}
    </>
  );
};
