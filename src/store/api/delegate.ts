import { ManagerType } from "~store/managers";
import { BuilderType, validateGetStatus, validatePostStatus, validateUpdateStatus } from "./slice";
import { IcaAdminManager, IcaAdminType, ManagerIcaAdminType } from "./types";

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
        transformResponse: (response: any[]) => { 
            const icaAdmins = response.map(item => ({
                icaAdminMail: item.mail
            }) as IcaAdminType) 
 
            return icaAdmins;
        }
    })
)

export const opAssignIcaAdminManager = (builder: BuilderType) => (
    builder.mutation<void, ManagerIcaAdminType>({
        query: (ManagerIcaAdminType) => ({
            url: "OpAssignIcaAdminManager",
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

export const getAvailableDelegates = (builder: BuilderType) => (
    builder.query<IcaAdminType[], void>({
        query: () => ({
            url: "getAvailableDelegates",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["Delegate"],
        transformResponse: (response: any[]) => { 
            const icaAdmins = response.map(item => ({
                icaAdminMail: item.icaAdminMail,
            }) as IcaAdminType)
 
            return icaAdmins;
        }
    })
)

export const getIcaAdminManager = (builder: BuilderType) => (
    builder.query<ManagerIcaAdminType[], void>({
        query: () => ({
            url: "getICAAdminManager",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["Delegate"],
        transformResponse: (response: IcaAdminManager, meta) => 
        
        {
            return [
                {
                    managerMail: meta?.request.headers.get("mail"),
                    icaAdminMail: response.icaMail,
                }
            ] as ManagerIcaAdminType[]
        }

     })
 )

 export const getManagersNoIcaAdmins = (builder: BuilderType) => (
    builder.query<ManagerType[], void>({
        query: () => ({
            url: "getManagersNoIcaAdmins",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["Delegate"],
        transformResponse: (response: any[]) => { 
            const icaAdmins = response.map(item => ({
                mail: item.mail
            }) as ManagerType) 
 
            return icaAdmins;
        }
    })
)