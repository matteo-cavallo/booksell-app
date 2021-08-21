import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React from "react";
import {HomeStackScreen} from "./home/homeStack";
import {Theme} from "../../styles/style";
import {Ionicons} from "@expo/vector-icons";
import {ProfileStackScreen} from "./profile/profileStack";
import {NativeStackNavigationOptions} from "@react-navigation/native-stack";

export type MainTabParams = {
    HomeTab: undefined,
    ProfileTab: undefined
}

export const MainTabNavigator = () => {

    const Tab = createBottomTabNavigator<MainTabParams>()

    return (
        <Tab.Navigator screenOptions={tabNavigatorOptions} initialRouteName={"HomeTab"}>
            <Tab.Screen name={"HomeTab"} component={HomeStackScreen} options={homeOptions}/>
            <Tab.Screen name={"ProfileTab"} component={ProfileStackScreen} options={profileTabOptions}/>
        </Tab.Navigator>
    )
}

/**
 * Tab Navigator Options
 */
const tabNavigatorOptions: BottomTabNavigationOptions = {
    tabBarActiveTintColor: Theme.Colors.accent,
    headerShown: false
}

/**
 * Home Tab Options
 */
const homeOptions: BottomTabNavigationOptions = {
    title: "Home",
    tabBarIcon: ({color, focused, size}) => {
        return <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color}/>
    }
}

const profileTabOptions: BottomTabNavigationOptions = {
    title: "Profile",
    tabBarIcon: ({size, focused, color}) => {
            return <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color}/>
    }
}

