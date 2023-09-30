import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
  isLoggedin: false
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
    }
  },
});

// Action creators are generated for each case reducer function
export const { registerUser, syncWithLocalStorage, setLoginStatus } = registerSlice.actions;

export const selectUser = (state) => state.register.users;

export default registerSlice.reducer;
