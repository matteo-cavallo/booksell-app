import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text, useColorScheme, View} from 'react-native';
import {LoginScreen} from "./src/screens/loginAndRegistration/login.screen";
import {DarkTheme, DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SplashScreen} from "./src/screens/splashScreen/splashScreen";
import {Provider, useDispatch, useSelector} from "react-redux";
import {store} from "./src/store/config";
import {MainTabNavigator} from "./src/screens/tabs/mainTabNavigator";
import {LoginAndRegistrationStackScreen} from "./src/screens/loginAndRegistration/loginAndRegistration.stack";
import {FBAuth} from "./src/firebase/firebase.config";
import {AuthContext, AuthProvider} from "./src/firebase/authenticationContext";
import {UserSelector} from "./src/store/user/user.selector";

export type RootStackParamList = {
    SplashScreen: undefined;
    LoginAndRegistration: undefined
    MainTabNavigator: undefined;
};

const App = () =>  {
    const colorScheme = useColorScheme()

    const RootStack = createNativeStackNavigator<RootStackParamList>()

    return (
        // todo: maybe refactor to a better and cleaner structure
            <Provider store={store}>
                <AuthProvider>

                <AuthContext.Consumer>
                    {({isSignedIn, isLoading}) =>
                        <NavigationContainer theme={colorScheme == 'light' ? DefaultTheme : DarkTheme}>
                            <RootStack.Navigator screenOptions={{headerShown: false}}>
                                {
                                    // The SplashScreen is shown either if authentication is in
                                    // progress or the timeout isn't finished.
                                    isLoading && <RootStack.Screen name={"SplashScreen"} component={SplashScreen}
                                                      options={{animation: "flip"}}/>
                                }
                                {
                                    // If the User is logged in show root stack, otherwise show login.
                                    isSignedIn ? (
                                        <>
                                            <RootStack.Screen name={"MainTabNavigator"} component={MainTabNavigator}/>
                                        </>
                                    ) : (
                                        <>
                                            <RootStack.Screen name={"LoginAndRegistration"}
                                                              component={LoginAndRegistrationStackScreen} options={{
                                                animationTypeForReplace: !isSignedIn ? "pop" : "push",
                                            }}
                                            />
                                        </>
                                    )
                                }
                            </RootStack.Navigator>
                        </NavigationContainer>
                    }
                </AuthContext.Consumer>
                </AuthProvider>
            </Provider>
  );
}

export default App
