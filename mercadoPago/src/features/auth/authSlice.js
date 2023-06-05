import { createSlice } from "@reduxjs/toolkit";
import useLocalStorage from "../../hooks/useLocalStorage";
const { loadState, saveState } = useLocalStorage();
const persistedState = loadState();

const initialState = {
  isLoggedIn: false,
  user: "",
};
export const authSlice = createSlice({
  name: "auth",
  initialState: persistedState || initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
      saveState(state);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = "";
      saveState(state);
    },
    updateData(state, action) {
      state.user.update = action.payload;
      saveState(state);
      return state;
    },
    updateAmount(state, action) {
      state.user.balance = Number(state.user.balance - action.payload);
      saveState(state);
      return state;
    },
  },
});

export const { login, logout, updateData, updateAmount } = authSlice.actions;
export default authSlice.reducer;
