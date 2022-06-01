import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { DelegateType } from "./types";

export const delegateAdapter = createEntityAdapter<DelegateType>({
    selectId: (delegate: DelegateType) => delegate.id,
});

const delegateSlice = createSlice({
    name: "delegate",
    initialState: delegateAdapter.getInitialState(),
    reducers: {
        setDelegates: (state, action: PayloadAction<DelegateType[]>) => {
            delegateAdapter.setMany(state, action.payload);
        },
        addDelegate: (state, action: PayloadAction<DelegateType>) => {
            delegateAdapter.addOne(state, action.payload);
        },
        updateDelegate: (state, action: PayloadAction<DelegateType>) => {
            delegateAdapter.upsertOne(state, action.payload);
        },
        removeDelegate: (state, action: PayloadAction<EntityId>) => {
            delegateAdapter.removeOne(state, action.payload);
        },
        clearDelegates: (state, _) => {
            delegateAdapter.removeAll(state);
        }
    },
});

export const {
    setDelegates,
    addDelegate,
    updateDelegate,
    removeDelegate,
    clearDelegates,
} = delegateSlice.actions;

export default delegateSlice.reducer;