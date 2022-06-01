import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "./types";


const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state = {...state, ...action.payload}
            return state;
        },
        clearUser: (state) => {
            state = {}
            return state;
        },
    },
});

export const {
    setUser,
    clearUser,
} = userSlice.actions

export default userSlice.reducer;