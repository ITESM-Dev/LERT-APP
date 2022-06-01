export type ExpenseType = {
    id: string;
    type: string;
    cost: number;
    date: string;
    comment: string;
    idICA: string;
    idEmployee?: string;
    employeeMail: string;
    idICAManager?: string;
    ICAManager: string;
    idAdministrator?: string;
    administrator: string;
}