import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";

import { api, LogoutForm, LoginForm, SignUpForm } from "~store/api";
import { clearUser, setUser } from "./slice";
import { GetUserInfoForm } from "~store/api/types";

export const getUserInfoThunk = createAsyncThunk(
    "user/getUserInfo",
    async (_, thunkApi) => {
        const response = 
            await thunkApi.dispatch(api.endpoints.getUserInfo.initiate())

        if (response.status === QueryStatus.fulfilled) 
            thunkApi.dispatch(setUser(response.data))

        return response
    },
);

export const logUserThunk = createAsyncThunk(
    "user/logUser",
    async (loginForm: LoginForm, thunkApi) => {
        
        const response =
            await thunkApi.dispatch(api.endpoints.login.initiate(loginForm))
        
        if (response.status === QueryStatus.fulfilled)
            thunkApi.dispatch(setUser(response.data))
        else {
            throw thunkApi.rejectWithValue(response.error)
        }
    },
)

export const signUpUserThunk = createAsyncThunk(
    "user/signUpUser",
    async (signUpForm: SignUpForm, thunkApi) => {
        return await thunkApi.dispatch(api.endpoints.signUp.initiate(signUpForm))
    }
)

export const logoutUserThunk = createAsyncThunk(
    "user/logoutUser",
    async (_, thunkApi) => {

        const response = 
            await thunkApi.dispatch(api.endpoints.logout.initiate())
        
        console.log(response)
        if (response.status === QueryStatus.fulfilled)
            thunkApi.dispatch(clearUser())
        else
            throw thunkApi.rejectWithValue(response)

        return response;
    }
)