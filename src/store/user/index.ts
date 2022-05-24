// Reducer
import userReducer from "./slice";

//Actions
import {
    setUser,
    clearUser,
} from "./slice";

import { UserType } from "./types";

import { userSelector } from "./selectors";

export {
    setUser,
    clearUser,
    userSelector,
    userReducer,
    UserType,
};