import { ICAType } from "~store/ICAs";
import { BuilderType, validatePostStatus } from "./slice";
import { ICAForm } from "./types";

/*
export const getICAs = (builder: BuilderType) => (
    builder.query<ICAType[], void>({
        query: () => ({
            url: "get"
        })
    })
)
*/

export const createICA = (builder: BuilderType) => (
    builder.mutation<void, ICAForm>({
        query: (icaForm: ICAForm) => ({
            url: "createIca",
            method: "POST",
            body: icaForm,
            responseHandler: 'json',
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["ICAs"],
    })
)

