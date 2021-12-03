import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { channelAPI } from "../../api/channelAPI";

const initialState = {
    loading: false,
    channel: null,
    isSubscribed: 0,
    error: null,
};

export const getChannelById = createAsyncThunk(
    "channel/getChannelById",
    async (id) => {
        const res = await channelAPI.getChannelById(id);

        return res;
    }
);

export const checkSubscriptionStatus = createAsyncThunk(
    "channel/checkSubscriptionStatus",
    async (id, { dispatch, getState }) => {
        const accessToken = getState().auth.accessToken;

        const res = await channelAPI.checkSubscriptionStatus(id, accessToken);

        return res;
    }
);

const channelSlice = createSlice({
    name: "channel",
    initialState,
    reducers: {},
    extraReducers: {
        [getChannelById.pending]: (state) => {
            state.loading = true;
        },

        [getChannelById.rejected]: (state, action) => {
            state.loading = false;
            state.channel = null;
            state.error = action.payload;
        },

        [getChannelById.fulfilled]: (state, action) => {
            state.loading = false;
            state.channel = action.payload.data.items[0];
        },

        [checkSubscriptionStatus.pending]: (state) => {
            state.loading = true;
        },

        [checkSubscriptionStatus.rejected]: (state) => {
            state.loading = true;
            // state.error = action.payload;
        },

        [checkSubscriptionStatus.fulfilled]: (state, action) => {
            state.loading = false;
            state.isSubscribed = action.payload.data.items.length;
        },
    },
});

export const {} = channelSlice.actions;

export default channelSlice.reducer;
