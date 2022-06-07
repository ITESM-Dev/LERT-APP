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

export const USER_ROLES_ARRAY = [
    { label: USER_ROLES.ADMIN, value: USER_ROLES.ADMIN },
    { label: USER_ROLES.OP_MANAGER, value: USER_ROLES.OP_MANAGER },
    { label: USER_ROLES.ICA_ADMIN, value: USER_ROLES.ICA_ADMIN },
    { label: USER_ROLES.MANAGER, value: USER_ROLES.MANAGER },
    { label: USER_ROLES.RESOURCE, value:USER_ROLES.RESOURCE },
]