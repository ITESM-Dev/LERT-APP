import { RootState, store } from "~store/store";
import { ICAsAdapter } from "./slice";

const ICAsSelector = ICAsAdapter.getSelectors<RootState>((state) => state.ICAs);

export const allICAs = () => ICAsSelector.selectAll(store.getState())

export const ICAsEntities = () => ICAsSelector.selectEntities(store.getState())

export const ICAsIds = () => ICAsSelector.selectIds(store.getState())