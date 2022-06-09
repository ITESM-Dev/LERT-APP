import { BuilderType, validateDeleteStatus, validateGetStatus, validatePostStatus, validateUpdateStatus } from "./slice";
import { CurrentPeriodForm } from "./types";
import { CurrentPeriodType } from "~store/currentPeriod";


export const createCurrentPeriod = (builder: BuilderType) => (
    builder.mutation<void, CurrentPeriodForm>({
        query: (currentPeriodForm: CurrentPeriodForm) => ({
            url: "createCurrentPeriod",
            method: "POST",
            body: currentPeriodForm,
            responseHandler: "json",
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["CurrentPeriod"],
    })
)

export const updateCurrentPeriod = (builder: BuilderType) => (
    builder.mutation<string, CurrentPeriodForm>({
        query: (currentPeriodForm) => ({
            url: "updateCurrentPeriod",
            method: "POST",
            body: currentPeriodForm,
            responseHandler: 'text',
            validateStatus: validateUpdateStatus
        }),
        invalidatesTags: ["CurrentPeriod"]
    })
)

export const deleteCurrentPeriod = (builder: BuilderType) => (
    builder.mutation<void, string>({
        query: (id) => ({
            url: "deleteCurrentPeriod",
            method: "POST",
            body: { id },
            validateStatus: validateDeleteStatus
        }),
        invalidatesTags: ["CurrentPeriod"]
    })
)

export const getCurrentPeriods = (builder: BuilderType) => (
    builder.query<CurrentPeriodType[], void>({
        query: () => ({
            url: "getCurrentPeriods", // not sure if it is in plural
            validateStatus: validateGetStatus,
        }),
        providesTags: ["CurrentPeriod"], //maybe change this tag to plural
        transformResponse: (response: any[]) => {
            const currentPeriodAPI = response

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