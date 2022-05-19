import { RootState, store } from "~store/store";
import { catsAdapter } from "./slice";

const catFactsSelectors = catsAdapter.getSelectors<RootState>((state) => state.cats)

export const allCatFacts = catFactsSelectors.selectAll(store.getState())