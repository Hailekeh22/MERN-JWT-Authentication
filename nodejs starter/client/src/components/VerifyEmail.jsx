import React, { useEffect, useState } from "react";
import axios from "axios";
import { PinInput } from "@mantine/core";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [pin, setPin] = useState("");

  const location = useLocation();
  const email = location.state?.email;

  const navigate = useNavigate();

  useEffect(() => {
    console.log(email);
  }, []);

  const handleChange = (value) => {
    setPin(value);
  };

  const handleSubmit = () => {
    const apiLink = import.meta.env.VITE_verifyroute;
    axios
      .post(apiLink, { email: email, code: pin })
      .then((res) => {
        if (res.data.emailValidated) {
          alert("Email Verified! Please Login to you account");
          navigate("/login");
        } else {
          alert("Verification code is Not Correct");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className=" flex items-center justify-center h-screen w-full bg-slate-900">
      <div className=" p-10 bg-black flex flex-col justify-center items-center gap-3">
        <h2 className=" text-white ">Enter Verification Code</h2>
        <PinInput placeholder="-" type={/^[0-9]*$/} onChange={handleChange} />
        <button
          className="text-white outline-none bg-lime-500 w-full py-2"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default VerifyEmail;
