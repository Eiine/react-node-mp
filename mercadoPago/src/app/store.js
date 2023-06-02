import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice"
import newCardReducer from "../features/newCard/newCardSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        newCard: newCardReducer,
    }
})
