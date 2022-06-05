// Reducer & Adapter
import expensesReducer, { expensesAdapter } from "./slice";

// Actions 
import {
    setAllExpenses,
    addExpense,
    updateExpense,
    removeExpense,
    clearExpenses,
} from './slice'

import { 
    ExpenseType,
    ExpenseYear,
} from "./types";

export {
    expensesReducer,
    expensesAdapter,
    setAllExpenses,
    addExpense,
    updateExpense,
    removeExpense,
    clearExpenses,
    ExpenseType,
    ExpenseYear,
}