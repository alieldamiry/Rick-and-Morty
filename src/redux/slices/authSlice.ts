import { createSlice } from "@reduxjs/toolkit";

export type AuthState = {
  isAuth: boolean;
};

const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log("state login", action);
      const { email, password } = action.payload;
      if (email === "admin@top.legal" && password === "123456") {
        state.isAuth = true;
      }
    },
    logout: (state) => {
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
