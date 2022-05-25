import { RootState, store } from "~store/store";
import { delegateAdapter } from "./slice";

const delegateSelector = delegateAdapter.getSelectors<RootState>((state) => state.delegate);

export const allDelegates = () => delegateSelector.selectAll(store.getState());

export const delegatesEntities = () => delegateSelector.selectEntities(store.getState());

export const delegatesIds = () => delegateSelector.selectIds(store.getState());