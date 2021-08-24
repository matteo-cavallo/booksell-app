import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import firebase from "firebase/app";
import {RootState} from "../config";
import {UserActions} from "./user.actions";

export interface User {
    userID: string,
    isAnonymous: boolean
}


export interface UserState {
    user: User | null
    isLoading: boolean;
}

const initialState: UserState = {
    user: null,
    isLoading: true,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userChangedState: (state, action:PayloadAction<User | null>) => {
            if (action.payload) {
                state.user = action.payload
                console.log("userSlice.userChangedState: user = ", action.payload)
            } else {
                state.user = null
                console.log("userSlice.userChangedState: user = null")
            }
                state.isLoading = false
        }
    },
    extraReducers: builder => {

    }
})

export const {userChangedState} = userSlice.actions

export const userReducer = userSlice.reducer
