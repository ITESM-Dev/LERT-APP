import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { api } from './api'
import { expensesReducer } from './expenses'
import { employeesReducer } from "./employees";
import { managersReducer } from "./managers";
import { ICAsReducer } from "./ICAs";
import { userReducer } from "./user";
import { expenseTypesReducer } from "./expenseTypes";
import { bandTypesReducer } from "./bandTypes";
import { extraHoursReducer } from "./extraHours";
import { delegateReducer } from "./delegates";
import { currentPeriodReducer } from "./currentPeriod";

export const store = configureStore({
    reducer: combineReducers({
        // API Handler
        [api.reducerPath]: api.reducer,

        // Common Reducers
        user: userReducer,
        ICAs: ICAsReducer,
        currentPeriod: currentPeriodReducer,
        expenses: expensesReducer, 
        expenseTypes: expenseTypesReducer,
        employees: employeesReducer,
        managers: managersReducer,
        bandTypes: bandTypesReducer,
        extraHours: extraHoursReducer,
        delegate: delegateReducer,
        managerFunctions: managerFunctionsReducer,
    }),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// https://redux-toolkit.js.org/tutorials/rtk-query#add-the-service-to-your-store
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch