import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { api } from "~store/api";

import { ExtraHourType } from "./types";


export const extraHoursAdapter = createEntityAdapter<ExtraHourType>({
    selectId: (extraHour: ExtraHourType) => extraHour.id,
});

const extraHourSlice = createSlice({
    name: "extraHours",
    initialState: extraHoursAdapter.getInitialState(),
    reducers: {
        setExtraHours: (state, action: PayloadAction<ExtraHourType[]>) => {
            extraHoursAdapter.setMany(state, action.payload)
        },
        addExtraHour: (state, action: PayloadAction<ExtraHourType>) => {
            extraHoursAdapter.addOne(state, action.payload)
        },
        updateExtraHour: (state, action: PayloadAction<ExtraHourType>) => {
            extraHoursAdapter.upsertOne(state, action.payload)
        },
        removeExtraHour: (state, action: PayloadAction<EntityId>) => {
            extraHoursAdapter.removeOne(state, action.payload)
        },
        clearExtraHours: (state, _) => {
            extraHoursAdapter.removeAll(state)
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                api.endpoints.getExtraHourTypes.matchFulfilled,
                (state, { payload }) => {
                    extraHoursAdapter.setMany(state, payload)
                }
            )
            .addMatcher(
                api.endpoints.deleteExtraHourType.matchFulfilled,
                (state, { payload }) => {
                    extraHoursAdapter.removeOne(state, payload)
                }
            )
    }
});

export const {
    setExtraHours,
    addExtraHour,
    updateExtraHour, 
    removeExtraHour,
    clearExtraHours,
} = extraHourSlice.actions;

export default extraHourSlice.reducer;