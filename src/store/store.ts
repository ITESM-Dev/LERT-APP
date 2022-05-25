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

import { CatsReducer } from "./cats";

export const store = configureStore({
    reducer: combineReducers({
        // API Handler
        [api.reducerPath]: api.reducer,

        // Common Reducers
        expenses: expensesReducer, 
        employees: employeesReducer,
        managers: managersReducer,
        ICAs: ICAsReducer,
        user: userReducer,
        expenseTypes: expenseTypesReducer,
        bandTypes: bandTypesReducer,
        extraHours: extraHoursReducer,
        delegate: delegateReducer,

        // Dummy example reducer 
        /** @todo erase at the end of the project */
        cats: CatsReducer
    }),
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// https://redux-toolkit.js.org/tutorials/rtk-query#add-the-service-to-your-store
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch