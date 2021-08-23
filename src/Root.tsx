import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {SplashScreen} from "./screens/splashScreen/splashScreen";
import {MainTabNavigator} from "./screens/tabs/mainTabNavigator";
import {LoginAndRegistrationStackScreen} from "./screens/loginAndRegistration/loginAndRegistration.stack";
import React, {useEffect} from "react";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {useColorScheme} from "react-native";
import {useSelector} from "react-redux";
import {UserSelector} from "./store/user/user.selector";
import {AuthenticationActions} from "./store/authentication/authentication.actions";
import {AuthenticationSelector} from "./store/authentication/authenticationSlice";

export type RootStackParamList = {
    SplashScreen: undefined;
    LoginAndRegistration: undefined
    MainTabNavigator: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export const Root = () => {

    const colorScheme = useColorScheme()
    const RootStack = createNativeStackNavigator<RootStackParamList>()

    return (
        <NavigationContainer theme={colorScheme == 'light' ? DefaultTheme : DarkTheme}>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                <RootStack.Screen name={"MainTabNavigator"} component={MainTabNavigator} />
                <RootStack.Screen name={"LoginAndRegistration"} component={LoginAndRegistrationStackScreen} options={authScreenOptions}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

const authScreenOptions: NativeStackNavigationOptions = {
    animation: "slide_from_bottom"
}
