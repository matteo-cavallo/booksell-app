import {createSlice} from "@reduxjs/toolkit";
import {AuthenticationActions} from "./authentication.actions";
import {RootState} from "../config";

export interface AuthenticationState {
    showLogin: boolean
}

const initialState: AuthenticationState = {
    showLogin: false
}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        showAuthenticationScreen: state => {
            state.showLogin = true
            console.log("Show")
        },
        hideAuthenticationScreen: state => {
            state.showLogin = false
        }
    },
    extraReducers: builder => {
        builder.addCase(AuthenticationActions.anonymousAuthentication.fulfilled, (state) => {
            state.showLogin = false
        })
        builder.addCase(AuthenticationActions.login.fulfilled, state => {
            state.showLogin = false
        })
        builder.addCase(AuthenticationActions.signUp.fulfilled, state => {
            state.showLogin = false
        })
    }
})

const selectShowLogin = (state: RootState) => state.authentication.showLogin

export const AuthenticationSelector = {
    selectShowLogin
}

export const authenticationReducer = authenticationSlice.reducer

export const {
    hideAuthenticationScreen,
    showAuthenticationScreen
} = authenticationSlice.actions
