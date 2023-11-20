import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false
};
const loginSlice = createSlice({
  name: "loginchecker",
  initialState,
  reducers: {
    login: (state) => {
      state.value = "login";
    },
    logout: (state) => {
      state.value = "logout";
    }
  }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
