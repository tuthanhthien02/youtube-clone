import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { videoAPI } from "../../api/videoAPI";

const initialState = {
    loading: false,
    video: null,
    error: null,
};

export const getVideoById = createAsyncThunk(
    "selectedVideoSlice/getVideoBiId",
    async (id, { dispatch }) => {
        const res = await videoAPI.getVideoById(id);

        return res;
    }
);

const selectedVideoSlice = createSlice({
    name: "selectedVideo",
    initialState,
    reducers: {},
    extraReducers: {
        [getVideoById.pending]: (state) => {
            state.loading = true;
        },
        [getVideoById.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        [getVideoById.fulfilled]: (state, action) => {
            state.video = action.payload.data.items[0];
            state.loading = false;
        },
    },
});

export const {} = selectedVideoSlice.actions;

export default selectedVideoSlice.reducer;
