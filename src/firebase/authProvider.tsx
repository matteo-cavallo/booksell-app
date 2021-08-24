import React, {FC, useEffect} from "react";
import {FBAuth, FBFirestore} from "./firebase.config";
import {useDispatch} from "react-redux";
import {userChangedState} from "../store/user/userSlice"
import {AuthenticationActions} from "../store/authentication/authentication.actions";
import {fetchUser} from "../store/user/user.actions";

export const AuthProvider: FC = ({children}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        return FBAuth.onAuthStateChanged((user) => {
            if (user !== null) {
                // User is logged in
                dispatch(userChangedState({
                    userId: user.uid,
                    isAnonymous: user.isAnonymous
                }))

                if(!user.isAnonymous){
                    dispatch(fetchUser({userId: user.uid}))
                }
            } else {
                // User logged out
                dispatch(userChangedState(null))
                dispatch(AuthenticationActions.anonymousAuthentication())
            }
        })
    }, [])

    return <>{children}</>
}
