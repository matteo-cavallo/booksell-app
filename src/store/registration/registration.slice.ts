import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {FBFirestore} from "../../firebase/firebase.config";
import {User} from "../../model/user.model";

export interface RegistrationState {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
}

const initialState: RegistrationState = {}

const registrationSlice = createSlice({
    name: "registration",
    initialState,
    reducers: {
        test: state => {
            console.log("LOG")
        },
        setFirstStep: (state, action: PayloadAction<FirstStepParams>) => {
            const {password, email} = action.payload
            state.email = email
            state.password = password
            console.log("Update registration: ", state)
        },
        setSecondStep: (state, action: PayloadAction<SecondStepParams>) => {
            const {firstName, lastName} = action.payload
            state.firstName =  firstName
            state.lastName =  lastName
            console.log("Update registration: ", state)
        },
    }
})

export const RegistrationActions = registrationSlice.actions
export const RegistrationReducer = registrationSlice.reducer

interface FirstStepParams {
    email: string;
    password: string;
}

interface SecondStepParams {
    firstName: string;
    lastName: string;
}
