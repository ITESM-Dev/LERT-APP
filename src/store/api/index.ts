import { 
    api, 
    
    // User
    useGetUserInfoQuery,

    // User Roles
	useUpdateUserRoleMutation,

    // Authentication
    useLoginQuery,
    useSignUpQuery, 
    useLogoutQuery,

    // Band Types
    useGetBandTypesQuery,
    useCreateBandTypeMutation,
    useUpdateBandTypeMutation,
	useDeleteBandTypeMutation,

    // Employees
    useGetManagerICAQuery,
    useGetAvailableResourcesQuery,
    
    // Extra Hours
    useGetExtraHourTypesQuery,
    useCreateExtraHourTypeMutation,

    // ICAs
    useGetICAsQuery,
    useCreateICAMutation,

    // Expense,
    useGetExpensesQuery,
    useCreateExpenseMutation,

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
    UserRoleForm,
    LoginForm,
    SignUpForm,
    LogoutForm,
    BandTypeForm,
    ExtraHourForm,
    ICAForm,
    ExpenseForm,
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

    // User Roles
    UserRoleForm,
	useUpdateUserRoleMutation,

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
    useUpdateBandTypeMutation,
	useDeleteBandTypeMutation,

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

    // Expense,
    ExpenseForm,
    useGetExpensesQuery,
    useCreateExpenseMutation,

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