import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { DelegateType } from "./types";

export const delegateAdapter = createEntityAdapter<DelegateType>({
    selectId: (delegate: DelegateType) => delegate.id,
});

const delegateSlice = createSlice({
    name: "delegate",
    initialState: delegateAdapter.getInitialState(),
    reducers: {
        
    },
});

export const {

} = delegateSlice.actions;

export default delegateSlice.reducer;