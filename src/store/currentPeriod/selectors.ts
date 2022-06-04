import { RootState, store } from "~store/store";
import { CurrentPeriodAdapter } from "./slice";

const CurrentPeriodSelector = CurrentPeriodAdapter.getSelectors<RootState>((state) => state.CurrentPeriod);

export const allCurrentPeriods = () => CurrentPeriodSelector.selectAll(store.getState());

export const CurrentPeriodEntities = () => CurrentPeriodSelector.selectEntities(store.getState());

export const CurrentPeriodIds = () => CurrentPeriodSelector.selectIds(store.getState());