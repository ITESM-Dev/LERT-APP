import { RootState, store } from "~store/store";
import { bandTypesAdapter } from "./slice";

const bandTypesSelector = bandTypesAdapter.getSelectors<RootState>((state) => state.bandTypes);

export const allBandTypes = () => bandTypesSelector.selectAll(store.getState());

export const bandTypesEntities = () => bandTypesSelector.selectEntities(store.getState());

export const bandTypesIds = () => bandTypesSelector.selectIds(store.getState());