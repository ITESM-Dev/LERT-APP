import { createSelector } from "@reduxjs/toolkit";
import { RootState, store } from "~store/store";
import { expensesAdapter } from "./slice";

const expensesSelectors = expensesAdapter.getSelectors<RootState>((state) => state.expenses)

// (state) => state.slice

export const allExpenses = () => expensesSelectors.selectAll(store.getState())