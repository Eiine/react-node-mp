import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataCard: {
        type: "debit",
        bank_emisor: "macro",
        bank: "",
        expiration_date: "0",
        user_name: "",
        cvv: 0,
        user_card: "",
        user_number: 0
    },
    colorCard: {
        color1: "#DAD9E3",
        color2: "#CFD1D9",
        color3: "#C5C7CF",
        image: "",
    }
};

export const newCardSlice = createSlice({
    name: "newCard",
    initialState,
    reducers: {
        addColor(state, action) {
            state.colorCard = action.payload;
        },
        step1(state, action) {
            const { user_number } = action.payload
            state.dataCard.user_number = user_number;
        }
    }
})

export const { addColor, step1 } = newCardSlice.actions;
export default newCardSlice.reducer;