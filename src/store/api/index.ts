import { 
    api, 
    
    // User
    useGetUserInfoQuery,

    // Authentication
    useLoginQuery,
    useSignUpQuery, 
    useLogoutQuery,

    // Band Types
    useGetBandTypesQuery,
    useCreateBandTypeMutation,

    // Employees
    useGetManagerICAQuery,
    useGetAvailableResourcesQuery,
    
    // Extra Hours
    useGetExtraHourTypesQuery,
    useCreateExtraHourTypeMutation,

    // ICAs
    useGetICAsQuery,
    useCreateICAMutation,

    // Expenses for Quarter (Recovery)
    useExpensesForQuarterQuery,

    // Expense Types
    useGetExpenseTypesQuery,
    useCreateExpenseTypeMutation,

    // Current Periods
    useGetCurrentPeriodsQuery,
    useCreateCurrentPeriodMutation,
} from "./slice";

import {
    LoginForm,
    SignUpForm,
    LogoutForm,
    BandTypeForm,
    ExtraHourForm,
    ICAForm,
    ExpensesForQuarterForm,
    ExpenseTypeForm,
    CurrentPeriodForm,
    AvailableResource,
    ManagerICA,
} from './types'

export {
    api,

    // User
    useGetUserInfoQuery,

    // Authentication
    LoginForm,
    SignUpForm,
    LogoutForm,
    useLoginQuery,
    useSignUpQuery, 
    useLogoutQuery,

    // Band Types
    BandTypeForm,
    useGetBandTypesQuery,
    useCreateBandTypeMutation,

    // Employees
    AvailableResource,
    ManagerICA,
    useGetManagerICAQuery,
    useGetAvailableResourcesQuery,
    
    // Extra Hours
    ExtraHourForm,
    useGetExtraHourTypesQuery,
    useCreateExtraHourTypeMutation,

    // ICAs
    ICAForm,
    useGetICAsQuery,
    useCreateICAMutation,

    // Expenses for Quarter (Recovery)
    ExpensesForQuarterForm,
    useExpensesForQuarterQuery,

    // Expense Types
    ExpenseTypeForm,
    useGetExpenseTypesQuery,
    useCreateExpenseTypeMutation,

    // Current Periods
    CurrentPeriodForm,
    useGetCurrentPeriodsQuery,
    useCreateCurrentPeriodMutation,

}