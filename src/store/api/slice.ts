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
} from "./managerFunctions";

export type BuilderType = EndpointBuilder<
	BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 
	"BandTypes" | 
	"Delegates"| 
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
		"BandTypes",
		"Delegates",
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

		//ManagerFunctions
		getManagerFunctions: getManagerFunctions(builder),
		updateManagerFunctions: updateManagerFunctions(builder),
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

	// Expenses
	useGetExpensesQuery,
	useCreateExpenseMutation,
	useUpdateExpenseMutation,
	useDeleteExpenseMutation,
	useGetExpenseReportQuery,

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

	//Manager Funtcions
	useGetManagerFunctionsQuery,
	useUpdateManagerFunctionsMutation,
} = api