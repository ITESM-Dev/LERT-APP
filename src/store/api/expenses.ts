import { ExpenseType } from "~store/expenses";
import { 
    BuilderType, 
    validateGetStatus, 
    validatePostStatus, 
    validateUpdateStatus,
    validateDeleteStatus, 
} from "./slice";
import { ExpenseForm, ExpenseReportForm } from "./types";

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
                id: item.id_expense,
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

export const updateExpense = (builder: BuilderType) => (
    builder.mutation<string, ExpenseForm>({
        query: (expenseForm) => ({
            url: "updateExpense",
            method: "POST",
            body: expenseForm,
            responseHandler: 'text',
            validateStatus: validateUpdateStatus,
        }),
        invalidatesTags: ["Expenses", "CurrentPeriod", "ICAs"]
    })
)

export const deleteExpense = (builder: BuilderType) => (
    builder.mutation<string, string>({
        query: (id) => ({
            url: "deleteExpense",
            method: "POST",
            body: { id },
            responseHandler: 'text',
            validateStatus: validateDeleteStatus,
        }),
        invalidatesTags: ["Expenses", "CurrentPeriod", "ICAs"],
        transformResponse: (response, meta, arg) => arg
    })
)

export const getExpenseReport = (builder: BuilderType) => (
    builder.mutation<any, ExpenseReportForm>({
        query: (expenseReportForm) => ({
            url: 'reportExpense',
            method: 'POST',
            body: expenseReportForm,
            validateStatus: validateGetStatus,
        })
    })
)