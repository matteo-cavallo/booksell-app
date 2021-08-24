import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {MainTabNavigator} from "./screens/tabs/mainTabNavigator";
import {LoginAndRegistrationStackScreen} from "./screens/loginAndRegistration/loginAndRegistration.stack";
import React from "react";
import {createNativeStackNavigator, NativeStackNavigationOptions} from "@react-navigation/native-stack";
import {useColorScheme} from "react-native";
import {SplashScreen} from "./screens/splashScreen/splashScreen";
import {useSelector} from "react-redux";
import {UserSelector} from "./store/user/user.selector";
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

    const isUserLoading = useSelector(UserSelector.isLoading)

    return (
        <NavigationContainer theme={colorScheme == 'light' ? DefaultTheme : DarkTheme}>
            <RootStack.Navigator screenOptions={{headerShown: false}}>
                {
                    // Show Splash when user is in loading state
                    isUserLoading && <RootStack.Screen name={"SplashScreen"} component={SplashScreen} />
                }
                <RootStack.Screen name={"MainTabNavigator"} component={MainTabNavigator} />
                <RootStack.Screen name={"LoginAndRegistration"} component={LoginAndRegistrationStackScreen} options={authScreenOptions}/>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

const authScreenOptions: NativeStackNavigationOptions = {
    animation: "slide_from_bottom"
}
