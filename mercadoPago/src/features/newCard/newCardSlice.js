import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataCard: {

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
        }
    }
})

export const { addColor } = newCardSlice.actions;
export default newCardSlice.reducer;