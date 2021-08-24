import {createAsyncThunk} from "@reduxjs/toolkit";
import {FBAuth, FBFirestore} from "../../firebase/firebase.config";
import {Alert} from "react-native";
import {RootState} from "../config";
import {RegistrationState} from "../registration/registration.slice";

enum ACTION {
    LOGIN = "login",
    SIGNUP = "signup",
    SIGNOUT = "signOut",
    ANONYMOUS = "anonymousAuthentication"
}

const anonymousAuthentication = createAsyncThunk(ACTION.ANONYMOUS, (arg, thunkAPI) => {
    FBAuth.signInAnonymously()
        .then((user) => {
            console.log("Logged anonymously")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            Alert.alert("Attenzione", errorMessage)
        });
})
const login = createAsyncThunk(ACTION.LOGIN, (args: { email: string, password: string }, {dispatch}) => {

    const {email, password} = args

    FBAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("\nError logging in.\nWith Error: ", errorMessage)
            Alert.alert("Errore login", errorMessage)
        });
})

const signUp = createAsyncThunk(ACTION.SIGNUP, (args: { email: string, password: string, completion: (result: boolean) => void }, {
    getState,
    dispatch
}) => {

    const {email, password, completion} = args

    FBAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            completion(true)
            console.log("User created: ", user?.uid)

            // Creating user
            if (user?.uid) {
                dispatch(createUser({
                    email: user?.email || "",
                    userId: user.uid
                }))
            }
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;

            completion(false)
            // ..
            Alert.alert("Errore nella registrazione", errorMessage)
        });
})

const signOut = createAsyncThunk(ACTION.SIGNOUT, arg => {
    FBAuth.signOut()
        .then(() => {
            console.log("User logged out.")
        })
})

const createUser = createAsyncThunk("createUser", (arg: { userId: string, email: string }, thunkAPI) => {
    FBFirestore.collection("users").doc(arg.userId).set({
        email: arg.email
    })
})

export const updateRegistrationData = createAsyncThunk("signUpData", (arg, {dispatch, getState}) => {
    const state = getState() as RootState
    const userId = state.user.userId

    const data = state.registration

    if (userId) {
        FBFirestore.collection("users").doc(userId)
            .update({
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email
            })
            .then(() => {
                console.log("Data are updated")
            })
            .catch(e => {
                throw Error(e)
            })
    } else {
        throw Error("There is no user id")
    }
})

export const AuthenticationActions = {
    login,
    signUp,
    signOut,
    anonymousAuthentication
}
