import { RootState, store } from "~store/store";
import { employeesAdapter } from "./slice";

const employeesSelector = employeesAdapter.getSelectors<RootState>((state) => state.employees)

export const allEmployees = () => employeesSelector.selectAll(store.getState())

export const employeesEntities = () => employeesSelector.selectEntities(store.getState())

export const employeesIds = () => employeesSelector.selectIds(store.getState())