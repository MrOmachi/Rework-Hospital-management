import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../../images/email-icon.svg"


const ForgotEmail = () => {
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    const storedEmail = localStorage.getItem("registeredEmail");
    if (storedEmail) setEmail(storedEmail);
  }, []);
  
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="text-center md:w-[35%]">
        <div className="flex justify-center">
        <img src={emailIcon} alt="email" />
        </div>
        <p className="text-xl text-[#158025] mb-4 mt-6">Check your email</p>
        <p className="font-medium mb-4">
          We’ve sent password resent instructions to{" "}
          <span className="text-[#935B06] font-normal">{email}</span>
        </p>

        <p className="text-[#636363] mb-6">
          If you haven’t received this email within a few minutes, check your
          spam folder
        </p>

        <div className="md:px-6">
          <Link to="/auth/login" className="login-active">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotEmail;
