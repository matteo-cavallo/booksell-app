import React from "react";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {withAuthentication} from "../../../utils/authentication.HOC";
import ProfileScreen from "./profile.screen";

export type ProfileStackParams = {
    Profile: undefined
}

export const ProfileStackScreen  = () => {

    const ProfileStack = createNativeStackNavigator<ProfileStackParams>()

    return (
        <ProfileStack.Navigator screenOptions={screenOptions}>
            <ProfileStack.Screen name={"Profile"} component={ProfileScreen} />
        </ProfileStack.Navigator>
    )
}

const screenOptions: NativeStackNavigationOptions = {
    headerShown: true,
    headerLargeTitle: true,
}
