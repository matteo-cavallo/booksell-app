import {Button, SafeAreaView, Text, View} from "react-native";
import React from "react";
import {FBAuth} from "../../firebase/firebase.config";
import {Theme} from "../../styles/style";
import {useDispatch} from "react-redux";
import {AuthenticationActions} from "../../store/authentication/authentication.actions";

export const HomeScreen = () => {

    const dispatch = useDispatch()

    return (
        <SafeAreaView>
            <View style={{padding: 16}}>
                <Text style={Theme.Styles.largeTitle}>Home</Text>
                <Button title={"Logout"} onPress={() => dispatch(AuthenticationActions.signOut())} />
            </View>
        </SafeAreaView>
    )
}
