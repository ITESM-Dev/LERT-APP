import 'isomorphic-fetch'

import { UserType } from "~store/user";
import { BuilderType } from "./slice";

export const getUserInfo = (builder: BuilderType) => (
    builder.query<UserType, string>({
        query: (id) => ({
            url: `user/?id=${id}`,
            method: 'GET',
            validateStatus: (response, result) => 
                response.status === 200
        })
    })
)