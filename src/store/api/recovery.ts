import { ExpenseYear } from "~store/expenses";
import { BuilderType, validateGetStatus } from "./slice";
import { ExpensesForQuarterForm } from "./types";

export const expensesForQuarter = (builder: BuilderType) => (
    builder.query<ExpenseYear, ExpensesForQuarterForm>({
        query: (expensesForQuarterForm) => ({
            url: "expensesForQuarter",
            method: "POST",
            body: expensesForQuarterForm,
            validateStatus: validateGetStatus,
        }),
        providesTags: ["Expenses"]
    })
) 