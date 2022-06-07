import { RootState, store } from "~store/store";
import { managerFunctionsAdapter } from "./slice";


const managerFunctionsSelectors = managerFunctionsAdapter.getSelectors<RootState>((state) => state.ManagerFunctions)

export const allManagerFunctions = () => managerFunctionsSelectors.selectAll(store.getState());