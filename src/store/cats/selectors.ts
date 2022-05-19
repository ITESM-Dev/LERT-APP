import { RootState, store } from "~store/store";
import { catsAdapter } from "./slice";

export const catFactsSelectors = catsAdapter.getSelectors<RootState>((state) => state.cats)