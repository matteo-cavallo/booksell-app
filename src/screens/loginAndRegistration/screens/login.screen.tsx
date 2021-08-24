import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import React, {FC, useEffect, useState} from "react";
import {ButtonComponent} from "../../../components/button.component";
import {Theme} from "../../../styles/style";
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {useDispatch} from "react-redux";
import { SafeAreaView } from 'react-native-safe-area-context';
import {AuthenticationActions} from "../../../store/authentication/authentication.actions";
import {LoginAndRegistrationParams} from "../loginAndRegistration.stack";
import { hideAuthenticationScreen } from '../../../store/authentication/authenticationSlice';

type LoginScreenNavigationProp = NativeStackNavigationProp<LoginAndRegistrationParams, "Login">
type Props = {
    navigation: LoginScreenNavigationProp
}

export const LoginScreen: FC<Props> = ({navigation}) => {

    const dispatch = useDispatch()

    // Form Data
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [canLogin, setCanLogin] = useState(false)

    const handleLogin = () =>{
        // Login with Email and Password
        dispatch(AuthenticationActions.login({
            email,
            password
        }))
    }

    const handleAnonymousLogin = () =>{
        dispatch(AuthenticationActions.anonymousAuthentication())
    }

    // Check if Login is Enabled
    useEffect(() => {
        if(email.length != 0 && password.length != 0){
            setCanLogin(true)
            return
        }
        setCanLogin(false)
    },[email, password])


    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={{alignItems: "flex-end"}}>
                    <Button title={"Indietro"} onPress={() => {
                        dispatch(hideAuthenticationScreen())
                        navigation.goBack()
                    }} />
                </View>
                <Text style={[Theme.Styles.largeTitle, styles.title]}>Bookshare</Text>
                <Text style={[Theme.Styles.body, styles.subtitle]}>Un posto dove puoi vendere e comprare i libri che ami.</Text>
                <View style={styles.form}>
                    <TextInput placeholder={"Email"}
                               value={email}
                               onChangeText={setEmail}
                               style={Theme.Styles.topTextField}
                               autoCapitalize={"none"}
                               textContentType={"emailAddress"}
                    />
                    <TextInput placeholder={"Password"}
                               value={password}
                               onChangeText={setPassword}
                               secureTextEntry={true}
                               style={Theme.Styles.bottomTextField}
                               textContentType={"password"}
                               returnKeyType={"done"}
                    />
                </View>
                <View>
                    <ButtonComponent title={"Login"} onPress={handleLogin} disabled={!canLogin} customStyle={{marginBottom: 16}}/>
                    <ButtonComponent title={"Crea un account"} onPress={() => navigation.navigate("SignUp")} customStyle={{marginBottom: 16, backgroundColor: Theme.Colors.lightGray}} titleColor={Theme.Colors.primary}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    form: {
        marginBottom: 16
    },
    title: {
       textAlign: "center",
        marginBottom: 8
    },
    subtitle: {
        textAlign: "center",
        marginBottom: 24,
        color: "#333",
        paddingHorizontal: 16
    }
})
