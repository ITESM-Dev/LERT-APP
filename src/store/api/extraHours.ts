import { BuilderType } from "./slice";
import { ExtraHourForm } from "./types";

export const createExtraHourType = (builder: BuilderType) => (
    builder.mutation<void, ExtraHourForm>({
        query: (extraHourForm: ExtraHourForm) => ({
            url: 'createHourType',
            method: 'POST',
            body: extraHourForm,
        }),
        invalidatesTags: ["ExtraHours"]
    })
)