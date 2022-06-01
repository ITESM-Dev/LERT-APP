import { store } from "~store/store"

export const userSelector = () => store.getState().user;