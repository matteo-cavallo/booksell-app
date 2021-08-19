import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {LoginScreen} from "./src/screens/login/login.screen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {SignUpScreen} from "./src/screens/signUp/signup.screen";
import {AuthService, useCurrentUser} from "./src/firebase/auth.service";
import {HomeScreen} from "./src/screens/home/home.screen";
import {SplashScreen} from "./src/screens/splashScreen/splashScreen";

export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
    Home: undefined;
};

export default function App() {


    const {isSignedIn, isLoading} = useCurrentUser()

    const RootStack = createNativeStackNavigator<RootStackParamList>()

    // Splash Screen
    if( isLoading ) {
        return <SplashScreen />
    }

    return (
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{headerShown: false}}>
          {
              // If the User is logged in show root stack, otherwise show login.
              isSignedIn ? (
                  <>
                      <RootStack.Screen name={"Home"} component={HomeScreen} />
                  </>
              ) : (
                  <>
                        <RootStack.Screen name={"Login"} component={LoginScreen} options={{
                            animationTypeForReplace: !isSignedIn ? "pop" : "push"
                        }}/>
                        <RootStack.Screen name={"Signup"} component={SignUpScreen} />
                  </>
              )
          }
        </RootStack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
