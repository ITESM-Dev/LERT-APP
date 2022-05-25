// Reducer & Adapter
import extraHourReducer, { extraHoursAdapter } from "./slice";

// Actions
import {
    setExtraHours,
    addExtraHour,
    updateExtraHour, 
    removeExtraHour,
    clearExtraHours,
} from "./slice";

import { ExtraHourType } from "./types";

export {
    extraHourReducer,
    extraHoursAdapter,
    setExtraHours,
    addExtraHour,
    updateExtraHour, 
    removeExtraHour,
    clearExtraHours,
    ExtraHourType,
};