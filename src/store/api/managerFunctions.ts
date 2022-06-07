import { ManagerFunctionsType } from "~store/managerFunctions";
import { BuilderType, validateDeleteStatus, validateGetStatus, validatePostStatus, validateUpdateStatus } from "./slice";
import { ManagerFunctionsForm } from "./types";


export const createManagerFunctions = (builder: BuilderType) => (
    builder.mutation<void, ManagerFunctionsForm>({
        query: (managerFunctionsForm) => ({
            url: "createManagerFunctions",
            method: "POST",
            body: managerFunctionsForm,
            responseHandler: 'json',
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["ManagerFunctions"],
    })
)

export const updateManagerFunctions = (builder: BuilderType) => (
    builder.mutation<string, ManagerFunctionsForm>({
        query: (managerFunctionsForm) => ({
            url: "updateManagerFunctions",
            method: "POST",
            body: managerFunctionsForm,
            validateStatus: validateUpdateStatus
        }),
        invalidatesTags: ["ManagerFunctions"]
    })
)

export const deleteManagerFunctions = (builder: BuilderType) => (
    builder.mutation<void, string>({
        query: (id) => ({
            url: "deleteManagerFunctions",
            method: "POST",
            body: { id },
            validateStatus: validateDeleteStatus
        }),
        invalidatesTags: ["ManagerFunctions"]
    })
)

export const getManagerFunctions = (builder: BuilderType) => (
    builder.query<ManagerFunctionsType[], void>({
        query: () => ({
            url: "getManagerFunctions",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["ManagerFunctions"],
        transformResponse: (response) => {
            const managerFunctionsAPI = response as ManagerFunctionsType[]

            const managerFunctions = managerFunctionsAPI.map(item => ({
                mail: item.mail,
                status: item.status,
                recoveryStatus: item.recoveryStatus,
                lastUpdated: item.lastUpdated,
                id: item.id
            }))

            return managerFunctions;
        }
    })
)