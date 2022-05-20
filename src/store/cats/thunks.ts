import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "~store/api";

export const saveCatFacts = createAsyncThunk(
    "cats/saveCatFacts",
    async (_, thunkApi) => {
        return await thunkApi.dispatch(api.endpoints.getFacts.initiate())
    }
)