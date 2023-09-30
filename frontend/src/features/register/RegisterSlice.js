import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: {},
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
  },
});

// Action creators are generated for each case reducer function
export const { registerUser, syncWithLocalStorage } = registerSlice.actions;

export const selectUser = (state) => state.register.users;

export default registerSlice.reducer;
