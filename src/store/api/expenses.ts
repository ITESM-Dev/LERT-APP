import { ExpenseType } from "~store/expenses";
import { BuilderType, validateGetStatus, validatePostStatus } from "./slice";
import { ExpenseForm } from "./types";

export const getExpenses = (builder: BuilderType) => (
    builder.query<ExpenseType[], void>({
        query: () => ({
            url: 'getExpenses',
            validateStatus: validateGetStatus
        }),
        providesTags: ["Expenses"],
        transformResponse: (response: any[]) => {
            const expensesAPI = response.map(item => ({
                employeeMail: item.employeeMail,
                type: item.type,
                cost: item.cost,
                date: item.date,
                ICA: "ICA",
                ICAManager: item.ICAManager,
                administrator: item.administrator,
                comment: item.comment,
            } as ExpenseType))
            return expensesAPI;
        }
    }) 
);

export const createExpense = (builder: BuilderType) => (
    builder.mutation<void, ExpenseForm>({
        query: (expenseForm) => ({
            url: "createExpense",
            method: "POST",
            body: expenseForm,
            validateStatus: validatePostStatus,
        }),
        invalidatesTags: ["Expenses", "CurrentPeriod", "ICAs"]
    })
)