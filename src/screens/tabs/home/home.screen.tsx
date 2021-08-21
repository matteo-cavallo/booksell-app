import {Button, ScrollView, Text, TextInput, View} from "react-native";
import React from "react";
import {FBAuth} from "../../../firebase/firebase.config";
import {Theme} from "../../../styles/style";
import {useDispatch, useSelector} from "react-redux";
import {AuthenticationActions} from "../../../store/authentication/authentication.actions";
import { SafeAreaView } from "react-native-safe-area-context";
import {UserSelector} from "../../../store/user/user.selector";

export const HomeScreen = () => {


    const user = useSelector(UserSelector.getUser)

    return (
        <ScrollView>
            <View style={{padding: 16}}>
                <Text style={Theme.Styles.body}>{user.userUid}</Text>
            </View>
        </ScrollView>
    )
}
