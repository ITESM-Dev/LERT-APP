import { RootState, store } from "~store/store";
import { expenseTypesAdapter } from "./slice";

const expenseTypesSelectors = expenseTypesAdapter.getSelectors<RootState>((state) => state.expenseTypes);

export const allExpenses = () => expenseTypesSelectors.selectAll(store.getState());