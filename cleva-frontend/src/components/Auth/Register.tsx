import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import authImg from "../../images/login-img.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ReactFlagsSelect from "react-flags-select";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selected, setSelected] = useState("");
  const [phoneValue, setPhoneValue] = useState<any>();
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
      <div className="md:flex min-h-full ">
        <div className="md:flex md:flex-col justify-center flex-1 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-20 bg-black text-white ">
          <div className="mx-auto w-full max-w-[24rem] 2xl:max-w-[28rem] lg:w-[30rem] xl:w-[28rem]">
            <div className="flex justify-center pt-20 min-h-[100vh] md:items-center md:pt-0">
              <div className="w-full">
                <div>
                  <img className="w-aut0" src={logo} alt="logo" />
                  <h1 className="mt-16 text-[2rem] 2xl:text-4xl leading-loose font-medium text-white">
                    Multi-currency banking for you & your business
                  </h1>
                </div>

                <img src={authImg} className="mt-10" alt="login" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1 flex-col bg-[#FBFBFB]">
          <div className="flex justify-center pt-8 min-h-[100vh] md:items-center md:pt-0">
            <div className="login-card w-full lg:w-[40rem] xl:w-[40rem] py-8 px-8 md:py-12 md:px-20 register-card">
              <div className="">
                <h2 className="text-2xl text-black-soft">Create an account</h2>

                <div className="bg-yellow-100 text-yellow-700 p-4 rounded-[6px] mt-8">
                  <p className="tx-sm">
                    Cleva currently only supports businesses with an EIN, though
                    business owners can be non-US based.
                  </p>
                </div>
                {/* form section  */}
                <form onSubmit={handleSubmit} className=" mt-6">
                  <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          placeholder="First Name"
                          className="input-control"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <div className="mt-2">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          placeholder="Last Name"
                          className="input-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-black-soft"
                    >
                      Country of Residence
                    </label>
                    <div className="mt-2">
                      <ReactFlagsSelect
                        selected={selected}
                        onSelect={(code) => setSelected(code)}
                        searchable
                        selectButtonClassName="search-input"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium text-black-soft"
                    >
                      Business Name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="businessName"
                        id="businessname"
                        autoComplete="family-name"
                        className="input-control"
                        placeholder="Your business Name"
                      />
                    </div>
                  </div>

                  <div className="mt-5">
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

                  <div className="mt-5">
                    <label
                      htmlFor="businessName"
                      className="block text-sm font-medium text-black-soft"
                    >
                      Phone Number
                    </label>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        placeholder="Enter phone number"
                        value={phoneValue}
                        onChange={setPhoneValue}
                        defaultCountry="US"
                      />
                    </div>

                    {/* <div className="relative mt-2 rounded-md shadow-sm">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="you@example.com"
                      />
                    </div> */}
                  </div>

                  <div className="mt-5">
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

                  <div className="mt-5">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-black-soft mb-2"
                    >
                      What do you plan to use Cleva for?
                    </label>

                    <div className="flex mt-2">
                      <fieldset>
                        <div className="space-y-1">
                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="comments"
                                aria-describedby="comments-description"
                                name="comments"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="comments"
                                className="text-black-soft"
                              >
                                Send money to Nigeria
                              </label>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="candidates"
                                aria-describedby="candidates-description"
                                name="candidates"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="candidates"
                                className="text-black-soft"
                              >
                                Send money to US
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="offers"
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="offers"
                                className="text-black-soft"
                              >
                                Open a USD bank account
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="offers"
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="offers"
                                className="text-black-soft"
                              >
                                Create invoices to request payment
                              </label>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="offers"
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="offers"
                                className="text-black-soft"
                              >
                                Create USD cards for myself and employees
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="offers"
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="offers"
                                className="text-black-soft"
                              >
                                Create NGN cards for myself and employees
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="offers"
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="offers"
                                className="text-black-soft"
                              >
                                Manage and track my company spend
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="offers"
                                aria-describedby="offers-description"
                                name="offers"
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="offers"
                                className="text-black-soft"
                              >
                                Other
                              </label>
                            </div>
                          </div>
                        </div>

                        <hr className="my-5" />

                        <div className="relative flex items-start">
                          <div className="flex h-6 items-center">
                            <input
                              id="offers"
                              aria-describedby="offers-description"
                              name="offers"
                              type="checkbox"
                              className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                            <label htmlFor="offers" className="text-[#111928]">
                              I have read, understood and I agree to{" "}
                              <Link
                                to="/privacy"
                                className="text-sm underline underline-offset-2"
                              >
                                Cleva’s Privacy Policy
                              </Link>
                              {" "} , and
                              <Link
                                to="/terms"
                                className="text-sm underline underline-offset-2"
                              >
                               {" "} Terms and conditions.
                              </Link>
                            </label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div className="mt-7">
                    <button
                      type="submit"
                      disabled={!formValid}
                      className={formValid ? "login-active" : "login-disabled"}
                    >
                      Create Account
                    </button>
                  </div>

                  <div className="mt-9 text-center">
                    <p className="text-black-soft text-sm ">
                      Returning user?{" "}
                      <Link
                        to="/login"
                        className="underline underline-offset-2"
                      >
                        Login
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

export default Register;
