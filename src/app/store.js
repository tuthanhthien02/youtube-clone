import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import categoriesReducer from "../features/categories/categoriesSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        sidebar: sidebarReducer,
        categories: categoriesReducer,
    },
});
