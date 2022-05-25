import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { ExpenseType } from "~store/expenses";
import { BandTypesType } from "./types";

export const bandTypesAdapter = createEntityAdapter<BandTypesType>({
    selectId: (bandType: BandTypesType) => bandType.id,
});

const bandTypesSlice = createSlice({
    name: "bandTypes",
    initialState: bandTypesAdapter.getInitialState(),
    reducers: {
        setBandTypes: (state, action: PayloadAction<BandTypesType[]>) => {
            bandTypesAdapter.addMany(state, action.payload)
        },
        addBandType: (state, action: PayloadAction<BandTypesType>) => {
            bandTypesAdapter.addOne(state, action.payload)
        },
        updateBandType: (state, action: PayloadAction<BandTypesType>) => {
            bandTypesAdapter.upsertOne(state, action.payload)
        },
        removeBandType: (state, action: PayloadAction<EntityId>) => {
            bandTypesAdapter.removeOne(state, action.payload)
        },
        clearBandTypes: (state, _) => {
            bandTypesAdapter.removeAll(state);
        },
    },
});

export const {
    setBandTypes,
    addBandType,
    updateBandType,
    removeBandType,
    clearBandTypes,
} = bandTypesSlice.actions;

export default bandTypesSlice.reducer;