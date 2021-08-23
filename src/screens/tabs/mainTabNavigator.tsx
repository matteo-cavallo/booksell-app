import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {FC, useEffect} from "react";
import {HomeStackScreen} from "./home/homeStack";
import {Theme} from "../../styles/style";
import {Ionicons} from "@expo/vector-icons";
import {ProfileStackScreen} from "./profile/profileStack";
import {NativeStackNavigationOptions, NativeStackNavigationProp} from "@react-navigation/native-stack";
import {withAuthentication} from "../../authentication/authenticationHOC";
import {useSelector} from "react-redux";
import {AuthenticationSelector} from "../../store/authentication/authenticationSlice";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../Root";

export type MainTabParams = {
    HomeTab: undefined,
    ProfileTab: undefined
}

type MainTabNavigatorProp = NativeStackNavigationProp<RootStackParamList, "MainTabNavigator">
type Props = {
    navigation: MainTabNavigatorProp
}

export const MainTabNavigator: FC<Props> = ({navigation}) => {

    const Tab = createBottomTabNavigator<MainTabParams>()
    const AuthenticatedProfileScreen = withAuthentication(ProfileStackScreen)

    const showAuthenticationScreen = useSelector(AuthenticationSelector.selectShowLogin)

    useEffect(() => {
        if(showAuthenticationScreen){
            navigation.navigate("LoginAndRegistration")
        }
    },[showAuthenticationScreen])

    return (
        <Tab.Navigator screenOptions={tabNavigatorOptions}>
            <Tab.Screen name={"HomeTab"} component={HomeStackScreen} options={homeOptions}/>
            <Tab.Screen name={"ProfileTab"} component={AuthenticatedProfileScreen} options={profileTabOptions}/>
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

