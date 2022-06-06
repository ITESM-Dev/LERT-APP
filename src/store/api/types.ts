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

export type BandTypeForm = {
    type: string;
    band: string;
    country: string;
    yearlyRate: string;
    dateToStart: string;
    dateToFinish: string;
}

export type ExtraHourForm = {
    type: string,
    band: string,
    country: string,
    rate: string,
    dateToStart: string,
    dateToFinish: string
}

export type ICAForm = {
    icaCode: string,
    icaCore: string,
    year: string,
    idPlanning: string
    icaOwner: string,
    budget: string,
    country: string,
    depto: string,
    frequencyBill: string,
    cc: string,
    ctyNamePerf: string,
    ctyNameReq: string,
    rCtyPerf: string,
    rCtyReq: string,
    division: string,
    major: string,
    minor: string,
    leru: string,
    description: string,
    type: string,
    nec: string,
    totalPlusTaxes: string,
    startDate: string,
    endDate: string,
}

export type ExpensesForQuarterForm = {
    year: string;
}

export type ExpenseTypeForm = {
    type: string;
}

export type CurrentPeriodForm = {
    quarter: string,
    year: string,
    key: string,
    status: string
}