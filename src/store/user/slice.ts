import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "./types";


const userSlice = createSlice({
    name: "user",
    initialState: {},
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state = {...state, ...action.payload}
            if (action.payload.token) AsyncStorage.setItem("token", action.payload.token)
            return state;
        },
        clearUser: (state) => {
            state = {}
            AsyncStorage.removeItem("token")
            return state;
        },
    },
});

export const {
    setUser,
    clearUser,
} = userSlice.actions

export default userSlice.reducer;