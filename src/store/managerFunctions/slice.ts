import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ManagerFunctionsType } from "./types";


export const managerFunctionsAdapter = createEntityAdapter<ManagerFunctionsType>({
    selectId: (managerFunction: ManagerFunctionsType) => managerFunction.id,
})

const managerFunctionsSlice = createSlice({
    name: "managerFunctions",
    initialState: managerFunctionsAdapter.getInitialState(),
    reducers: {
        setAllManagerFunctions: (state, action: PayloadAction<ManagerFunctionsType[]>) => {
            managerFunctionsAdapter.setMany(state, action.payload)
        },
    }
})

export const {
    setAllManagerFunctions,
} = managerFunctionsSlice.actions

export default managerFunctionsSlice.reducer;