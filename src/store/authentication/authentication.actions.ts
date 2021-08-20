import {createAsyncThunk} from "@reduxjs/toolkit";
import {FBAuth} from "../../firebase/firebase.config";
import {Alert} from "react-native";


enum ACTION {
    LOGIN = "login",
    SIGNUP = "signup",
    SIGNOUT = "signOut"
}
const login = createAsyncThunk(ACTION.LOGIN, (args: {email: string, password: string}, {dispatch}) => {

    const {email, password} = args

    FBAuth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("\nUser logged in successfully ")
            console.log(`Email: ${user?.email}`)
            console.log(`ID: ${user?.uid}`)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log("\nError logging in.\nWith Error: ", errorMessage)
            Alert.alert("Errore login", errorMessage)
        });
})

const signUp = createAsyncThunk(ACTION.SIGNUP, (args: {email:string, password: string}, thunkAPI) => {

    const {email, password} = args

    FBAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
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

export const AuthenticationActions = {
    login,
    signUp,
    signOut
}
