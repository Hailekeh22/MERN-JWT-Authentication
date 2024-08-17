import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    const apilink = import.meta.env.VITE_loginbackend;
    axios.post(apilink, credentials, { withCredentials: true }).then((res) => {
      if (res.data.login) {
        navigate("/Home");
      } else {
        alert("Login Error");
      }
    });
    setCredentials({
      email: "",
      password: "",
    });
  };

  const handlechanges = (e) => {
    const { name, value } = e.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <div className=" h-screen w-full bg-slate-800 flex items-center justify-center">
      <div className=" p-4 bg-slate-400 rounded-lg w-80">
        <div className="flex items-center justify-center ">
          <h2 className=" font-bold">Login</h2>
        </div>
        <form onSubmit={login} className=" flex flex-col w-full">
          <label>Email</label>
          <input
            type="email"
            className=" rounded-md p-1"
            name="email"
            value={credentials.email}
            onChange={handlechanges}
          ></input>
          <label>password</label>
          <input
            type="password"
            className=" rounded-md p-1"
            name="password"
            value={credentials.password}
            onChange={handlechanges}
          ></input>
          <button type="submit" className=" primary-btn mt-3">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
