import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import authImg from "../../images/login-img.svg";
import emailIcon from "../../images/email.svg";

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submit");
  };
  return (
    <>
      <div className="md:flex min-h-full">
        <div className="md:flex md:flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-20 bg-black text-white ">
          <div className="mx-auto w-full max-w-[24rem] 2xl:max-w-[28rem] lg:w-[30rem] xl:w-[28rem]">
            <div className="flex justify-center pt-20 min-h-[100vh] md:items-center md:pt-0">
              <div className="w-full">
                <div>
                  <img className="w-aut0" src={logo} alt="logo" />
                  <h1 className="mt-12 text-4xl font-medium text-white">
                    Verify your email address
                  </h1>
                </div>

                <img src={authImg} className="mt-20" alt="login" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 bg-[#FBFBFB]">
          <div className="flex justify-center pt-8 min-h-[100vh] md:items-center md:pt-0">
            <div className="login-card w-full lg:w-[32rem] xl:w-[36rem] py-8 px-8 md:py-16 md:px-20">
              <div className="text-center ">
                <div className="flex justify-center">
                  <img src={emailIcon} alt="email" />
                </div>

                <h2 className="text-2xl text-medium text-black-soft mt-6">
                  Verify your email address
                </h2>
                <p className="text-[#5F5D5D] w-[20rem] mx-auto text-sm mt-4">
                  Please enter the 6 digit code sent to your email address{" "}
                  <span className="text-[#935B06]">tolu@getcleva.com</span>
                </p>
                {/* form section  */}
                <form onSubmit={handleSubmit} className=" mt-8">
                  {code.map((value, index) => (
                    <input
                      key={index}
                      type="text"
                      value={value}
                      onChange={(e) => handleCodeChange(index, e.target.value)}
                      maxLength={1}
                      className="w-12 h-12 rounded-md mr-2 text-center border-gray-300 focus:outline-none focus:ring-2 focus:ring-cleva-gold focus:border-transparent"
                    />
                  ))}
                  {/* <div className="mt-7">
                    <button type="submit" className="login-active">
                      Reset Password
                    </button>
                  </div> */}

                  <div className="mt-9 text-center">
                    <p className="text-[#8F8F8F] text-sm ">
                      Resend code <span className="text-cleva-gold">50s</span>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
