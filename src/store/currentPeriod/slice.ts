import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { CurrentPeriodType } from "./types";

export const CurrentPeriodAdapter = createEntityAdapter<CurrentPeriodType>({
    selectId: (CurrentPeriod) => CurrentPeriod.id,
});

const CurrentPeriod = createSlice({
    name: "currentPeriod",
    initialState: CurrentPeriodAdapter.getInitialState(),
    reducers: {
        setCurrenPeriod(state, action: PayloadAction<CurrentPeriodType[]>) {
            CurrentPeriodAdapter.setMany(state, action.payload);
        },
        addCurrentPeriod(state, action: PayloadAction<CurrentPeriodType>) {
            CurrentPeriodAdapter.addOne(state, action.payload);
        },
        updateCurrentPeriod(state, action: PayloadAction<CurrentPeriodType>) {
            CurrentPeriodAdapter.setOne(state, action.payload);
        },
        removeCurrentPeriod(state, action: PayloadAction<EntityId>) {
            CurrentPeriodAdapter.removeOne(state, action.payload);
        },
        clearCurrentPeriods(state, _) {
            CurrentPeriodAdapter.removeAll(state);
        }
    }
});

export const {
    setCurrenPeriod,
    addCurrentPeriod,
    updateCurrentPeriod,
    removeCurrentPeriod,
    clearCurrentPeriods
} = CurrentPeriod.actions;
export default CurrentPeriod.reducer;