import {Button, SafeAreaView, Text, View} from "react-native";
import React, {ComponentType, FC, useEffect} from "react";
import {useSelector} from "react-redux";
import {UserSelector} from "../store/user/user.selector";
import {LoginScreen} from "../screens/loginAndRegistration/login.screen";
import {useNavigation} from "@react-navigation/native";
import {ButtonComponent} from "../components/button.component";
import {LoginAndRegistrationStackScreen} from "../screens/loginAndRegistration/loginAndRegistration.stack";

export function withAuthentication<P>(WrappedScreen: ComponentType<P>){

    const {user} = useSelector(UserSelector.getUser)

    if(user?.isAnonymous){
        console.log("Show login page")
    }

    return WrappedScreen

}
