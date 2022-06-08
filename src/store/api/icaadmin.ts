import { UserType } from "~store/user";
import { BuilderType, validateGetStatus, validatePostStatus } from "./slice";
import { LoginForm, LoginICAAdminForm, ManagerIcaAdmin } from "./types";

export const getManagersIcaAdmin = (builder: BuilderType) => (
    builder.query<ManagerIcaAdmin[], void>({
        query: () => ({
            url: 'getManagersIcaAdmin',
            validateStatus: validateGetStatus,
        }),
        transformResponse: (response: any[]) => {
            const managerIcas = response.map(item => ({
                mail: item.mail
            } as ManagerIcaAdmin))
            return managerIcas;
        }
    })
)

export const assignTokenAuth = (builder: BuilderType) => (
    builder.query<any, string>({
        query: (managerMail) => ({
            url: 'assignTokenAuthenticator',
            method: 'POST',
            body: { managerMail },
            validateStatus: validatePostStatus,
        }),
    })
)

export const loginICAAdmin = (builder: BuilderType) => (
    builder.mutation<UserType, LoginICAAdminForm>({
        query: (loginICAAdminForm) => ({
            url: 'loginICAAdmin',
            method: 'POST',
            headers: loginICAAdminForm,
            validateStatus: validatePostStatus,
        }),
        invalidatesTags: ["User"]
    })
)