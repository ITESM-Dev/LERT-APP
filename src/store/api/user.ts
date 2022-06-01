import 'isomorphic-fetch'

import { UserType } from "~store/user";
import { BuilderType } from "./slice";
import { GetUserInfoForm } from './types';

export const getUserInfo = (builder: BuilderType) => (
    builder.query<UserType, GetUserInfoForm>({
        query: (getUserInfoForm) => ({
            url: `user`,
            method: 'GET',
            headers: {
                mail: getUserInfoForm.mail,
                token: getUserInfoForm.token
            },
            validateStatus: (response) => 
                response.status === 200
        })
    })
)