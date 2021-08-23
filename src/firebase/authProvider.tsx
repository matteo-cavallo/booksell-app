import React, {FC, useEffect} from "react";
import {FBAuth} from "./firebase.config";
import {useDispatch} from "react-redux";
import {User, userChangedState} from "../store/user/userSlice"

export const AuthProvider: FC = ({children}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        return FBAuth.onAuthStateChanged( (user) => {
            if (user !== null){
                // User is logged in
                const newUser: User = {
                    userID: user.uid,
                    isAnonymous: user.isAnonymous
                }
                console.log(newUser)
                dispatch(userChangedState(newUser))
            } else {
                // User logged out
                dispatch(userChangedState(null))
            }
        })
    },[])

    return <>{children}</>
}
