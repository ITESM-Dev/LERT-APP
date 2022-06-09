export type GetUserInfoForm = {
    mail: string;
    token: string;
}

export type UserRoleForm = {
    mail: string;
    role: string;
}

export type LoginForm = {
    mail: string;
    password: string;
}

export type LoginICAAdminForm = {
    mailManager: string;
    token: string;
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
    id?: string;
    type: string;
    band: string;
    country: string;
    yearlyRate: string;
    dateToStart: string;
    dateToFinish: string;
}

export type ExtraHourForm = {
    id?: string;
    type: string,
    band: string,
    country: string,
    rate: string,
    dateToStart: string,
    dateToFinish: string
}

export type ICAForm = {
    id: string;
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
    totalBilling?: string;
    status?: string;
}

export type ExpensesForQuarterForm = {
    year: string;
}

export type ExpenseForm = {
    id?: string;
    icaCode: string;
    mail: string;
    cost: string;
    date: string;
    comment: string;
    nameExpense: string;
    keyCurrentPeriod: string;
}

export type ExpenseTypeForm = {
    id?: string;
    type: string;
}

export type CurrentPeriodForm = {
    id?: string;
    quarter: string,
    year: string,
    key: string,
    status: string
}

export type AvailableResource = {
    mail: string;
}

export type ManagerICA = {
    idICA: string;
    icaCode: string;
}

export type EmployeeForm = {
    id?: string;
    resourceMail: string,
    managerMail: string,
    band: string,
    icaCode: string
}

export type ExpenseReportForm = {
    startDate: string;
    endDate: string;
}

export type ManagerFunctionsForm = {
    id?: string;
    mail: string;
    status: string;
    recoveryStatus: string;
    lastUpdated: string;
}
export type ManagerIcaAdminType = {
    managerMail: string;
    icaAdminMail: string;
}

export type IcaAdminType = {
    icaAdminMail: string;
}

export type IcaAdminManager = {
    icaMail: string;
    idICA_Admin: string;
}