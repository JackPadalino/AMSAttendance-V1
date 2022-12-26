import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { resetUser } from "../store/userSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const logout = () => {
    window.localStorage.removeItem("token");
    dispatch(resetUser());
  };

  return (
    <>
        <Link to="/">Home</Link>
        {!user.id && <Link to="/login">Login</Link>}
        {user.id && <button onClick={logout}>Logout</button>}
    </>
  );
};

export default Navbar;