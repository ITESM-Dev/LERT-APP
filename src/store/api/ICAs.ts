import { ICAType } from "~store/ICAs";
import { BuilderType, validateGetStatus, validatePostStatus } from "./slice";
import { ICAForm } from "./types";

export const getICAs = (builder: BuilderType) => (
    builder.query<ICAType[], void>({
        query: () => ({
            url: "get",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["ICAs"],
        transformResponse: (response: any[]) => {
            const ICASapi = response.map(item => ({
                status: item.status,
                icaCode: item.icaCode,
                type: item.type,
                icaOwner: item.icaOwner,
                startDate: item.startDate,
                endDate: item.endDate,
                budget: item.budget,
                totalBilling: item.totalBilling,

                year: item.year,
                idPlanning: item.idPlanning,
                country: item.country,
                depto: item.depto,
                frequencyBill: item.frequencyBill,
                cc: item.cc,
                ctyNamePerf: item.ctyNamePerf,
                ctyNameReq: item.ctyNameReq,
                rCtyPerf: item.rCtyPerf,
                rCtyReq: item.rCtyReq,
                division: item.division,
                major: item.major,
                minor: item.minor,
                leru: item.leru,
                description: item.description,
                nec: item.nec,
                totalPlusTaxes: item.totalPlusTaxes,
                icaCore: item.icaCore,
                id: item.id,
            }) as ICAType)

            return ICASapi;
        }
    })
)


export const createICA = (builder: BuilderType) => (
    builder.mutation<void, ICAForm>({
        query: (icaForm: ICAForm) => ({
            url: "createIca",
            method: "POST",
            body: icaForm,
            responseHandler: 'json',
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["ICAs"],
    })
)

