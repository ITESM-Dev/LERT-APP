import { RootState, store } from "~store/store";
import { expenseTypesAdapter } from "./slice";

const expenseTypesSelector = expenseTypesAdapter.getSelectors<RootState>((state) => state.expenseTypes);

export const allExpenseTypes = () => expenseTypesSelector.selectAll(store.getState());

export const expenseTypesEntities = () => expenseTypesSelector.selectEntities(store.getState());

export const expenseTypesIds = () => expenseTypesSelector.selectIds(store.getState());