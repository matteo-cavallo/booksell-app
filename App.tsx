import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {LoginScreen} from "./src/screens/loginAndRegistration/login.screen";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {AuthService, useCurrentUser} from "./src/firebase/auth.service";
import {SplashScreen} from "./src/screens/splashScreen/splashScreen";
import {Provider, useSelector} from "react-redux";
import {store} from "./src/store/config";
import {MainTabNavigator} from "./src/screens/tabs/mainTabNavigator";
import {LoginAndRegistrationStackScreen} from "./src/screens/loginAndRegistration/loginAndRegistration.stack";


export type RootStackParamList = {
    SplashScreen: undefined;
    LoginAndRegistration: undefined
    MainTabNavigator: undefined;
};

export default function App() {

    const SPLASHSCREEN_DURATION = 1000 // ms
    const colorScheme = useColorScheme()

    useEffect(() => {
        console.log(colorScheme)
    },[colorScheme])


    const {isLoading, isSignedIn} = useCurrentUser()
    const RootStack = createNativeStackNavigator<RootStackParamList>()

    const [showApp, setShowApp] = useState(false)

    // Splash Screen
    if( isLoading || !showApp ) {
        setTimeout(() => {
            setShowApp(true)
        },SPLASHSCREEN_DURATION)
    }

    return (
        // todo: maybe refactor to a better and cleaner structure
        <Provider store={store}>
            <NavigationContainer theme={colorScheme == 'light' ? DefaultTheme : DarkTheme}>
                <RootStack.Navigator screenOptions={{headerShown: false}}>
                    {
                        // The SplashScreen is shown either if authentication is in
                        // progress or the timeout isn't finished.
                        (!showApp || isLoading) && <RootStack.Screen name={"SplashScreen"} component={SplashScreen} options={{animation: "flip"}}/>
                    }
                    {
                        // If the User is logged in show root stack, otherwise show login.
                        isSignedIn ? (
                            <>
                                <RootStack.Screen name={"MainTabNavigator"} component={MainTabNavigator} />
                            </>
                        ) : (
                            <>
                                <RootStack.Screen name={"LoginAndRegistration"} component={LoginAndRegistrationStackScreen} options={{
                                    animationTypeForReplace: !isSignedIn ? "pop" : "push",
                                }}
                                />
                            </>
                        )
                    }
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>
  );
}
