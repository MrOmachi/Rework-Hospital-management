import logo from "../assets/logo.svg"
import { Link } from "react-router-dom"
import Hero from "./Hero"
import Button from "./Button"

const Navbar = () => {
  const buttonStyle = 'bg-orange-400 p-4 text-dark rounded-[23.486px] mt-[36.21px]'

  return (
    // className="sticky top-0"
    <div className="bg-[#000000]">
      <div className="sm:px-[82.2px] px-[20.2px] h-[100vh]">
        <nav>
          <div className="flex justify-between items-center sticky top-0">
            <Link to="/" className="font-bold text-2xl lg:text-4xl">
              <img src={logo} alt="logo" />
            </Link>
            {/* <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div> */}
            <div className="hidden lg:block">
              <ul className="inline-flex">
                <Button text="Join Cleva" buttonStyle={buttonStyle} />
              </ul>
            </div>
          </div>
          <Hero />
        </nav>
      </div>

    </div>
  )
}

export default Navbar;