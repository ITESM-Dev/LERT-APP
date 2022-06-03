import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions"

import { 
	createApi, 
	BaseQueryFn, 
	FetchArgs, 
	fetchBaseQuery, 
	FetchBaseQueryError, 
	FetchBaseQueryMeta 
} from "@reduxjs/toolkit/dist/query/react"

import { getFacts } from "./cats"

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
import { createBandType, getBandTypes } from "./bandTypes"
import { createExtraHourType } from "./extraHours"

export type BuilderType = EndpointBuilder<
	BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 
	"BandTypes" | "Delegates"| "Employees" | "Expenses" | "ExpenseTypes" | "ExtraHours" | "ICAs" | "Managers", 
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
	],
	endpoints: (builder) => ({
		getFacts: getFacts(builder),
		
		// Authentication
		login: login(builder),
		signUp: signUp(builder),
		logout: logout(builder),

		// Band Types
		createBandType: createBandType(builder),
		getBandTypes: getBandTypes(builder),
		
		// User
		getUserInfo: getUserInfo(builder),

		// Extra Hours
		createExtraHourType: createExtraHourType(builder)
	}),
})

export const { 
	useGetFactsQuery,
	
	// Authentication
	useLoginQuery,
	useSignUpQuery,
	useLogoutQuery,

	// Band Types
	useCreateBandTypeMutation,
	useGetBandTypesQuery,
	
	// User
	useGetUserInfoQuery,

	// Extra Hours
	useCreateExtraHourTypeMutation,
	
} = api