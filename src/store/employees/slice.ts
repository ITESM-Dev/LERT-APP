import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { EmployeeType } from "./types";

export const employeesAdapter = createEntityAdapter<EmployeeType>({
    selectId: (employee) => employee.id,
})

const employees = createSlice({
    name: "employees",
    initialState: employeesAdapter.getInitialState(),
    reducers: {

    }
});


export default employees.reducer;