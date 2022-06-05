import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions"

import { 
	createApi, 
	BaseQueryFn, 
	FetchArgs, 
	fetchBaseQuery, 
	FetchBaseQueryError, 
	FetchBaseQueryMeta 
} from "@reduxjs/toolkit/dist/query/react"

import { 
	login, 
	logout, 
	signUp 
} from "./authentication"

import { 
	getUserInfo 
} from "./user"

import { API_URL } from "~utils/constants"
import { RootState } from "~store/store"
import { 
	getBandTypes,
	createBandType, 
} from "./bandTypes"
import { 
	getExtraHourTypes,
	createExtraHourType, 
} from "./extraHours"
import { 
	createICA,
} from "./ICAs"
import { 
	getExpenseTypes,
	createExpenseType, 
} from "./expenseTypes"
import { createCurrentPeriod, getCurrentPeriods } from "./currentPeriod"
import { expensesForQuarter } from "./recovery"

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
		

		// Extra Hours
		getExtraHourTypes: getExtraHourTypes(builder), 
		createExtraHourType: createExtraHourType(builder),

		// ICAs
		createICA: createICA(builder),

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

	// Extra Hours
	useGetExtraHourTypesQuery,
	useCreateExtraHourTypeMutation,

	// ICAs
	useCreateICAMutation,

	// Expenses For Quarter (Recovery)
	useExpensesForQuarterQuery,
	
	// Expense Types
	useGetExpenseTypesQuery,
	useCreateExpenseTypeMutation,

	// Current Period
	useGetCurrentPeriodsQuery,
	useCreateCurrentPeriodMutation,
} = api