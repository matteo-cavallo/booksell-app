import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from "react";
import {ButtonComponent} from "../../components/button.component";
import {Theme} from "../../styles/style";

export const LoginScreen = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleLogin(){
        // Login with Email and Password
        alert("Login")
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text style={Theme.Styles.largeTitle}>Entra in BookSell</Text>
                <View style={styles.textFieldsContainer}>
                    <TextInput placeholder={"Email"}
                               value={email}
                               onChangeText={setEmail}
                               style={Theme.Styles.textField}
                    />
                    <TextInput placeholder={"Password"}
                               value={password}
                               onChangeText={setPassword}
                               secureTextEntry={true}
                               style={Theme.Styles.textField}
                    />
                </View>
                <View>
                    <ButtonComponent title={"Login"} onPress={handleLogin}/>
                    <ButtonComponent title={"Crea un nuovo profilo"}
                                     customStyle={{marginTop: 8, backgroundColor: Theme.Colors.lightGray}}
                                     titleColor={Theme.Colors.primary}/>
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
