import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NavBar from "./components/NavBar";
import Index from "./components/Index";
import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </MantineProvider>
  );
};

export default App;
