import { EmployeeType } from "~store/employees";
import { BuilderType, validateGetStatus } from "./slice";
import { AvailableResource, ManagerICA } from "./types";

export const getAvailableResources = (builder: BuilderType) => (
    builder.query<AvailableResource[], void>({
        query: () => ({
            url: 'getAvailableResources',
            validateStatus: validateGetStatus,
        })
    })
);

export const getManagerICA = (builder: BuilderType) => (
    builder.query<ManagerICA, void>({
        query: () => ({
            url: 'getManagerICA',
            validateStatus: validateGetStatus,
        })
    })
)

/*
export const getResources = (builder: BuilderType) => (
    builder.query<EmployeeType[], void>({
        query: () => ({
            url: 'getResources',
            validateStatus: validateGetStatus,
        }),
        transformResponse: (response: any[]) => {
            const employees = response.map(item => {
                id: item.id,
                employeeNum: item.
            } as EmployeeType)

            return employees;
        }
    })
)
*/