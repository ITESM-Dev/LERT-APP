// Reducer & Adapter
import managersReducer, { managersAdapter } from './slice'

// Actions
import {
    setAllManagers,
    addManager,
    updateManager,
    removeManager,
    clearManagers,
} from './slice'

// Types
import {
    ManagerType
} from "./types"

// Selectors
import {
    allManagers
} from './selectors'

// Thunks

export {
    managersReducer,
    managersAdapter,
    setAllManagers,
    addManager,
    updateManager,
    removeManager,
    clearManagers,
    ManagerType,
    allManagers
}

