import {Button, ScrollView, Text, View} from "react-native";
import React from "react";
import {FBAuth} from "../../../firebase/firebase.config";
import {Theme} from "../../../styles/style";
import {useDispatch} from "react-redux";
import {AuthenticationActions} from "../../../store/authentication/authentication.actions";
import { SafeAreaView } from "react-native-safe-area-context";

export const ProfileScreen = () => {

    const dispatch = useDispatch()

    return (
        <ScrollView>
            <View style={{padding: 16}}>
                <Button title={"Logout"} onPress={() => dispatch(AuthenticationActions.signOut())} color={"red"} />
            </View>
        </ScrollView>
    )
}