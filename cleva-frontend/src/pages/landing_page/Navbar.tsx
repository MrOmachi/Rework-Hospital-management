import logo from "../../asset/landing_photos/logo.svg"
import { Link, useNavigate } from "react-router-dom"
import Hero from "./Hero"
import Botton from "./Button";
import Button from "../../components/Layout/buttons/Button";

interface INavbar {
  onLinkClick: () => void; 
}
const Navbar = (props: INavbar) => {
  const { onLinkClick } = props
  const buttonStyle = 'bg-orange-400  px-9 text-dark flex items-center justify-center rounded-[23.486px] '
  const btnLoginStyle = ' p-[.7rem] px-5 text-white border font-bold rounded-[23.486px] '
  const navigate = useNavigate()

  return (
    // className="sticky top-0"
    <div className="bg-[#000000] min-h-[102.3vh]">
        <nav className="fixed top-0 z-50 bg-[#000000] w-full">
          <div className="flex justify-between items-center h-[100%] mb-[2rem] bg-[#000000] sm:px-[82.2px] px-[20.2px]">
            <Link to="/" className="font-bold text-2xl lg:text-4xl mt-[15.21px]">
              <img src={logo} alt="logo" />
            </Link>
            <div className="lg:block">
              <ul className="inline-flex mt-[15.21px]  text-[12px]">
              {/* <Botton 
              text="Join Cleva" 
              onLinkClick={onLinkClick} 
              buttonStyle={buttonStyle} 
              /> */}
                <Button 
                styles={`${btnLoginStyle} `}
                text="Login"
                fn={() => navigate("/auth/login")}
                status={false}
                />

                <Button 
                styles={`${buttonStyle} font-bold ml-5`}
                text="Join Cleva"
                fn={() => navigate("/auth/register")}
                status={false}
                />
                
              </ul>
            </div>
          </div>
        </nav>
      <div className="sm:px-[82.2px] px-[20.2px] mt-[-1rem]">
          <Hero onLinkClick={onLinkClick} />
      </div>

    </div>
  )
}

export default Navbar;