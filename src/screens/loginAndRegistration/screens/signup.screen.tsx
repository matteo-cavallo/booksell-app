import {
    KeyboardAvoidingView, Platform,
    SafeAreaView, ScrollView,
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import React, {FC, useEffect, useState} from "react";
import {ButtonComponent} from "../../../components/button.component";
import {Theme} from "../../../styles/style";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {useDispatch} from "react-redux";
import {AuthenticationActions} from "../../../store/authentication/authentication.actions";
import {LoginAndRegistrationParams} from "../loginAndRegistration.stack";
import {RegistrationActions} from "../../../store/registration/registration.slice";


type SignUpScreenNavigationProp = NativeStackNavigationProp<LoginAndRegistrationParams, "SignUp">
type Props = {
    navigation: SignUpScreenNavigationProp
}

export const SignUpScreen: FC<Props> = ({navigation}) => {

    const dispatch = useDispatch()

    const [email, setEmail] = useState("prova@gmail.com")
    const [password, setPassword] = useState("prova")
    const [confirmPassword, setConfirmPassword] = useState("prova")

    const [canSignUp, setCanSignUp] = useState(false)

    const handleSignUp = async () => {
        // Login with Email and Password
        dispatch(RegistrationActions.setFirstStep({
            email: email,
            password: password
        }))

        await dispatch(AuthenticationActions.signUp({
            email,
            password,
            completion: result => {
                if (result) {
                    console.log("Next Step")
                    navigation.navigate("UserDetails")
                } else {
                    console.log("Sign up failed")
                }
            }
        }))

    }

    // Check if SignUp is Enabled
    useEffect(() => {
        if (email.length != 0 &&
            password.length != 0 &&
            confirmPassword.length != 0 &&
            password == confirmPassword
        ) {
            setCanSignUp(true)
            return
        }
        setCanSignUp(false)
    }, [email, password, confirmPassword])

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput placeholder={"Email"}
                               value={email}
                               onChangeText={setEmail}
                               style={Theme.Styles.topTextField}
                               textContentType={"emailAddress"}
                               autoCapitalize={"none"}
                    />
                    <TextInput placeholder={"Password"}
                               value={password}
                               onChangeText={setPassword}
                               secureTextEntry={true}
                               style={Theme.Styles.centerTextField}
                        //textContentType={"newPassword"}
                    />
                    <TextInput placeholder={"Conferma password"}
                               value={confirmPassword}
                               onChangeText={setConfirmPassword}
                               secureTextEntry={true}
                               style={Theme.Styles.bottomTextField}
                                textContentType={"password"}
                    />
                </View>
                <View style={styles.form}>
                    <ButtonComponent title={"Avanti"} onPress={handleSignUp} disabled={!canSignUp}
                                     customStyle={{marginTop: 16}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: "center",
        flex: 1,
        justifyContent: "space-between",
    },
    title: {
        fontSize: 34,
        fontWeight: "bold"
    },
    form: {
        width: '100%'
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8
    },
})
