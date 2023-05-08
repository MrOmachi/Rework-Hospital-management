import React, { useEffect, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import Userpool from "../../Userpool";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../images/logo.svg";
import authImg from "../../images/login-img.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

// interface LoginFormProps {
//   onSubmit: (email: string, password: string) => void;
// }

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formValid, setFormValid] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("email", email);
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
                      to="/reset-password"
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
                      Log in
                    </button>
                  </div>

                  <div className="mt-9 text-center">
                    <p className="text-black-soft text-sm ">
                      New user? {" "}
                      <Link
                        to="/register"
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
      </div>
    </>
  );
};

export default Login;
