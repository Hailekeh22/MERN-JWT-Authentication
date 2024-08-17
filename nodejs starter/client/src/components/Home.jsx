import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const check = async () => {
      try {
        const link = import.meta.env.VITE_homeroute;
        await axios.get(link, { withCredentials: true }).then((res) => {
          console.log("Auth Check Response:", res.data);

          if (res.data.loggedIn) {
            setAuthenticated(true);
          } else {
            setAuthenticated(false);
            navigate("/login");
          }
        });
      } catch (e) {
        console.log(e);
        navigate("/login");
      }
    };
    check();
  }, [navigate]);

  const logout = () => {
    const link = import.meta.env.VITE_Logoutroute;
    axios.post(link, { withCredentials: true }).then((res) => {
      console.log(res.data);
      setAuthenticated(false);
      navigate("/login");
    });
  };

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
