import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { videoAPI } from "../../api/videoAPI";

const initialState = {
    loading: false,
    videos: [],
    error: null,
};

export const getVideoByKeyword = createAsyncThunk(
    "searchedVideo/getVideoByKeyWord",
    async (keyword) => {
        const res = await videoAPI.getVideoByKeyword(keyword);

        return res;
    }
);

const searchedVideoSlice = createSlice({
    name: "searchedVideo",
    initialState,
    reducers: {},
    extraReducers: {
        [getVideoByKeyword.pending]: (state) => {
            state.loading = true;
        },

        [getVideoByKeyword.fulfilled]: (state, action) => {
            state.loading = false;
            state.videos = action.payload.data.items;
        },

        [getVideoByKeyword.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {} = searchedVideoSlice.actions;

export default searchedVideoSlice.reducer;
