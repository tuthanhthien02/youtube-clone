import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import sidebarReducer from "../features/sidebar/sidebarSlice";
import categoriesReducer from "../features/categories/categoriesSlice";
import authReducer from "../features/auth/authSlice";
import videoReducer from "../features/video/videoSlice";
import selectedVideoReducer from "../features/selectedVideo/selectedVideoSlice";
import channelReducer from "../features/channel/channelSlice";
import commentsReducer from "../features/comments/commentsSlice";
import relatedVideoReducer from "../features/relatedVideo/relatedVideoSlice";
import searchedVideoReducer from "../features/searchedVideo/searchedVideoSlice";

const rootReducer = {
    counter: counterReducer,
    sidebar: sidebarReducer,
    categories: categoriesReducer,
    auth: authReducer,
    video: videoReducer,
    selectedVideo: selectedVideoReducer,
    channel: channelReducer,
    comments: commentsReducer,
    relatedVideo: relatedVideoReducer,
    searchedVideo: searchedVideoReducer,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
