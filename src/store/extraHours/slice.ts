import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { ExtraHourType } from "./types";


export const extraHoursAdapter = createEntityAdapter<ExtraHourType>({
    selectId: (extraHour: ExtraHourType) => extraHour.id,
});

const extraHourSlice = createSlice({
    name: "extraHours",
    initialState: extraHoursAdapter.getInitialState(),
    reducers: {

    },
});

export const {

} = extraHourSlice.actions;

export default extraHourSlice.reducer;