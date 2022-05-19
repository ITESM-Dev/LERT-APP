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

export {
    expensesReducer,
    expensesAdapter,
    setAllExpenses,
    addExpense,
    updateExpense,
    removeExpense,
    clearExpenses,
}