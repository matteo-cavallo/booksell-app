import {
    Alert,
    Button,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, {FC, useEffect, useState} from "react";
import {ButtonComponent} from "../../components/button.component";
import {Theme} from "../../styles/style";
import {AuthService} from "../../firebase/auth.service";
import {useNavigation} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../../App";
import {FBAuth} from "../../firebase/firebase.config";


type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Signup">
type Props = {
    navigation: SignUpScreenNavigationProp
}

export const SignUpScreen: FC<Props> = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [canSignUp, setCanSignUp] = useState(false)

    function handleSignUp(){
        // Login with Email and Password
        FBAuth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;

                // todo: Implement LoggedAction
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                // ..
                Alert.alert("Errore nella registrazione", errorMessage)
            });
    }

    // Check if SignUp is Enabled
    useEffect(() => {
        if(email.length != 0 &&
            password.length != 0 &&
            confirmPassword.length != 0 &&
            password == confirmPassword
        ){
            setCanSignUp(true)
            return
        }
        setCanSignUp(false)
    },[email, password, confirmPassword])

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Ionicons name="chevron-back" size={24} color={Theme.Colors.accent}/>
                    <Text style={[Theme.Styles.body, {color: Theme.Colors.accent}]}>Login</Text>
                </TouchableOpacity>
                <Text style={Theme.Styles.largeTitle}>Crea un nuovo profilo</Text>
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
                               style={Theme.Styles.centerTextField}
                               textContentType={"newPassword"}
                    />
                    <TextInput placeholder={"Conferma password"}
                               value={confirmPassword}
                               onChangeText={setConfirmPassword}
                               secureTextEntry={true}
                               style={Theme.Styles.bottomTextField}
                               textContentType={"newPassword"}
                    />
                    <ButtonComponent title={"Crea profilo"} onPress={handleSignUp} disabled={!canSignUp} customStyle={{marginTop: 16}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },
    title: {
        fontSize: 34,
        fontWeight: "bold"
    },
    form: {
        marginTop: 32,
        marginBottom: 16,
        width: '100%'
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8
    },
})
