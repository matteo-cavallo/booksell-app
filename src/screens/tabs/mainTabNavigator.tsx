import {BottomTabNavigationOptions, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {FC, useEffect} from "react";
import {HomeStackScreen} from "./home/homeStack";
import {Theme} from "../../styles/style";
import {Ionicons} from "@expo/vector-icons";
import {ProfileStackScreen} from "./profile/profileStack";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import {AuthenticationSelector} from "../../store/authentication/authenticationSlice";
import {RootStackParamList} from "../../Root";
import {withAuthentication} from "../../utils/withAuthentication";
import {ExploreStackScreen} from "./explore/exploreStack";
import {SellStackScreen} from "./sell/sellStack";

export type MainTabParams = {
    HomeTab: undefined,
    ExploreTab: undefined,
    SellTab: undefined,
    ProfileTab: undefined
}

type MainTabNavigatorProp = NativeStackNavigationProp<RootStackParamList, "MainTabNavigator">
type Props = {
    navigation: MainTabNavigatorProp
}

export const MainTabNavigator: FC<Props> = ({navigation}) => {

    const Tab = createBottomTabNavigator<MainTabParams>()

    const showAuthenticationScreen = useSelector(AuthenticationSelector.selectShowLogin)

    useEffect(() => {
        if(showAuthenticationScreen){
            navigation.navigate("LoginAndRegistration")
        }
    },[showAuthenticationScreen])


    return (
        <Tab.Navigator screenOptions={tabNavigatorOptions}>
            <Tab.Screen name={"HomeTab"} component={HomeStackScreen} options={homeOptions}/>
            <Tab.Screen name={"ExploreTab"} component={ExploreStackScreen} options={exploreOptions}/>
            <Tab.Screen name={"SellTab"} component={SellStackScreen} options={sellOptions}/>
            <Tab.Screen name={"ProfileTab"} component={withAuthentication(ProfileStackScreen)} options={profileTabOptions}/>
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
 * Tabs Options
 */
const homeOptions: BottomTabNavigationOptions = {
    title: "Home",
    tabBarIcon: ({color, focused, size}) => {
        return <Ionicons name={focused ? "home" : "home-outline"} size={size} color={color}/>
    }
}

const exploreOptions: BottomTabNavigationOptions = {
    title: "Explore",
    tabBarIcon: ({color, focused, size}) => {
        return <Ionicons name={focused ? "globe" : "globe-outline"} size={size} color={color}/>
    }
}

const sellOptions: BottomTabNavigationOptions = {
    title: "Sell",
    tabBarIcon: ({color, focused, size}) => {
        return <Ionicons name={focused ? "add-circle" : "add-circle-outline"} size={size} color={color}/>
    }
}

const profileTabOptions: BottomTabNavigationOptions = {
    title: "Profile",
    tabBarIcon: ({size, focused, color}) => {
            return <Ionicons name={focused ? "person" : "person-outline"} size={size} color={color}/>
    }
}

