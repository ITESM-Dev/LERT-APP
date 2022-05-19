import { BuilderType } from "./slice"

type CatResponse = any

export const getFacts = (builder: BuilderType) => (
    builder.query<CatResponse, void>({
        query: () => ({
            url: 'facts'
        }),
        transformResponse: (response, meta) => {
            var array: { [key: string]: any} = {}
            
            //@ts-ignore
            response?.map(fact => {
                array[fact._id] = {
                    id: fact._id,
                    text: fact.text
                }
            })
            return array
        }
    })
)