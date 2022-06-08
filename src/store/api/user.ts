import 'isomorphic-fetch'

import { UserType } from "~store/user";
import { BuilderType } from "./slice";

export const getUserInfo = (builder: BuilderType) => (
    builder.query<UserType, void>({
        query: () => ({
            url: `getUserInfo`,
            validateStatus: (response) => 
                response.status === 200
        }),
        providesTags: ["User"]
    })
)