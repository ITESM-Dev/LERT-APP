import { ManagerType } from "~store/managers";
import { BuilderType, validateGetStatus, validatePostStatus, validateUpdateStatus } from "./slice";
import { IcaAdminType, ManagerIcaAdminType } from "./types";


export const getManagersIcaAdmin = (builder: BuilderType) => (
    builder.query<ManagerType[], void>({ //not sure in here tbh
        query: () => ({
            url: "getManagersIcaAdmin",
            validateStatus: validateGetStatus,
        }),
        provideTags: ["Delegate"],
        transformResponse: (response) => {
            const managersIcaAdminAPI = response as ManagerType[]

            const managersIcaAdmin = managersIcaAdminAPI.map(item => ({
                mail: item.mail,
                recoveryStatus: item.recoveryStatus,
                status: item.status,
                lastUpdate: item.lastUpdate,
                id: item.id, //yeap something is wrong
            }))

            return managersIcaAdmin;
        }
    })
)

export const getManagersAndIcaAdmins = (builder: BuilderType) => (
    builder.query<ManagerIcaAdminType[], void>({
       query: () => ({
           url: "getManagersAndIcaAdmins",
           validateStatus: validateGetStatus,
       }),
       providesTags: ["Delegate"],
       transformResponse: (response) => {
           const adminManagersAPI = response as ManagerIcaAdminType[]

           const adminManagers = adminManagersAPI.map(item => ({
               managerMail: item.managerMail,
               icaAdminMail: item.icaAdminMail,
           }))

           return adminManagers;
       }
    })
)

export const getIcaAdmins = (builder: BuilderType) => (
    builder.query<IcaAdminType[], void>({
        query: () => ({
            url: "getIcaAdmins",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["Delegate"],
        transformResponse: (response) => {
            const icaAdminsAPI = response as IcaAdminType[]
 
            const icaAdmins = icaAdminsAPI.map(item => ({
                mail: item.mail,
            }))
 
            return icaAdmins;
        }
    })
)

export const opAssignIcaAdminManager = (builder: BuilderType) => (
    builder.mutation<void, ManagerIcaAdminType>({
        query: (ManagerIcaAdminType) => ({
            url: "opAssignIcaAdminManager",
            method: "POST",
            body: ManagerIcaAdminType,
            responseHandler: "json",
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["Delegate"],
    })
)

export const setIcaAdmin = (builder: BuilderType) => (
    builder.mutation<void, IcaAdminType>({
        query: (IcaAdminType) => ({
            url: "setIcaAdmin",
            method: "POST",
            body: IcaAdminType,
            responseHandler: "json",
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["Delegate"],
    })
)


/*
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
*/