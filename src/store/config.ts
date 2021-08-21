import {configureStore} from "@reduxjs/toolkit";
import {userReducer, userSlice} from "./user/userSlice";
import {authenticationReducer} from "./authentication/authenticationSlice";
import {FBAuth} from "../firebase/firebase.config";

export const store = configureStore({
    reducer: {
        user: userReducer,
        authentication: authenticationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
