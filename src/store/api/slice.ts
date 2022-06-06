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
} from "./bandTypes"

import { 
	getExtraHourTypes,
	createExtraHourType, 
} from "./extraHours"

import { 
	getICAs,
	createICA, 
} from "./ICAs"

import { 
	getExpenseTypes,
	createExpenseType, 
} from "./expenseTypes"

import { 
	expensesForQuarter 
} from "./recovery"
import { 
	getExpenses,
	createExpense, 
} from "./expenses"

import { 
	getCurrentPeriods, 
	createCurrentPeriod, 
} from "./currentPeriod"

import {
	getManagerICA,
	getAvailableResources,
} from './employees'

export type BuilderType = EndpointBuilder<
	BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 
	"BandTypes" | "Delegates"| "Employees" | "Expenses" | "ExpenseTypes" | "ExtraHours" | "ICAs" | "Managers" | "CurrentPeriod", 
	"api"
>

export const validatePostStatus = (response: Response) => 
	response.status === 201

export const validateGetStatus = (response: Response) => 
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
		"CurrentPeriod"
	],
	endpoints: (builder) => ({
		
		// User
		getUserInfo: getUserInfo(builder),
		
		// Authentication
		login: login(builder),
		signUp: signUp(builder),
		logout: logout(builder),

		// Band Types
		createBandType: createBandType(builder),
		getBandTypes: getBandTypes(builder),
		
		// Employees
		getManagerICA: getManagerICA(builder),
		getAvailableResources: getAvailableResources(builder),

		// Extra Hours
		getExtraHourTypes: getExtraHourTypes(builder), 
		createExtraHourType: createExtraHourType(builder),

		// ICAs
		getICAs: getICAs(builder),
		createICA: createICA(builder),

		// Expenses
		getExpenses: getExpenses(builder),
		createExpense: createExpense(builder),

		// Expenses For Quarter (Recovery)
		expensesForQuarter: expensesForQuarter(builder),

		// Expense Types
		getExpenseTypes: getExpenseTypes(builder),
		createExpenseType: createExpenseType(builder),

		// CurrentPeriod
		getCurrentPeriods: getCurrentPeriods(builder),
		createCurrentPeriod: createCurrentPeriod(builder),
	}),
})

export const {
	
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

	// Expenses
	useGetExpensesQuery,
	useCreateExpenseMutation,

	// Expenses For Quarter (Recovery)
	useExpensesForQuarterQuery,
	
	// Expense Types
	useGetExpenseTypesQuery,
	useCreateExpenseTypeMutation,

	// Current Period
	useGetCurrentPeriodsQuery,
	useCreateCurrentPeriodMutation,
} = api