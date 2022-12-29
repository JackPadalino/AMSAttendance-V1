import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import classReducer from "./classSlice";
import dateReducer from "./dateSlice";
import adminReducer from './adminSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    class:classReducer,
    admin:adminReducer,
    date:dateReducer
  },
});

export default store;