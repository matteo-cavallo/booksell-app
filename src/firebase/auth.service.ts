import {FBAuth} from "./firebase.config";
import {useEffect, useState} from "react";
import firebase from "firebase/app";
import {useDispatch} from "react-redux";

/**
 * Hook that is usefull to check if user is logged in.
 */
export const useCurrentUser = () => {

    const [user, setUser] = useState<firebase.User | null>(null)
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    FBAuth.onAuthStateChanged( (user) => {
        if (user !== null){
            // User is logged in
            setUser(user)
            setIsSignedIn(true)
            console.log("User logged: ", user.uid)
            setIsLoading(false)
        } else {
            // User logged out
            setUser(null)
            setIsSignedIn(false)
            setIsLoading(false)
        }
    })

    return {
        user,
        isSignedIn,
        isLoading
    }
}

export const AuthService = {
    useCurrentUser
}
