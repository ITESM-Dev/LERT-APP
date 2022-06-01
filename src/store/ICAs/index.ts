// Reducer & Adapter
import ICAsReducer, { ICAsAdapter } from './slice';

// Actions 
import { 
    setICAs,
    addICA,
    updateICA,
    removeICA,
    clearICAs,
} from './slice';

// Types
import { 
    ICAType 
} from './types';

// Selectors
import {
    allICAs,
    ICAsEntities,
    ICAsIds,
} from './selectors'

export {
    ICAsReducer,
    ICAsAdapter,
    setICAs,
    addICA,
    updateICA,
    removeICA,
    clearICAs,
    ICAType,
    allICAs,
    ICAsEntities,
    ICAsIds,
}