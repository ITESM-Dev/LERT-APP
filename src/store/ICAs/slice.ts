import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ICAType } from "./types";

export const ICAsAdapter = createEntityAdapter<ICAType>({
    selectId: (ICA) => ICA.id,
});

const ICAs = createSlice({
    name: "ICAs",
    initialState: ICAsAdapter.getInitialState(),
    reducers: {

    }
});

export const { 

} = ICAs.actions;
export default ICAs.reducer;