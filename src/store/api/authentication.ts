import { UserType } from "~store/user";
import { BuilderType } from "./slice";
import { LoginForm, LogoutForm, SignUpForm } from "./types";

export const login = (builder: BuilderType) => (
    builder.query<UserType, LoginForm>({
        query: (loginForm: LoginForm) => ({
            url: 'login',
            method: 'POST',
            body: loginForm,
            validateStatus: (response, result) =>
                response.status === 200 && !result.isError 

        }),
        transformResponse: (response, _) => {
            var userApi: any = response;
            // @ts-ignore
            return {
                id: userApi.id,
                name: userApi.name,
                role: userApi.role,
                mail: userApi.mail,
                token: userApi.token,
                country: userApi.country
            } as UserType
        }
    })
)

export const signUp = (builder: BuilderType) => (
    builder.query<void, SignUpForm>({
        query: (signUpForm: SignUpForm) => ({
            url: 'signUp',
            method: 'POST',
            body: signUpForm,
            validateStatus: (response) => 
                response.status === 201
        })
    })
)

export const logout = (builder: BuilderType) => (
    builder.query<void, LogoutForm>({
        query: (logoutForm: LogoutForm) => ({
            url: 'logout',
            headers: logoutForm,
            responseHandler: async (response) => await JSON.stringify(response),
            validateStatus: (response) => 
               response.status === 200
        }),
    })
)