import {Button, ScrollView, Text, TextInput, View} from "react-native";
import React from "react";
import {FBAuth} from "../../../firebase/firebase.config";
import {Theme} from "../../../styles/style";
import {useDispatch} from "react-redux";
import {AuthenticationActions} from "../../../store/authentication/authentication.actions";
import { SafeAreaView } from "react-native-safe-area-context";

export const HomeScreen = () => {


    return (
        <ScrollView>
            <View style={{padding: 16}}>
                <Text style={Theme.Styles.body}>Content</Text>
            </View>
        </ScrollView>
    )
}
