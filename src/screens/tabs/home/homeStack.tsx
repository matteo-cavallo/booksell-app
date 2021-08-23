import React from "react";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {HomeScreen} from "./screens/home.screen";

export type HomeStackParams = {
    Home: undefined
}

export const HomeStackScreen = () => {

    const HomeStack = createNativeStackNavigator<HomeStackParams>()

    return (
        <HomeStack.Navigator screenOptions={screenOptions}>
            <HomeStack.Screen name={"Home"} component={HomeScreen} />
        </HomeStack.Navigator>
    )
}

const screenOptions: NativeStackNavigationOptions = {
}
