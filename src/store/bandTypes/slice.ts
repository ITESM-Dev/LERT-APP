import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ExpenseType } from "~store/expenses";
import { BandTypesType } from "./types";

export const bandTypesAdapter = createEntityAdapter<BandTypesType>({
    selectId: (bandType: BandTypesType) => bandType.id,
});

const bandTypesSlice = createSlice({
    name: "bandTypes",
    initialState: bandTypesAdapter.getInitialState(),
    reducers: {

    },
});

export const {

} = bandTypesSlice.actions;

export default bandTypesSlice.reducer;