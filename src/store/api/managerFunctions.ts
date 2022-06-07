import { ManagerType } from "~store/managers";
import { BuilderType, validateGetStatus, validateUpdateStatus } from "./slice";
import { ManagerFunctionsForm } from "./types";

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

export const getManagerFunctions = (builder: BuilderType) => (
    builder.query<ManagerType[], void>({
        query: () => ({
            url: "getManagerFunctions",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["ManagerFunctions"],
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