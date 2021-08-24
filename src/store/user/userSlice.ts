import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import firebase from "firebase/app";
import {RootState} from "../config";
import {User} from "../../model/user.model";
import {setStatusBarNetworkActivityIndicatorVisible} from "expo-status-bar";
import {FBFirestore} from "../../firebase/firebase.config";

export interface UserState {
    userId?: string
    isAnonymous: boolean
    user?: User
    isLoading: boolean;

}

const initialState: UserState = {
    isLoading: true,
    isAnonymous: true
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userChangedState: (state, action:PayloadAction<{
            userId: string,
            isAnonymous: boolean
        } | null>) => {
            if (action.payload) {
                // There is a logged user
                const {isAnonymous,userId} = action.payload
                state.userId = userId
                state.isAnonymous = isAnonymous


            } else {
                // No user is logged
                state.user = undefined
                state.isAnonymous = true
            }
                state.isLoading = false
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            console.log("Current user: ", state.user)
        }
    },
    extraReducers: builder => {

    }
})

export const {userChangedState, setUser} = userSlice.actions

export const userReducer = userSlice.reducer
