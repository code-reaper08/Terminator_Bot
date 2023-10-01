import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  isLoggedin: false,
  alldone: false,
  req_id: null,
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    // anonymous function
    registerUser: (state, action) => {
      state.users = action.payload;
      localStorage.setItem("user", JSON.stringify(state.users));
    },
    syncWithLocalStorage: (state, action) => {
      state.users = action.payload;
    },
    setLoginStatus: (state, action) => {
      state.isLoggedin = action.payload;
      localStorage.setItem("LoggedIn", JSON.stringify(state.isLoggedin));
    },
    setAlldone: (state, action) => {
      state.alldone = action.payload;
      localStorage.setItem("AllDone", JSON.stringify(state.alldone));
      console.log(action.payload);
    },
    setReqID: (state, action) => {
      state.req_id = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  registerUser,
  syncWithLocalStorage,
  setLoginStatus,
  setAlldone,
  setReqID
} = registerSlice.actions;

export const selectUser = (state) => state.register.users;
export const selectReqID = (state) => state.register.req_id;

export default registerSlice.reducer;
