import {Button, ScrollView, Text, View} from "react-native";
import React from "react";
import {FBAuth} from "../../../firebase/firebase.config";
import {Theme} from "../../../styles/style";
import {useDispatch, useSelector} from "react-redux";
import {AuthenticationActions} from "../../../store/authentication/authentication.actions";
import { SafeAreaView } from "react-native-safe-area-context";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../../../Root";
import {showAuthenticationScreen} from "../../../store/authentication/authenticationSlice";
import {UserSelector} from "../../../store/user/user.selector";

export const ProfileScreen = () => {

    const dispatch = useDispatch()

    const {user} = useSelector(UserSelector.getUser)


    if (!user) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Button title={"Login"} onPress={() => dispatch(showAuthenticationScreen())} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{padding: 16}}>
                <Button title={"Logout"} onPress={() => dispatch(AuthenticationActions.signOut())} color={"red"} />
            </View>
        </ScrollView>
    )
}
