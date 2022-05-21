import { createEntityAdapter, createSlice } from "@reduxjs/toolkit"
import { ManagerType } from "./types"

export const managersAdapter = createEntityAdapter<ManagerType>({
    selectId: (manager) => manager.id
})

const managersSlice = createSlice({
    name: "managers",
    initialState: managersAdapter.getInitialState(),
    reducers: {
        setAllManagers: (state, action) => {
            managersAdapter.addMany(state, action.payload)
        },
        addManager: (state, action) => {
            managersAdapter.addOne(state, action.payload);
        },
        updateManager: (state, action) => {
            managersAdapter.setOne(state, action.payload);
        },
        removeManager: (state, action) => {
            managersAdapter.removeOne(state, action.payload);
        },
        clearManagers: (state, action) => {
            managersAdapter.removeAll(state);
        }
    }
});

export const {
    setAllManagers,
    addManager,
    updateManager,
    removeManager,
    clearManagers,
} = managersSlice.actions;
export default managersSlice.reducer;