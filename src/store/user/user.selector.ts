import {RootState} from "../config";

const isLogged = (state: RootState) => state.user.user !== null
const getUser = (state: RootState) => state.user
const isLoading = (state: RootState) => state.user.isLoading


export const UserSelector = {
    isLogged,
    getUser,
    isLoading
}
