import { BuilderType, validateGetStatus, validatePostStatus } from "./slice";
import { CurrentPeriodForm } from "./types";
import { CurrentPeriodType } from "~store/currentPeriod";


export const createCurrentPeriod = (builder: BuilderType) => (
    builder.mutation<void, CurrentPeriodForm>({
        query: (currentPeriodForm: CurrentPeriodForm) => ({
            url: "createCurrent",
            method: "POST",
            body: currentPeriodForm,
            responseHandler: "json",
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["CurrentPeriod"],
    })
)

export const getCurrentPeriods = (builder: BuilderType) => (
    builder.query<CurrentPeriodType[], void>({
        query: () => ({
            url: "getCurrentPeriods", // not sure if it is in plural
            validateStatus: validateGetStatus,
        }),
        providesTags: ["CurrentPeriod"], //maybe change this tag to plural
        transformResponse: (response) => {
            const currentPeriodAPI = response as CurrentPeriodType[]

            const currentPeriods = currentPeriodAPI.map(item => ({
                quarter: item.quarter,
                year: item.year,
                key: item.key,
                status: item.status,
                id: item.id
            }))

            return currentPeriods;
        }
    })
)