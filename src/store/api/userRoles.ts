import { BuilderType, validateUpdateStatus } from "./slice";
import { UserRoleForm } from "./types";

export const updateUserRole = (builder: BuilderType) => (
    builder.mutation<void, UserRoleForm>({
        query: (userRoleForm) => ({
            url: "updateUserRoles",
            method: "POST",
            body: userRoleForm,
            validateStatus: validateUpdateStatus,
        }),
        invalidatesTags: ["UserRoles"]
    })
)