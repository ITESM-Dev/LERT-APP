// Reducer
import userReducer from "./slice";

//Actions
import {
    setUser,
    clearUser,
} from "./slice";

import { 
    UserType 
} from "./types";

import { 
    userSelector 
} from "./selectors";

import {
    getUserInfoThunk,
    logUserThunk,
    signUpUserThunk,
    logoutUserThunk,
} from './thunks'

export {
    userReducer,
    UserType,

    setUser,
    clearUser,

    userSelector,

    getUserInfoThunk,
    logUserThunk,
    signUpUserThunk,
    logoutUserThunk,
};