import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FBAuth} from "../../firebase/firebase.config";
import {Alert} from "react-native";
import {AuthenticationActions} from "./authentication.actions";
import firebase from 'firebase/app'

export interface AuthenticationState {}

const initialState: AuthenticationState = {}

const authenticationSlice = createSlice({
    name: "authentication",
    initialState,
    reducers:{},
})

export const authenticationReducer = authenticationSlice.reducer

export const {} = authenticationSlice.actions
