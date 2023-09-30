import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/register/RegisterSlice";

export const store = configureStore({
  reducer: {
    // configuring the reducer called registerUser
    register: registerReducer,
  },
});
