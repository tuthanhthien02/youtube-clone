import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { commentsAPI } from "../../api/commentsAPI";

const initialState = {
    loading: false,
    comments: null,
    error: null,
};

export const getCommentsOfVideoById = createAsyncThunk(
    "comments/getCommentsOfVideoById",
    async (id) => {
        const res = await commentsAPI.getCommentsOfVideoById(id);

        return res;
    }
);

export const addComment = createAsyncThunk(
    "comments/addComment",
    async (id, { dispatch, getState }) => {
        const text = "testing..."; // fix later
        const accessToken = getState().auth.accessToken;

        const res = await commentsAPI.addComment(id, text, accessToken);
        return res;
    }
);

const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: {
        [getCommentsOfVideoById.pending]: (state) => {
            state.loading = true;
        },

        [getCommentsOfVideoById.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

        [getCommentsOfVideoById.fulfilled]: (state, action) => {
            state.loading = false;
            state.comments = action.payload.data.items;
        },

        [addComment.pending]: (state) => {},

        [addComment.rejected]: (state, action) => {},

        [addComment.fulfilled]: (state, action) => {},
    },
});

export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
