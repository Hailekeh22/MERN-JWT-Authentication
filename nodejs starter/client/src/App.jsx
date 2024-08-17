import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import VerifyEmail from "./components/VerifyEmail";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </MantineProvider>
  );
};

export default App;
