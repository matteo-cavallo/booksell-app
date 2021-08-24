import React, {FC, useEffect} from "react";
import {FBAuth} from "./firebase.config";
import {useDispatch} from "react-redux";
import {User, userChangedState} from "../store/user/userSlice"
import {AuthenticationActions} from "../store/authentication/authentication.actions";

export const AuthProvider: FC = ({children}) => {

    const dispatch = useDispatch()

    useEffect(() => {

        //dispatch(AuthenticationActions.anonymousAuthentication)
    },[])

    useEffect(() => {
        return FBAuth.onAuthStateChanged( (user) => {
            if (user !== null){
                // User is logged in
                const newUser: User = {
                    userID: user.uid,
                    isAnonymous: user.isAnonymous
                }
                dispatch(userChangedState(newUser))
            } else {
                // User logged out
                dispatch(userChangedState(null))
                dispatch(AuthenticationActions.anonymousAuthentication())
            }
        })
    },[])

    return <>{children}</>
}
