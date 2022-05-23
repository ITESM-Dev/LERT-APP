// Reducer
import employeesReducer, { employeesAdapter } from './slice';

// Types
import {
    EmployeeType
} from './types'

// Selectors 
import {
    allEmployees,
    employeesEntities,
    employeesIds,
} from './selectors'

export {
    employeesReducer,
    employeesAdapter,
    EmployeeType,
    allEmployees,
    employeesEntities,
    employeesIds,
}