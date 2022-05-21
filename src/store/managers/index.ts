// Reducer & Adapter
import ManagersReducer, { managersAdapter } from './slice'

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
    ManagersReducer,
    managersAdapter,
    setAllManagers,
    addManager,
    updateManager,
    removeManager,
    clearManagers,
    ManagerType,
    allManagers
}

