import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { ExpenseTypesType } from "./types";

export const expenseTypesAdapter = createEntityAdapter<ExpenseTypesType>({
    selectId: (expenseType: ExpenseTypesType) => expenseType.id,
})

const expenseTypesSlice = createSlice({
    name: "expenseTypes",
    initialState: expenseTypesAdapter.getInitialState(),
    reducers: {
        
    },
});

export const {

} = expenseTypesSlice.actions

export default expenseTypesSlice.reducer;