import { 
    api, 
    
    // User
    useGetUserInfoQuery,

    // User Roles
    useGetAllUsersQuery,
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

    // Ica Admin
    useGetManagersIcaAdminQuery,

    // Expense,
    useGetExpensesQuery,
    useCreateExpenseMutation,
    useUpdateExpenseMutation,
	useDeleteExpenseMutation,
    useGetExpenseReportQuery,

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
    useDeleteCurrentPeriodMutation,
    useUpdateCurrentPeriodMutation,

    // Manager Functions
    useGetManagerFunctionsQuery,
    useUpdateManagerFunctionsMutation,
    useSetOPManagerMutation,
    useGetManagersNoOpManagerQuery,

    // Delegate
    useGetManagersAndIcaAdminsQuery,
	useGetIcaAdminsQuery,
	useOpAssignIcaAdminManagerMutation,
	useSetIcaAdminMutation,
	useGetAvailableDelegatesQuery,
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
    ExpenseReportForm,
    ManagerIcaAdmin,
} from './types'

export {
    api,

    // User
    useGetUserInfoQuery,

    // User Roles
    UserRoleForm,
    useGetAllUsersQuery,
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
    useDeleteICAMutation,
    useUpdateICAMutation,

    // Ica Admin
    ManagerIcaAdmin,
    useGetManagersIcaAdminQuery,

    // Expense,
    ExpenseForm,
    ExpenseReportForm,
    useGetExpensesQuery,
    useCreateExpenseMutation,
    useUpdateExpenseMutation,
	useDeleteExpenseMutation,
    useGetExpenseReportQuery,

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
    useDeleteCurrentPeriodMutation,
    useUpdateCurrentPeriodMutation,

    // Manager functions
    useGetManagerFunctionsQuery,
    useUpdateManagerFunctionsMutation,
    useSetOPManagerMutation,
    useGetManagersNoOpManagerQuery,
    // Delegate
    useGetManagersAndIcaAdminsQuery,
	useGetIcaAdminsQuery,
	useOpAssignIcaAdminManagerMutation,
	useSetIcaAdminMutation,
	useGetAvailableDelegatesQuery,
}