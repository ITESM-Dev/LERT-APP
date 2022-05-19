import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { api } from './api/slice'
import { expensesReducer } from './expenses'
import { CatsReducer } from "./cats";

export const store = configureStore({
    reducer: combineReducers({
        [api.reducerPath]: api.reducer,
        expenses: expensesReducer, 
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