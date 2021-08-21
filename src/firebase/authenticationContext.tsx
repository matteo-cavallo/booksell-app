import React, {createContext, FC, useEffect, useState} from "react";
import {FBAuth} from "./firebase.config";
import {useDispatch} from "react-redux";
import {UserActions} from "../store/user/user.actions";
import { userChangedState} from "../store/user/userSlice"
export const AuthContext = createContext({
    isLoading: true,
    isSignedIn: false
})

export const AuthProvider: FC = ({children}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [isSignedIn, setIsSignedIn] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const auth = FBAuth.onAuthStateChanged( (user) => {
            if (user !== null){
                // User is logged in
                dispatch(userChangedState(user.uid))
                setIsSignedIn(true)
            } else {
                // User logged out
                setIsSignedIn(false)
                dispatch(userChangedState(null))
            }
            setIsLoading(false)
        })

        return auth
    },[])

    return <AuthContext.Provider value={{isLoading: isLoading,isSignedIn: isSignedIn }}>{children}</AuthContext.Provider>
}
