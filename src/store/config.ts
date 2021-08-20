import {configureStore} from "@reduxjs/toolkit";
import {userReducer, userSlice} from "./user/userSlice";
import {authenticationReducer} from "./authentication/authenticationSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        authentication: authenticationReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
