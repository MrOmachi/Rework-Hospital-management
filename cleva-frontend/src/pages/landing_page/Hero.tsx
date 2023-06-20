import { useNavigate } from "react-router-dom";
import globe from "../../asset/landing_photos/globe.svg";
import Button from "../../components/Layout/buttons/Button";

interface IHero {
  onLinkClick: () => void;
}
const Hero = (props: IHero) => {
  const navigate = useNavigate();
  const { onLinkClick } = props;
  const buttonStyle =
    "bg-orange-400 p-4 text-dark rounded-[23.486px] inline-block w-[190.82px] mt-[1rem]";

  return (
    <div className="flex sm:mt-[5rem] flex-col sm:flex-row justify-center items-center gap-[1.5rem]">
      <div className="flex flex-col flex-wrap sm:w-[942.65px] sm:pt-[9rem] pt-[.5rem]">
        <h1 className="lg:text-[50px] md:mt-[-5rem] md:text[23.486px] text-[20px] text-[#FFFFFF] font-[700] flex-shrink-0 mt-[6rem] sm:mt-[0rem] pb-[1rem] md:mb-[1rem]">
          Multi-currency banking for{" "}
          <span className="text-[#FF9E0B]">African</span> businesses
        </h1>
        <p className="text-[#FFFFFF] sm:text-[23.486px] md:text-[20px] md:leading-[29px] mb-[11.7px] flex-shrink-0  md:mb-[1rem]">
          Accept payments in USD and other currencies, convert currencies with
          one click, transfer locally or across borders, and spend with a card
        </p>
        <p className="sm:text-[23.486px] font-[700] leading-[29px] flex-shrink-0 mb-[2rem] md:mb-[1rem]">
          <span className="text-[#FFFFFF]">For: </span>
          <span className="text-[#FF9E0B]">Startups</span>{" "}
          <span className="text-[#FFFFFF]"> | </span>
          <span className="text-[#FF9E0B]">Traders</span>{" "}
          <span className="text-[#FFFFFF]"> | </span>
          <span className="text-[#FF9E0B]">SMEs</span>{" "}
          <span className="text-[#FFFFFF]"> | </span>
          <span className="text-[#FF9E0B]">Freelancers</span>
        </p>
        <Button
          styles={`${buttonStyle} font-bold pr-3 ml-4`}
          text="Sign Up"
          fn={() => navigate("/auth/register")}
          status={false}
        />
      </div>
      <div>
        <img src={globe} alt="globe" className="h-[295px] sm:h-[596px]" />
      </div>
    </div>
  );
};

export default Hero;
