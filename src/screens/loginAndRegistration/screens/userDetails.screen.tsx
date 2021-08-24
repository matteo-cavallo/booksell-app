import {
    SafeAreaView,
    StyleSheet, Text,
    TextInput,
    View
} from 'react-native';
import React, {FC, useEffect, useState} from "react";
import {ButtonComponent} from "../../../components/button.component";
import {Theme} from "../../../styles/style";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {connect, ConnectedProps, useDispatch} from "react-redux";
import {AuthenticationActions, updateRegistrationData} from "../../../store/authentication/authentication.actions";
import {LoginAndRegistrationParams} from "../loginAndRegistration.stack";
import {RegistrationActions} from "../../../store/registration/registration.slice";
import {RootState} from "../../../store/config";
import {AuthenticationSliceActions} from "../../../store/authentication/authenticationSlice";


type UserDetailsNavigationProp = NativeStackNavigationProp<LoginAndRegistrationParams, "UserDetails">

interface Props {
    navigation: UserDetailsNavigationProp
}

const UserDetailsScreen: FC<Props> = ({navigation}) => {

    const dispatch = useDispatch()

    const [canSignUp, setCanSignUp] = useState(false)

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    useEffect(() => {
        if (firstName.length == 0 || lastName.length == 0) {
            setCanSignUp(false)
        } else {
            setCanSignUp(true)
        }

    }, [firstName, lastName])

    function handleSignUp() {
        // Login with Email and Password
        dispatch(RegistrationActions.setSecondStep({
            firstName: firstName,
            lastName: lastName
        }))
        dispatch(updateRegistrationData())
        dispatch(AuthenticationSliceActions.hideAuthenticationScreen())
    }

    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.form}>
                    <TextInput placeholder={"Nome, es. Mario"}
                               value={firstName}
                               onChangeText={setFirstName}
                               style={Theme.Styles.topTextField}
                               textContentType={"name"}
                               autoCapitalize={"words"}
                    />
                    <TextInput placeholder={"Cognome, es. Rossi"}
                               value={lastName}
                               onChangeText={setLastName}
                               style={Theme.Styles.bottomTextField}
                               textContentType={"name"}
                               autoCapitalize={"words"}
                    />

                    <ButtonComponent title={"Crea profilo"} onPress={handleSignUp} disabled={!canSignUp}
                                     customStyle={{marginTop: 16}}/>
                </View>
            </View>
        </SafeAreaView>
    )

}
export default UserDetailsScreen

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
        width: '100%'
    },
    backButton: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 8
    },
})
