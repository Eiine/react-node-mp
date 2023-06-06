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
      localStorage.removeItem("authState");

      saveState(state);
    },
    updateData(state, action) {
      state.user.update = action.payload;
      saveState(state);
      return state;
    },
    updateAmount(state, action) {
      const { operation, value } = action.payload;

      if (operation === "resta") {
        const rest = Number(state.user.update.balance) - Number(value);
        state.user.update.balance = rest;
        saveState(state);
        return state;
      } else if (operation === "suma") {
        const suma = Number(state.user.update.balance) + Number(value);
        state.user.update.balance = suma;
        saveState(state);
        return state;
      }

      /*  state.user.update.balance = Number(state.user.balance - action.payload);
      saveState(state); */
    },
  },
});

export const { login, logout, updateData, updateAmount } = authSlice.actions;
export default authSlice.reducer;
