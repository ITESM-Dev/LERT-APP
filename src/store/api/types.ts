export type GetUserInfoForm = {
    mail: string;
    token: string;
}

export type LoginForm = {
    mail: string;
    password: string;
}

export type SignUpForm = {
    name: string;
    mail: string;
    password: string;
    role: string;
    band: string;
    country: string;
}

export type LogoutForm = {
    token: string;
    mail: string;
}