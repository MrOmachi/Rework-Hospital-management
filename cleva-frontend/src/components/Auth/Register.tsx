import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Userpool from "../../Userpool";
import logo from "../../images/logo.svg";
import authImg from "../../images/login-img.svg";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import ReactFlagsSelect from "react-flags-select";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [businessName, setBusinessName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [country, setCountry] = useState("");
  const [phone_number, setPhoneValue] = useState<any>();
  const [selectedBox, setSelectedBox] = useState<string[]>([]);
  const [formValid, setFormValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // amazon cognito required values
  const attributes = [
    new CognitoUserAttribute({
      Name: "given_name",
      Value: `${firstName} ${lastName}`,
    }),
    new CognitoUserAttribute({
      Name: "phone_number",
      Value: phone_number,
    }),
    new CognitoUserAttribute({
      Name: "address",
      Value: country,
    }),
  ];

  // Handle checkbox value
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedBox((selectedBox) => {
      if (selectedBox.includes(value)) {
        return selectedBox.filter((item) => item !== value);
      } else {
        return [...selectedBox, value];
      }
    });
  };

  // handle form submit and send params to amanzon cognito
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    Userpool.signUp(
      email,
      password,
      attributes,
      null || [],
      (err: any, data: any) => {
        if (err) {
          console.error(err.message);
          toast.error(err.message);
          return;
        }
        const cognitoUser = data.user;
        const registeredEmail = cognitoUser.getUsername();
        console.log("User registered:", registeredEmail);

        // Store email in local storage
        localStorage.setItem("registeredEmail", registeredEmail);
        console.log(cognitoUser);

        toast.success("User created successfully!");
        navigate("/auth/verify-email");
      }
    );
    setLoading(false);
  };

  useEffect(() => {
    if (email && password && selectedBox.includes("terms")) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [email, password, selectedBox]);

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
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
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
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
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
                        selected={country}
                        onSelect={(code) => setCountry(code)}
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
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={phone_number}
                        onChange={setPhoneValue}
                        defaultCountry="US"
                      />
                    </div>
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
                        onChange={(e) => setPassword(e.target.value)}
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
                                id="ngn"
                                aria-describedby="comments-description"
                                name="ngn"
                                type="checkbox"
                                value="ngn"
                                checked={selectedBox.includes("ngn")}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label htmlFor="ngn" className="text-black-soft">
                                Send money to Nigeria
                              </label>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="us"
                                aria-describedby="candidates-description"
                                name="us"
                                type="checkbox"
                                value="us"
                                checked={selectedBox.includes("us")}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label htmlFor="us" className="text-black-soft">
                                Send money to US
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="usd"
                                aria-describedby="offers-description"
                                name="usd"
                                type="checkbox"
                                value="usd"
                                checked={selectedBox.includes("usd")}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label htmlFor="usd" className="text-black-soft">
                                Open a USD bank account
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="invoice"
                                aria-describedby="offers-description"
                                name="invoice"
                                type="checkbox"
                                value="invoice"
                                checked={selectedBox.includes("invoice")}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="invoice"
                                className="text-black-soft"
                              >
                                Create invoices to request payment
                              </label>
                            </div>
                          </div>
                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="usd-cards"
                                aria-describedby="offers-description"
                                name="usd-cards"
                                type="checkbox"
                                value="usd-cards"
                                checked={selectedBox.includes("usd-cards")}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="usd-cards"
                                className="text-black-soft"
                              >
                                Create USD cards for myself and employees
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="ng-cards"
                                aria-describedby="offers-description"
                                name="ng-cards"
                                type="checkbox"
                                value="ng-cards"
                                checked={selectedBox.includes("ng-cards")}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="ng-cards"
                                className="text-black-soft"
                              >
                                Create NGN cards for myself and employees
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="track"
                                aria-describedby="offers-description"
                                name="track"
                                type="checkbox"
                                value="track"
                                checked={selectedBox.includes("track")}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="track"
                                className="text-black-soft"
                              >
                                Manage and track my company spend
                              </label>
                            </div>
                          </div>

                          <div className="relative flex items-start">
                            <div className="flex h-6 items-center">
                              <input
                                id="others"
                                aria-describedby="offers-description"
                                name="others"
                                type="checkbox"
                                value="others"
                                checked={selectedBox.includes("others")}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                              />
                            </div>
                            <div className="ml-3 text-sm leading-6">
                              <label
                                htmlFor="others"
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
                              id="terms"
                              aria-describedby="offers-description"
                              name="terms"
                              type="checkbox"
                              value="terms"
                              checked={selectedBox.includes("terms")}
                              onChange={handleCheckboxChange}
                              className="h-4 w-4 rounded border-gray-300 text-cleva-gold focus:ring-cleva-gold"
                            />
                          </div>
                          <div className="ml-3 text-sm leading-6">
                            <label htmlFor="terms" className="text-[#111928]">
                              I have read, understood and I agree to{" "}
                              <Link
                                to="/privacy"
                                className="text-sm underline underline-offset-2"
                              >
                                Cleva’s Privacy Policy
                              </Link>{" "}
                              , and
                              <Link
                                to="/terms"
                                className="text-sm underline underline-offset-2"
                              >
                                {" "}
                                Terms and conditions.
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
                      {loading ? "Loading ..." : "Create Account"}
                    </button>
                  </div>

                  <div className="mt-9 text-center">
                    <p className="text-black-soft text-sm ">
                      Returning user?{" "}
                      <Link
                        to="/auth/login"
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

        <ToastContainer />
      </div>
    </>
  );
};

export default Register;
