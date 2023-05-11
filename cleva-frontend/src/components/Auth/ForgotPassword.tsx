import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import logo from "../../images/logo.svg";
import authImg from "../../images/login-img.svg";
import Userpool from '../../Userpool';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool: Userpool,
    })
  }
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getUser().forgotPassword({
      onSuccess: (data) => {
        console.log("onSuccess ", data);
        toast.success("onSuccess ", data);
      },

      onFailure: (err:Error) => {
        console.error("onFailure: ", err);
        toast.error(err.message);
      },
      inputVerificationCode: (data) => {
        console.log("Input code: ", data);
        navigate("/auth/login");
      },
    })
    console.log("email", email);
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
                    Forgot Password
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
              <div className="">
                <h2 className="text-2xl text-black-soft">Forgot Password?</h2>
                <p className="text-[#5F5D5D] w-[20rem] text-sm mt-4">
                  No worries, we’ll send reset instructions to your registered
                  email address
                </p>
                {/* form section  */}
                <form onSubmit={handleSubmit} className=" mt-10">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-black-soft"
                    >
                      Email Address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                        className="input-control"
                      />
                    </div>
                  </div>

                  <div className="mt-7">
                    <button type="submit" className="login-active">
                      Reset Password
                    </button>
                  </div>

                  <div className="mt-9 text-center">
                    <Link
                      to="/auth/login"
                      className="underline underline-offset-2 text-black-soft text-sm "
                    >
                      Return to Login Page
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />

      </div>
    </>
  );
}

export default ForgotPassword