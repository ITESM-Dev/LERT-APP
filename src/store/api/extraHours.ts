import { ExtraHourType } from "~store/extraHours";
import { BuilderType, validateGetStatus, validatePostStatus } from "./slice";
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
        transformResponse: (response) => {
            console.log(response)
            return response.id
        }
    })
)