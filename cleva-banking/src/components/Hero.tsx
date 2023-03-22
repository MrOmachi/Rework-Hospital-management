import globe from "../assets/globe.svg"
import Button from "./Button";
import {useRef} from "react"

interface IHero {
    onLinkClick: () => void
}
const Hero = (props: IHero) => {
    const { onLinkClick } = props
    const buttonStyle = 'bg-orange-400 p-4 text-dark rounded-[23.486px] inline-block w-[190.82px] mt-[1rem]'

    
    return (
        <div className="flex sm:mt-[5rem] flex-col sm:flex-row  items-center gap-[1.5rem]">
            <div className="flex flex-col flex-wrap sm:w-[942.65px]">
                <h1 className="lg:text-[50px] md:mt-[-5rem] leading-[40px] md:text[23.486px] text-[20px] text-[#FFFFFF] font-[700] sm:leading-[2] flex-shrink-0 mt-[2rem] sm:mt-[0rem] pb-[1rem] md:mb-[1rem]">Multi-currency banking for <span className="text-[#FF9E0B]">African</span> businesses</h1>
                <p className="text-[#FFFFFF] sm:text-[23.486px] md:text-[20px] md:leading-[29px] mb-[11.7px] flex-shrink-0  md:mb-[1rem]">Accept payments in USD and other currencies, convert currencies with one click, transfer locally or across borders, and spend with a card</p>
                <p className="sm:text-[23.486px] font-[700] leading-[29px] flex-shrink-0  md:mb-[1rem]">
                    <span className="text-[#FFFFFF]">For: </span>
                    <span className="text-[#FF9E0B]">Startups</span> <span className="text-[#FFFFFF]"> | </span>
                    <span className="text-[#FF9E0B]">Traders</span> <span className="text-[#FFFFFF]"> | </span>
                    <span className="text-[#FF9E0B]">SMEs</span> <span className="text-[#FFFFFF]"> | </span>
                    <span className="text-[#FF9E0B]">Freelancers</span>
                </p>
                <Button onLinkClick={onLinkClick} buttonStyle={buttonStyle} text="Join Cleva" />
            </div>
            <div>
                <img src={globe} alt="globe" className="h-[295px] sm:h-[596px]" />
            </div>
        </div>

    )
}

export default Hero;

{/* <div className="flex mt-[1rem] items-center">
<div className="flex flex-col flex-wrap lg:w-[792.65px]">
    <h1 className="sm:text-[58.7149px] text-[48.7149px] text-[#FFFFFF] font-[700] leading-[72px] flex-shrink-0">Multi-currency banking for <span className="text-[#FF9E0B]">African</span> businesses</h1>
    <p className="text-[#FFFFFF] font-[500] text-[23.486px] leading-[29px] mb-[31.7px] flex-shrink-0">Accept payments in USD and other currencies, convert currencies with one click, transfer locally or across borders, and spend with a card</p>
    <p className="text-[23.486px] font-[700] leading-[29px] flex-shrink-0">
        <span className="text-[#FFFFFF]">For: </span>
        <span className="text-[#FF9E0B]">Startups</span> <span className="text-[#FFFFFF]"> | </span>
        <span className="text-[#FF9E0B]">Traders</span> <span className="text-[#FFFFFF]"> | </span>
        <span className="text-[#FF9E0B]">SMEs</span> <span className="text-[#FFFFFF]"> | </span>
        <span className="text-[#FF9E0B]">Freelancers</span>
    </p>
    <Button buttonStyle={buttonStyle} text="Join Cleva" />
</div>
<div className="hidden sm:visibility">
    <img src={globe} alt="globe" />
</div>
    </div> */}