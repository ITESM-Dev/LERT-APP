import { BuilderType, validatePostStatus } from "./slice";
import { CurrentPeriodForm } from "./types";


export const createCurrentPeriod = (builder: BuilderType) => (
    builder.mutation<void, CurrentPeriodForm>({
        query: (currentPeriodForm: CurrentPeriodForm) => ({
            url: "createCurrent",
            method: "POST",
            body: currentPeriodForm,
            responseHandler: "json",
            validateStatus: validatePostStatus
        }),
        invalidatesTags: ["CurrentPeriod"],
    })
)