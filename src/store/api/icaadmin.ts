import { BuilderType, validateGetStatus } from "./slice";
import { ManagerIcaAdmin } from "./types";

export const getManagersIcaAdmin = (builder: BuilderType) => (
    builder.query<ManagerIcaAdmin[], void>({
        query: () => ({
            url: 'getManagersIcaAdmin',
            validateStatus: validateGetStatus,
        }),
        transformResponse: (response: any[]) => {
            const managerIcas = response.map(item => ({
                mail: item.mail
            } as ManagerIcaAdmin))
            return managerIcas;
        }
    })
)