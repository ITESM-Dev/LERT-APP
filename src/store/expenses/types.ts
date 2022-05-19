export type ExpenseType = {
    id: string;
    type: string;
    const: number;
    date: string;
    comment: string;
    ICA: string;
    idICA?: string;
    employeeMail: string;
    idICAManager?: string;
    ICAManager: string;
    idAdministrator?: string;
    administrator: string;
}