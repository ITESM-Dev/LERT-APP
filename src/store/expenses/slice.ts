import { createAction, createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
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
        setAllExpenses: (state, action: PayloadAction<ExpenseType[]>) => {
            expensesAdapter.setMany(state, action.payload)
        },
        addExpense: (state, action: PayloadAction<ExpenseType>) => {
            expensesAdapter.addOne(state, action.payload);
        },
        updateExpense: (state, action: PayloadAction<ExpenseType>) => {
            expensesAdapter.upsertOne(state, action.payload);
        },
        removeExpense: (state, action: PayloadAction<EntityId>) => {
            expensesAdapter.removeOne(state, action.payload);
        },
        clearExpenses: (state, _) => {
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

