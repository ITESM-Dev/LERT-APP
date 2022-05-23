import { RootState, store } from "~store/store";
import { managersAdapter } from "./slice";

const managersSelectors = managersAdapter.getSelectors<RootState>((state) => state.managers);

export const allManagers = () => managersSelectors.selectAll(store.getState());