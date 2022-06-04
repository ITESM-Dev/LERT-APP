import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { api } from "~store/api";

import { ExpenseTypesType } from "./types";

export const expenseTypesAdapter = createEntityAdapter<ExpenseTypesType>({
    selectId: (expenseType: ExpenseTypesType) => expenseType.id,
})

const expenseTypesSlice = createSlice({
    name: "expenseTypes",
    initialState: expenseTypesAdapter.getInitialState(),
    reducers: {
        setAllExpenseTypes: (state, action: PayloadAction<ExpenseTypesType[]>) => {
            expenseTypesAdapter.setMany(state, action.payload)
        },
        addExpenseType: (state, action: PayloadAction<ExpenseTypesType>) => {
            expenseTypesAdapter.addOne(state, action.payload);
        },
        updateExpenseType: (state, action: PayloadAction<ExpenseTypesType>) => {
            expenseTypesAdapter.upsertOne(state, action.payload);
        },
        removeExpenseType: (state, action: PayloadAction<EntityId>) => {
            expenseTypesAdapter.removeOne(state, action.payload);
        },
        clearExpenseTypes: (state, _) => {
            expenseTypesAdapter.removeAll(state);
        } 
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                api.endpoints.getExpenseTypes.matchFulfilled,
                (state, { payload }) => {
                    expenseTypesAdapter.setMany(state, payload)
                }
            )
    }
});

export const {
    setAllExpenseTypes,
    addExpenseType,
    updateExpenseType,
    removeExpenseType,
    clearExpenseTypes,
} = expenseTypesSlice.actions

export default expenseTypesSlice.reducer;