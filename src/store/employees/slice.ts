import { createEntityAdapter, createSlice, EntityId, PayloadAction } from "@reduxjs/toolkit";
import { api } from "~store/api";
import { EmployeeType } from "./types";

export const employeesAdapter = createEntityAdapter<EmployeeType>({
    selectId: (employee) => employee.idSerial,
})

const employees = createSlice({
    name: "employees",
    initialState: employeesAdapter.getInitialState(),
    reducers: {
        setEmployees(state, action: PayloadAction<EmployeeType[]>) {
            employeesAdapter.setMany(state, action.payload);
        },
        addEmployee(state, action: PayloadAction<EmployeeType>) {
            employeesAdapter.addOne(state, action.payload);
        },
        updateEmployee(state, action: PayloadAction<EmployeeType>) {
            employeesAdapter.upsertOne(state, action.payload);
        },
        removeEmployee(state, action: PayloadAction<EntityId>) {
            employeesAdapter.removeOne(state, action.payload);
        },
        clearEmployees(state, _) {
            employeesAdapter.removeAll(state);
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                api.endpoints.getResources.matchFulfilled,
                (state, { payload }) => {
                    employeesAdapter.setMany(state, payload);
                }
            )
    }
});

export const {
    setEmployees,
    addEmployee,
    updateEmployee,
    removeEmployee,
    clearEmployees,
} = employees.actions;
export default employees.reducer;