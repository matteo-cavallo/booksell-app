import {Alert, Button, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {FC, useEffect, useState} from "react";
import {ButtonComponent} from "../../components/button.component";
import {Theme} from "../../styles/style";
import {useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from "../../../App";
import {FBAuth} from "../../firebase/firebase.config";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">
type Props = {
    navigation: LoginScreenNavigationProp
}

export const LoginScreen: FC<Props> = ({navigation}) => {

    // Form Data
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [canLogin, setCanLogin] = useState(false)

    function handleLogin(){
        // Login with Email and Password
        FBAuth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log("\nUser logged in successfully ")
                console.log(`Email: ${user?.email}`)
                console.log(`ID: ${user?.uid}`)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log("\nError logging in.\nWith Error: ", errorMessage)
                Alert.alert("Errore login", errorMessage)
            });
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
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={Theme.Styles.largeTitle}>Entra in BookSell</Text>
                <View style={styles.textFieldsContainer}>
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
                    <ButtonComponent title={"Login"} onPress={handleLogin} disabled={!canLogin}/>
                    <ButtonComponent title={"Crea un nuovo profilo"}
                                     customStyle={{marginTop: 8, backgroundColor: Theme.Colors.lightGray}}
                                     titleColor={Theme.Colors.primary}
                                     onPress={() => navigation.navigate("Signup")}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16
    },
    title: {
        fontSize: 34,
        fontWeight: "bold"
    },
    textFieldsContainer: {
        marginTop: 32,
        marginBottom: 16
    }
})
