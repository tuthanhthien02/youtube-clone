import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase/compat/app";
import auth from "../../firebase";
import { authAPI } from "../../api/authAPI";

const initialState = {
    accessToken: sessionStorage.getItem("ytc-access-token")
        ? sessionStorage.getItem("ytc-access-token")
        : null,
    user: sessionStorage.getItem("ytc-user")
        ? JSON.parse(sessionStorage.getItem("ytc-user"))
        : null,
    loading: false,
    error: null,
};

export const loginAuth = createAsyncThunk(
    "auth/loginAuth",
    async (params, thunkAPI) => {
        // thunkAPI.dispatch()
        const user = await authAPI.loginAuth();
        return user;
    }
);

export const logoutAuth = createAsyncThunk(
    "auth/logoutAuth",
    async (params, thunkAPI) => {
        authAPI.logoutAuth();
    }
);

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loadProfile: (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {},
    },
    extraReducers: {
        [loginAuth.pending]: (state) => {
            state.loading = true;
        },

        [loginAuth.rejected]: (state, action) => {
            state.loading = false;
            state.accessToken = null;
            state.error = action.payload;
        },

        [loginAuth.fulfilled]: (state, action) => {
            const res = action.payload;

            const accessToken = res.credential.accessToken;

            const user = {
                name: res.additionalUserInfo.profile.name,
                photoURL: res.additionalUserInfo.profile.picture,
            };

            sessionStorage.setItem("ytc-access-token", accessToken);
            sessionStorage.setItem("ytc-user", JSON.stringify(user));

            state.loading = false;
            state.accessToken = accessToken;
            state.user = user;
        },

        [logoutAuth.rejected]: (state) => {
            state.accessToken = null;
            state.user = null;
        },
    },
});

export const { loadProfile } = authSlice.actions;

export default authSlice.reducer;
