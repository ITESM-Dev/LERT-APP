import { BandTypesType } from "~store/bandTypes";
import { BuilderType, validateDeleteStatus, validateGetStatus, validatePostStatus, validateUpdateStatus } from "./slice";
import { BandTypeForm } from "./types";

export const createBandType = (builder: BuilderType) => (
    builder.mutation<void, BandTypeForm>({
        query: (bandTypeForm) => ({
            url: "createBandType",
            method: "POST",
            body: bandTypeForm,
            responseHandler: 'json',
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["BandTypes"],
    })
)

export const updateBandType = (builder: BuilderType) => (
    builder.mutation<string, BandTypeForm>({
        query: (bandTypeForm) => ({
            url: "updateBandType",
            method: "POST",
            body: bandTypeForm,
            validateStatus: validateUpdateStatus
        }),
        invalidatesTags: ["BandTypes"]
    })
)

export const deleteBandType = (builder: BuilderType) => (
    builder.mutation<void, string>({
        query: (id) => ({
            url: "deleteBandType",
            method: "POST",
            body: { id },
            validateStatus: validateDeleteStatus
        }),
        invalidatesTags: ["BandTypes"]
    })
)

export const getBandTypes = (builder: BuilderType) => (
    builder.query<BandTypesType[], void>({
        query: () => ({
            url: "getBandTypes",
            validateStatus: validateGetStatus,
        }),
        providesTags : ["BandTypes"],
        transformResponse: (response) => {
            const bandTypesAPI = response as BandTypesType[]

            const bandTypes = bandTypesAPI.map(item => ({
                type: item.type, 
                country: item.country, 
                band: item.band, 
                yearlyRate: item.yearlyRate, 
                dateToStart: item.dateToStart, 
                dateToFinish: item.dateToFinish,
                id: item.id
            }))

            return bandTypes;
        }
    })
)