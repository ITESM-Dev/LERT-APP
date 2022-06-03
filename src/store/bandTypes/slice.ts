import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { api } from "~store/api";
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
            bandTypesAdapter.setMany(state, action.payload)
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
    extraReducers: (builder) => {
        builder
            .addMatcher(
                api.endpoints.getBandTypes.matchFulfilled,
                (state, { payload }) => {
                    bandTypesAdapter.setMany(state, payload)
                }
            )
    }
});

export const {
    setBandTypes,
    addBandType,
    updateBandType,
    removeBandType,
    clearBandTypes,
} = bandTypesSlice.actions;

export default bandTypesSlice.reducer;