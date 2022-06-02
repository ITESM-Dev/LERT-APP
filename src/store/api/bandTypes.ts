import { BuilderType } from "./slice";
import { BandTypeForm } from "./types";

export const createBandType = (builder: BuilderType) => (
    builder.mutation<void, BandTypeForm>({
        query: (bandTypeForm : BandTypeForm) => ({
            url: "createBandType",
            method: "POST",
            body: bandTypeForm
        }),
        invalidatesTags: ["BandTypes"]
    })
)