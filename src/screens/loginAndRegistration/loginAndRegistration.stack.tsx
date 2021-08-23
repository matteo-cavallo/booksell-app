import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
    NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import React, {FC, useEffect} from "react";
import {SignUpScreen} from "./screens/signup.screen";
import {LoginScreen} from "./screens/login.screen";
import {useSelector} from "react-redux";
import {AuthenticationSelector} from "../../store/authentication/authenticationSlice";
import {RootStackParamList} from "../../Root";

export type LoginAndRegistrationParams = {
    Login: undefined;
    SignUp: undefined;
}

type LoginAndRegistrationProps = NativeStackNavigationProp<RootStackParamList, "LoginAndRegistration">
type Props = {
    navigation: LoginAndRegistrationProps
}

export const LoginAndRegistrationStackScreen: FC<Props> = ({navigation}) => {

    const showAuthenticationScreen = useSelector(AuthenticationSelector.selectShowLogin)

    const Stack = createNativeStackNavigator<LoginAndRegistrationParams>()


    useEffect(() => {
        if(!showAuthenticationScreen){
            navigation.navigate("MainTabNavigator")

        }
    },[showAuthenticationScreen])

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

