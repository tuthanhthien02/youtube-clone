import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeElement: "All",
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setActiveElement: (state, action) => {
            state.activeElement = action.payload;
            console.log(state.activeElement);
        },
    },
});

export const { setActiveElement } = categoriesSlice.actions;

export const getActiveElement = (state) => state.categories.activeElement;

export default categoriesSlice.reducer;
