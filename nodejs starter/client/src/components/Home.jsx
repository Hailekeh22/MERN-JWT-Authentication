import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const token = localStorage.getItem("token");
        const link = import.meta.env.VITE_homeroute;
        console.log(token);

        if (!token) {
          navigate("/login");
        }

        await axios
          .get(link, { headers: { Authorization: `Baerer ${token}` } })
          .then((res) => {
            console.log("Auth Check Response:", res.data);
            setAuthenticated(true);
          });
      } catch (e) {
        console.log(e);
        navigate("/login");
      }
    };
    check();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    setAuthenticated(false);
    navigate("/login");
  };

  if (!authenticated) {
    return null;
  }

  return (
    <div className=" h-screen w-full bg-amber-700 flex items-center justify-center">
      <div className=" bg-slate-800 flex flex-col px-16 py-10">
        <h2 className=" text-white text-2xl mb-10">
          Sucessfully Logged In Welcome
        </h2>
        <button className=" primary-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
