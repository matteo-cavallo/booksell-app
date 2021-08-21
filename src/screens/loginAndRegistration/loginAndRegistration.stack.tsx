import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
    NativeStackNavigationProp, NativeStackScreenProps
} from "@react-navigation/native-stack";
import React from "react";
import {SignUpScreen} from "./signup.screen";
import {RootStackParamList} from "../../../App";
import {LoginScreen} from "./login.screen";
import {ScreenStackProps} from "react-native-screens";

export type LoginAndRegistrationProps = {
    Login: undefined;
    SignUp: undefined;
}

export const LoginAndRegistrationStackScreen = () => {

    const Stack = createNativeStackNavigator<LoginAndRegistrationProps>()

    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name={"Login"} component={LoginScreen} options={loginScreenOptions}/>
            <Stack.Screen name={"SignUp"} component={SignUpScreen} options={signUpScreenOptions} />
        </Stack.Navigator>
    )
}

const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
}

const loginScreenOptions: NativeStackNavigationOptions = {
    title: "Entra in Bookshare"
}

const signUpScreenOptions: NativeStackNavigationOptions = {
    title: "Registrazione",
    headerShown: true
}

