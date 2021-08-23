import React, {createContext, FC, useEffect, useState} from "react";
import {FBAuth} from "./firebase.config";
import {useDispatch} from "react-redux";
import {UserActions} from "../store/user/user.actions";
import {User, userChangedState} from "../store/user/userSlice"
import {useNavigation} from "@react-navigation/native";

export const AuthProvider: FC = ({children}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const auth = FBAuth.onAuthStateChanged( (user) => {
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

        return auth
    },[])

    return <>{children}</>
}
