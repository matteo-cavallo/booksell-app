import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import firebase from "firebase/app";
import {RootState} from "../config";
import {UserActions} from "./user.actions";


export interface UserState {
    userUid: string | null;
}

const initialState: UserState = {
    userUid: null,
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userChangedState: (state, action:PayloadAction<string | null>) => {
            if (action.payload) {
                state.userUid = action.payload
                console.log("Logged")
            } else {
                state.userUid = null
                console.log("Not logged")
            }
        }
    },
    extraReducers: builder => {

    }
})


export const UserSelector = {}

export const {userChangedState} = userSlice.actions

export const userReducer = userSlice.reducer
