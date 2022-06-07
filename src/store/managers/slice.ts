import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit"
import { api } from "~store/api";
import { ManagerType } from "./types"

export const managersAdapter = createEntityAdapter<ManagerType>({
    selectId: (manager) => manager.id
})

const managersSlice = createSlice({
    name: "managers",
    initialState: managersAdapter.getInitialState(),
    reducers: {
        setAllManagers: (state, action: PayloadAction<ManagerType[]>) => {
            managersAdapter.setMany(state, action.payload)
        },
        addManager: (state, action: PayloadAction<ManagerType>) => {
            managersAdapter.addOne(state, action.payload);
        },
        updateManager: (state, action: PayloadAction<ManagerType>) => {
            managersAdapter.setOne(state, action.payload);
        },
        removeManager: (state, action: PayloadAction<EntityId>) => {
            managersAdapter.removeOne(state, action.payload);
        },
        clearManagers: (state, _) => {
            managersAdapter.removeAll(state);
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                api.endpoints.getManagerFunctions.matchFulfilled,
                (state, { payload }) => {
                    managersAdapter.setMany(state, payload);
                }
            )
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