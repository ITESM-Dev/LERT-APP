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
            if (action.payload.mail) AsyncStorage.setItem("mail", action.payload.mail)
            return state;
        },
        clearUser: (state) => {
            state = {}
            AsyncStorage.removeItem("token")
            AsyncStorage.removeItem("mail")
            return state;
        },
    },
});

export const {
    setUser,
    clearUser,
} = userSlice.actions

export default userSlice.reducer;