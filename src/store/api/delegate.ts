import { ManagerType } from "~store/managers";
import { BuilderType, validateGetStatus, validateUpdateStatus } from "./slice";


export const getManagersIcaAdmin = (builder: BuilderType) => (
    builder.query<ManagerType[], void>({ //not sure in here tbh
        query: () => ({
            url: "getManagersIcaAdmin",
            validateStatus: validateGetStatus,
        }),
        provideTags: ["ManagersIcaAdmin"],
        transformResponse: (response) => {
            const managersIcaAdminAPI = response as ManagerType[]

            const managersIcaAdmin = managersIcaAdminAPI.map(item => ({
                adminMail: item.mail,
                managerMail: item.mail, //yeap something is wrong
                status: item.status
            }))

            return managersIcaAdmin;
        }
    })
)

export const updateManagersIcaAdmin = (builder: BuilderType) => (
    builder.mutation<string, ManagerTypeForm>({
        query: (managerTypeForm) => ({
            url: "updateManagersIcaAdmin",
            method: "POST",
            body: managerTypeForm,
            validateStatus: validateUpdateStatus
        }),
        invalidatesTags: ["Managers"]
    })
)