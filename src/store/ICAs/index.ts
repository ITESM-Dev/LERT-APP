// Reducer & Adapter
import ICAsReducer, { ICAsAdapter } from './slice';

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
    ICAType,
    allICAs,
    ICAsEntities,
    ICAsIds,
}