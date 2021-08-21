import {RootState} from "../config";

const isLogged = (state: RootState) => state.user.userUid !== null
const getUser = (state: RootState) => state.user

export const UserSelector = {
    isLogged,
    getUser
}
