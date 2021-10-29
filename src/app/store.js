import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import authReducer from "../features/auth/authSlice";
import videoReducer from "../features/video/videoSlice";

const rootReducer = {
    counter: counterReducer,
    sidebar: sidebarReducer,
    categories: categoriesReducer,
    auth: authReducer,
    video: videoReducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
