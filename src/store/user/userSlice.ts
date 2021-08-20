import {createAction, createSlice, PayloadAction} from "@reduxjs/toolkit";
import firebase from "firebase/app";
import {RootState} from "../config";

export interface UserState {}

const initialState: UserState = {}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {}
})


export const UserSelector = {}

export const {} = userSlice.actions

export const userReducer = userSlice.reducer
