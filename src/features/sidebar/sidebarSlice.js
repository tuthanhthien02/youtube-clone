import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
    isSidebarToggle: false,
};

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isSidebarToggle = !state.isSidebarToggle;
        },
        closeSidebar: (state) => {
            state.isSidebarToggle = false;
        },
        openSidebar: (state) => {
            state.isSidebarToggle = true;
        },
    },
});

// export const getSidebarToggle = createSelector(
//     (state) => state.isSidebarToggle,
//     (sidebarToggle) => sidebarToggle
// );

export const getSidebarToggle = (state) => state.sidebar.isSidebarToggle;

export const { toggleSidebar, closeSidebar, openSidebar } =
    sidebarSlice.actions;

export default sidebarSlice.reducer;
