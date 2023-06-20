import { Link } from "react-router-dom";

interface Messages {
  img: string;
  name: string;
  commentStatus: string;
  retryText: string;
  link: string;
  proceed: string;
  voteOfThanks: string;
  lastly: string;
  moreQuestion: string;
  regards: string;
  team: string;
}

export const MessageStatus = ({
  img,
  name,
  commentStatus,
  retryText,
  link,
  proceed,
  voteOfThanks,
  regards,
  team,
  lastly,
  moreQuestion,
}: Messages) => {
  return (
    <main className="flex justify-center items-center mt-10 ">
      <div>
        <div className="flex justify-center">
          <img className="mb-5 w-[130px]" src={img} alt="" />
        </div>
        <section className="w-[63%] m-auto">
          <div className="mt-6 p-10 pb-20 text-[12.5px] font-medium bg-[#FAFAFA] shadow-sm border rounded-lg">
            <p>Dear {name},</p>
            <div className="my-6 block ">
              {commentStatus}
              <p className="mt-1 ">{retryText}</p>
            </div>
            <div>
              <p>{proceed}</p>
              <div className="my-6">
                <Link className=" underline text-[#4770C8]" to={link}>
                  {link}
                </Link>
              </div>
            </div>
            <div className="my-4">
              {voteOfThanks}
              <p className="pt-2">{moreQuestion}</p>
            </div>
            <p className="pb-6">{lastly}</p>
            <p className="pb-1">{regards}</p>
            <p>{team}</p>
          </div>
        </section>
      </div>
    </main>
  );
};
