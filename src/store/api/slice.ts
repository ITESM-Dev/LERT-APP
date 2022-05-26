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
import { getUserInfo } from "./user"

export type BuilderType = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, "api">

export const api = createApi({
	baseQuery: fetchBaseQuery({ 
		baseUrl: 'https://8d2c5050-cba1-4e25-9d34-f4c69d3a4a02.mock.pstmn.io/',
	}),
	endpoints: (builder) => ({
		getFacts: getFacts(builder),
		getUserInfo: getUserInfo(builder),
	})
})

export const { 
	useGetFactsQuery,
	useGetUserInfoQuery,
} = api