import { createAsyncThunk } from "@reduxjs/toolkit";
import { QueryStatus } from "@reduxjs/toolkit/dist/query";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api, LogoutForm, LoginForm, SignUpForm } from "~store/api";
import { clearUser, setUser } from "./slice";
import { GetUserInfoForm } from "~store/api/types";

export const getUserInfoThunk = createAsyncThunk(
    "user/getUserInfo",
    async (getUserInfoForm: GetUserInfoForm, thunkApi) => {
        const response = 
            await thunkApi.dispatch(api.endpoints.getUserInfo.initiate(getUserInfoForm))

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
        else 
            return thunkApi.rejectWithValue(response)
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
            return thunkApi.rejectWithValue(response)

        return response;
    }
)