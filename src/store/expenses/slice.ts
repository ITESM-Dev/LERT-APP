import { createAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import produce from "immer";

import { ExpenseType } from "./types";

export const expensesAdapter = createEntityAdapter<ExpenseType>({
    selectId: (expense: ExpenseType) => expense.id,
})

/*
    expenses: {
        entities: {
            "id": {},
            "id": {}
        }, 
        ids: [id, id, id]
    }
*/

const expensesSlice = createSlice({
    name: "expenses",
    initialState: expensesAdapter.getInitialState(),
    reducers: {
        setAllExpenses: (state, action) => {
            expensesAdapter.addMany(state, action.payload)
        },
        addExpense: (state, action) => {
            expensesAdapter.addOne(state, action.payload);
        },
        updateExpense: (state, action) => {
            expensesAdapter.setOne(state, action.payload);
        },
        removeExpense: (state, action) => {
            expensesAdapter.removeOne(state, action.payload);
        },
        clearExpenses: (state, action) => {
            expensesAdapter.removeAll(state);
        }
    },
});

export const {
    setAllExpenses,
    addExpense,
    updateExpense,
    removeExpense,
    clearExpenses,
} = expensesSlice.actions
export default expensesSlice.reducer;

