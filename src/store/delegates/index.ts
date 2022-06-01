// Reducer & Adapter
import delegateReducer, { delegateAdapter } from "./slice";

// Actions
import {
    setDelegates,
    addDelegate,
    updateDelegate,
    removeDelegate,
    clearDelegates,
} from "./slice";

import { DelegateType } from "./types";

export {
    delegateReducer,
    delegateAdapter,
    setDelegates,
    addDelegate,
    updateDelegate,
    removeDelegate,
    clearDelegates,
    DelegateType,
};