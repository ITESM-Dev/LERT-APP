// Reducer & Adapter
import extraHoursReducer, { extraHoursAdapter } from "./slice";

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
    extraHoursReducer,
    extraHoursAdapter,
    setExtraHours,
    addExtraHour,
    updateExtraHour, 
    removeExtraHour,
    clearExtraHours,
    ExtraHourType,
};