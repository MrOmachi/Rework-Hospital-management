import React from "react";
import { clevaLogo } from "../../Image";
import { MessageStatus } from "../Message";

export const RetryMsg = () => {
  const success = [
    {
      id: 1,
      img: clevaLogo,
      name: "steve",
      commentStatus:
        "Your recent KYC verification attempt was unsuccessful. It is possible that the information you entered was incorrect or might have a typo.",
      retryText:
        "You can quickly redo the verification process nu reviewing and updating your information. To do som please click on the following Link",
      link: "https://www.getcleva.com/kyc-retry/hhdjdey7388937373839",
      proceed: "",
      voteOfThanks:
        "This will take you to a page where you can review and update your information. Once you have updated your information, our team will review it again and notify you of the outcome as soon as possible. ",
        moreQuestion:
        "If you have any questions or concerns, please do not hesitate to contact our support team at contact@getcleva.com. We are here to assist you in ant way we can.",
        lastly: "",
      regards: "Best regards,",
      team: "The Cleva Team",
    },
  ];
  return (
    <>
      {success.map((retryMail) => {
        return (
          <MessageStatus
            key={retryMail.id}
            img={retryMail.img}
            name={retryMail.name}
            commentStatus={retryMail.commentStatus}
            retryText={retryMail.retryText}
            link={retryMail.link}
            proceed={retryMail.proceed}
            voteOfThanks={retryMail.voteOfThanks}
            lastly={retryMail.lastly}
            moreQuestion={retryMail.moreQuestion}
            regards={retryMail.regards}
            team={retryMail.team}
          />
        );
      })}
    </>
  );
};
