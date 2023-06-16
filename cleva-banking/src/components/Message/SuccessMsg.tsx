import { clevaLogo } from "../../Image";
import { MessageStatus } from "../Message";

export const SuccessMsg = () => {
  const success = [
    {
      id: 1,
      img: clevaLogo,
      name: "steve",
      commentStatus:
        "Congratulations! We are pleased to inform you that your KYC verification was successful.",
        retryText: "",
        moreQuestion: "",
        link: "",
      proceed:
        "Now that your account has been verified, you can link your bank account and start sending cross-border payments.",
      voteOfThanks:
        "Thank you for choosing Cleva, we look forward to helping you manage your multi-currency transactions with ease and convenience. ",
      lastly: "",
      regards: "Best regards,",
      team: "The Cleva Team",
    },
  ];
  return (
    <>
      {success.map((successMail) => {
        return (
          <MessageStatus
            key={successMail.id}
            img={successMail.img}
            name={successMail.name}
            commentStatus={successMail.commentStatus}
            retryText={successMail.retryText}
            link={successMail.link}
            proceed={successMail.proceed}
            voteOfThanks={successMail.voteOfThanks}
            lastly={successMail.lastly}
            moreQuestion={successMail.moreQuestion}
            regards={successMail.regards}
            team={successMail.team}
          />
        );
      })}
    </>
  );
};
