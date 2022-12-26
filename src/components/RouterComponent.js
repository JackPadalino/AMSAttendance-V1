import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Home,
  Login
} from "./";

const RouterComponent = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RouterComponent;
