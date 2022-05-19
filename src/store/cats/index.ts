// Reducer & Adapter
import CatsReducer, { catsAdapter } from "./slice"

// Actions
import {

} from './actions'

// Selectors
import {
    allCatFacts
} from './selectors'

// Types
import { 
    CatFactType 
} from "./types"

export {
    CatsReducer,
    catsAdapter,
    allCatFacts,
    CatFactType,
}