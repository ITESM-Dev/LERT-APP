import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions"

import { 
	createApi, 
	BaseQueryFn, 
	FetchArgs, 
	fetchBaseQuery, 
	FetchBaseQueryError, 
	FetchBaseQueryMeta 
} from "@reduxjs/toolkit/dist/query/react"

import { API_URL } from "~utils/constants"
import { RootState } from "~store/store"

import { 
	login, 
	logout, 
	signUp 
} from "./authentication"

import { 
	getUserInfo 
} from "./user"

import { 
	getBandTypes,
	createBandType,
	updateBandType, 
	deleteBandType,
} from "./bandTypes"

import { 
	getExtraHourTypes,
	createExtraHourType, 
	updateExtraHourType,
	deleteExtraHourType, 
} from "./extraHours"

import { 
	getICAs,
	createICA, 
	updateICA,
	deleteICA,
} from "./ICAs"

import {
	getManagersIcaAdmin,
	assignTokenAuth,
	loginICAAdmin,
} from './icaadmin'

import { 
	getExpenseTypes,
	createExpenseType, 
	updateExpenseType,
	deleteExpenseType
} from "./expenseTypes"

import { 
	expensesForQuarter 
} from "./recovery"
import { 
	getExpenses,
	createExpense, 
	updateExpense,
	deleteExpense,
	getExpenseReport,
} from "./expenses"

import { 
	getCurrentPeriods, 
	createCurrentPeriod,
	updateCurrentPeriod,
	deleteCurrentPeriod,
} from "./currentPeriod"

import {
	getManagerICA,
	getAvailableResources,
	getResources,
	assignResourceToManager,
} from './employees'

import { 
	getAllUsers,
	updateUserRole,
} from "./userRoles"

import {
	updateManagerFunctions,
	getManagerFunctions,
	setOPManager,
	getManagersNoOpManager,
} from "./managerFunctions";

import {
	getManagersAndIcaAdmins,
	getIcaAdmins,
	opAssignIcaAdminManager,
	setIcaAdmin,
	getAvailableDelegates,
	getIcaAdminManager,
	getManagersNoIcaAdmins,
} from "./delegate"

export type BuilderType = EndpointBuilder<
	BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 
	"User" |
	"BandTypes" | 
	"Delegate"| 
	"Employees" | 
	"Expenses" | 
	"ExpenseTypes" | 
	"ExtraHours" | 
	"ICAs" | 
	"Managers" | 
	"CurrentPeriod" |
	"UserRoles" |
	"ManagerFunctions", 
	"api"
>

export const validateGetStatus = (response: Response) => 
	response.status === 200

export const validatePostStatus = (response: Response) => 
	response.status === 201

export const validateUpdateStatus = (response: Response) => 
	response.status === 200

export const validateDeleteStatus = (response: Response) => 
	response.status === 200

export const api = createApi({
	baseQuery: fetchBaseQuery({ 
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			headers.set("token", (getState() as RootState).user.token)
			headers.set("mail", (getState() as RootState).user.mail)
			return headers
		}
	}),
	tagTypes: [
		"User",
		"BandTypes",
		"Delegate",
		"Employees",
		"Expenses",
		"ExpenseTypes",
		"ExtraHours",
		"ICAs",
		"Managers",
		"CurrentPeriod",
		"UserRoles",
		"ManagerFunctions",
	],
	endpoints: (builder) => ({
		
		// User
		getUserInfo: getUserInfo(builder),

		// User Roles
		getAllUsers: getAllUsers(builder),
		updateUserRole: updateUserRole(builder),
		
		// Authentication
		login: login(builder),
		signUp: signUp(builder),
		logout: logout(builder),

		// Band Types
		getBandTypes: getBandTypes(builder),
		createBandType: createBandType(builder),
		updateBandType: updateBandType(builder),
		deleteBandType: deleteBandType(builder),
		
		// Employees
		getManagerICA: getManagerICA(builder),
		getAvailableResources: getAvailableResources(builder),
		getResources: getResources(builder),
		assignResourceToManager: assignResourceToManager(builder),

		// Extra Hours
		getExtraHourTypes: getExtraHourTypes(builder), 
		createExtraHourType: createExtraHourType(builder),
		updateExtraHourType: updateExtraHourType(builder),
		deleteExtraHourType: deleteExtraHourType(builder),

		// ICAs
		getICAs: getICAs(builder),
		createICA: createICA(builder),
		updateICA: updateICA(builder),
		deleteICA: deleteICA(builder),

		// ICA Admin
		getManagersIcaAdmin: getManagersIcaAdmin(builder),
		assignTokenAuth: assignTokenAuth(builder),
		loginICAAdmin: loginICAAdmin(builder),

		// Expenses
		getExpenses: getExpenses(builder),
		createExpense: createExpense(builder),
		updateExpense: updateExpense(builder),
		deleteExpense: deleteExpense(builder),
		getExpenseReport: getExpenseReport(builder),

		// Expenses For Quarter (Recovery)
		expensesForQuarter: expensesForQuarter(builder),

		// Expense Types
		getExpenseTypes: getExpenseTypes(builder),
		createExpenseType: createExpenseType(builder),
		updateExpenseType: updateExpenseType(builder),
		deleteExpenseType: deleteExpenseType(builder),

		// CurrentPeriod
		getCurrentPeriods: getCurrentPeriods(builder),
		createCurrentPeriod: createCurrentPeriod(builder),
		updateCurrentPeriod: updateCurrentPeriod(builder),
		deleteCurrentPeriod: deleteCurrentPeriod(builder),

		//ManagerFunctions
		getManagerFunctions: getManagerFunctions(builder),
		updateManagerFunctions: updateManagerFunctions(builder),
		setOPManager: setOPManager(builder),
		getManagersNoOpManager: getManagersNoOpManager(builder),

		// Delegate
		getManagersAndIcaAdmins: getManagersAndIcaAdmins(builder),
		getIcaAdmins: getIcaAdmins(builder),
		opAssignIcaAdminManager: opAssignIcaAdminManager(builder),
		setIcaAdmin: setIcaAdmin(builder),
		getAvailableDelegates: getAvailableDelegates(builder),
		getIcaAdminManager: getIcaAdminManager(builder),
		getManagersNoIcaAdmins: getManagersNoIcaAdmins(builder),
	}),
})

export const {
	
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

	// ICA Admin
	useGetManagersIcaAdminQuery,
	useAssignTokenAuthMutation,
	useLoginICAAdminMutation,

	// Expenses
	useGetExpensesQuery,
	useCreateExpenseMutation,
	useUpdateExpenseMutation,
	useDeleteExpenseMutation,
	useGetExpenseReportMutation,

	// Expenses For Quarter (Recovery)
	useExpensesForQuarterQuery,
	
	// Expense Types
	useGetExpenseTypesQuery,
	useCreateExpenseTypeMutation,
	useUpdateExpenseTypeMutation,
	useDeleteExpenseTypeMutation,

	// Current Period
	useGetCurrentPeriodsQuery,
	useCreateCurrentPeriodMutation,
	useUpdateCurrentPeriodMutation,
	useDeleteCurrentPeriodMutation,

	//Manager Funtcions
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
	useGetIcaAdminManagerQuery,
	useGetManagersNoIcaAdminsQuery,
} = api