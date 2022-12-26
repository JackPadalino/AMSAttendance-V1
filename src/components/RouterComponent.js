import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Home,
  Login,
  Admin
} from "./";

const RouterComponent = () => {

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default RouterComponent;
