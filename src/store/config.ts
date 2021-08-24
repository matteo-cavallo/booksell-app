import {configureStore} from "@reduxjs/toolkit";
import {userReducer, userSlice} from "./user/userSlice";
import {authenticationReducer} from "./authentication/authenticationSlice";
import {FBAuth} from "../firebase/firebase.config";
import {RegistrationReducer} from "./registration/registration.slice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        authentication: authenticationReducer,
        registration: RegistrationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
