import React, { useEffect, useState } from "react";

import { InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider";
import {ClientId, cognitoClient} from "../../Userpool";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/logo.svg";
import authImg from "../../images/login-img.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { getUser, getUserIdWithAccessToken, setAuthTokens } from "../../login";
import { setUser } from "../../features/Accounts/AccountSlice";
import { useAppDispatch } from "../../app/hooks";


const Login = () => {
  const AppDispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formValid, setFormValid] = useState<boolean>(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    try {
      const params = {
          AuthFlow: "USER_PASSWORD_AUTH",
          ClientId: ClientId,
          AuthParameters: {
              USERNAME: email, 
              PASSWORD: password, 
          },
      };

      const response = await cognitoClient.send(new InitiateAuthCommand(params));
      console.log("User signed in successfully");
      toast.success("Login successfully!");

      const {AccessToken, IdToken, RefreshToken, ExpiresIn } = response.AuthenticationResult!;
      setAuthTokens({IdToken, AccessToken, RefreshToken, ExpiresIn})
      const userId = await getUserIdWithAccessToken(AccessToken!);
      const user = await getUser(userId);
      
      AppDispatch(setUser(user));
      return AccessToken; // Return the access token
  } catch (error:any) {
      console.error("Error signing in user:", error);
      toast.error(error.message);
      return null;
  }
};

  useEffect(() => {
    if (email && password) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password]);

  return (
    <>
      <div className="md:flex min-h-full">
        <div className="md:flex md:flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-20 bg-black text-white ">
          <div className="mx-auto w-full max-w-[24rem] 2xl:max-w-[28rem] lg:w-[30rem] xl:w-[28rem]">
            <div className="flex justify-center pt-20 min-h-[100vh] md:items-center md:pt-0">
              <div className="w-full">
                <div>
                  <img className="w-aut0" src={logo} alt="logo" />
                  <h1 className="mt-16 text-4xl font-medium text-white">
                    Welcome to Cleva
                  </h1>
                  <p className="text-[#EBF0F0] mt-6">
                    Login to access your account
                  </p>
                </div>

                <img src={authImg} className="mt-10" alt="login" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 bg-[#FBFBFB]">
          <div className="flex justify-center pt-8 min-h-[100vh] md:items-center md:pt-0">
            <div className="login-card w-full lg:w-[32rem] xl:w-[36rem] py-8 px-8 md:py-16 md:px-20">
              <div className="">
                <h2 className="text-2xl text-black-soft">
                  Login to your account
                </h2>
                {/* form section  */}
                <form  onSubmit={handleSubmit} className=" mt-10">
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

                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-black-soft mb-2"
                    >
                      Password
                    </label>

                    <div className="flex mt-2">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password (min of 8 characters)"
                        autoComplete="current-password"
                        required
                        className="password-control"
                      />
                      <button
                        type="button"
                        onClick={toggleShowPassword}
                        className="password-button"
                      >
                        {showPassword ? (
                          <EyeSlashIcon className="h-5 w-5 text-gray-700" />
                        ) : (
                          <EyeIcon className="h-5 w-5 text-gray-700" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <Link
                      to={`/auth/forgot-password`}
                      className="text-[#323232d9] text-sm underline underline-offset-2"
                    >
                      Reset Password?
                    </Link>
                  </div>

                  <div className="mt-7">
                    <button
                      type="submit"
                      disabled={!formValid}
                      className={formValid ? "login-active" : "login-disabled"}
                    >
                      {loading ? "Loading ..." : "Log in"}
                    </button>
                  </div>

                  <div className="mt-9 text-center">
                    <p className="text-black-soft text-sm ">
                      New user?{" "}
                      <Link
                        to="/auth/register"
                        className="underline underline-offset-2"
                      >
                        Create an account
                      </Link>
                    </p>
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
};

export default Login;
