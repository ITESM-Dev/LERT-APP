import { RootState, store } from "~store/store";
import { extraHoursAdapter } from "./slice";

const extraHoursSelector = extraHoursAdapter.getSelectors<RootState>((state) => state.extraHours);

export const allExtraHours = () => extraHoursSelector.selectAll(store.getState());

export const extraHoursEntities = () => extraHoursSelector.selectEntities(store.getState());

export const extraHoursIds = () => extraHoursSelector.selectIds(store.getState());