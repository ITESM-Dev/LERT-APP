import { BuilderType, validateGetStatus, validateUpdateStatus } from "./slice";
import { UserRoleForm } from "./types";

export const updateUserRole = (builder: BuilderType) => (
    builder.mutation<any, UserRoleForm>({
        query: (userRoleForm) => ({
            url: "updateUserRoles",
            method: "POST",
            body: userRoleForm,
            responseHandler: 'text',
            validateStatus: validateUpdateStatus,
        }),
        invalidatesTags: ["UserRoles"]
    })
)

export const getAllUsers = (builder: BuilderType) => (
    builder.query<UserRoleForm[], void>({
        query: () => ({
            url: "getAllUsers",
            validateStatus: validateGetStatus,
        }),
        providesTags: ["UserRoles"],
        transformResponse: (response: UserRoleForm[]) => {
            const userRoles = response.map(item => ({
                mail: item.mail,
                role: item.role,
            }) as UserRoleForm)
            return userRoles
        }
    })
)