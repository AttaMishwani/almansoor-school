// src/redux/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,           // Supabase user object: { id, email, ... }
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;                       // payload: { email, id }
            state.isAuthenticated = Boolean(action.payload);
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
