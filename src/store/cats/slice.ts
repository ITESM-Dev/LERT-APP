import { createEntityAdapter, createReducer, createSlice } from "@reduxjs/toolkit";
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
    }
})

export const { addFacts } = catsSlice.actions;
export default catsSlice.reducer;