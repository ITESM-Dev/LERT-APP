// Reducer
import employeesReducer, { employeesAdapter } from './slice';

// Actions
import {
    setEmployees,
    addEmployee,
    updateEmployee,
    removeEmployee,
    clearEmployees,
} from './slice'

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
    setEmployees,
    addEmployee,
    updateEmployee,
    removeEmployee,
    clearEmployees,
    EmployeeType,
    allEmployees,
    employeesEntities,
    employeesIds,
}