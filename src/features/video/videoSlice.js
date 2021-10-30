import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { videoAPI } from "../../api/videoAPI";
import request from "../../api/api";

const initialState = {
    loading: false,
    videos: [],
    nextPageToken: null,
    activeCategory: "All",
    error: null,
};

export const getPopularVideos = createAsyncThunk(
    "video/popularVideos",
    async (pageToken, { dispatch, getState }) => {
        const curPageToken = getState().video.nextPageToken;

        const res = await videoAPI.getPopularVideos(curPageToken);

        const videos = res.data.items;
        const nextPageToken = res.data.nextPageToken;

        const payload = { videos, nextPageToken, category: "All" };

        return payload;
    }
);

export const getVideoByCategory = createAsyncThunk(
    "video/videoByCategory",
    async (keyword, { dispatch, getState }) => {
        const res = await videoAPI.getVideoByCategory(
            keyword,
            getState().video.nextPageToken
        );

        const videos = res.data.items;
        const nextPageToken = res.data.nextPageToken;
        const category = keyword;

        const payload = { videos, nextPageToken, category };

        return payload;
    }
);

export const getVideoDetails = createAsyncThunk(
    "video/videoDetail",
    async (id, thunkAPI) => {
        const res = await videoAPI.getVideoDetails(id);

        return res;
    }
);

const videoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {},
    extraReducers: {
        [getPopularVideos.pending]: (state) => {
            state.loading = true;
        },

        [getPopularVideos.fulfilled]: (state, action) => {
            state.loading = false;
            state.videos =
                state.activeCategory === action.payload.category
                    ? [...state.videos, ...action.payload.videos]
                    : action.payload.videos;
            state.nextPageToken = action.payload.nextPageToken;
            state.activeCategory = action.payload.category;
        },

        [getPopularVideos.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [getVideoDetails.fulfilled]: (state, action) => {},

        [getVideoByCategory.fulfilled]: (state, action) => {
            // state.videos = action.payload.videos;
            state.videos =
                state.activeCategory === action.payload.category
                    ? [...state.videos, ...action.payload.videos]
                    : action.payload.videos;
            state.nextPageToken = action.payload.nextPageToken;
            state.activeCategory = action.payload.category;
        },
    },
});

export const {} = videoSlice.actions;

export default videoSlice.reducer;
