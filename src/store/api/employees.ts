import { EmployeeType } from "~store/employees";
import { BuilderType, validateGetStatus, validatePostStatus, validateUpdateStatus } from "./slice";
import { AvailableResource, EmployeeForm, ManagerICA } from "./types";

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

export const getResources = (builder: BuilderType) => (
    builder.query<EmployeeType[], void>({
        query: () => ({
            url: 'getResources',
            validateStatus: validateGetStatus,
        }),
        providesTags: ["Employees"],
        transformResponse: (response: any[]) => {
            const employees = response.map(item => ({
                idSerial: item.idSerial,
                mail: item.mail,
                managerMail: item.managerMail,
                icaCode: item.icaCode,
                band: item.band,
            } as EmployeeType))

            return employees;
        }
    })
)

export const assignResourceToManager = (builder: BuilderType) => (
    builder.mutation<any, EmployeeForm>({
        query: (employeeForm) => ({
            url: "assignResourceToManager",
            method: "POST",
            body: employeeForm,
            validateStatus: validateUpdateStatus,
        })
    })
)
