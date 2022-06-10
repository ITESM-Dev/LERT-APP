import { ManagerType } from "~store/managers";
import { BuilderType, validateGetStatus, validatePostStatus, validateUpdateStatus } from "./slice";
import { ManagerFunctionsForm } from "./types";

export const getManagerFunctions = (builder: BuilderType) => (
    builder.query<ManagerType[], void>({
        query: () => ({
            url: "getManagers",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["Managers"],
        transformResponse: (response: any[]) => {

            const managerFunctions = response.map(item => ({
                mail: item.mail,
                status: item.status,
                recoveryStatus: item.recoveryStatus,
                lastUpdated: item.lastUpdated,
                id: item.id
            }) as ManagerType)

            return managerFunctions;
        }
    })
)

export const getManagersNoOpManager = (builder: BuilderType) => (
    builder.query<any[], void>({
        query: () => ({
            url: 'getManagersNoOpManager',
            validateStatus: validateGetStatus,
        }),
        providesTags: ["Managers"]
    })
)

export const updateManagerFunctions = (builder: BuilderType) => (
    builder.mutation<string, ManagerFunctionsForm>({
        query: (managerFunctionsForm) => ({
            url: "updateManager",
            method: "POST",
            body: managerFunctionsForm,
            validateStatus: validateUpdateStatus
        }),
        invalidatesTags: ["Managers"]
    })
)

export const setOPManager = (builder: BuilderType) => (
    builder.mutation<any, string>({
        query: (managerMail) => ({
            url: "setOpManager",
            method: "POST",
            body: { managerMail },
            responseHandler: 'text',
            validateStatus: validateUpdateStatus,
        }),
        invalidatesTags: ["Managers"],
    })
)