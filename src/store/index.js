import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import classReducer from "./classSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    class:classReducer
  },
});

export default store;