import { ManagerType } from "~store/managers";
import { BuilderType, validateGetStatus } from "./slice";


export const getManagersIcaAdmin = (builder: BuilderType) => (
    builder.query<ManagerType[], string>({ //not sure in here tbh
        query: () => ({
            url: "getManagersIcaAdmin",
            validateStatus: validateGetStatus,
        }),
        provideTags: ["ManagersIcaAdmin"],
        transformResponse: (response) => {
            const managersIcaAdminAPI = response as ManagerType[]

            const managersIcaAdmin = managersIcaAdminAPI.map(item => ({
                adminMail: item.adminMail,
                managerMail: item.managerMail, //yeap something is wrong
                status: item.status
            }))

            return managersIcaAdmin;
        }
    })
)