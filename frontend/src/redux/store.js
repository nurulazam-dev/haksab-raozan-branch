import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userReducer from "./userSlice";
import financeReducer from "./financeSlice";
import eventReducer from "./eventSlice";
import attendanceReducer from "./attendanceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    finance: financeReducer,
    event: eventReducer,
    attendance: attendanceReducer,
  },
});

export default store;
