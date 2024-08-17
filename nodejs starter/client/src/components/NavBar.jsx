import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className=" w-full h-10 bg-orange-800 text-white flex items-center justify-center gap-x-8">
      <Link to="/">Index Page</Link>
      <Link to="/signup">Sign Up</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default NavBar;
