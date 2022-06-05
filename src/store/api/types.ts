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
    totalBilling: string,
    rCtyPerf: string,
    ctyNamePerf: string,
    endDate: string,
    startDate: string,
    totalPlusTaxes: string,
    nec: string,
    type: string,
    description: string,
    leru: string,
    minor: string,
    major: string,
    division: string,
    rCtyReq: string,
    ctyNameReq: string,
    cc: string,
    frequencyBill: string,
    depto: string,
    status: string,
    country: string,
    budget: string,
    icaOwner: string,
    idPlanning: string
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