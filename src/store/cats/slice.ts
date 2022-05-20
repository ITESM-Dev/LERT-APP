import { createEntityAdapter, createReducer, createSlice } from "@reduxjs/toolkit";
import { saveCatFacts } from "./thunks";
import { CatFactType } from "./types";

export const catsAdapter = createEntityAdapter({
    selectId: (fact: CatFactType) => fact.id
})

const catsSlice = createSlice({
    name: 'cats',
    initialState: catsAdapter.getInitialState(),
    reducers: {
        addFacts: (state, action) => {
            catsAdapter.addMany(state, action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveCatFacts.fulfilled, (state, action) => {
                catsAdapter.addMany(state, action.payload.data)
                return state;
            })
    }
})

export const { addFacts } = catsSlice.actions;
export default catsSlice.reducer;