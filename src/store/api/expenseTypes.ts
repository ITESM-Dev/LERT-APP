import { validatePathConfig } from "@react-navigation/native";
import { ExpenseTypesType } from "~store/expenseTypes";
import { BuilderType, validateGetStatus, validatePostStatus } from "./slice";
import { ExpenseTypeForm } from "./types";

export const getExpenseTypes = (builder: BuilderType) => (
    builder.query<ExpenseTypesType[], void>({
        query: () => ({
            url: 'getExpenseTypes',
            validateStatus: validateGetStatus,
        }),
        providesTags: ["ExpenseTypes"],
        transformResponse: (response: any[]) => {

            const expenseTypes = response.map(item => ({
                type: item.type,
                id: item.idExpenseType,
            } as ExpenseTypesType))

            return expenseTypes;
        }
    })
)

export const createExpenseType = (builder: BuilderType) => (
    builder.mutation<string, ExpenseTypeForm>({
        query: (expenseTypeForm) => ({
            url: 'createExpenseType',
            method: 'POST',
            body: expenseTypeForm,
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["ExpenseTypes"]
    })
)