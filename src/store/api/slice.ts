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

export type BuilderType = EndpointBuilder<BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, "api">

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: 'https://cat-fact.herokuapp.com/' }),
	endpoints: (builder) => ({
		getFacts: getFacts(builder),
	})
})

export const { useGetFactsQuery } = api