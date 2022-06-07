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
    useGetResourcesQuery,
	useAssignResourceToManagerMutation,
    
    // Extra Hours
    useGetExtraHourTypesQuery,
    useCreateExtraHourTypeMutation,
    useUpdateExtraHourTypeMutation,
	useDeleteExtraHourTypeMutation,

    // ICAs
    useGetICAsQuery,
    useCreateICAMutation,
    useUpdateICAMutation,
    useDeleteICAMutation,

    // Expense,
    useGetExpensesQuery,
    useCreateExpenseMutation,
    useUpdateExpenseMutation,
	useDeleteExpenseMutation,

    // Expenses for Quarter (Recovery)
    useExpensesForQuarterQuery,

    // Expense Types
    useGetExpenseTypesQuery,
    useCreateExpenseTypeMutation,
    useUpdateExpenseTypeMutation,
	useDeleteExpenseTypeMutation,

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
    EmployeeForm,
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
    EmployeeForm,
    useGetManagerICAQuery,
    useGetAvailableResourcesQuery,
    useGetResourcesQuery,
	useAssignResourceToManagerMutation,
    
    // Extra Hours
    ExtraHourForm,
    useGetExtraHourTypesQuery,
    useCreateExtraHourTypeMutation,
    useUpdateExtraHourTypeMutation,
	useDeleteExtraHourTypeMutation,

    // ICAs
    ICAForm,
    useGetICAsQuery,
    useCreateICAMutation,

    // Expense,
    ExpenseForm,
    useGetExpensesQuery,
    useCreateExpenseMutation,
    useUpdateExpenseMutation,
	useDeleteExpenseMutation,

    // Expenses for Quarter (Recovery)
    ExpensesForQuarterForm,
    useExpensesForQuarterQuery,

    // Expense Types
    ExpenseTypeForm,
    useGetExpenseTypesQuery,
    useCreateExpenseTypeMutation,
    useUpdateExpenseTypeMutation,
	useDeleteExpenseTypeMutation,

    // Current Periods
    CurrentPeriodForm,
    useGetCurrentPeriodsQuery,
    useCreateCurrentPeriodMutation,

}