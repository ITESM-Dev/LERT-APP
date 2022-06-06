const LOCAL_URL = "http://localhost:8000/" 
const DEV_URL = ""
const PROD_URL = ""

export const API_URL =  LOCAL_URL

export const dropdownCountries = [
    { label: 'México', value: 'Mexico' },
]

export enum USER_ROLES {
    OP_MANAGER = "OPManager",
    MANAGER = "Manager",
    ICA_ADMIN = "IcaAdmin",
    ADMIN = "Admin",
    RESOURCE = "Resource"
}