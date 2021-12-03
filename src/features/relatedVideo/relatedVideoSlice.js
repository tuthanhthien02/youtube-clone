import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { videoAPI } from "../../api/videoAPI";

const initialState = {
    loading: false,
    videos: [],
    error: null,
};

export const getRelatedVideos = createAsyncThunk(
    "relatedVideo/getRelatedVideos",
    async (id) => {
        const res = await videoAPI.getRelatedVideos(id);

        return res;
    }
);

const relatedVideoSlice = createSlice({
    name: "relatedVideo",
    initialState,
    reducers: {},
    extraReducers: {
        [getRelatedVideos.pending]: (state) => {
            state.loading = true;
        },

        [getRelatedVideos.fulfilled]: (state, action) => {
            state.loading = false;
            state.videos = action.payload;
        },

        [getRelatedVideos.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {} = relatedVideoSlice.actions;

export default relatedVideoSlice.reducer;
