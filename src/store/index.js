import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import classReducer from "./classSlice";
import dateReducer from "./dateSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    class:classReducer,
    date:dateReducer
  },
});

export default store;