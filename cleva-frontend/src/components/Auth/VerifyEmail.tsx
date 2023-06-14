import React, { useContext, useEffect, useState } from "react";
import logo from "../../images/logo.svg";
import {ClientId, UserPoolId, cognitoClient} from "../../Userpool";
import { ConfirmSignUpCommand } from "@aws-sdk/client-cognito-identity-provider";
import authImg from "../../images/login-img.svg";
import emailIcon from "../../images/email.svg";
import OtpField from "react-otp-field";
// import { CognitoUser, CognitoUserPool } from "amazon-cognito-identity-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [otp, setOtp] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [formValid, setFormValid] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  // handle form submit and send params to amanzon cognito
  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    try {
      const params = {
          UserPoolId,
          ClientId,
          Username: email, // The username of the user whose registration you want to confirm
          ConfirmationCode: otp, // The confirmation code sent to the user's email
      };

      await cognitoClient.send(new ConfirmSignUpCommand(params));
      console.log("User registration confirmed successfully");
        toast.success("User registration confirmed successfully");
        setLoading(false)
      // Wait for toast message to display before navigating
      setTimeout(() => {
        navigate("/auth/login");
      }, 2000); 
  } catch (error:any) {
      console.error("Error confirming user registration:", error);
      toast.error(error.message);

  }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("registeredEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);

  useEffect(() => {
    if (otp) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [otp]);
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
                  <span className="text-[#935B06]">{email}</span>
                </p>
                {/* form section  */}
                <form onSubmit={handleSubmit} className=" mt-8">
                  <div className="w-[20rem] mx-auto">
                    <OtpField
                      value={otp}
                      onChange={setOtp}
                      numInputs={6}
                      onChangeRegex={/^([0-9]{0,})$/}
                      autoFocus
                      separator={<span> </span>}
                      isTypeNumber={false}
                      inputProps={{
                        className: "otp-field__input",
                        disabled: false,
                        
                      }}
                      
                    />
                  </div>
                  <div className="mt-7">
                    <button
                      type="submit"
                      disabled={!formValid}
                      className={formValid ? "login-active" : "login-disabled"}
                    >
                      {loading ? "Loading ..." : "Submit"}
                    </button>
                  </div>
                  {/* <div className="mt-9 text-center">
                    <p className="text-[#8F8F8F] text-sm ">
                      Resend code <span className="text-cleva-gold">50s</span>
                    </p>
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default VerifyEmail;
