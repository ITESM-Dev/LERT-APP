import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { api } from "~store/api";
import { ICAType } from "./types";

export const ICAsAdapter = createEntityAdapter<ICAType>({
    selectId: (ICA) => ICA.id,
});

const ICAs = createSlice({
    name: "ICAs",
    initialState: ICAsAdapter.getInitialState(),
    reducers: {
        setICAs(state, action: PayloadAction<ICAType[]>) {
            ICAsAdapter.setMany(state, action.payload);
        },
        addICA(state, action: PayloadAction<ICAType>) {
            ICAsAdapter.addOne(state, action.payload);
        },
        updateICA(state, action: PayloadAction<ICAType>) {
            ICAsAdapter.setOne(state, action.payload);
        },
        removeICA(state, action: PayloadAction<EntityId>) {
            ICAsAdapter.removeOne(state, action.payload);
        },
        clearICAs(state, _) {
            ICAsAdapter.removeAll(state);
        }
    },
    extraReducers: (builder) => {
        builder 
            .addMatcher(
                api.endpoints.getICAs.matchFulfilled,
                (state, { payload }) => {
                    ICAsAdapter.setMany(state, payload);
                }
            )
    }
});

export const { 
    setICAs,
    addICA,
    updateICA,
    removeICA,
    clearICAs
} = ICAs.actions;
export default ICAs.reducer;