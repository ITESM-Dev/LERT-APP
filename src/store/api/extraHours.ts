import { ExtraHourType } from "~store/extraHours";
import { BuilderType, validateDeleteStatus, validateGetStatus, validatePostStatus, validateUpdateStatus } from "./slice";
import { ExtraHourForm } from "./types";

export const getExtraHourTypes = (builder: BuilderType) => (
    builder.query<ExtraHourType[], void>({
        query: () => ({
            url: 'getHourTypes',
            validateStatus: validateGetStatus
        }),
        providesTags: ["ExtraHours"],
        transformResponse: (response: Array<any>) => {
            const extraHours: ExtraHourType[] = response.map(item => ({
                type: item.type,
                band: item.band,
                country: item.country,
                rate: item.rate,
                dateToStart: item.dateToStart,
                dateToFinish: item.dateToFinish,
                id: item.id,
            } as ExtraHourType))
            return extraHours;
        }
    })
)

export const createExtraHourType = (builder: BuilderType) => (
    builder.mutation<string, ExtraHourForm>({
        query: (extraHourForm: ExtraHourForm) => ({
            url: 'createHourType',
            method: 'POST',
            body: extraHourForm,
            validateStatus: validatePostStatus,
        }),
        invalidatesTags: ["ExtraHours"],
        transformResponse: (response: any) => {
            return response.id
        }
    })
)

export const updateExtraHourType = (builder: BuilderType) => (
    builder.mutation<string, ExtraHourForm>({
        query: (extraHourForm: ExtraHourForm) => ({
            url: 'updateHourType',
            method: 'POST',
            body: extraHourForm,
            responseHandler: 'text',
            validateStatus: validateUpdateStatus,
        }),
        invalidatesTags: ["ExtraHours"]
    })
)

export const deleteExtraHourType = (builder: BuilderType) => (
    builder.mutation<string, string>({
        query: (id) => ({
            url: 'deleteHourType',
            method: 'POST',
            body: { id },
            responseHandler: 'text',
            validateStatus: validateDeleteStatus,
        }),
        invalidatesTags: ["ExtraHours"],
        transformResponse: (response, meta, arg) => {
            return arg;
        }
    })
)