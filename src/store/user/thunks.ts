import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "~store/api";
import { setUser } from "./slice";

export const getUserInfoThunk = createAsyncThunk(
    "user/getUserInfo",
    async (id: string, thunkApi) => {
        const response = 
            await thunkApi.dispatch(api.endpoints.getUserInfo.initiate(id))

        if (response.data) 
            thunkApi.dispatch(setUser(response.data))

        return response
    },
)